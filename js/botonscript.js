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

      // 🔹 Aquí agregas el fade out:
      $("html, body, #heartLayer").addClass("fade-out");

      // 🔹 Espera 1s (la duración del fade) antes de redirigir
      setTimeout(() => {
        window.location.href = "2022.html"; // tu siguiente página
      }, 2000);
    });
});
