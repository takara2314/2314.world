export default function Hero() {
  return (
    <section className="mt-10 flex flex-col items-center">
      <img
        src="/takaran.png"
        alt="たからーん"
        className="w-[10rem] h-[10rem] mask mask-squircle"
      />
      <h1 className="mt-5">
        <div className="text-2xl font-bold">
          たからーん（濱口 宝）
        </div>
        <div className="text-gray-500 text-base">
          @takara2314
        </div>
      </h1>
    </section>
  );
}
