
## API CALL
https://www.getpostman.com/collections/416e18bb5bdb4b0405dd

### API GET food news localhost:3000/foodNews
```
[
    {
        "content_en": "Mad cow disease in USA",
        "content_ch": "美國有牛隻感染狂牛症",
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "牛肉",
                    "name_en": "beef",
                    "nutritionElement": []
                },
                "from": "USA"
            }
        ],
        "alertLevel": "HIGH"
    },
    {
        "content_en": "Asfarviridae Happened in Africa and China",
        "content_ch": "非洲豬瘟出現病毒新變種, 在中國大陸地區流行，暫時對人類無害",
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "豬肉",
                    "name_en": "pork",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "豬肉",
                    "name_en": "pork",
                    "nutritionElement": []
                },
                "from": "AFRICA"
            }
        ],
        "alertLevel": "LOW"
    }
]
```

### API @Get('/checkUserFoodSafe/:shopID/:dishID/:userID')
data return
```
  user
  shopID
  dishes,
  foundAllergies:Ingredient
  foundReligionNotAllow:Ingredient
  foundFoodNews:FoodSource
  allergySafe:boolean
  religionSafe:boolean
  foodNewsSafe:boolean
```

checkUserFoodSafe --- Prawn allergy 
localhost:3000/checkUserFoodSafe/1/2/2
```
{
    "user": {
        "id": 2,
        "allergies": [
            {
                "name_ch": "花生",
                "name_en": "peanuts",
                "nutritionElement": []
            }
        ]
    },
    "shopID": "1",
    "dishes": {
        "id": 2,
        "name_ch": "哈哈哈沙律",
        "name_en": "Prawn Salad",
        "calories": 266,
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "蝦",
                    "name_en": "prawn",
                    "nutritionElement": []
                },
                "from": "JAPAN"
            },
            {
                "ingredient": {
                    "name_ch": "牛油",
                    "name_en": "butter",
                    "nutritionElement": []
                },
                "from": "AUSTRILIA"
            },
            {
                "ingredient": {
                    "name_ch": "花生",
                    "name_en": "peanuts",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "千島醬",
                    "name_en": "Thousand Island dressing",
                    "nutritionElement": []
                },
                "from": "CHINA"
            }
        ]
    },
    "foundAllergies": [
        {
            "name_ch": "花生",
            "name_en": "peanuts",
            "nutritionElement": []
        }
    ],
    "foundReligionNotAllow": [],
    "foundFoodNews": [],
    "allergySafe": false,
    "religionSafe": true,
    "foodNewsSafe": true
}
```

checkUserFoodSafe --- Beef Rice Noodle --- Islam --- lard 
localhost:3000/checkUserFoodSafe/1/1/1
```
{
    "user": {
        "id": 1,
        "allergies": [],
        "religion": {
            "name_en": "Islam",
            "name_ch": "伊斯蘭教",
            "notAllow": [
                {
                    "name_ch": "豬肉",
                    "name_en": "pork",
                    "nutritionElement": []
                },
                {
                    "name_ch": "豬油",
                    "name_en": "lard",
                    "nutritionElement": []
                }
            ]
        }
    },
    "shopID": "1",
    "dishes": {
        "id": 1,
        "name_ch": "干炒牛河",
        "name_en": "Stir-fried Beef Rice Noodles",
        "calories": 1050,
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "蛋",
                    "name_en": "egg",
                    "nutritionElement": []
                },
                "from": "AUSTRILIA"
            },
            {
                "ingredient": {
                    "name_ch": "牛肉",
                    "name_en": "beef",
                    "nutritionElement": []
                },
                "from": "USA"
            },
            {
                "ingredient": {
                    "name_ch": "芽菜",
                    "name_en": "Sprouts",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "河粉",
                    "name_en": "Flat Rice Noodles ",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "芝麻",
                    "name_en": "sesame",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "酱油",
                    "name_en": "soy Sause",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "豬油",
                    "name_en": "lard",
                    "nutritionElement": []
                },
                "from": "AFRICA"
            }
        ]
    },
    "foundAllergies": [],
    "foundReligionNotAllow": [
        {
            "name_ch": "豬油",
            "name_en": "lard",
            "nutritionElement": []
        }
    ],
    "foundFoodNews": [
        {
            "content_en": "Mad cow disease in USA",
            "content_ch": "美國有牛隻感染狂牛症",
            "foodSource": [
                {
                    "ingredient": {
                        "name_ch": "牛肉",
                        "name_en": "beef",
                        "nutritionElement": []
                    },
                    "from": "USA"
                }
            ],
            "alertLevel": "HIGH"
        }
    ],
    "allergySafe": true,
    "religionSafe": false,
    "foodNewsSafe": false
}
```

checkUserFoodSafe --- Beef Rice Noodle --- Islam Safe 
localhost:3000/checkUserFoodSafe/2/1/1
```
{
    "user": {
        "id": 1,
        "allergies": [],
        "religion": {
            "name_en": "Islam",
            "name_ch": "伊斯蘭教",
            "notAllow": [
                {
                    "name_ch": "豬肉",
                    "name_en": "pork",
                    "nutritionElement": []
                },
                {
                    "name_ch": "豬油",
                    "name_en": "lard",
                    "nutritionElement": []
                }
            ]
        }
    },
    "shopID": "2",
    "dishes": {
        "id": 1,
        "name_ch": "干炒牛河",
        "name_en": "Stir-fried Beef Rice Noodles",
        "calories": 800,
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "牛肉",
                    "name_en": "beef",
                    "nutritionElement": []
                },
                "from": "AUSTRILIA"
            },
            {
                "ingredient": {
                    "name_ch": "芽菜",
                    "name_en": "Sprouts",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "河粉",
                    "name_en": "Flat Rice Noodles ",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "酱油",
                    "name_en": "soy Sause",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "洋蔥",
                    "name_en": "onion",
                    "nutritionElement": []
                },
                "from": "USA"
            }
        ]
    },
    "foundAllergies": [],
    "foundReligionNotAllow": [],
    "foundFoodNews": [],
    "allergySafe": true,
    "religionSafe": true,
    "foodNewsSafe": true
}
```


checkUserFoodSafe --- Beef Rice Noodle --- Mad Beef USA foodNews --- Shop1 Use Beef USA
localhost:3000/checkUserFoodSafe/1/1/1
```
{
    "user": {
        "id": 1,
        "allergies": [],
        "religion": {
            "name_en": "Islam",
            "name_ch": "伊斯蘭教",
            "notAllow": [
                {
                    "name_ch": "豬肉",
                    "name_en": "pork",
                    "nutritionElement": []
                },
                {
                    "name_ch": "豬油",
                    "name_en": "lard",
                    "nutritionElement": []
                }
            ]
        }
    },
    "shopID": "1",
    "dishes": {
        "id": 1,
        "name_ch": "干炒牛河",
        "name_en": "Stir-fried Beef Rice Noodles",
        "calories": 1050,
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "蛋",
                    "name_en": "egg",
                    "nutritionElement": []
                },
                "from": "AUSTRILIA"
            },
            {
                "ingredient": {
                    "name_ch": "牛肉",
                    "name_en": "beef",
                    "nutritionElement": []
                },
                "from": "USA"
            },
            {
                "ingredient": {
                    "name_ch": "芽菜",
                    "name_en": "Sprouts",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "河粉",
                    "name_en": "Flat Rice Noodles ",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "芝麻",
                    "name_en": "sesame",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "酱油",
                    "name_en": "soy Sause",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "豬油",
                    "name_en": "lard",
                    "nutritionElement": []
                },
                "from": "AFRICA"
            }
        ]
    },
    "foundAllergies": [],
    "foundReligionNotAllow": [
        {
            "name_ch": "豬油",
            "name_en": "lard",
            "nutritionElement": []
        }
    ],
    "foundFoodNews": [
        {
            "content_en": "Mad cow disease in USA",
            "content_ch": "美國有牛隻感染狂牛症",
            "foodSource": [
                {
                    "ingredient": {
                        "name_ch": "牛肉",
                        "name_en": "beef",
                        "nutritionElement": []
                    },
                    "from": "USA"
                }
            ],
            "alertLevel": "HIGH"
        }
    ],
    "allergySafe": true,
    "religionSafe": false,
    "foodNewsSafe": false
}
```

checkUserFoodSafe --- Beef Rice Noodle --- Mad Beef USA foodNews --- Shop1 Use Beef Austrlia
localhost:3000/checkUserFoodSafe/2/1/1
```
{
    "user": {
        "id": 1,
        "allergies": [],
        "religion": {
            "name_en": "Islam",
            "name_ch": "伊斯蘭教",
            "notAllow": [
                {
                    "name_ch": "豬肉",
                    "name_en": "pork",
                    "nutritionElement": []
                },
                {
                    "name_ch": "豬油",
                    "name_en": "lard",
                    "nutritionElement": []
                }
            ]
        }
    },
    "shopID": "2",
    "dishes": {
        "id": 1,
        "name_ch": "干炒牛河",
        "name_en": "Stir-fried Beef Rice Noodles",
        "calories": 800,
        "foodSource": [
            {
                "ingredient": {
                    "name_ch": "牛肉",
                    "name_en": "beef",
                    "nutritionElement": []
                },
                "from": "AUSTRILIA"
            },
            {
                "ingredient": {
                    "name_ch": "芽菜",
                    "name_en": "Sprouts",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "河粉",
                    "name_en": "Flat Rice Noodles ",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "酱油",
                    "name_en": "soy Sause",
                    "nutritionElement": []
                },
                "from": "CHINA"
            },
            {
                "ingredient": {
                    "name_ch": "洋蔥",
                    "name_en": "onion",
                    "nutritionElement": []
                },
                "from": "USA"
            }
        ]
    },
    "foundAllergies": [],
    "foundReligionNotAllow": [],
    "foundFoodNews": [],
    "allergySafe": true,
    "religionSafe": true,
    "foodNewsSafe": true
}
```


### test data (ingredients)
```

const egg:Ingredient = {
  name_ch:"蛋",
  name_en:"egg",
  // from:Country.USA,
  nutritionElement:[]
}
const beef:Ingredient = {
  name_ch:"牛肉",
  name_en:"beef",
  // from:Country.AUSTRILIA,
  nutritionElement:[]
}
const pork:Ingredient = {
  name_ch:"豬肉",
  name_en:"pork",
  // from:Country.USA,
  nutritionElement:[]
}
const lard:Ingredient = {
  name_ch:"豬油",
  name_en:"lard",
  // from:Country.CHINA,
  nutritionElement:[]
}
const peanuts:Ingredient = {
  name_ch:"花生",
  name_en:"peanuts",
  // from:Country.CHINA,
  nutritionElement:[]
}
const flatRiceNoodle:Ingredient = {
  name_ch:"河粉",
  name_en:"Flat Rice Noodles ",
  // from:Country.CHINA,
  nutritionElement:[]
}
const sesame:Ingredient = {
  name_ch:"芝麻",
  name_en:"sesame",
  // from:Country.CHINA,
  nutritionElement:[]
}
const soySause:Ingredient = {
  name_ch:"酱油",
  name_en:"soy Sause",
  // from:Country.CHINA,
  nutritionElement:[]
}
const sprouts:Ingredient = {
  name_ch:"芽菜",
  name_en:"Sprouts",
  // from:Country.CHINA,
  nutritionElement:[]
}
const onion:Ingredient = {
  name_ch:"洋蔥",
  name_en:"onion",
  // from:Country.CHINA,
  nutritionElement:[]
}

const prawn:Ingredient = {
  name_ch:"蝦",
  name_en:"prawn",
  // from:Country.JAPAN,
  nutritionElement:[]
}
const butter:Ingredient = {
  name_ch:"牛油",
  name_en:"butter",
  // from:Country.AUSTRILIA,
  nutritionElement:[]
}
const thousandIslandDressing:Ingredient = {
  name_ch:"千島醬",
  name_en:"Thousand Island dressing",
  // from:Country.JAPAN,
  nutritionElement:[]
}
```

### test data (dishes)
```
const stirFriedBeefRiceNoodlesA:Dishes = {
  id:1,
  name_ch:"干炒牛河",
  name_en:"Stir-fried Beef Rice Noodles",
  calories: 1050,
  foodSource:[
    {
      ingredient:egg,
      from:Country.AUSTRILIA
    },
    {
      ingredient:beef,
      from:Country.USA
    },
    {
      ingredient:sprouts,
      from:Country.CHINA
    },
    {
      ingredient:flatRiceNoodle,
      from:Country.CHINA
    },
    {
      ingredient:sesame,
      from:Country.CHINA
    },
    {
      ingredient:soySause,
      from:Country.CHINA
    },
    {
      ingredient:lard,
      from:Country.AFRICA
    },
  ],
  // religionSafe:[]
}

const stirFriedBeefRiceNoodlesB:Dishes = {
  id:1,
  name_ch:"干炒牛河",
  name_en:"Stir-fried Beef Rice Noodles",
  calories: 800,
  foodSource:[
    {
      ingredient:beef,
      from:Country.AUSTRILIA
    },
    {
      ingredient:sprouts,
      from:Country.CHINA
    },
    {
      ingredient:flatRiceNoodle,
      from:Country.CHINA
    },
    {
      ingredient:soySause,
      from:Country.CHINA
    },
    {
      ingredient:onion,
      from:Country.USA
    }
  ],
  // religionSafe:[]
}

const prawnSaladA:Dishes = {
  id:2,
  name_ch:"哈哈哈沙律",
  name_en:"Prawn Salad",
  calories: 266,
  foodSource:[
    {
      ingredient:prawn,
      from:Country.JAPAN
    },
    {
      ingredient:butter,
      from:Country.AUSTRILIA
    },
    {
      ingredient:peanuts,
      from:Country.CHINA
    },
    {
      ingredient:thousandIslandDressing,
      from:Country.CHINA
    },
  ],
  // religionSafe:[]
}
```

### test data (shop)
```
const shopA:Shop = {
  id:1,
  name_ch:"好好味餐廳",
  name_en:"Yummy Restaurant",
  dishes:[
    stirFriedBeefRiceNoodlesA,
    prawnSaladA
  ]
}

const shopB:Shop = {
  id:2,
  name_ch:"好營養冰室",
  name_en:"Good Cafe",
  dishes:[
    stirFriedBeefRiceNoodlesB
  ]
}
```

### test data (user, one Islam && one peanuts allergies)
```
const userA:User = {
  id:1,
  allergies:[],
  religion:Islam
}

const userB:User = {
  id:2,
  allergies:[
    peanuts
  ],
  religion:undefined
}
```

### test data (food news)
```
const foodNewUSABeef:FoodNews = {
  content_en:"Mad cow disease in USA",
  content_ch:"美國有牛隻感染狂牛症",
  foodSource:[
    {
      ingredient:beef,
      from:Country.USA
    }
  ],
  alertLevel:AlertLevel.HIGH
}

const foodNewAfricaPork:FoodNews = {
  content_en:"Asfarviridae Happened in Africa and China",
  content_ch:"非洲豬瘟出現病毒新變種, 在中國大陸地區流行，暫時對人類無害",
  foodSource:[
    {
      ingredient:pork,
      from:Country.CHINA
    },
    {
      ingredient:pork,
      from:Country.AFRICA
    }
  ],
  alertLevel:AlertLevel.LOW
}
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

