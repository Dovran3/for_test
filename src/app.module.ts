import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { User } from './user/user.entity';
import { Task } from './task/task.entity';

config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Task],
      synchronize: Boolean(process.env.SYNCHRONIZE)
    }),
    UserModule,
    TaskModule
  ],
})
export class AppModule {}
