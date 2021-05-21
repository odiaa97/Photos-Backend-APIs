import { BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Photo } from './photos.model';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
@Injectable()
export class PhotosService {
    constructor(@InjectModel('Photo') private readonly photoModel: Model<Photo>,
    private cloudinaryService: CloudinaryService){}

    AddPhoto(@UploadedFile() file: Express.Multer.File)
    {
        this.uploadImageToCloudinary(file).then(response => {
            const newPhoto = new this.photoModel({"photoURL": response.secure_url})
            newPhoto.save();
        });   
    }

    async uploadImageToCloudinary(@UploadedFile() file) {
        return await this.cloudinaryService.uploadImage(file).catch(() => {
          throw new BadRequestException('Invalid file type.');
        });
    }

     async getPhotos(){
        const photos =  await this.photoModel.find().exec();
        return photos
    }
}
