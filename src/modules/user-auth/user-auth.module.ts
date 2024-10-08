import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserAuthController } from './user-auth.controller';

@Module({
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserAuthModule {


  constructor(){
    console.log(process.env.TEST || 5);
    
  }

}
