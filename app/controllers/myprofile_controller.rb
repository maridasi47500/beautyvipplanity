class MyprofileController < ApplicationController
  layout "userpage"
  protect_from_forgery except: [:createcomment,:updatecomments,:mycomment]
  before_action :set_userpost, only: %i[ mycomment updatecomment editcomment createcomment show edit update destroy ]
  def about_contact_and_basic_info
    #a propos de vous 
    #afficher infos
    #editer infos
  end
  def addbio
    
  end
  def urlphoto
    @user = User.where(username: params[:username])[0]
    render plain: "#{@user.imagepath}", layout: false
  end
  def index
      session[:userpostcommentids] = {}

      @mycommentids = session[:userpostcommentids]

    @posts = current_user.posts.all.last(10).reverse
    @posts.each do |post|
      post.comments.new
    end
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_userpost
      @post = Userpost.find(params[:postid])
    end

    # Only allow a list of trusted parameters through.
    def userpost_params
      params.require(:userpost).permit(:content,:user_ids,:images_attributes=>{},:comments_attributes=>{})
    end
end
