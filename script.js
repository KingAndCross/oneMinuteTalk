const temaButton = document.querySelector(".tema-btn");
const relationButton = document.querySelector(".rel-tema-btn");
const topicElement = document.querySelectorAll(".topic");
const relationElements = document.querySelectorAll(".element");

const topics = [
  "Redes sociales: tiktok                                                     ",
  "Música pop: ahora y antes",
  "El auge de los e-sports",
  "Las tendencias de moda actuales",
  "El auge de la cultura del fitness",
  "El poder de los memes .",
  "El fenómeno de los influencers.",
  "La cultura del emprendimiento.",
  "Series de televisión adictivas",
  "La gravedad",
  "La formación de un arcoíris",
  "Los imanes",
  "La fotosíntesis",
  "La evaporación",
  "Eclipses",
  "El ciclo del agua",
  "Las estaciones del año",
  "El cuidado de las plantas",
  "La fuerza centrífuga",
  "La condensación",
  "Los submarinos",
  "Preparar la comida del día.",
  "Combinar la ropa.",
  "Funcionamiento de una lámpara.",
  "El misterio del cielo azul.",
  "El secreto del vuelo de los pájaros.",
  "Importancia de lavarse las manos.",
  "El funcionamiento del control remoto.",
  "El ciclo del sol durante el día.",
  "La deliciosa creación del helado.",
  "El misterio de la respiración de los peces.",
  "La ciencia detrás de las burbujas de jabón.",
  "El poder del sol para derretir el hielo.",
  "El viaje de la música a través de los altavoces.",
  "El fascinante proceso de crecimiento del cabello.",
];

const relation = [
  "Taylor Swift",
  "Justin Bieber",
  "Dua Lipa",
  "The Weeknd",
  "Harry Styles",
  "Cardi B",
  "Rihanna",
  "Bad Bunny",
  "Pablo Chill-E",
  "Paloma Mami",
  "Tomasa del Real",
  "Gianluca",
  "Kidd Tetoon",
  "Polimá Westcoast",
  "Princesa Alba",
  "DrefQuila",
  "Young Cister",
  "Fortnite",
  "Minecraft",
  "Valorant",
  "Call of Duty",
  "Apex Legends",
  "FIFA 21",
  "Una maleta",
  "Un teléfono",
  "Una computadora",
  "Una lámpara",
  "Una silla",
  "Una mesa",
  "Un reloj",
  "Unas llaves",
  "Un bolígrafo",
  "Un cuaderno",
  "Una taza",
  "Una cuchara",
  "Un coche",
  "Una bicicleta",
  "Un televisor",
  "Una cámara",
  "Una botella",
  "Una guitarra",
  "Un paraguas",
  "Una escalera",
  "Un libro",
  "Un lápiz",
  "Una mochila",
  "Un reloj",
  "Un teléfono",
  "Una silla",
  "Unas gafas",
  "Una botella",
  "Unas llaves",
  "Un paraguas",
  "Un periódico",
  "Un cepillo de dientes",
  "Una taza",
  "Unos zapatos",
  "Una bolsa",
  "Un cuaderno",
  "Unos auriculares",
  "Una caja",
  "Unos lentes de sol",
  "Una linterna",
  "Playstation 2",
  "La Umce",
  "Tom Hanks",
  "Leonardo DiCaprio",
  "Meryl Streep",
  "Robert Downey Jr.",
  "Angelina Jolie",
  "Denzel Washington",
  "Jennifer Lawrence",
  "Brad Pitt",
  "Sandra Bullock",
  "Johnny Depp",
];

const randomTopic = () => {
  return relation[Math.floor(Math.random() * relation.length)];
};

temaButton.addEventListener("click", () => {
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  topicElement.forEach((topic) => {
    topic.textContent = randomTopic;
  });
});

relationButton.addEventListener("click", () => {
  relationElements.forEach((topic) => {
    topic.textContent = randomTopic();
  });
});
