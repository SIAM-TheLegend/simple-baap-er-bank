document.getElementById('submit').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'sontan@baap.com' && password === 'secret') {
    location.replace("bank.html");
  }
  else {
    alert('Oboidho sontan der jayga dewa hoy na. Baap er prokrito sontan chara keu dhukar permission nai.');
  }
})