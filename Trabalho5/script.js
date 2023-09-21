document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    // Check if email is empty
    if (email.value.trim() === '') {
      alert('O campo E-mail deve ser preenchido.');
      event.preventDefault();
    }
  
    // Check if password is empty
    if (password.value.trim() === '') {
      alert('O campo Senha deve ser preenchido.');
      event.preventDefault();
    }
  });
  