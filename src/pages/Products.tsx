import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Наши разработки</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Звуковые излучатели. Преобразователи электроакустические пьезокерамические
          </h2>
          <p className="mb-6">
            Пьезокерамические электроакустические преобразователи на 125дБ разработаны при финансовой
            поддержке Фонда содействия развитию малых форм предприятий в научно-технической сфере по
            Программе СТАРТ 1, СТАРТ 2, СТАРТ 3.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Преобразователь электроакустический пьезокерамический ПЭП-1
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Преобразователь электроакустический пьезокерамический ПЭП-2
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Преобразователь электроакустический пьезокерамический ПЭП-0-01
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                      alt="ПЭП-1"
                      className="w-full h-48 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                      alt="ПЭП-2"
                      className="w-full h-48 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                      alt="ПЭП-0-01"
                      className="w-full h-48 object-cover rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Оповещатели. Сирены.</h2>
          <p className="mb-6">
            Пьезокерамическая сирена (оповещатель) с уровнем звукового давления 125 дБ разработана
            при финансовой поддержке Фонда содействия развитию малых форм предприятий в
            научно-технической сфере по Программе СТАРТ 2
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 font-semibold">
                Пьезокерамическая сирена (оповещатель) с уровнем звукового давления 125 дБ
                (экспериментальный образец)
              </div>
              <div className="p-4">
                <img
                  src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                  alt="Пьезокерамическая сирена"
                  className="w-full rounded"
                />
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 font-semibold">
                Оповещатель охранно-пожарный звуковой ООПЗ «Сенкен-120»
              </div>
              <div className="p-4">
                <img
                  src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                  alt="Сенкен-120"
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>

          <p className="mb-4">
            При финансовой поддержке Фонда содействия развитию малых форм предприятий в
            научно-технической сфере по Программе СТАРТ3 разработаны:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Сирена пьезокерамическая персональная
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                (звуковое давление — 120дБ, питание — встроенный источник постоянного тока):
              </p>
              <img
                src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                alt="Персональная сирена"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Сирена пьезокерамическая автономная</h3>
              <p className="text-sm text-gray-600 mb-2">
                (звуковое давление — 125дБ, питание — встроенный источник постоянного тока 12 В
                (аккумуляторная батарея)):
              </p>
              <img
                src="https://cdn.poehali.dev/projects/7c436fc1-ccb9-44cb-9f48-5dcad83dc2cd/bucket/c60ed866-198e-4d7d-b5a0-7c63619c90ad.png"
                alt="Автономная сирена"
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
