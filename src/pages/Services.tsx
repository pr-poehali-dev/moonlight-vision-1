import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Услуги</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Научно-исследовательские работы (НИОКР)
          </h2>
          <p className="mb-4">
            Наше предприятие оказывает содействие в осуществлении научно-технических проектов, в
            выполнении НИР и ОКР в соответствии с нашими возможностями и квалификацией. Практика
            оказания такого содействия осуществлялась в следующих формах:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              -выполнение НИР и ОКР в качестве исполнителя и соисполнителя по договорам о создании
              научно-технической продукции;
            </li>
            <li>
              -оказание услуг по изготовлению опытных образцов по документации исполнителя НИР и
              ОКР;
            </li>
            <li>
              -оказание конструкторской и консультационной помощи по вопросам применения
              пьезокерамики.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Контрактное производство</h2>
          <p className="mb-4">
            Производство экспериментальных и мелкосерийных партий по проектам Инновационного Центра.
          </p>
          <p className="mb-4">
            Производство осуществляется по договорам бригадного подряда т.е. договорам с командой
            проекта для соблюдения их интересов;
          </p>
          <p>— другие услуги контрактного производства.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
