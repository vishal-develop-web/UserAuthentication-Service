import { Controller, Get, Patch, Post, Put, Delete } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';

@Controller('user-auth')
export class UserAuthController {
  constructor(private readonly _userAuthService: UserAuthService) {}

  /**
   * @route POST /user-auth/login
   * @description Logs in the user and returns a JWT token
   * @returns {object} JWT token or authentication response
   */
  @Post('login')
  login() {}

  /**
   * @route POST /user-auth/register
   * @description Registers a new user
   * @returns {object} User registration confirmation or error
   */
  @Post('register')
  register() {}

  /**
   * @route POST /user-auth/logout
   * @description Logs out the user, invalidating their session or JWT token
   * @returns {object} Logout confirmation
   */
  @Get('logout')
  logout() {
    console.log(process.env.TEST , process.env);
    
  }

  /**
   * @route POST /user-auth/refresh-token
   * @description Refreshes the authentication token for the user
   * @returns {object} New JWT token
   */
  @Post('refresh-token')
  refreshToken() {}

  /**
   * @route POST /user-auth/reset-password
   * @description Initiates a password reset for the user
   * @returns {object} Password reset instructions or confirmation
   */
  @Post('reset-password')
  resetPassword() {}

  /**
   * @route POST /user-auth/forget-password
   * @description Sends a password reset link to the user's email
   * @returns {object} Confirmation email sent or error message
   */
  @Post('forget-password')
  forgetPassword() {}

  /**
   * @route PATCH /user-auth/change-password
   * @description Allows the user to change their password
   * @returns {object} Password change confirmation or error
   */
  @Patch('change-password')
  changePassword() {}

  /**
   * @route GET /user-auth/profile
   * @description Fetches the profile information of the logged-in user
   * @returns {object} User profile information
   */
  @Get('profile')
  getUserProfile() {}

  /**
   * @route DELETE /user-auth/delete-account
   * @description Deletes the user's account permanently
   * @returns {object} Account deletion confirmation
   */
  @Delete('delete-account')
  deleteUserAccount() {}

  /**
   * @route PUT /user-auth/update-profile
   * @description Updates the user's profile information
   * @returns {object} Updated profile information or error
   */
  @Put('update-profile')
  updateProfile() {}
}
