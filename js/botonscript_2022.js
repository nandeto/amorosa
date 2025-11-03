$(document).ready(() => {
  $(".button")
    .mousedown(() => {
      $(".button .content").addClass("pressed");
      $(".button .particles").removeClass("animate");
    })
    .on('mouseup mouseleave', () => {
      $(".button .content").removeClass("pressed");
    })
    .click(() => {
      $(".button .particles").addClass("animate");

      // 🔹 Fade out original (afecta html, body y #heartLayer)
      $("html, body, #heartLayer").addClass("fade-out");

      // 🔹 Espera 2s antes de redirigir (coincide con animación CSS)
      setTimeout(() => {
        window.location.href = "2023.html";
      }, 2000);
    });
});
