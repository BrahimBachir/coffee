import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService : CoffeesService){}
    /*@Get()
    findAll(@Res() res){ //For customizing the respons
        res.status(200).send('All coffees finded');
    }*/

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto){
        return this.coffeesService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.coffeesService.findOne(id);
    }

    @Post() //For all the body content
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        return this.coffeesService.create(createCoffeeDto);
    }
    
    /*@Post() //For some body content
    @HttpCode(HttpStatus.GONE)
    create(@Body('KeyOne') body){
        return body;
    }*/

    /*@Post() //For customizing the HTTP status code.
    @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
    }*/
    
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.coffeesService.delete(id);
    }
}
