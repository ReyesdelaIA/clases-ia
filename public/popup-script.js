(function () {
  if (sessionStorage.getItem("reyesia_popup_closed")) return;
  var overlay = document.createElement("div");
  overlay.id = "reyesia-popup-overlay";
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;";
  var iframe = document.createElement("iframe");
  iframe.src = "https://cursos.reyesia.com/embed";
  iframe.style.cssText =
    "width:100%;max-width:896px;height:90vh;max-height:90vh;border:none;border-radius:12px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);background:#0A0A0F;";
  iframe.title = "Clases de IA - Reyes IA";
  overlay.appendChild(iframe);
  overlay.onclick = function (e) {
    if (e.target === overlay) closePopup();
  };
  function closePopup() {
    sessionStorage.setItem("reyesia_popup_closed", "1");
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s";
    setTimeout(function () {
      overlay.remove();
    }, 300);
  }
  window.addEventListener("message", function (e) {
    if (e.data && e.data.type === "closepopup") closePopup();
  });
  document.body.appendChild(overlay);
})();
