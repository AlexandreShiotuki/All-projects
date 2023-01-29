 let pacientes = ["mateus", "julia", "henrique", "pedro"];
 let opcao;
 while (opcao != 3) {
  opcao = parseInt(prompt("Bem-vindo à fila de espera, o que deseja?\n 1 - Novo Paciente\n 2 - Consultar Paciente\n 3 - Sair"));

  switch (opcao) {

        case 1:
          let newPatient = prompt("Qual o nome do novo paciente?");
          pacientes.push (newPatient);
          break;

        case 2:
          let nomePaciente=prompt("digite aqui o nome do paciente a ser consultado")
          let pacienteConsultado=pacientes.includes(nomePaciente)
          if(pacienteConsultado==true){
              alert(nomePaciente + " está na posição " + pacientes.indexOf(nomePaciente))
          }else{
              alert("Nao Existe este paciente na fila")
          }
          break

        case 3:
          alert ("Programa encerrado");
          break; 
  }
 }
