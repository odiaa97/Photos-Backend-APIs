import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { PhotosModule } from './photos/photos.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { PhotosController } from './photos/photos.controller';
import { PhotosService } from './photos/photos.service';
import { Photo } from './photos/photos.model';
// RiMddg0Kqym74PzB
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://userdb:RiMddg0Kqym74PzB@cluster0.xpxez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  PhotosModule, 
  CloudinaryModule],
  controllers: [AppController, PhotosController],
  providers: [AppService],
})
export class AppModule {}
