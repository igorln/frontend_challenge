const shareButton = document.getElementById('shareButton');

shareButton.addEventListener('click', (event) => {
  event.preventDefault()
  const friendName = document.getElementById('friendName')
  const friendEmail = document.getElementById('friendEmail')
  const reGex = /\S+@\S+\.\S+/;
  console.log(reGex.test(friendEmail.value))
  if (
    friendName.value === "" ||
    friendName.value.length < 2
  ) {
    alert("Por favor, digite o nome do seu amigo corretamente.");
    friendName.focus();
  }
  else if (
    reGex.test(friendEmail.value) === false
  ) {
    alert("Por favor, digite um e-mail válido.");
    friendEmail.focus();
  } else {
    alert("Novidade Compartilhada!");
    friendName.value = '';
    friendEmail.value = '';
  }
})