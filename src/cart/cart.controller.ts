import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findUserCart() {
    return this.cartService.findUserCart();
  }

  @Post('items')
  addItem(@Body() item: any) {
    return this.cartService.addItem(item);
  }

  @Delete('items/:id')
  removeItem(@Param('id') id: string) {
    return this.cartService.removeItem(+id);
  }
}