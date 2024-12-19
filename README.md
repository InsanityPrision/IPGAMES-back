# IPGAMES-Back

## Endpoints

### Get list of games

| Method |  Url   | Body |
| :----- | :----: | ---: |
| GET    | /games |      |

Response:

```json
{
  "games": [
    {
      "_id": "674c54d35afaeddac083e999",
      "name": "Counter strike",
      "price": 0,
      "isFree": true,
      "rate": 4,
      "description": "Counter-Strike: Global Offensive (CS:GO) is a team-based first-person shooter developed by Valve and Hidden Path Entertainment. Released in 2012, it features competitive gameplay where teams of Terrorists and Counter-Terrorists complete objectives, such as planting/defusing bombs or rescuing hostages. Known for its tactical depth, skill-based mechanics, and esports scene, CS:GO remains one of the most popular multiplayer games worldwide.",
      "developer": "Valve",
      "date": "2024-12-03T11:41:45.145Z",
      "genders": ["RPG", "Shooter"],
      "imageUrl": "/counter.webp",
      "imageAlt": "counter"
    },
    {
      "_id": "674c54d35afaeddac083e99a",
      "name": "Katana Zero",
      "price": 14.79,
      "isFree": false,
      "rate": 5,
      "description": "Katana ZERO is a 2D action-platformer developed by Askiisoft and released in 2019. Players control a samurai assassin using time manipulation, stealth, and precise combat to eliminate enemies. The game features a gripping neo-noir story, fast-paced gameplay, and a unique rewind mechanic for retrying failed attempts.",
      "developer": "Devolver Digital",
      "date": "2024-12-03T11:41:45.145Z",
      "genders": ["Adventure", "Action"],
      "imageUrl": "/katana.webp",
      "imageAlt": "katana"
    }
  ]
}
```

### Create a new game

| Method |  Url   | Body |
| :----- | :----: | ---: |
| POST   | /games |      |

Body:

```json
{
  "name": "Outer Wilds",
  "price": 22.99,
  "isFree": false,
  "rate": 5,
  "description": "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
  "developer": "Mobius Digital",
  "date": "2020-5-18",
  "genders": ["Horror", "Adventure"],
  "imageUrl": "/outerwilds.webp",
  "imageAlt": "Outer Wilds cover"
}
```

Response:

```json
{
  "game": {
    "name": "Outer Wilds",
    "price": 22.99,
    "isFree": false,
    "rate": 5,
    "description": "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
    "developer": "Mobius Digital",
    "date": "2020-05-17T22:00:00.000Z",
    "genders": ["Horror", "Adventure"],
    "imageUrl": "/outerwilds.webp",
    "imageAlt": "Outer Wilds cover",
    "_id": "675f07592fb7e8fe1568b38f"
  }
}
```

### Delete a game

| Method |     Url      | Body |
| :----- | :----------: | ---: |
| POST   | /games/:\_id |      |

Response:

```json
{
  "game": {
    "name": "Outer Wilds",
    "price": 22.99,
    "isFree": false,
    "rate": 5,
    "description": "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
    "developer": "Mobius Digital",
    "date": "2020-05-17T22:00:00.000Z",
    "genders": ["Horror", "Adventure"],
    "imageUrl": "/outerwilds.webp",
    "imageAlt": "Outer Wilds cover",
    "_id": "675f07592fb7e8fe1568b38f"
  }
}
```

### Get one game

| Method |     Url      | Body |
| :----- | :----------: | ---: |
| POST   | /games/:\_id |      |

Response:

```json
{
  "game": {
    "name": "Outer Wilds",
    "price": 22.99,
    "isFree": false,
    "rate": 5,
    "description": "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
    "developer": "Mobius Digital",
    "date": "2020-05-17T22:00:00.000Z",
    "genders": ["Horror", "Adventure"],
    "imageUrl": "/outerwilds.webp",
    "imageAlt": "Outer Wilds cover",
    "_id": "675f07592fb7e8fe1568b38f"
  }
}
```
