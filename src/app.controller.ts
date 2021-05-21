import { Controller, Get, Post, Render, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { PhotosService } from './photos/photos.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private PhotosService: PhotosService) {}

  @Get()
  @Render('index.hbs')
  root() {
  }
}
