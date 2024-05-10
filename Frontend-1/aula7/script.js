window.onload = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "serviceWorker.js"
      );
    } catch (error) {
      console.error("Error registering Service Worker", error);
    }
  } else {
    alert("Service worker not suported, use a chromium based browser");
  }

  const page1 = document.querySelector("#page1");
  const page2 = document.querySelector("#page2");
  const next = document.querySelector("#next");
  const previous = document.querySelector("#previous");

  next.onclick = () => {
    page1.style.display = "none";
    page2.style.display = "block";
  };
  previous.onclick = () => {
    page1.style.display = "block";
    page2.style.display = "none";
  };
};
