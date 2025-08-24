document.addEventListener("DOMContentLoaded", function() {
  // Solo descarga al hacer clic en el botón
  const btn = document.getElementById("downloadBtn");
  if (btn) {
    btn.addEventListener("click", function() {
      window.location.href = "app-release-5.apk";
    });
  }
});