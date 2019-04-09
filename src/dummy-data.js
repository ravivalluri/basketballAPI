import slug from "slug";

const players = [{
    name: "Stephen Curry",
    position: "Point Guard",
    teamId: "bulls",
    number: 30,
    avatar: "https://avatars.io/twitter/stephencurry",
    rpg: 3,
    spg: 4,
    apg: 8,
    ppg: 12
  },
  {
    name: "Dwyane Wade",
    position: "Shooting Guard",
    teamId: "bulls",
    number: 3,
    avatar: "https://avatars.io/instagram/DwyaneWade",
    rpg: 5,
    spg: 2,
    apg: 4,
    ppg: 15
  },
  {
    name: "LeBron James",
    position: "Shooting Forward",
    teamId: "bulls",
    number: 23,
    avatar: "https://avatars.io/instagram/lbjcenter",
    rpg: 6,
    spg: 2,
    apg: 3,
    ppg: 13
  },
  {
    name: "Anthony Davis",
    position: "Power Forward",
    teamId: "bulls",
    number: 23,
    avatar: "https://avatars.io/instagram/antdavis23",
    rpg: 8,
    spg: 1,
    apg: 2,
    ppg: 10
  },
  {
    name: "Al Horford",
    position: "Center",
    teamId: "bulls",
    number: 42,
    avatar: "https://avatars.io/facebook/AlHorford",
    rpg: 10,
    spg: 1,
    apg: 1,
    ppg: 10
  },
  {
    name: "Chris Paul",
    position: "Point Guard",
    teamId: "foxes",
    number: 3,
    avatar: "https://avatars.io/twitter/ChrisPaul ",
    rpg: 3,
    spg: 4,
    apg: 8,
    ppg: 12
  },
  {
    name: "Klay Thompson",
    position: "Shooting Guard",
    teamId: "foxes",
    number: 11,
    avatar: "https://avatars.io/instagram/KlayThompson",
    rpg: 5,
    spg: 2,
    apg: 4,
    ppg: 15
  },
  {
    name: "Kevin Durant",
    position: "Shooting Forward",
    teamId: "foxes",
    number: 35,
    avatar: "https://avatars.io/facebook/KevinDurant",
    rpg: 6,
    spg: 2,
    apg: 3,
    ppg: 13
  },
  {
    name: "Blake Griffin",
    position: "Power Forward",
    teamId: "foxes",
    number: 23,
    avatar: "https://avatars.io/instagram/blakegrifiin23",
    rpg: 8,
    spg: 1,
    apg: 2,
    ppg: 10
  },
  {
    name: "Dwight Howard",
    position: "Center",
    teamId: "foxes",
    number: 21,
    avatar: "https://avatars.io/twitter/DwightHoward",
    rpg: 10,
    spg: 1,
    apg: 1,
    ppg: 10
  },
  {
    name: "Russell Westbrook",
    position: "Point Guard",
    teamId: "hedgehogs",
    number: 0,
    avatar: "https://avatars.io/facebook/RussellWestbrook",
    rpg: 3,
    spg: 4,
    apg: 8,
    ppg: 12
  },
  {
    name: "James Harden",
    position: "Shooting Guard",
    teamId: "hedgehogs",
    number: 13,
    avatar: "https://avatars.io/instagram/JamesHarden",
    rpg: 5,
    spg: 2,
    apg: 4,
    ppg: 15
  },
  {
    name: "Kawhi Leonard",
    position: "Shooting Forward",
    teamId: "hedgehogs",
    number: 2,
    avatar: "https://avatars.io/instagram/Kawhinot",
    rpg: 6,
    spg: 2,
    apg: 3,
    ppg: 13
  },
  {
    name: "LaMarcus Aldridge",
    position: "Power Forward",
    teamId: "hedgehogs",
    number: 12,
    avatar: "https://avatars.io/instagram/aldridge_121",
    rpg: 8,
    spg: 1,
    apg: 2,
    ppg: 10
  },
  {
    name: "DeMarcus Cousins",
    position: "Center",
    teamId: "hedgehogs",
    number: 0,
    avatar: "https://avatars.io/twitter/DeMarcusCousins",
    rpg: 10,
    spg: 1,
    apg: 1,
    ppg: 10
  },
  {
    name: "Kyrie Irving",
    position: "Point Guard",
    teamId: "lemurs",
    number: 11,
    avatar: "https://avatars.io/facebook/KyrieIrving",
    rpg: 3,
    spg: 4,
    apg: 8,
    ppg: 12
  },
  {
    name: "Victor Oladipo",
    position: "Shooting Guard",
    teamId: "lemurs",
    number: 4,
    avatar: "https://avatars.io/instagram/VictorOladipo",
    rpg: 5,
    spg: 2,
    apg: 4,
    ppg: 15
  },
  {
    name: "Paul George",
    position: "Shooting Forward",
    teamId: "lemurs",
    number: 13,
    avatar: "https://avatars.io/instagram/ygtrece",
    rpg: 6,
    spg: 2,
    apg: 3,
    ppg: 13
  },
  {
    name: "Paul Millsap",
    position: "Power Forward",
    teamId: "lemurs",
    number: 4,
    avatar: "https://avatars.io/facebook/PaulMillsap4",
    rpg: 8,
    spg: 1,
    apg: 2,
    ppg: 10
  },
  {
    name: "Andre Drummond",
    position: "Center",
    teamId: "lemurs",
    number: 0,
    avatar: "https://avatars.io/twitter/AndreDrummond",
    rpg: 10,
    spg: 1,
    apg: 1,
    ppg: 10
  },
  {
    name: "John Wall",
    position: "Point Guard",
    teamId: "koalas",
    number: 2,
    avatar: "https://avatars.io/twitter/JohnWall",
    rpg: 3,
    spg: 4,
    apg: 8,
    ppg: 12
  },
  {
    name: "DeMar DeRozan",
    position: "Shooting Guard",
    teamId: "koalas",
    number: 10,
    avatar: "https://avatars.io/facebook/DeMarDeRozan",
    rpg: 5,
    spg: 2,
    apg: 4,
    ppg: 15
  },
  {
    name: "Giannis Antetokounmpo",
    position: "Shooting Forward",
    teamId: "koalas",
    number: 34,
    avatar: "https://avatars.io/instagram/Giannis_an34",
    rpg: 6,
    spg: 2,
    apg: 3,
    ppg: 13
  },
  {
    name: "Kristaps Porziņģis",
    position: "Power Forward",
    teamId: "koalas",
    number: 6,
    avatar: "https://avatars.io/instagram/kporzee",
    rpg: 8,
    spg: 1,
    apg: 2,
    ppg: 10
  },
  {
    name: "Steven Adams",
    position: "Center",
    teamId: "koalas",
    number: 12,
    avatar: "https://avatars.io/twitter/realStevenAdams",
    rpg: 10,
    spg: 1,
    apg: 1,
    ppg: 10
  }
];

const teams = {
  bulls: {
    id: "bulls",
    name: "Bulls",
    wins: 80,
    losses: 2,
    established: 1998,
    coach: "Brad Stevens",
    manager: "Erik Spoelstra",
    championships: [1998, 1999, 2001, 2004, 2005, 2008, 2011, 2013, 2014, 2015],
    players: players.slice(0, 5)
  },
  foxes: {
    id: "foxes",
    name: "Foxes",
    wins: 75,
    losses: 7,
    established: 2000,
    coach: "Gregg Popovich",
    manager: "Brett Brown",
    championships: [2000, 2002, 2009],
    players: players.slice(5, 10)
  },
  hedgehogs: {
    id: "hedgehogs",
    name: "Hedgehogs",
    wins: 72,
    losses: 10,
    established: 2002,
    coach: "Mike D'Antoni",
    manager: "Dwane Casey",
    championships: [2003, 2012],
    players: players.slice(10, 15)
  },
  lemurs: {
    id: "lemurs",
    name: "Lemurs",
    wins: 60,
    losses: 22,
    established: 2004,
    coach: "Steve Kerr",
    manager: "Doc Rivers",
    championships: [2007, 2009],
    players: players.slice(15, 20)
  },
  koalas: {
    id: "koalas",
    name: "Koalas",
    wins: 55,
    losses: 27,
    established: 2005,
    coach: "Rick Carlisle",
    manager: "Quin Snyder",
    championships: [2006, 2009, 2010],
    players: players.slice(20, 25)
  }
};

const articleText = `Quae phasellus? Ullamcorper nunc ad eu tempus nostra, etiam massa, perferendis suscipit interdum, voluptates, tempora leo, nec, dignissim, laudantium diam tortor provident, eum erat, optio lorem rem class volutpat hac, eros per vivamus quisque, mauris incididunt! Quam ornare! Nam posuere metus? Laudantium esse provident nibh iure dolor modi! Voluptatibus porttitor magni nisl? Voluptatem mi, pariatur et nascetur! Hymenaeos maecenas viverra! Dolorum distinctio suspendisse, imperdiet! Aliquip quisquam quod, lacus beatae auctor. Ipsa fringilla! Minim molestie quo? Adipiscing, dui, fermentum excepteur luctus, conubia facilisi voluptatibus unde alias est possimus quibusdam, totam, quos? Recusandae egestas corporis, similique potenti facilisi? Reprehenderit massa voluptatum, asperiores. Eius libero sociosqu cras mollis. Maxime penatibus nascetur praesent eius explicabo, molestie? Deserunt inventore asperiores incididunt, venenatis recusandae potenti doloribus assumenda odit, tempora voluptatem dignissimos suscipit ridiculus, dicta quibusdam consequatur mauris, perspiciatis repellendus aute pede sapien. Blandit fringilla quisque, faucibus! Accusantium quis. Magna eros facere sollicitudin ornare sapiente placeat malesuada tempus hac? Provident inventore dignissim habitant. Per aliquet veritatis. Quasi mattis repellendus dapibus mi! Suscipit labore vulputate quae impedit hymenaeos! Sodales pede optio perferendis? Architecto iusto nullam condimentum ac expedita! Cursus. Natoque eu minim, ut ullam venenatis, varius dignissimos per! Scelerisque. Platea ut nec convallis mauris. Optio laudantium tristique cursus. Quibusdam, vero quod culpa magnam magna consectetur maiores quisque blandit sunt ab viverra commodo hic aliquam morbi cumque! Officia netus blandit laboriosam tortor ex lectus, fames habitant similique, ex convallis, blandit neque. Quidem dignissim ridiculus, ipsa, vero eum non class nostrum labore? Class dis nesciunt, pellentesque iure facilisi, error placerat aliquet semper? Commodo ultrices? Id habitant congue ratione nascetur phasellus itaque pariatur dignissim, similique pariatur, fugiat! Tincidunt dolore ullamco quo, beatae deserunt nesciunt posuere deserunt scelerisque proin, dignissimos, nesciunt enim! Ut, inventore quibusdam dicta? Habitasse cupidatat quaerat porttitor neque optio! Gravida? Minima! Fugit? Eius deserunt ullamcorper? Iure eos, tincidunt? Exercitation. Fugiat reiciendis quos mus, fugiat, consequat? Aenean beatae aliquam lectus tempor habitant quibusdam ipsam aliquet venenatis. Sapien ullam venenatis cupiditate nobis cursus ratione litora? Mollitia odit tenetur scelerisque, excepteur facilisi? Porro maecenas molestiae per, quasi, litora, tincidunt numquam mattis laborum! Lacus urna ligula. Natus litora. Viverra odit exercitation ad convallis sociis minima. Tincidunt ullamco! Sagittis qui, inventore ratione fuga eaque, beatae eu integer, maiores, eius similique sodales interdum mus distinctio vitae labore est earum sequi, dictum? Condimentum veniam! Atque minim! Voluptatibus donec dolorem temporibus. Metus ducimus feugiat tempore! Optio aliqua lacinia morbi pulvinar mollis laboriosam fames, ante eveniet harum, facere.`;

const articleInfo = [{
    title: "close out big game",
    date: new Date(2018, 0, 1)
  },
  {
    title: "fall into late slump",
    date: new Date(2017, 11, 29)
  },
  {
    title: "lose key player",
    date: new Date(2017, 11, 15)
  },
  {
    title: "heating up in October",
    date: new Date(2017, 11, 11)
  },
  {
    title: "continue to get worse",
    date: new Date(2017, 11, 3)
  },
  {
    title: "lose. Again.",
    date: new Date(2017, 10, 19)
  },
  {
    title: "get free agent for cheap",
    date: new Date(2017, 10, 11)
  },
  {
    title: "off to great start",
    date: new Date(2017, 9, 12)
  },
  {
    title: "lose another to injury",
    date: new Date(2017, 9, 5)
  },
  {
    title: "worst case scenario",
    date: new Date(2017, 8, 4)
  },
  {
    title: "defy all odds",
    date: new Date(2017, 7, 29)
  },
  {
    title: "are young but determined",
    date: new Date(2017, 6, 11)
  },
  {
    title: "keep the streak alive",
    date: new Date(2017, 5, 14)
  },
  {
    title: "have eye on the prize",
    date: new Date(2017, 6, 6)
  },
  {
    title: "are all washed up",
    date: new Date(2017, 5, 4)
  }
];

function generateTitle(teamId, index) {
  return (
    teamId[0].toUpperCase() + teamId.slice(1) + " " + articleInfo[index].title
  );
}

export function generateArticle(teamId, articleId) {
  const index = articleInfo
    .map((info, index) => slug(generateTitle(teamId, index)))
    .indexOf(articleId);

  const title = generateTitle(teamId, index);

  return {
    id: slug(title),
    body: articleText,
    title,
    date: articleInfo[index].date
  };
}

export function generateTeamsArticles(teamId) {
  return articleInfo.map(({
    title,
    date
  }, index) => {
    const updatedTitle = generateTitle(teamId, index);
    return {
      date,
      title: updatedTitle,
      id: slug(updatedTitle)
    };
  });
}

export {
  teams,
  players
};