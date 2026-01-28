import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <nav className="space-y-4 sticky top-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Инновационный Центр</h2>
              <a href="#investors" className="block text-blue-600 hover:underline">
                Для инвесторов. Предложение о сотрудничестве.
              </a>
              <a href="#projects" className="block text-blue-600 hover:underline">
                Список проектов ИЦ
              </a>
              <a href="#research" className="block text-blue-600 hover:underline">
                Предпроектные, предварительные исследования и разработки.
              </a>
              <a href="#patents" className="block text-blue-600 hover:underline">
                Патенты
              </a>
              <a href="#contacts" className="block text-blue-600 hover:underline">
                Контакты Инновационного Центра
              </a>
              <a href="#partners" className="block text-blue-600 hover:underline">
                Наши партнеры
              </a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-8">Контакты</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">ООО Аэрофон</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">📍</span>
                    <div>
                      <strong>Адрес:</strong> 400075, г. Волгоград, шоссе Авиаторов, 3., 3 этаж, к.31
                      (помещ.50) ООО «Аэрофон»
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">✉️</span>
                    <div>
                      <strong>Почтовый ящик компании:</strong> aerofon.ooo@rambler.ru
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">🌐</span>
                    <div>
                      <strong>Сайт:</strong>{" "}
                      <a
                        href="https://aerofon34.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        https://aerofon34.ru/
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">📞</span>
                    <div>
                      <strong>Тел.:</strong> (8442)43-00-12
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold">Руководство:</h3>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold">Директор — Петров Максим Владимирович</p>
                    <p>Тел +7(937)707-00-67</p>
                    <p>E-mail: wandera@mail.ru</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold">
                      Директор по развитию —Директор Инновационного центра — Пономарев Виктор
                      Александрович
                    </p>
                    <p>Тел. (8442)43-00-12 , 8-905-398-36-24</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold">
                      Главный инженер — Главный конструктор — Гейер Анатолий Филиппович
                    </p>
                    <p>Тел. (8442)43-00-12 , 8-927-251-69-89</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold">Отдел маркетинга</p>
                    <p>Тел. (8442)43-00-12</p>
                    <p>E-mail: m.aerofon@rambler.ru</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
