function showService(type) {
  const box = document.getElementById("resultBox");

  box.style.opacity = 0;

  setTimeout(() => {
    if (type === "bots") {
      box.innerHTML = "🤖 We build WhatsApp bots & automation systems.";
    } 
    else if (type === "growth") {
      box.innerHTML = "📱 We help grow your social media presence.";
    } 
    else if (type === "design") {
      box.innerHTML = "🎨 We design flyers, branding & ads.";
    } 
    else if (type === "video") {
      box.innerHTML = "🎬 We create music videos & edits.";
    }

    box.style.opacity = 1;
  }, 200);
}
