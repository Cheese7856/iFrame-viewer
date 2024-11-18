function goFullScreen() {
  const iframe = document.getElementById("myIframe");
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen(); // Standard metode
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen(); // Safari og eldre Chrome
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen(); // Eldre IE/Edge
  }
}

function endreIframe() {
  var url = document.getElementById("urlInput").value; // Hent URL-en fra tekstboksen

  // Sjekk om URL-en starter med "https://", hvis ikke, legg det til
  if (!url.startsWith("https://")) {
    url = "https://" + url;
  }

  document.getElementById("myIframe").src = url; // Endre src på iframe-en
}
