import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
        return 'All coffees finded';
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `The coffe with the ID = ${id} was founded.`;
    }

    @Post()
    create(@Body('KeyOne') body){
        return body;
    }
}
