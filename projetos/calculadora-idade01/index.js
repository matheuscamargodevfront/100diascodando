
 // Quando clicar no botão...
 document.getElementById("btn").addEventListener("click", function() {
  // Passo 1: pegar a data que a pessoa colocou
  let dataNascimento = document.getElementById("aniversario").value;

  // Verifica se a data foi preenchida
  if (!dataNascimento) {
    alert("Por favor, insira sua data de nascimento.");
    return;
  }

  // Passo 2: transformar isso em uma data de verdade
  let nascimento = new Date(dataNascimento);

  // Passo 3: pegar a data de hoje
  let hoje = new Date();

  // Passo 4: calcular a idade (ano atual - ano de nascimento)
  let idade = hoje.getFullYear() - nascimento.getFullYear();

  // Passo 5: verificar se o aniversário já aconteceu este ano
  let mesAtual = hoje.getMonth();
  let diaAtual = hoje.getDate();
  let mesNasc = nascimento.getMonth();
  let diaNasc = nascimento.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--; // ainda não fez aniversário este ano
  }

   // Passo 6: mostrar o resultado
   document.getElementById("resultado").textContent = "Sua idade é " + idade + " anos";
  });
