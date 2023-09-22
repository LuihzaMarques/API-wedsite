//LOGICA PARA O BUTTON CADASTRO 

function openCadastroModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function closeCadastroModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

function confirmarCadastro() {
  const url = `http://localhost:8080/cadastro`;

  // Verificar se ta indo pro back 
  const userNameCadastroInput = document.getElementById("userNameCadastroID");
  const nomeCadastroInput = document.getElementById("nomeCadastroID");
  const cadastroPassawordInput = document.getElementById("cadastroPasswordID");

  //criado para saber se todas as informações estão indo para o back 

  if (!userNameCadastroInput || !nomeCadastroInput || !cadastroPassawordInput) {
    console.error("Um ou mais elementos não foram encontrados.");
    return; 
  }

  const cadData = {
    user_usuario: userNameCadastroInput.value,
    user_nome: nomeCadastroInput.value,
    user_senha: cadastroPassawordInput.value,
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(cadData),
  }).done(function (data) {
    console.log(data);

    if (data.code == "200") {
      
      alert("Cadastro feito com sucesso.");
      window.location.href = "/view/components/pages/home/index.html";
    } else {
      location.href = "#";
      alert("Erro ao fazer o cadastro.");
    }
  });
}


//LOGICA PARA ENTRAR - LOGIN

function fazerLogin() {
  const url = "http://localhost:8080/login";

  const loginData = {
    user_usuario: document.getElementById("usernameAndCNPJId").value,
    user_senha: document.getElementById("passwordId").value,
  };

  $.ajax({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(loginData),
  }).done(function (data) {
    console.log(data);

    if (data.code === 200) {
      alert("Login efetuado com sucesso");
      window.location.href = "/view/components/pages/home/index.html";
    } else {
      alert(data.message);
    }
  });
}
