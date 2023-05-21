// Evento de envio do formulário do usuário
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtenha os valores do formulário
  const name = document.getElementById('nameInput').value;
  const study = document.getElementById('studySelect').value;
  const studyWhen = document.getElementById('studyWhenInput').value;

  // Salve as informações do usuário no banco de dados SQLite (orientacao.db)
  // Você precisará usar uma biblioteca JavaScript que suporte o SQLite, como o "sqlite" ou "sql.js"

  // Exemplo de código usando a biblioteca "sql.js"
  const sql = window.SQL;
  const db = new sql.Database();

  // Crie a tabela "users" no banco de dados
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, study TEXT, studyWhen TEXT)');

  // Insira os dados do usuário na tabela
  db.run(`INSERT INTO users (name, study, studyWhen) VALUES (?, ?, ?)`, [name, study, studyWhen]);

  // Exemplo de como criar os blocos de perguntas
  const numBlocks = 4;
  const numQuestions = 4;
  const maxRating = 5;

  // Função para gerar os blocos de perguntas
  function generateQuestionBlocks() {
    const container = document.querySelector('.container');

    for (let i = 1; i <= numBlocks; i++) {
      const blockDiv = document.createElement('div');
      blockDiv.classList.add('question-block');

      const blockHeading = document.createElement('h2');
      blockHeading.textContent = `Bloco ${i}`;

      blockDiv.appendChild(blockHeading);

      for (let j = 1; j <= numQuestions; j++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionLabel = document.createElement('label');
        questionLabel.textContent = `Pergunta ${j}`;

        const ratingInput = document.createElement('input');
        ratingInput.setAttribute('type', 'number');
        ratingInput.setAttribute('min', '0');
        ratingInput.setAttribute('max', maxRating.toString());
        ratingInput.setAttribute('required', '');

        questionDiv.appendChild(questionLabel);
        questionDiv.appendChild(ratingInput);

        blockDiv.appendChild(questionDiv);
      }

      container.appendChild(blockDiv);
    }

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.textContent = 'Enviar';

    const form = document.createElement('form');
    form.appendChild(submitButton);

    container.appendChild(form);
  }

  // Evento de envio do formulário de perguntas
  document.addEventListener('submit', function(e) {
    e.preventDefault();

    const questionBlocks = document.querySelectorAll('.question-block');

    // Verificar se todas as perguntas foram respondidas
    let allQuestionsAnswered = true;

    questionBlocks.forEach(function(block) {
      const ratingInputs = block.querySelectorAll('input[type="number"]');

      ratingInputs.forEach(function(input) {
        if (!input.value) {
          allQuestionsAnswered = false;
          return;
        }
      });
    });

    if (!allQuestionsAnswered) {
      alert('Por favor, responda todas as perguntas.');
      return;
    }

    // Salve as respostas no banco de dados SQLite (orientacao.db)
    // Você precisará adaptar este código para usar a biblioteca SQLite escolhida

    // Exemplo de código usando a biblioteca "sql.js"
    const answers = [];

    questionBlocks.forEach(function(block) {
      const ratingInputs = block.querySelectorAll('input[type="number"]');

      ratingInputs.forEach(function(input) {
        const answer = {
          block: block.querySelector('h2').textContent,
          question: input.parentNode.querySelector('label').textContent,
          rating: input.value
        };

        answers.push(answer);
      });
    });

    // Insira as respostas no banco de dados
    answers.forEach(function(answer) {
      db.run(`INSERT INTO answers (block, question, rating) VALUES (?, ?, ?)`, [answer.block, answer.question, answer.rating]);
    });

    alert('Respostas enviadas com sucesso!');
  });

  // Chame a função para gerar os blocos de perguntas após o envio do formulário do usuário
  document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Resto do código para salvar as informações do usuário no banco de dados

    // Remova o formulário do usuário
    const userForm = document.getElementById('userForm');
    userForm.parentNode.removeChild(userForm);

   // Gere os blocos de perguntas após a remoção do formulário do usuário
  generateQuestionBlocks();
})
})