import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MenuService {
constructor(private prisma: PrismaService) {}

    async getAllMenus() {
      // Fetch all menu items
      const menus = await this.prisma.menu.findMany();

      // Convert flat list to hierarchical structure
      const buildHierarchy = (parentId: string | null, depth = 0) => {
          return menus
              .filter(menu => menu.parentId === parentId)
              .map(menu => ({
                  ...menu,
                  depth,
                  children: buildHierarchy(menu.id, depth + 1), // Recursively build children
              }));
      };

      return buildHierarchy(null); // Start with root menus
  }


      async getMenu(id: string) {
        return this.prisma.menu.findUnique({ where: { id } });
      }

      async createMenu(data: { name: string; parentId?: string | null }) {
        return this.prisma.menu.create({
            data: {
                name: data.name,
                parentId: data.parentId ?? null,
                depth: 0,
            },
        });
    }



      async updateMenu(id: string, name: string) {
        return this.prisma.menu.update({ where: { id }, data: { name } });
      }

      async deleteMenu(id: string) {
    const menu = await this.prisma.menu.findUnique({ where: { id } });

    console.log('Menu found:', menu);

    if (!menu) {
        throw new NotFoundException(`Menu with id: ${id} not found`);
    }

    await this.prisma.menu.updateMany({
        where: { parentId: id },
        data: { parentId: null },
    });

    return this.prisma.menu.delete({ where: { id } });
}



}
