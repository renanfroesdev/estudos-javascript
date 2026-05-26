const usuarios = [
  {
    id: 1,
    nome: "Lucas",
    idade: 22,
    email: "lucas@email.com",
    cidade: "Florianópolis",
    ativo: true
  },
  {
    id: 2,
    nome: "Mariana",
    idade: 28,
    email: "mariana@email.com",
    cidade: "Curitiba",
    ativo: false
  },
  {
    id: 3,
    nome: "Pedro",
    idade: 31,
    email: "pedro@email.com",
    cidade: "São Paulo",
    ativo: true
  },
  {
    id: 4,
    nome: "Amanda",
    idade: 19,
    email: "amanda@email.com",
    cidade: "Porto Alegre",
    ativo: true
  },
  {
    id: 5,
    nome: "Carlos",
    idade: 35,
    email: "carlos@email.com",
    cidade: "Rio de Janeiro",
    ativo: false
  },
  {
    id: 6,
    nome: "Fernanda",
    idade: 26,
    email: "fernanda@email.com",
    cidade: "Belo Horizonte",
    ativo: true
  },
  {
    id: 7,
    nome: "Rafael",
    idade: 24,
    email: "rafael@email.com",
    cidade: "Recife",
    ativo: true
  },
  {
    id: 8,
    nome: "Juliana",
    idade: 30,
    email: "juliana@email.com",
    cidade: "Fortaleza",
    ativo: false
  },
  {
    id: 9,
    nome: "Thiago",
    idade: 27,
    email: "thiago@email.com",
    cidade: "Brasília",
    ativo: true
  },
  {
    id: 10,
    nome: "Patrícia",
    idade: 33,
    email: "patricia@email.com",
    cidade: "Salvador",
    ativo: true
  },
  {
    id: 11,
    nome: "Bruno",
    idade: 21,
    email: "bruno@email.com",
    cidade: "Joinville",
    ativo: false
  },
  {
    id: 12,
    nome: "Camila",
    idade: 29,
    email: "camila@email.com",
    cidade: "Natal",
    ativo: true
  },
  {
    id: 13,
    nome: "Eduardo",
    idade: 40,
    email: "eduardo@email.com",
    cidade: "Campinas",
    ativo: true
  },
  {
    id: 14,
    nome: "Larissa",
    idade: 23,
    email: "larissa@email.com",
    cidade: "Blumenau",
    ativo: false
  },
  {
    id: 15,
    nome: "Gustavo",
    idade: 32,
    email: "gustavo@email.com",
    cidade: "Manaus",
    ativo: true
  }
];

// Pegar apenas usuários ativos

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
console.log(usuariosAtivos)

// Criar um array só com os nomes

const nomesUsuarios = usuarios.map(usuario => usuario.nome);
console.log(nomesUsuarios);

// Encontrar um usuário especifico pelo ID

const usuarioEncontrado = usuarios.find(usuario => usuario.id === 7);
console.log(usuarioEncontrado);

// Somar a idade de todos os usuários 

const somaIdadeUsuarios = usuarios.reduce ((acumulador, usuario) => {
    return acumulador + usuario.idade;
}, 0);
console.log(`A soma das idades de todos os usuários é: ${somaIdadeUsuarios}`);

// Ordenar usuários do mais novos aos mais velhos (idade)

const usuariosOrdenados = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuariosOrdenados);