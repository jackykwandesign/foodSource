import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getDishesByShopID/:id')
  getDishesByShopID(
    @Param('id') id:number
  ){
    return this.appService.getDishesByShopID(id);
  }

  @Get('/getShopDishesByDishesID/:shopID/:dishID')
  getShopDishesByDishesID(
    @Param('shopID') shopID:number,
    @Param('dishID') dishID:number
  ){
    return this.appService.getShopDishesByDishesID(shopID, dishID);
  }

  @Get('/checkUserFoodSafe/:shopID/:dishID/:userID')
  checkUserAllergiesAndReligionNotAllowByDisheID(
    @Param('shopID') shopID:number,
    @Param('dishID') dishID:number,
    @Param('userID') userID:number,
  ){
    return this.appService.checkUserFoodSafe(userID, shopID, dishID);
  }

  @Get('/foodNews')
  getLastestFoodNews(){
    return this.appService.getLastestFoodNews()
  }
  // checkUserAllergiesByDisheID
}
