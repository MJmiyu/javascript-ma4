function click() {
  alert('Yay you clicked Hello');
}
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('button');
  button.addEventListener('click', click);
});
