window.addEventListener('DOMContentLoaded', () => {
    const images = [
        {
            path: "img_ricordi/1guerra.png",
            story: "La lista dei morti della Prima Guerra Mondiale sul fronte occidentale, Anversa. Un capitolo tragico della storia che segna la sofferenza e la resistenza dei soldati e delle loro famiglie."
        },
        {
            path: "img_ricordi/austria.png",
            story: "Salisburgo, un'incantevole città austriaca famosa per la sua architettura barocca e come luogo di nascita di Mozart. Passeggiare nel suo centro storico è come fare un viaggio nel passato."
        },
        {
            path: "img_ricordi/bacio.jpeg",
            story: "Il Bacio di Francesco Hayez, una delle opere più celebri del Romanticismo italiano, custodita a Milano. Questa pittura esprime l'intensità dell'amore e la passione tra due amanti."
        },
        {
            path: "img_ricordi/casapiccola.jpeg",
            story: "La casa più piccola di Salisburgo, conosciuta come 'Haus zum Mönchsberg'. Un curioso esempio di architettura, che dimostra la creatività nell'utilizzo degli spazi urbani limitati."
        },
        {
            path: "img_ricordi/castello.png",
            story: "Il Castello Imperiale di Dresda, un magnifico esempio di architettura barocca tedesca. È stato un simbolo di potere e di ricchezza per secoli."
        },
        {
            path: "img_ricordi/Biliardo.png",
            story: "Il biliardo nell'ostello di Anversa, un luogo di incontro e di socializzazione. I giochi come il biliardo sono sempre stati un modo per stringere legami e creare ricordi."
        },
        {
            path: "img_ricordi/cena.jpeg",
            story: "Una cena tipica a Salisburgo, un'esperienza culinaria che combina i sapori tradizionali austriaci con l'influenza delle culture vicine. Un piatto che racconta la storia della regione."
        },
        {
            path: "img_ricordi/cesarebeccaria.png",
            story: "La statua di Cesare Beccaria, un'icona della giustizia e del diritto. Beccaria è stato un grande filosofo italiano che ha cambiato per sempre il sistema giuridico con le sue teorie."
        },
        {
            path: "img_ricordi/chiesa.png",
            story: "La chiesa di Salisburgo, un capolavoro dell'architettura religiosa barocca, che affascina i visitatori con la sua bellezza e la sua storia secolare."
        },
        {
            path: "img_ricordi/chinatown.jpeg",
            story: "Il Chinatown di Anversa, un angolo vibrante della città che fonde tradizioni cinesi con l'atmosfera cosmopolita europea. Un luogo dove la cultura si mescola con la modernità."
        },
        {
            path: "img_ricordi/corridoio.jpeg",
            story: "Nel corridoio del museo di Dresda, dove ogni angolo racconta una storia di arte, storia e cultura. Un viaggio nel passato attraverso le opere esposte."
        },
        {
            path: "img_ricordi/inciampo.png",
            story: "La pietra d'inciampo, un segno di memoria e di rispetto per le vittime della Seconda Guerra Mondiale. Un simbolo che ci invita a non dimenticare."
        },
        {
            path: "img_ricordi/kafka.jpeg",
            story: "La statua di Franz Kafka, un omaggio a uno degli scrittori più importanti del XX secolo. Kafka ha esplorato le tematiche della solitudine e dell'assurdità della vita."
        },
        {
            path: "img_ricordi/museo.JPG",
            story: "Il Museo dell'Unione Europea a Bruxelles, un luogo dove la storia della cooperazione europea prende vita. Un'esperienza che offre uno sguardo profondo sul futuro dell'Europa."
        },
        {
            path: "img_ricordi/parlamento.JPG",
            story: "Il Parlamento dell'Unione Europea, simbolo della democrazia e della cooperazione internazionale. Qui vengono prese decisioni che influenzano milioni di persone."
        },
        {
            path: "img_ricordi/passaporto.png",
            story: "Il passaporto della Lombardia, un simbolo di identità regionale e di appartenenza a una delle regioni più storiche d'Italia."
        },
        {
            path: "img_ricordi/praga.jpeg",
            story: "Il paesaggio di Praga, una città che incanta con la sua architettura gotica e la sua atmosfera senza tempo. Ogni angolo di Praga racconta una storia affascinante."
        },
        {
            path: "img_ricordi/sagrafamilia.jpeg",
            story: "La Sagrada Familia di Gaudí a Barcellona, un'opera architettonica unica che unisce arte e spiritualità. La chiesa incompleta è una delle meraviglie più visitate al mondo."
        },
        {
            path: "img_ricordi/statua.jpeg",
            story: "La statua sul ponte di Praga, un simbolo della storia e della cultura ceca. Ogni statua racconta una parte della lunga e ricca storia della città."
        },
        {
            path: "img_ricordi/stgeorge.png",
            story: "San Giorgio, il santo patrono della Catalogna, rappresentato in una delle piazze più emblematiche di Barcellona. Una figura di coraggio e di speranza."
        },
        {
            path: "img_ricordi/tibidabo.jpeg",
            story: "Il monte Tibidabo di Barcellona, che offre una vista mozzafiato sulla città. Un luogo di relax e contemplazione, dove si può godere della bellezza naturale della zona."
        },
        {
            path: "img_ricordi/waffle.jpg",
            story: "Il primo waffle di Belgio, gustato ad Anversa. Un'esperienza culinaria che racchiude la tradizione belga, con il suo sapore croccante e dolce."
        }
    ];


    const diceElement = document.getElementById('dice');
    const resultElement = document.getElementById('result');
    const randomImageElement = document.getElementById('randomImage');
    const storyTextElement = document.getElementById('storyText');
    const rollButton = document.getElementById('rollButton');

    // Inizializza il messaggio
    storyTextElement.textContent = "Lancia il dado per generare un'immagine e una storia!";
    randomImageElement.alt = "In attesa del lancio del dado...";

    // Array per tracciare gli indici già utilizzati
    let usedIndexes = [];

    rollButton.addEventListener('click', () => {
        rollButton.disabled = true;
        diceElement.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Reset
        randomImageElement.style.display = 'none';
        storyTextElement.textContent = "Lancio in corso...";
        resultElement.textContent = "";

        // Verifica se ci sono ancora indici disponibili
        if (usedIndexes.length === images.length) {
            // Se tutti gli indici sono stati utilizzati, resetta l'array
            usedIndexes = [];
        }

        // Trova un indice non utilizzato
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (usedIndexes.includes(randomIndex));

        // Aggiungi l'indice all'array degli indici usati
        usedIndexes.push(randomIndex);

        setTimeout(() => {
            const selected = images[randomIndex];
            randomImageElement.src = selected.path;
            randomImageElement.alt = "Immagine caricata dal dado";
            randomImageElement.style.display = 'block';

            storyTextElement.textContent = selected.story;
            resultElement.textContent = `Hai ottenuto: ${randomIndex + 1}`;
            rollButton.disabled = false;
        }, 600);
    });

    resetButton.addEventListener('click', () => {
        // Reset tutto
        randomImageElement.style.display = 'none';
        randomImageElement.src = '';
        storyTextElement.textContent = "Lancia il dado per generare un'immagine e una storia!";
        resultElement.textContent = '';
        rollButton.disabled = false;
        diceElement.style.transform = 'rotate(0deg)';
    });
});
