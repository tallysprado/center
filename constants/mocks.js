const categories = [
  {
    id: 'cm',
    name: 'Calças Masculinaw  e',
    tags: ['Noite', 'Esporte fino', 'Jeans'],
    count: 54,
    image: require('../assets/icons/plants.png')
  },
  {
    id: 'bf',
    name: 'Blusa Feminina',
    tags: ['Verão', 'Banho', 'Praia', 'Piscina'],
    count: 87,
    image: require('../assets/icons/seeds.png')
  },
  {
    id: 'sf',
    name: 'Short Feminino',
    tags: ['Praia', 'Verão', 'Praia'],
    count: 68,
    image: require('../assets/icons/flowers.png')
  },
  {
    id: 'bone',
    name: 'Boné Masculino',
    tags: ['Addidas', 'Oakley', 'Nike', 'Puma'],
    count: 17,
    image: require('../assets/icons/sprayers.png')
  },
  {
    id: 'banho',
    name: 'Biquini Feminino',
    tags: ['Verão', 'Fio Dental', 'No Cu'],
    count: 47,
    image: require('../assets/icons/pots.png')
  },
  {
    id: 'fertilizers',
    name: 'fertilizers',
    tags: ['products', 'shop'],
    count: 47,
    image: require('../assets/icons/fertilizers.png')
  },
];

const products = [
  {
    id: 1, 
    name: '16 Best Plants That Thrive In Your Bedroom',
    description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ]
  }
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};


const data = [
  
  {
      key: 1,
      img: require("../assets/images/plus1.png"),
      like: false,
  },
  {
      key: 2,
      img: require("../assets/images/plus2.png"),
      like: false,
  },
  {
      key: 3,
      img: require("../assets/images/masc1.png"),
      like: false,
  },
  {
      key: 4,
      img: require("../assets/images/masc2.png"),
      like: false,

  },
  {
      key: 5,
      img: require("../assets/images/masc1.png"),
      like: false,

  },
  {
      key: 6,
      img: require("../assets/images/masc1.png"),
      like: false,

  },
  {
      key: 7,
      img: require("../assets/images/masc1.png"),
      like: false,

  },
  {
      key: 8,
      img: require("../assets/images/masc1.png"),
      like: false,

  },
  {
      key: 9,
      img: require("../assets/images/plus2.png"),
      like: false,

  },
  {
      key: 10,
      img: require("../assets/images/plus2.png"),
      like: false,

  },
  {
      key: 11,
      img: require("../assets/images/plus2.png"),
      like: false,

  },
  {
      key: 12,
      img: require("../assets/images/plus1.png"),
      like: false,
  },
  {
      key: 13,
      img: require("../assets/images/plus1.png"),
      like: false,
  },
  {
      key: 14,
      img: require("../assets/images/plus1.png"),
      like: true,
  }
  
];

export {
  categories,
  explore,
  products,
  profile,
  data
}