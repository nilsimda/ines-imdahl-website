import { FaShoppingCart } from "react-icons/fa";
import book1Cover from "../assets/werbung_couch.jpg";
import book2Cover from "../assets/frauen_buch.jpg";

function Books() {
    const books = [
        {
            coverImage: book1Cover,
            description: "Wirklich gute Werbung, will nicht nur ‚verkaufen‘, sie umwirbt uns als Menschen und nimmt uns in unseren Empfindungen ernst. Und sie versucht uns und unser Seelenleben zu ‚unterhalten‘. Anders formuliert zu ‚füttern‘ mit Botschaften und Aussagen, die uns Spaß machen. Werbung kann durchaus eine moderne Form des Märchenerzählens sein. Sicher tischt sie uns auch ‚Märchen‘ auf, aber sie kann unsere Werte und Sehnsüchte bebildern. Sie hält unsere Geschichten und Mythen lebendig, die sich früher die Menschen erzählt haben.",
            releaseYear: "2015",
            pages: 232,
            price: "7.99€",
            buyLink: "https://www.amazon.de/Werbung-auf-Couch-M%C3%A4rchen-braucht/dp/3451329670"
        },
        {
            coverImage: book2Cover,
            description: "Frauen denken, fühlen und handeln anders als Männer. Anhand von einer eigens zum Thema aufgelegten Studie zeigen Janine Steeger und Ines Imdahl, wie das weibliche Prinzip die Welt retten kann. Sie erklären, warum die weiblichen Eigenschaften eine zwingende Ergänzung zum Männlichen sind, um die großen Aufgaben der Zukunft, wie die Klimakrise, Flucht und Migration oder Chancengerechtigkeit zu lösen. Inklusive einer weiblich-dominierten Utopie als Ausblick!",
            releaseYear: "2022",
            pages: 220,
            price: "20.00€",
            buyLink: "https://www.amazon.de/Warum-Frauen-Welt-retten-werden/dp/3831206058"
        }
    ];

    return (
        <section id="books" className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Meine Bücher</h1>

                <div className="grid md:grid-cols-2 gap-44">
                    {books.map((book, _) => (
                        <div className="flex flex-col items-center h-full">
                            <div className="relative w-full max-w-xs aspect-[2/3] mb-6">
                                <img
                                    src={book.coverImage}
                                    alt={`Cover of ${book.title}`}
                                    className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="flex flex-col items-center flex-grow">
                                <p className="text-gray-600 text-left mb-4">
                                    {book.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                                    <span>{book.releaseYear}</span>
                                    <span>•</span>
                                    <span>{book.pages} Seiten</span>
                                    <span>•</span>
                                    <span>{book.price}</span>
                                </div>

                                <div className="flex justify-center">
                                    <button className="flex items-center gap-2 hover:scale-105 transition duration-300 ease-in-out">
                                        <FaShoppingCart className="w-4 h-4" />
                                        Bestellen
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;