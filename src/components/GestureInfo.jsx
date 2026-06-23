export default function GestureInfo({
  gesture,
}) {
  return (
    <div className="bg-black/70 backdrop-blur-xl text-white px-4 py-3 rounded-2xl shadow-xl border border-white/10">

      <h2 className="font-bold text-sm md:text-lg">
        {gesture}
      </h2>

      <div className="mt-2 text-xs md:text-sm text-gray-300 flex flex-wrap gap-3">
        <span>☝️ Draw</span>
        <span>✌️ Color</span>
        <span>🖐️ Erase</span>
        <span>👍 Screenshot</span>
        <span>🤟 Zoom In</span>
        <span>👊 Zoom Out</span>
      </div>

    </div>
  );
}