interface Movie {
  title: string;
  year: number;
  director: string;
  poster: string;
  description: string;
}

const movies: Movie[] = [
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3VT-Ynisr-nRV7R65rC8iZ4jyJKgLHU7wvROHYTnc1X7zg_4i",
    description: "A thief who steals corporate secrets by entering the subconscious minds of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception."
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTViAjqYaPH8rSNheAqd11PhVY9p7Ty7BrlSzmXfk5rBD3w8q3m",
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfRUoN4j1RPbvG3KD83muoy56f3Up6S_r01okJYrZQ650N-LAYZoIsGfczJdCGlRZMac&usqp=CAU",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPl8nOiQO7xcK7uC-LVrTT4cQTAU1eECiQf50_kWxZGtyUtZq_",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoUo0lPtAJiO0RyEb_C44usrfMq4VhNN_L8zk_wtd8QQuZzSh",
    description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4jfQQt_0vCA4XSwGiWkffC32Tv2oajdWhaYHHVYylYGJ3v17Q",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppDgk99BKVA4TJtWc1FN4-HUkdWrFNfMm1-M0nQ01sIOcbTZu",
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuxYKBhyPQq4e_cbYRDfZRjWkUx2GIKlUpUkHiuVeLg2GhN0D",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito."
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    title: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSU0SP40gBSnIxxWMpN4-OYUXDRKsOFZX6L5dNv0srZlwKiAlvy",
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLp5u6K-3JbpjHWojj0amV3Bcui5_0VedgnrKoNgLO2Uti1oTz",
    description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader."
  },
  {
    title: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRJH8xMbcPS3B6WoHjsjwghwn4seBH0VPxxKEBtUEBj8QS4S8x",
    description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
  },
  {
    title: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgZqWs8at0E7djB-Rgntwg_fzuZwWl96llZQl6QkHIDHggZSsf",
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
  },
  {
    title: "Inglourious Basterds",
    year: 2009,
    director: "Quentin Tarantino",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvl1IAwSys6SpV0QzocNFln0PQSwod5gBsdJRX5Tj98vwyFxal",
    description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
  },
  {
    title: "The Avengers",
    year: 2012,
    director: "Joss Whedon",
    poster: "https://www.movienewsletters.net/photos/067625R1.jpg",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  {
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn62uboyqipVxLOSlT4kLb-H99r_Q3Hs_912Ar9peLgCB6ln6a",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    title: "The Lion King",
    year: 1994,
    director: "Roger Allers, Rob Minkoff",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuhgBlPlz9H3Y8hIyOVL0hMALI-t512zwqZZRdMJ4lw9q_NfMx",
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  }
];

export default movies;