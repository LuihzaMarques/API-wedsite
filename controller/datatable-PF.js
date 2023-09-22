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
    const nome = document.getElementById('nome').value;
    const username = document.getElementById('username').value;
  
    
    const novoUsuario = {
      user_usuario: nome,
      user_username: username,
    };
  
   
    fetch('http://localhost:8080/cadastro', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(novoUsuario), 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao cadastrar usuário');
        }
        return response.json();
      })
      .then(data => {
    
        console.log('Usuário cadastrado com sucesso:', data);
  
       
        closeCadastroModal();
      })
      .catch(error => {
      
        console.error('Erro durante o cadastro:', error);
  
        closeCadastroModal();
      });
}


//LOGICA PARA O BUTTON EDITAR

function openEditarModal() {
    const modal = document.getElementById('editarModal');
    modal.style.display = 'block';
  
   
    const nome = document.getElementById('nomeCompleto');
    const username = document.getElementById('username');
    // Recupere os dados do usuário a ser editado da sua fonte de dados (por exemplo, um array)
    const usuarioEditavel = {
      nomeCompleto: 'Nome do Usuário',
      username: 'username',
    };
  
    nome.value = usuarioEditavel.nomeCompleto;
    username.value = usuarioEditavel.username;
}
  
// Função para fechar o modal de edição
function closeEditarModal() {
    const modal = document.getElementById('editarModal');
    modal.style.display = 'none';
}
  
// Função para confirmar a edição do usuário
function confirmarEdicao() {
    const nome = document.getElementById('nomeCompleto').value;
    const username = document.getElementById('username').value;
  
    // Aqui você pode adicionar a lógica para processar a edição do usuário
  
    // Fechar o modal após a edição
    closeEditarModal();
}
  
//logica para excluir usuario cadastrado. 

function openExcluirModal() {
    const modal = document.getElementById('excluirModal');
    modal.style.display = 'block';  
}
  
function closeExcluirModal() {
    const modal = document.getElementById('excluirModal');
    modal.style.display = 'none';
}
  
function confirmarExclusao() {
    
    closeExcluirModal();
}
  
function cancelarExclusao() {
    
    closeExcluirModal();
}
  