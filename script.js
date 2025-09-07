const startBtn = document.getElementById('startBtn');
const pwInput = document.getElementById('pw');
const overlay = document.getElementById('overlay');

const passwordslist = [
  "1234", "1243", "1324", "1342", "1423", "1432",
  "2134", "2143", "2314", "2341", "2413", "2431",
  "3124", "3142", "3214", "3241", "3412", "3421",
  "4123", "4132", "4213", "4231", "4312", "4321"
];

startBtn.addEventListener('click', () => {
  const password = pwInput.value;

  if (passwordslist.includes(password)) {
    overlay.style.display = "flex";
    setTimeout(() => overlay.style.display = "none", 4000);
    pwInput.value = "";  
  } else {
    alert("ACCESS DENIED");
    pwInput.value = "";  
  }
});
