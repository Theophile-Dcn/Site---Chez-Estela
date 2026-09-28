export default function VideoSection() {
  return (
    <div className="videoDiv">
      <video 
        id="section2" 
        controls 
        playsInline
        height="50vw" 
        width="50vw" 
        poster="/images/poster.png"
        preload="metadata"
      >
        <source src="/images/videoChezEstela.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  );
}
