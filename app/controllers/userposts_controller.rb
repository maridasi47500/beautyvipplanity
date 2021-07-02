class UserpostsController < ApplicationController
  protect_from_forgery except: [:createcomment,:updatecomment,:mycomment]
  before_action :set_userpost, only: %i[ mycomment updatecomment editcomment createcomment show edit update destroy ]
  layout 'posts'
  # GET /userposts or /userposts.json
  def editcomment
    session[:userpostcommentids] ||= {}
    session[:userpostcommentids][@post.id.to_s] = params[:commentid]
    @commentids = session[:userpostcommentids][@post.id.to_s]
    p "commentids", @commentids
        @comment = Userpostcomment.find(params[:commentid])
        render :lastcomment, layout: false

  end
  def createcomment
    @post.update(userpost_params)
    p @post.errors
    @comment = @post.comments.last
    @comment.errors

    render plain: ""
  end
  
  def updatecomment
    @post.update(userpost_params)
    p @post.errors
            @comment = Userpostcomment.find(params[:commentid])
            p @comment.errors

    session[:userpostcommentids] ||= {}

    session[:userpostcommentids][@post.id.to_s] = nil
    @commentids = session[:userpostcommentids][@post.id.to_s]

        render :lastcomment, layout: false
  end
  def mycomment
            @comment = Userpostcomment.find(params[:commentid])
            p @comment.errors
    p @post.errors        
    session[:userpostcommentids] ||= {}

    session[:userpostcommentids][@post.id.to_s] = nil
    @commentids = session[:userpostcommentids][@post.id.to_s]

        render :lastcomment, layout: false
  end
  def lastcomment
    @comment = Userpostcomment.last
    @post = @comment.post
    p @comment.errors
    session[:userpostcommentids] ||= {}
    session[:userpostcommentids][@post.id.to_s] ||= ""
    @commentids = session[:userpostcommentids][@post.id.to_s]

    render layout: false
    
  end


  def index
    @posts = Userpost.all
  end

  # GET /userposts/1 or /userposts/1.json
  def show
  end

  # GET /userposts/new
  def new
    @post = Userpost.new
      if @post && @post.images.length == 0
        @post.images.new
      end

    if params[:mypost]
      render :new, layout: false
    else
      render :new
    end
  end

  # GET /userposts/1/edit
  def edit
    render layout: false

  end

  # POST /userposts or /userposts.json
  def create
    @post = Userpost.new(userpost_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to me_url, notice: "Userpost was successfully created." }
        format.json { render :show, status: :created, location: @post }
      else
        p @post.errors
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /userposts/1 or /userposts/1.json
  def update
    respond_to do |format|
      if @post.update(userpost_params)
        format.html { redirect_to me_url, notice: "Userpost was successfully updated." }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /userposts/1 or /userposts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to me_url, notice: "Userpost was successfully destroyed." }
      format.json { head :no_content }
    end
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_userpost
      p session[:userpostcommentids]
      @post = Userpost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def userpost_params
      params.require(:userpost).permit(:content,:user_id,:user_ids,:comments_attributes=>{},:images_attributes=>{})
    end
end
