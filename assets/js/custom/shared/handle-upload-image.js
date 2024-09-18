document.querySelectorAll('input[type="file"]').forEach(input => {
  input.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const preview = document.getElementById(`${event.target.id}-preview`);
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});