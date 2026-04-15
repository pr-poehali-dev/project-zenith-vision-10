export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Транспорт и дороги"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="features" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Всё под контролем</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Отслеживайте местоположение, пробег, расход топлива и техобслуживание каждого автомобиля в реальном времени — без таблиц и хаоса.
        </p>
        <div className="flex flex-col gap-3 mb-8 text-neutral-700 text-base">
          <div>📍 GPS-мониторинг всего парка онлайн</div>
          <div>⛽ Учёт топлива и расходов по каждой машине</div>
          <div>🔧 Напоминания о ТО и плановом обслуживании</div>
          <div>📊 Отчёты и аналитика в один клик</div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать подробнее
        </button>
      </div>
    </div>
  );
}