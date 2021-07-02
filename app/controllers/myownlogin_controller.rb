class MyownloginController < ApplicationController
  protect_from_forgery except: [:new,:create]
  include Devise::Controllers::Helpers
  layout "login"
  def new
  end
  def create
    @user=User.find_by_email(user_params[:email]) rescue nil
    p user_params
    p @user
    p current_user
    p user_signed_in?
      if @user && @user.valid_password?(user_params[:password])
          sign_in(@user)

         redirect_to root_path, notice: "Logged in." 
      else

        redirect_to login_path, notice: "Wrong login and password. Try again." 
      end
  end
  private
  def user_params
    params.require(:user).permit(:email,:password)
  end
end
