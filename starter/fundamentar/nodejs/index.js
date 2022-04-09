// Array com as perguntas
const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?',
]

// Função ask que inicia com index de 0, ela retorna
// o process stdout que vai renderizar as questões no index passado
// e concatenar com um ">" para mostrar a resposta.
const ask = (index = 0) => {
  return process.stdout.write('\n\n' + questions[index] + ' > ')
}

ask()

// Array de respostas que digitei no CLI.
const answers = []

// Então, ao passar os dados vou colocar tudo para a array de respostas.
process.stdin.on('data', (data) => {
  answers.push(data.toString().trim())

  // Se o tamanho da array de respostas for menor que a de perguntas
  // então ask() vai ter o index do tamanho da array de respostas
  // ou seja, a cada resposta que dou, vai aumentando o tamanho
  // da array e consequentemente passando para a próxima pergunta.

  // Se answers.lenght for 0, então é menor que questions.lenght
  // então ask vai ter 0 no index e como tem 0 no index
  // ele vai receber no index de questions, assim, renderizando a pergunta
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    // Quando o tamanho da array de respostas for maior que o de perguntas
    // a aplicação irá fechar.
    process.exit()
  }
})

process.on('exit', () => {
  console.log(
    `
        Show, João!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!

        Volte amanhã para novas reflexões!

        `
  )
})
