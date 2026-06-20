export default function CameraView({
  videoRef,
  overlayCanvasRef,
  zoom = 1,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-3xl shadow-2xl">

      <div className="relative overflow-hidden rounded-2xl">

        {/* Camera Feed */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            transform: `scaleX(-1) scale(${zoom})`,
            transformOrigin: "center center",
            transition: "transform 0.2s ease",
          }}
          className="
            w-full
            max-w-[400px]
            rounded-2xl
            border
            border-white/20
            shadow-lg
            block
          "
        />

        {/* Hand Tracking Overlay */}
        <canvas
          ref={overlayCanvasRef}
          style={{
            transform: `scaleX(-1) scale(${zoom})`,
            transformOrigin: "center center",
            transition: "transform 0.2s ease",
          }}
          className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
          "
        />

      </div>

    </div>
  );
}