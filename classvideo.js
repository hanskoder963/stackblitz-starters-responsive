// Lytter etter mus-over-hendelser for å oppdatere videoen
document.querySelectorAll('.kort').forEach(kort => {
  kort.addEventListener('mouseover', function() {
    const videoURL = kort.dataset.video; // Henter video-URL fra data-video-attributt
    const videoElement = document.getElementById('class-video');

    // Oppdaterer videokilden og starter avspillingen
    videoElement.querySelector('source').src = videoURL;
    videoElement.load();
    videoElement.play();
  });
});
