document.getElementById('showRegisterForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginContainer').classList.remove('active');
    document.getElementById('registerContainer').classList.add('active');
  });
  
  document.getElementById('showLoginForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerContainer').classList.remove('active');
    document.getElementById('loginContainer').classList.add('active');
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);
  
    const loginErrorMessage = document.getElementById('loginErrorMessage');
  
    if (user) {
      loginErrorMessage.style.display = 'none';
      alert('Login successful');

    } else {
      loginErrorMessage.style.display = 'block';
      loginErrorMessage.textContent = 'Login failed. Please check your username and password.';
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    const registerErrorMessage = document.getElementById('registerErrorMessage');
  
    if (storedUsers.some(user => user.username === username)) {
      registerErrorMessage.style.display = 'block';
      registerErrorMessage.textContent = 'Username already exists. Please choose another username.';
    } else {
      storedUsers.push({ username, password });
      localStorage.setItem('users', JSON.stringify(storedUsers));
      registerErrorMessage.style.display = 'none';
      alert('Registration successful');
      document.getElementById('showLoginForm').click();
    }
  });
  
  document.getElementById('loginContainer').classList.add('active');
  