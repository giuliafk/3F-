// Função para rolar até uma seção ao clicar no botão
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Função para lidar com o envio do formulário de contato
  document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
      alert(`Mensagem enviada com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  