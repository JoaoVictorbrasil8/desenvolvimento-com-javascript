document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que o formulário seja submetido normalmente
  
  // Obter o valor do email digitado pelo usuário
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  
  // Verificar se o email está vazio ou não é um endereço de e-mail válido
  if (!email) {
    alert("Por favor, insira seu endereço de e-mail.");
    return;
  }
  
  // Validar o email usando uma expressão regular simples
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido. Um endereço de e-mail válido deve ter o seguinte formato: exemplo@dominio.com");
    return;
  }
  
  // Aqui você pode fazer algo com o email, como enviá-lo para um servidor ou armazená-lo localmente
  // Por exemplo, você pode enviar o email para um servidor usando AJAX
  
  // Limpar o campo de entrada após a submissão bem-sucedida (opcional)
  emailInput.value = "";
  
  // Mensagem de sucesso
  alert("Email inserido corretamente!!: " + email);
});