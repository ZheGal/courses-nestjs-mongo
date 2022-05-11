import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
    
    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {
        return dto;
    }
    
    @Get(':id')
    async get(@Param('id') id: string) {
        return id;
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return id;
    }
    
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: ProductModel,
    ) {
        return id;
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDto) {
        
    }
}
