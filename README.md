# SkillMatch JS

## Sobre o projeto

O **SkillMatch JS** é um mini-projeto em JavaScript que simula a compatibilidade entre um candidato e vagas da área de Front-End.

O sistema compara as habilidades cadastradas no perfil do candidato com os requisitos de cada vaga e apresenta, no console:

- percentual de compatibilidade com cada vaga;
- habilidades encontradas no perfil do candidato;
- habilidades faltantes para cada vaga;
- classificação da compatibilidade;
- vaga mais compatível com o perfil analisado;
- recomendação de estudo com base nas habilidades ausentes.

O projeto foi desenvolvido para praticar conceitos fundamentais de JavaScript e lógica de programação no contexto de um processo seletivo fictício.

## Objetivo

Praticar os principais conceitos estudados no Módulo 01 por meio de um simulador simples, organizado e executável no console.

Conceitos aplicados no projeto:

- lógica de programação;
- JavaScript básico;
- variáveis e constantes;
- tipos de dados;
- objetos;
- arrays;
- laços de repetição;
- condicionais;
- operadores;
- funções;
- arrow functions;
- métodos de array, como `filter`, `map` e `reduce`;
- classes;
- herança;
- uso de `constructor`;
- uso de `super`;
- uso de `this`;
- Promises;
- `async` e `await`;
- simulação de carregamento assíncrono com `setTimeout`;
- exibição de resultados no console.

## Funcionalidades

O projeto executa as seguintes etapas:

1. Cria um objeto `candidato` com nome, área, habilidades e tempo de experiência.
2. Cria uma classe base `Vaga` para representar vagas de emprego.
3. Cria uma classe `VagaFrontEnd`, que herda de `Vaga` e adiciona o nível da vaga.
4. Monta uma lista com três vagas fictícias.
5. Simula o carregamento das vagas usando uma `Promise`.
6. Calcula a compatibilidade entre o candidato e cada vaga.
7. Lista as habilidades encontradas e faltantes.
8. Classifica a compatibilidade como alta, média ou baixa.
9. Identifica a vaga mais compatível com o candidato.
10. Mostra uma recomendação de estudos com base nas habilidades que faltam.

## Como executar no navegador

Este projeto pode ser executado diretamente no console do navegador. Não é obrigatório instalar Node.js.

1. Abra o Google Chrome, Microsoft Edge ou outro navegador moderno.
2. Pressione `F12` ou `Ctrl + Shift + J` para abrir as ferramentas de desenvolvedor.
3. Acesse a aba **Console**.
4. Abra o arquivo `skillmatch.js`.
5. Copie todo o código do arquivo.
6. Cole o código no console do navegador.
7. Pressione `Enter`.
8. Aguarde o carregamento das vagas e veja os resultados no console.

## Estrutura do projeto

```txt
skillmatch-js/
│
├── skillmatch.js
└── README.md
```

## Principais arquivos

### `skillmatch.js`

Arquivo principal do projeto. Contém:

- cadastro do candidato;
- criação das classes `Vaga` e `VagaFrontEnd`;
- cadastro das vagas fictícias;
- cálculo de compatibilidade;
- classificação dos resultados;
- escolha da melhor vaga;
- recomendação de estudos;
- execução assíncrona da análise.

## Exemplo de saída esperada

Ao executar o projeto, o console exibirá mensagens semelhantes a estas:

```txt
Carregando vagas...

Empresa: Tech Solutions
Cargo: Desenvolvedor Front-End
Nivel da vaga: Júnior
Compatibilidade: 80%
Habilidades encontradas: JavaScript, HTML, Trabalho em Equipe, Lógica de Programação
Habilidades faltantes: TypeScript
Classificação: Alta compatibilidade

A melhor vaga para o seu perfil é:
Empresa: Tech Solutions
Cargo: Desenvolvedor Front-End
Nivel da vaga: Júnior
Compatibilidade: 80%

Recomendação de estudo: Priorize estudar TypeScript, CSS, Resolução de Problemas, Pensamento Crítico, Funções...
```

Os valores podem variar se as habilidades do candidato ou os requisitos das vagas forem alterados.

## Conceitos usados

### Objeto

O candidato é representado por um objeto JavaScript com propriedades como `nome`, `area`, `habilidades` e `experienciaMeses`.

```js
const candidato = {
  nome: "Afonso",
  area: "Front-End",
  habilidades: ["JavaScript", "HTML", "GitHub"],
  experienciaMeses: 18,
};
```

### Classes e herança

O projeto usa a classe `Vaga` como estrutura base e a classe `VagaFrontEnd` como uma especialização para vagas de Front-End.

A classe filha utiliza `extends` para herdar características da classe principal e `super` para reaproveitar o construtor da classe base.

### Arrays

As vagas e habilidades são armazenadas em arrays. Isso permite percorrer listas, filtrar informações e comparar requisitos.

### Métodos de array

O projeto utiliza métodos importantes de array:

- `filter`: encontra habilidades compatíveis e habilidades faltantes;
- `map`: gera uma nova lista com os resultados analisados;
- `reduce`: identifica a vaga com maior compatibilidade.

### Condicionais

A função `classificarCompatibilidade` usa estruturas condicionais para retornar uma classificação de acordo com o percentual calculado.

```js
if (percentual >= 80) {
  return "Alta compatibilidade";
} else if (percentual >= 50) {
  return "Média compatibilidade";
} else {
  return "Baixa compatibilidade";
}
```

### Promise

A função `carregarVagas` usa uma `Promise` para simular o carregamento assíncrono das vagas.

### Async/Await

A função `executarAnalise` usa `async/await` para aguardar o carregamento das vagas antes de processar os dados.

## Requisitos funcionais atendidos

- **RF01:** criação do objeto candidato;
- **RF02:** criação de uma lista com três vagas fictícias;
- **RF03:** cálculo de compatibilidade com cada vaga;
- **RF04:** classificação da compatibilidade;
- **RF05:** listagem de habilidades faltantes;
- **RF06:** identificação da melhor vaga;
- **RF07:** recomendação de estudo;
- **RF08:** usar metodos de array;
- **RF09:** criação da classe `Vaga`;
- **RF10:** criação da classe `VagaFrontEnd` com herança;
- **RF11:** utilização do `this`;
- **RF14:** uso de `Promise` e `async/await`.

## Possíveis melhorias

Algumas melhorias futuras para o projeto seriam:

- ajustar o codigo para utilizar callback e closure;
- permitir cadastro de novos candidatos;
- permitir cadastro de novas vagas;
- criar uma interface visual com HTML e CSS;
- ordenar as vagas por compatibilidade;
- considerar peso diferente para cada habilidade;

## Links úteis

- [Google Drive](https://drive.google.com/drive/folders/1lq2aL1cpeMIvBzKB0yYzzJlqOaLdh7hX?usp=sharing)
- [Kanban - Trello](https://trello.com/b/By4bc5sz/m1s04-mini-projeto-avaliativo)

## Autor

Projeto desenvolvido pelos alunos:
- Gabriel Peres Mantovani (gabriel_mantovani)
- Mariana Kubota Barandas (mariana_barandas)
