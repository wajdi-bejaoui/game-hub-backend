// seed.js
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);



async function seedDB() {
  try {
    await client.connect();
    const database = client.db('GameHub');
    const collection = database.collection('platforms');

    // Remove all existing documents
    await collection.deleteMany({});
    // Insert static data
    await collection.insertMany(platformData);

    const collection2 = database.collection('games');

    // Remove all existing documents
    await collection2.deleteMany({});
    // Insert static data
    await collection2.insertMany(gameData);

    const collection3 = database.collection('genres');

    // Remove all existing documents
    await collection3.deleteMany({});
    // Insert static data
    await collection3.insertMany(GenreData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDB();

const platformData = [
    {
        id : 1,
        name : "PC",
        slug : "pc"
      },
      {
        id : 2,
        name : "PlayStation",
        slug : "playstation"
      },
      {
        id : 3,
        name : "Xbox",
        slug : "xbox"
      },
      {
        id : 3,
        name : "Nintendo Switch",
        slug : "nintendo"
      }
  // Add more static data here
];

const gameData = [
    
    {
        id: 1,
        name: "Elden Ring",
        metacritic: 60,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/w844TWsyvV7jNksWB6ma9J-600-80.jpg.webp",
        genre_slug: "adventure"
    },
    {
        id: 2,
        name: "The Witcher 3 Wild Hunt",
        metacritic: 95,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://c4.wallpaperflare.com/wallpaper/13/623/644/the-witcher-the-witcher-3-wild-hunt-geralt-of-rivia-wallpaper-preview.jpg",
        genre_slug: "rpg"
    },
    {
        id: 3,
        name: "Grand Theft Auto V",
        metacritic: 98,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://variety.com/wp-content/uploads/2018/08/grand-theft-auto-5.jpg?w=600&h=350&crop=1",
        genre_slug: "action"
    },
    {
        id: 4,
        name: "Resident Evil 2",
        metacritic: 92,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' },
            { id: 4, name: 'Switch', slug: 'switch' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/A9faYGKfj6grQx8SwEQxUg-600-80.jpg.webp",
        genre_slug: "action"
    },
    {
        id: 5,
        name: "Doom Eternal",
        metacritic: 63,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/TsB6Fo23LbvtrCLnNKTnGf-600-80.jpg.webp",
        genre_slug: "rpg"
    },
    {
        id: 6,
        name: "Tekken 8",
        metacritic: 90,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://wallpaperaccess.com/full/13002184.jpg",
        genre_slug: "fighting"
    },
    {
        id: 7,
        name: "Rise of the Tomb Raider",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/Rh8e8sYHWDKECx2xyuavxh-600-80.jpg.webp",
        genre_slug: "horror"
    },
    {
        id: 8,
        name: "Gears 5",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/Pq2YaFwVNSjNTJNJYJXphF-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 9,
        name: "Super Mario Odyssey",
        metacritic: 70,
        parent_platforms: [
            { id: 4, name: 'Nintendo Switch', slug: 'nintendo' },
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/nqL3QkuS3QXUs2PWRiYesg-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 10,
        name: "Star Wars Jedi: Fallen Order",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/MEfshtqmFtCUg5V8fnBVmd-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 11,
        name: "Horizon Forbidden West",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/vrY4AJN7EngqnzbgfxUzRA-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 12,
        name: "Hades",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' },
            { id: 4, name: 'Nintendo Switch', slug: 'nintendo' }
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/gxowyz94o7Pa56fshWsuEe-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 13,
        name: "Marvel's Guardians of the Galaxy",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 3, name: 'Xbox', slug: 'xbox' },
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/93D3QdffyPYDxU4aFiq9Bg-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 14,
        name: "Marvel's Spider-Man 2",
        metacritic: 70,
        parent_platforms: [
            { id: 2, name: 'PlayStation', slug: 'playstation' },
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/pcVLMyPYZ5ca4ZoDZJyrB8-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 15,
        name: "God of War",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
        ],
        background_image: "https://cdn.mos.cms.futurecdn.net/TREBxMFhV3qbRqnuyNaXFj-600-80.jpg.webp",
        genre_slug: "shooter"
    },
    {
        id: 16,
        name: "Vampire: The Masquerade - Bloodlines 2",
        metacritic: 92,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://assets-prd.ignimgs.com/2023/10/31/bloodlines2-phyre-keyart-1698768010178.png?crop=16%3A9&width=888",
        genre_slug: "rpg"
    },
    {
        id: 17,
        name: "V Rising",
        metacritic: 83,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://wallpaperaccess.com/full/3942479.jpg",
        genre_slug_slug: "action"
    },
    {
        id: 18,
        name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
        metacritic: 70,
        parent_platforms: [
            { id: 1, name: 'PC', slug: 'pc' },
            { id: 2, name: 'PlayStation', slug: 'playstation' },
            { id: 3, name: 'Xbox', slug: 'xbox' }
        ],
        background_image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/stalker-2-key-art.jpg?q=50&fit=crop&w=600&h=350&dpr=1.5",
        genre_slug: "shooter"
    },
];

const GenreData = [
    {
        // "id": 1,
        "name": "Action",
        "slug": "action"
    },
    {
        // "id": 2,
        "name": "Indie",
        "slug": "indie"
    },
    {
        // "id": 3,
        "name": "Adventure",
        "slug": "adventure"
    },
    {
        // "id": 4,
        "name": "RPG",
        "slug": "rpg"
    },
    {
        // "id": 5,
        "name": "Strategy",
        "slug": "strategy"
    },
    {
        // "id": 6,
        "name": "Shooter",
        "slug": "shooter"
    },
    {
        // "id": 7,
        "name": "Casual",
        "slug": "casual"
    },
    {
        // "id": 8,
        "name": "Simulation",
        "slug": "simulation"
    },
    {
        // "id": 9,
        "name": "Puzzle",
        "slug": "puzzle"
    },
    {
        // "id": 10,
        "name": "Platformer",
        "slug": "platformer"
    },
    {
        // "id": 11,
        "name": "Arcade",
        "slug": "arcade"
    },
    {
        // "id": 12,
        "name": "Sports",
        "slug": "sports"
    },
    {
        // "id": 13,
        "name": "Racing",
        "slug": "racing"
    },
    {
        // "id": 14,
        "name": "Multiplayer",
        "slug": "multiplayer"
    },
    {
        // "id": 15,
        "name": "Fighting",
        "slug": "fighting"
    },
    {
        // "id": 16,
        "name": "Board Games",
        "slug": "board-games"
    }
]