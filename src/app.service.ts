import { Injectable, NotFoundException } from '@nestjs/common';

const enum Country{
  CHINA="CHINA",
  AFRICA="AFRICA",
  AUSTRILIA="AUSTRILIA",
  KOREA="KOREA",
  USA="USA",
  UK="UNITED_KINGDOM",
  JAPAN="JAPAN",
}

export interface Ingredient{
  name_ch:string
  name_en:string
  // from:Country
  nutritionElement:string[]
}

export interface FoodSource {
  ingredient:Ingredient,
  from:Country
}
export interface Dishes {
  id:number;
  name_ch:string
  name_en:string
  calories: number
  foodSource:FoodSource[]
  // religionSafe:Religion[]
}

export interface Shop{
  id:number
  name_ch:string
  name_en:string
  dishes:Dishes[]
}

export interface Religion{
  name_ch:string
  name_en:string
  notAllow:Ingredient[]
}


export interface User{
  id:number
  allergies:Ingredient[]
  religion:Religion|undefined
}

const enum AlertLevel {
  LOW="LOW",
  MEDIUM="MEDIUM",
  HIGH="HIGH"
}
export interface FoodNews{
  content_ch:string
  content_en:string
  foodSource:FoodSource[]
  alertLevel:AlertLevel
}



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
// butter
// Sprouts
// sesame
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

const shopes:Shop[] = [
  shopA,
  shopB
]

const Islam:Religion = {
  name_en:"Islam",
  name_ch:"伊斯蘭教",
  notAllow:[
    pork,
    lard,
  ]
}
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

const users:User[] = [
  userA,
  userB
]

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

const foodNews:FoodNews[] = [
  foodNewUSABeef,
  foodNewAfricaPork,
]

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDishesByShopID(id:number){
    id = Number(id)
    let shop = shopes.find(d=>d.id === id)
    if(shop)return shop
    throw new NotFoundException()
  }

  getShopDishesByDishesID(shopID:number,dishID:number){
    shopID = Number(shopID)
    dishID = Number(dishID)
    const shop = this.getDishesByShopID(shopID)
    let dish = shop.dishes.find(d=>d.id === dishID)
    if(dish)return dish
    throw new NotFoundException()
  }

  getLastestFoodNews(){
    return foodNews
  }

  checkUserFoodSafe(userID:number, shopID:number, dishID:number){
    const user = this.getUserByUserID(userID)
    const dishes = this.getShopDishesByDishesID(shopID, dishID)
    const foundAllergies = this.checkAllergies(dishes.foodSource, user.allergies)
    const foundReligionNotAllow = this.checkReligionSafe(dishes.foodSource, user.religion)
    const foundFoodNews = this.checkFoodNewsSafe(dishes.foodSource, foodNews)
    let allergySafe = false
    let religionSafe = false
    let foodNewsSafe = false
    if(foundAllergies.length === 0){
      allergySafe = true
    }
    if(foundReligionNotAllow.length === 0){
      religionSafe = true
    }
    if(foundFoodNews.length === 0){
      foodNewsSafe = true
    }
    return {
      user,
      shopID,
      dishes,
      foundAllergies,
      foundReligionNotAllow,
      foundFoodNews,
      allergySafe,
      religionSafe,
      foodNewsSafe
    }
  }



  // utils
  getUserByUserID(userID:number){
    userID = Number(userID)
    let user = users.find(u=>u.id === userID)
    if(user)return user
    throw new NotFoundException()
  }
  checkAllergies(foodSource:FoodSource[], foodIngredients:Ingredient[]){
    const found:Ingredient[] = []
    foodSource.map(f=>{
      if(foodIngredients.includes(f.ingredient)){
        found.push(f.ingredient)
      }
    })
    return found
  }
  checkReligionSafe(foodSource:FoodSource[], religion:Religion|undefined){
    const found:Ingredient[] = []
    if(religion === undefined)return found

    foodSource.map(f=>{
      if(religion.notAllow.includes(f.ingredient)){
        found.push(f.ingredient)
      }
    })
    return found
  }


  checkFoodNewsSafe(foodSource:FoodSource[], foodNews:FoodNews[]){
    const found:FoodNews[] = []
    foodNews.map(fn=>{
      // console.log("fn", fn, fn.foodSource)
      foodSource.map(fs=>{

        // console.log("fs", fs)
        const problemFound = fn.foodSource.filter(e=>{
          // e.ingredient === fs.ingredient && e.from === fs.from
          return e.ingredient === fs.ingredient && e.from === fs.from
        })
        // console.log("problemFound", problemFound)
        if(problemFound.length > 0){
          found.push(fn)
        }
        // if(fn.foodSource.includes(fs)){
        //   found.push(fn)
        // }
      })
    })
    console.log("found", found)
    // const problemFoodSource :FoodSource[] = []
    // foodNews.map(fn=>{
    //   fn.foodSource.map(fs=>{
    //     if(problemFoodSource.filter(e=>(e.ingredient === fs.ingredient && e.from === fs.from)).length === 0){
    //       problemFoodSource.push(fs)
    //     }
    //   })
    //   // if(problemFoodSource.filter(e=>e.ingredient === fn.foodSource))
    // })
    // console.log("problemFoodSource", problemFoodSource)
    // foodSource.map(f=>{
    //   // foodNews.map(fn=>{
    //   //   let problemFoodSource = fn.foodSource
    //   //   // if(fn.foodSource.includes(f)){
    //   //   //   found.push(f)
    //   //   // }
    //   // })
    // })
    return found
  }
}
