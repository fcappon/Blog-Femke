const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function() {
  document.body.setAttribute('data-language', this.value);
});
