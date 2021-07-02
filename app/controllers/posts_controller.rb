class PostsController < ApplicationController
  protect_from_forgery except: [:createcomment,:updatecomments,:mycomment]

  before_action :set_post, only: %i[ mycomment updatecomment editcomment createcomment show edit update destroy ]
  before_action :set_image, only: %i[ new edit ]
  layout "posts"
  # GET /posts or /posts.json
  def index
      session[:commentids] = {}

      @mycommentids = session[:commentids]

    @posts = Post.all.last(10).reverse
    @posts.each do |post|
      post.comments.new
    end
  end
  def editcomment
    session[:commentids] ||= {}
    session[:commentids][@post.id.to_s] = params[:commentid]
    @commentids = session[:commentids][@post.id.to_s]
    p "commentids", @commentids
        @comment = Comment.find(params[:commentid])
        render :lastcomment, layout: false

  end
  def createcomment
    @post.update(post_params)
    @comment = @post.comments.last

    render plain: ""
  end
  def updatecomment
    @post.update(post_params)
            @comment = Comment.find(params[:commentid])

    session[:commentids] ||= {}

    session[:commentids][@post.id.to_s] = nil
    @commentids = session[:commentids][@post.id.to_s]

        render :lastcomment, layout: false
  end
  def mycomment
            @comment = Comment.find(params[:commentid])

    session[:commentids] ||= {}

    session[:commentids][@post.id.to_s] = nil
    @commentids = session[:commentids][@post.id.to_s]

        render :lastcomment, layout: false
  end
  # GET /posts/1 or /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @post = Post.new
      if @post && @post.images.length == 0
        @post.images.new
      end

    if params[:mypost]
      render :new, layout: false
    else
      render :new
    end
  end

  # GET /posts/1/edit
  def edit
      if @post && @post.images.length == 0
        @post.images.new
      end

    if params[:mypost]
      render :edit, layout: false
    else
      render :edit
    end

  end

  # POST /posts or /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: "Post was successfully created." }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end
  def lastcomment
    @comment = Comment.last
    @post = @comment.post
    session[:commentids] ||= {}
    session[:commentids][@post.id.to_s] ||= ""
    @commentids = session[:commentids][@post.id.to_s]

    render layout: false
    
  end
  
  # PATCH/PUT /posts/1 or /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to posts_path, notice: "Post was successfully updated." }
        format.json { render :index, status: :ok, location: @post }
      else
        format.html { render :index, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end
    def set_image
      if @post && @post.images.length == 0
        @post.images.new
      end
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:content,:user_ids,:images_attributes=>{},:comments_attributes=>{})
    end
end
