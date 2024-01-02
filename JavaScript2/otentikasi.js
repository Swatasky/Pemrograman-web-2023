function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Gantilah ini dengan aturan validasi sesuai kebutuhan
    if (username === 'swat' && password === '123') {
      alert('Login berhasil!');
      window.location.href = "loginBerhasil.html";
    } else {
      alert('Login gagal. Periksa kembali username dan password Anda.');
      
    }
  }
  