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
