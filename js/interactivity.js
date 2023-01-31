var toggleButton = document.getElementById('toggle-frame');
var iframe = document.querySelector('iframe');

toggleButton.addEventListener('click', function() {
  iframe.style.display = (iframe.style.display === 'none') ? 'block' : 'none';
});
