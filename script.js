// Conexão com o banco de dados SQLite
var db = openDatabase('orientacao_vocacional', '1.0', 'Orientação Vocacional Database', 2 * 1024 * 1024);

// Criação da tabela para armazenar as respostas
db.transaction(function(tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS respostas (id INTEGER PRIMARY KEY AUTOINCREMENT, pergunta TEXT, nota INTEGER)');
});

// Variáveis globais
var currentStep = 1;
var totalSteps = 5;
var answers = [];

// Função para avançar para o próximo passo
function nextStep(step) {
  if (step === 1) {
    var name = document.getElementById('name').value;
    var studying = document.getElementById('studying').checked;
    var pastEducation = document.getElementById('past-education').checked;
    var educationYear = document.getElementById('education-year').value;
    
    // Salvar as informações pessoais no banco de dados
    db.transaction(function(tx) {
      tx.executeSql('INSERT INTO respostas (pergunta, nota) VALUES (?, ?)', ['Nome', name]);
tx.executeSql('INSERT INTO respostas (pergunta, nota) VALUES (?, ?)', ['Estudando Atualmente', studying ? 1 : 0]);
tx.executeSql('INSERT INTO respostas (pergunta, nota) VALUES (?, ?)', ['Já estudou anteriormente', pastEducation ? 1 : 0]);
tx.executeSql('INSERT INTO respostas (pergunta, nota) VALUES (?, ?)', ['Ano de conclusão', educationYear]);
});
} else {
// Salvar as respostas das perguntas no banco de dados
var currentStepQuestions = document.querySelectorAll('#step-' + (step - 1) + ' .question-block input');
currentStepQuestions.forEach(function(question) {
var pergunta = question.previousElementSibling.textContent;
var nota = parseInt(question.value);
db.transaction(function(tx) {
tx.executeSql('INSERT INTO respostas (pergunta, nota) VALUES (?, ?)', [pergunta, nota]);
});
});
}

if (step < totalSteps) {
// Exibir o próximo passo e ocultar o atual
document.getElementById('step-' + step).style.display = 'none';
document.getElementById('step-' + (step + 1)).style.display = 'block';
currentStep++;
} else {
// Exibir o resultado final
calculateResult();
document.getElementById('app').style.display = 'none';
document.getElementById('result').style.display = 'block';
}
}

// Função para calcular o resultado final
function calculateResult() {
db.transaction(function(tx) {
tx.executeSql('SELECT AVG(nota) AS media, pergunta FROM respostas WHERE pergunta NOT IN ("Nome", "Estudando Atualmente", "Já estudou anteriormente", "Ano de conclusão") GROUP BY pergunta', [], function(tx, results) {
var finalResult = '';
for (var i = 0; i < results.rows.length; i++) {
var row = results.rows.item(i);
finalResult += row.pergunta + ': ' + row.media + '<br>';
}
document.getElementById('final-result').innerHTML = finalResult;
});
});
}

// Iniciar o aplicativo
nextStep(1);

