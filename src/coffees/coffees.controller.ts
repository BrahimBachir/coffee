import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService : CoffeesService){}
    /*@Get()
    findAll(@Res() res){ //For customizing the respons
        res.status(200).send('All coffees finded');
    }*/

    @Get()
    findAll(@Query() paginationQuery){
        const {limit, offset} = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
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
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.coffeesService.delete(id);
    }
}
