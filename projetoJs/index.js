// Lista de atletas com suas notas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Função para calcular a média válida (descartando maior e menor nota)
function calcularMediaValida(notas) {
  // Copia e ordena as notas em ordem crescente
  let notasOrdenadas = [...notas].sort((a, b) => a - b);
  
  // Remove a menor e a maior nota
  let notasCentrais = notasOrdenadas.slice(1, 4);
  
  // Calcula a soma das notas centrais
  let soma = 0;
  notasCentrais.forEach(nota => {
    soma += nota;
  });
  
  // Calcula e retorna a média
  return soma / notasCentrais.length;
}

// Função para exibir resultados de todos os atletas
function exibirResultados(atletas) {
  atletas.forEach(atleta => {
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${calcularMediaValida(atleta.notas)}\n`);
  });
}

// Executa a função
exibirResultados(atletas);
