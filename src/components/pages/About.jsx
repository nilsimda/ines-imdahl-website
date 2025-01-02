import imageOne from '../../assets/image1.jpg';
import imageTwo from '../../assets/image2.jpg';

function About() {
    return (
        <section id="about" >
            <div className="grid grid-cols-3 gap-x-4 gap-y-44 items-center">
                <div className="w-full">
                    <img
                        src={imageOne}
                        alt="About me"
                        className="w-full h-auto shadow-lg"
                    />
                </div>
                <div className="space-y-4 col-span-2 pr-44">
                    <h3 className="text-xl font-bold">Über mich</h3>
                    <p className="text-gray-600">
                        Mein Name ist Ines Imdahl, ich bin Diplom-Psychologin mit einem besonderen Schwerpunkt Tiefenpsychologie. Genau: der morphologischen Psychologie. Schon immer hat mich interessiert, warum die Menschen tun, was sie tun & warum sie sich mit vernünftigen Argumenten selten überzeugen lassen. Sie rauchen, obwohl sie voll aufgeklärt sind über die gesundheitsschädlichen folgen. Sie essen Billigfleisch, obwohl sie gegen Massentierhaltung sind.
                        <br></br>
                        <br></br>
                        Meine Fragen nach dem „Warum“ habe ich zum Beruf gemacht: ich erforsche gemeinsam mit meinem Team aus dem rheingold salon den Alltag der Menschen, das Verhalten, das Erleben rund um Produkte, Marken, aber auch Trends. Das tue ich die meiste Zeit.
                        <br></br>
                        <br></br>
                        Aber ich schreibe auch gern, das tue ich auf LinkedIn, hier im Blog, in meinen Büchern und in vielen, vielen Veröffentlichungen zu den unterschiedlichsten Themen. Immer mit der psychologischen Brille auf. In den letzten Jahren sind es oft Frauenthemen zur Gendergerechtigkeit, die mich antreiben & schreiben lassen. Ein Grund: ich sollte (lieber) ein Junge werden & habe wohl mein Leben lang dafür gekämpft, dass dem Weiblichen gleichviel Wert beigemessen wird.
                        <br></br>
                        <br></br>
                        Manchmal werde ich auch gefragt, ob ich beraten mag, Menschen oder gar ganze Unternehmen. Oder TV-Sender möchten, dass ich aus der Forschung heraus erkläre, warum Menschen manche Dinge tun oder wie es ihnen zum Beispiel in Krisen geht.
                        <br></br>
                        <br></br>
                        Meine 4 Kinder fordern mich dabei immer wieder heraus – und helfen mir neugierig und offen für alle Fragestellungen zu bleiben.
                    </p>
                </div>
                <div className="space-y-4 relative px-6 col-span-2 pl-44">
                    <h3 className="text-xl font-semibold mb-6">Einige besondere Highlights in meinem Leben:</h3>
                    <div className="border-l-2 border-gray-300 pl-8 space-y-6">
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">Studium der Psychologie an der Universität zu Köln</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">Hochzeit mit meiner großen Liebe Jens Lönneker</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">2000, 2004, 2007, 2009 Geburten unserer vier fantastischen Kinder</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">2011 Gründung des rheingold salon als psychologische Forschungsagentur</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">2016 & 2022 Erscheinen meiner Bücher</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">2022 gewählt zu den 40 over 40 Germanys most inspiring women</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                            <p className="text-gray-600">2024 gewählt zur LinkedIn TopVoice (und immer häufiger nennt man mich LinkedIn Influencerin)</p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img
                        src={imageTwo}
                        alt="About me"
                        className="w-full h-auto shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
