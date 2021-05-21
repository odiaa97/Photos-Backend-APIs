import { Express } from 'express'
import { Body, Controller, Get, Post, Render, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { v2 } from 'cloudinary';
import { PhotosService } from '../photos/photos.service';
import { Photo } from './photos.model';
import { Model } from 'mongoose';

@Controller('photos')
export class PhotosController {
    constructor(private photosService: PhotosService){}
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        this.photosService.AddPhoto(file);
        console.log("Uploaded succesfully")
        
    }

    @Get()
    getPhotos()
    {
        return this.photosService.getPhotos();
    }

}
