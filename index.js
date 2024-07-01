const consulta = [];
let variavel = "menu";
let deletar;
let atualizar;
let input;
let usuario = {
  nome: "",
  idade: "",
  sintoma: "",
  dia: "",
  hora: "",
};
function opcao (){
console.log(`Bem-vindo a clínica médica. Selecione uma opção:
1. Adicionar uma consulta
2. Ver consultas.
3. Atualizar uma consulta.
4. Cancelar uma consulta
5. Encerrar`);
}
opcao()
process.stdin.on("data", function (data) {
  input = data.toString().trim();

  if (variavel === "menu") {
    if (input === "1") {
      variavel = "adicionarConsulta";
      console.log("Por favor informe seu nome");
    } else if (input === "2") {
      variavel = "verConsulta";
      console.log(`Mostrando consultas agendadas...`);
      console.log(consulta);
      console.log(`Redirecionando para o menu...\n`)
opcao()
      variavel = "menu";
    } else if (input === "3") {
      variavel = "atualizarConsulta";
      console.log('Pressione "Enter" para prosseguir');
    } else if (input === "4") {
      variavel = "cancelarConsulta";
      console.log('Pressione "Enter" para prosseguir');
    } else if (input === "5") {
      console.log("Saindo...");
      process.exit();
    }
  } else if (variavel === "adicionarConsulta") {
    usuario.nome = input;
    variavel = "adicionarIdade";
    console.log("Digite sua idade");
  } else if (variavel === "adicionarIdade") {
    usuario.idade = input;
    variavel = "adicionarDoença";
    console.log("Informe seus sintomas");
  } else if (variavel === "adicionarDoença") {
    usuario.sintoma = input;
    variavel = "adicionarDia";
    console.log("Qual dia deseja realizar a consulta?");
  } else if (variavel === "adicionarDia") {
    usuario.dia = input;
    variavel = "adicionarHora";
    console.log("Qual horário deseja para realizar a consulta?");
  } else if (variavel === "adicionarHora") {
    usuario.hora = input;
    variavel = "menu";
    consulta.push(usuario);
    usuario = {
      nome: "",
      idade: "",
      sintoma: "",
      dia: "",
      hora: "",
    };
    console.log(`Consulta cadastrada. Selecione uma opção:`);
    opcao()
  } else if (variavel === "cancelarConsulta") {
    deletar = input;
    console.log("Informe o nome do paciente para cancelar a consulta.");
    console.log(consulta);
    for (let i = 0; i < consulta.length; i++) {
      if (consulta[i].nome.toLowerCase() === deletar.toLowerCase()) {
        consulta.splice(i, 1);
        console.log(
          "Consulta cancelada com sucesso!\nRedirecionando para o menu...\n"
        );
opcao()
        variavel = "menu";
      }
    }
  } else if (variavel === "atualizarConsulta") {
    atualizar = input
    console.log("Qual atributo você deseja alterar?")
    console.log(consulta)
    for (let i = 0; i < consulta.length; i++) {
      if (atualizar === "nome"){

      } else if (atualizar === "idade") {

      } else if (atualizar === "sintoma") {

      } else if (atualizar === "dia") {

      } else if (atualizar === "hora") {
        
      }
    }
  }
});