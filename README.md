# Calculadora-de-Pontua-o-dos-Atletas
Sistema em JavaScript para cálculo da média de notas de atletas com exclusão das pontuações extremas.

# 🏅 Notas dos Atletas – JavaScript

## 📌 Sobre o projeto
Este projeto foi desenvolvido em JavaScript com o objetivo de **calcular a média válida das notas de atletas** em uma competição de ginástica artística.

Cada atleta recebe **cinco notas** de jurados diferentes, e a regra da competição determina que:

- A **maior** e a **menor** nota devem ser descartadas.
- A média final deve ser calculada apenas com as **três notas centrais**.

O sistema recebe os dados dos atletas, processa as notas e exibe:

- Nome do atleta  
- Notas obtidas (ordenadas)  
- Média válida calculada  

---

## 🧠 Lógica utilizada

O programa segue os seguintes passos:

1. Percorre a lista de atletas.
2. Ordena as notas em ordem crescente.
3. Remove a maior e a menor nota.
4. Calcula a média das três notas restantes.
5. Exibe o resultado no console.

---

## 💻 Tecnologias utilizadas

- JavaScript (ES6)
- Execução via navegador ou Node.js
- Uso de:
  - `for`
  - `.sort()`
  - `.slice()`
  - `.forEach()`
  - `.length`
  - `console.log()`

---

## 📂 Estrutura do projeto


---

## ▶️ Como executar o projeto

### Pelo navegador
1. Abra o arquivo `notas-atletas.js` em um editor.
2. Copie o código para o console do navegador (F12 → Console).
3. Execute e visualize os resultados.

### Pelo Node.js
1. Instale o Node.js.
2. No terminal, navegue até a pasta do projeto.
3. Execute:

```bash

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11


