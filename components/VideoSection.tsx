export default function VideoSection() {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-sm overflow-hidden shadow-lg">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/vid.webm" type="video/webm" />
      </video>
    </div>
  )
}
