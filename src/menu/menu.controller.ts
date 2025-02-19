import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';


@Controller('menu')
export class MenuController {
constructor(private readonly menuService: MenuService) {}

    @Get()
    getAll() {
        return this.menuService.getAllMenus();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.menuService.getMenu(id);
    }

    @Post()
    create(@Body() body: { name: string; parentId?: string }) {
        return this.menuService.createMenu(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name: string }) {
        return this.menuService.updateMenu(id, body.name);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.menuService.deleteMenu(id);
    }
}
