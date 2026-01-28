import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">О компании</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            В течение всего времени существования ООО «Аэрофон» находится на переднем крае
            исследований и разработок в области пьезокерамических электроакустических компонентов. Все
            это время предприятие занималось улучшением характеристик излучателей звука на основе
            пьезокерамики с использованием новых технических решений. Благодаря этим усилиям в 2013г.
            выпущен первый в мире преобразователь электроакустический пьезокерамический с уровнем
            звукового давления 125дБ на расстоянии один метр. На сегодняшний день доступен ряд
            звуковых излучателей, которые, благодаря своим характеристикам широко используются.
          </p>

          <section className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">«ООО Аэрофон»</h2>
            <p className="mb-4">Разработка, производство и продажа:</p>
            <ul className="space-y-2">
              <li>— звуковых излучателей, преобразователей электроакустических пьезокерамических;</li>
              <li>— сирен и оповещателей для:</li>
            </ul>
          </section>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">охранно-пожарной сигнализации;</h3>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">сигнализации безопасности;</h3>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">физической защиты;</h3>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">систем предупреждения и реагирования;</h3>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">другой радиоэлектронной продукции.</h3>
            </div>
          </div>

          <p className="text-lg font-semibold">
            ООО «Аэрофон» — продукция на основе пьезокерамики
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
