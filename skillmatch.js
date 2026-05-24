//Criar um Mini-Projeto referente a um simulador de compatibilidade

//RF01 - Criando o objeto Candidato
const candidato = {
  nome: "Afonso",
  area: "Front-End",
  habilidades: [
    "JavaScript",
    "HTML",
    "GitHub",
    "Lógica de Programação",
    "Trabalho em Equipe",
  ],
  experienciaMeses: 18,
};

//RF09 - Criando a Classe Vaga
class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }
}

//RF10 - Criando vaga Front-End (herda classe vaga)

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }
  //metodo para exibir o nivel da vaga
  exibirNivel() {
    return `Nivel da vaga: ${this.nivel}`; //RF11 - Utilizacao do this
  }
}

//RF02 - Criando array de 3 vagas ficticias (lista de vagas)
const vagas = [
  new VagaFrontEnd(
    1,
    "Tech Solutions",
    "Desenvolvedor Front-End",
    [
      "JavaScript",
      "TypeScript",
      "HTML",
      "Trabalho em Equipe",
      "Lógica de Programação",
    ],
    3800,
    "Remoto",
    "Júnior",
  ),

  new VagaFrontEnd(
    2,
    "Inova Tech",
    "Designer UI/UX",
    [
      "JavaScript",
      "CSS",
      "HTML",
      "Resolução de Problemas",
      "Pensamento Crítico",
    ],
    4500,
    "Híbrido",
    "Pleno",
  ),

  new VagaFrontEnd(
    3,
    "Contoso SA",
    "Trainee Front-End",
    ["JavaScript", "GitHub", "HTML", "Funções"],
    2000,
    "Presencial",
    "Trainee",
  ),
];

//RF14 - utilizando promise para simular o carregamento de dados
function carregarVagas() {
  return new Promise((resolve) => {
    console.log("Carregando vagas...");

    setTimeout(() => {
      resolve(vagas);
    }, 2000);
  });
}

//RF03 - calculando a compatibilidade com cada vaga

function calcularCompatibilidade(candidato, vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter((requisito) =>
    candidato.habilidades.includes(requisito),
  );
  //RF05 - listar habilidades faltantes
  const habilidadesFaltantes = vaga.requisitos.filter(
    (requisito) => !candidato.habilidades.includes(requisito),
  );
  const compatibilidade =
    (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    compatibilidade: compatibilidade.toFixed(0),
    habilidadesEncontradas,
    habilidadesFaltantes,
  };
}

//RF04 - classificando a compatibilidade
function classificarCompatibilidade(percentual) {
  //definir percentual
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

//RF07 - recomendacao de estudo para habilidades faltantes
function recomendacaoEstudo(resultados) {
  let habilidadesParaEstudar = [];

  for (let resultado of resultados) {
    let faltantes = resultado.habilidadesFaltantes;

    for (let i = 0; i < faltantes.length; i++) {
      let habilidade = faltantes[i];

      if (!habilidadesParaEstudar.includes(habilidade)) {
        habilidadesParaEstudar.push(habilidade);
      }
    }
  }

  console.log(
    `Recomendação de estudo: Priorize estudar ${habilidadesParaEstudar.join(", ")}, pois esses conteúdos aparecem nas vagas analisadas`,
  );
}

//RF14 - funcao async/await para executar a analise somente dps que as vagas forem carregadas
async function executarAnalise() {
  const vagasCarregadas = await carregarVagas();

  const resultados = vagasCarregadas.map((vaga) => {
    const analise = calcularCompatibilidade(candidato, vaga);
    return {
      empresa: analise.empresa,
      cargo: analise.cargo,
      nivel: vaga.exibirNivel(),
      compatibilidade: analise.compatibilidade,
      habilidadesEncontradas: analise.habilidadesEncontradas,
      habilidadesFaltantes: analise.habilidadesFaltantes,
      classificacao: classificarCompatibilidade(
        Number(analise.compatibilidade),
      ),
    };
  });

  //mostrando resultados
  for (let resultado of resultados) {
    console.log(`
      Empresa: ${resultado.empresa}
      Cargo: ${resultado.cargo}
      ${resultado.nivel}
      Compatibilidade: ${resultado.compatibilidade}%
      Habilidades encontradas: ${resultado.habilidadesEncontradas.join(`, `)}
      Habilidades faltantes: ${resultado.habilidadesFaltantes.join(`, `)}
      Classificação: ${resultado.classificacao}   
      `);
  }

  //RF06 - encontrando a melhor vaga (com maior compatibilidade)
  const melhorVaga = resultados.reduce((melhor, vagaAtual) => {
    if (Number(vagaAtual.compatibilidade) > Number(melhor.compatibilidade)) {
      return vagaAtual;
    }

    return melhor;
  }, resultados[0]);

  console.log(`A melhor vaga para o seu perfil é:
    Empresa: ${melhorVaga.empresa}
    Cargo: ${melhorVaga.cargo}
    ${melhorVaga.nivel}
    Compatibilidade: ${melhorVaga.compatibilidade}%
    `);

  // executa a funcao do RF07
  recomendacaoEstudo(resultados);
}

// inicia o programa
executarAnalise();
