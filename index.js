const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    alert('You clicked me');
  });
}
addingEventListener();