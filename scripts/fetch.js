export const perguntas = async (num) =>{

    
    const url = 'https://tonmarcondes.com.br/vocacional.json'
    // const url = '../vocacional.json'
    
    await fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
        console.log(num);
}
