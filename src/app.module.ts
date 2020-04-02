import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';

// entities
import { Post } from './post/post.entity';
import { User } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      entities: [Post, User],
    }),
  ],
  controllers: [AppController, UserController, PostController],
  providers: [AppService],
})
export class AppModule {}
