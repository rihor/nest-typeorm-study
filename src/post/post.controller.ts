import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

import { Post as PostEntity } from './post.entity';

@Controller('post')
export class PostController {
  @Get()
  async getAllPosts(): Promise<PostEntity[]> {
    const posts = await PostEntity.find();

    return posts;
  }

  @Get(':id')
  async getSpecificPost() {
    return 'all posts';
  }

  @Post()
  async createPost() {
    return 'all posts';
  }

  @Put(':id')
  async editPost() {
    return 'all posts';
  }

  @Delete(':id')
  async deletePost() {
    return 'all posts';
  }
}
