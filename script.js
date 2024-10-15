const toggleButton = document.getElementById('toggleButton');
const word = document.getElementById('rembdy');
const passwordInput = document.getElementById('password-input');
const showPasswordIcon = document.querySelector('#show-password-icon');
const signPageBtn = document.getElementById("p1");

signPageBtn.onclick = () => {
  window.location.href = "index2.html";
  }
        toggleButton.addEventListener('click', () => {
            word.classList.toggle('hidden');
        });
        
        passwordInput.addEventListener('input', () => {
            showPasswordIcon.classList.toggle('disabled', !passwordInput.value);
            showPasswordIcon.classList.toggle('active', passwordInput.value);
          });
          
          showPasswordIcon.addEventListener('click', () => {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
          });    