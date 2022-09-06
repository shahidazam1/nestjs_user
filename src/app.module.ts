import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/Users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './typeorm/entities/Profile';

ConfigModule.forRoot();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql6.freesqldatabase.com',
      port: 3306,
      username: 'sql6517506',
      password: 'Ih2pWRA2Hj',
      database: 'sql6517506',
      logging: ['error', 'info', 'warn', 'log'],
      namingStrategy: new SnakeNamingStrategy(),
      entities: [User, Profile],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
