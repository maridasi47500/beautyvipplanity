class ReviewsController < ApplicationController
  protect_from_forgery except: [:createcomment,:updatecomments,:mycomment]
  before_action :set_review, only: %i[ mycomment updatecomment editcomment createcomment  show edit update destroy ]
layout 'posts'
  def editcomment
    session[:reviewcommentids] ||= {}
    session[:reviewcommentids][@review.id.to_s] = params[:commentid]
    @commentids = session[:reviewcommentids][@review.id.to_s]
    p "commentids", @commentids
        @comment = Reviewcomment.find(params[:commentid])
        render :lastcomment, layout: false

  end
  def enhance
        @review = Review.new
        render layout: false
  end
  def recommend
        @review = Review.new
        render layout: false
  end
  def createcomment
    @review.update(review_params)
    @comment = @review.comments.last

    render plain: ""
  end
  def updatecomment
    @review.update(review_params)
            @comment = Reviewcomment.find(params[:commentid])

    session[:reviewcommentids] ||= {}

    session[:reviewcommentids][@review.id.to_s] = nil
    @commentids = session[:reviewcommentids][@review.id.to_s]

        render :lastcomment, layout: false
  end
  def mycomment
            @comment = Reviewcomment.find(params[:commentid])

    session[:reviewcommentids] ||= {}

    session[:reviewcommentids][@review.id.to_s] = nil
    @commentids = session[:reviewcommentids][@review.id.to_s]

        render :lastcomment, layout: false
  end
  def lastcomment
    @comment = Reviewcomment.last
    @review = @comment.review
    session[:reviewcommentids] ||= {}
    session[:reviewcommentids][@review.id.to_s] ||= ""
    @commentids = session[:reviewcommentids][@review.id.to_s]

    render layout: false
    
  end

  # GET /reviews or /reviews.json
  def index
      session[:reviewcommentids] = {}

      @mycommentids = session[:reviewcommentids]

    @reviews = Review.all.last(10).reverse
  end

  # GET /reviews/1 or /reviews/1.json
  def show
  end

  # GET /reviews/new
  def new
    @review = Review.new
  end

  # GET /reviews/1/edit
  def edit
  end

  # POST /reviews or /reviews.json
  def create
    @review = Review.new(review_params)
    respond_to do |format|
      if @review.save
        format.html { redirect_to reviews_url, notice: "Review was successfully created." }
        format.json { render :show, status: :created, location: @review }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reviews/1 or /reviews/1.json
  def update
    respond_to do |format|
      if @review.update(review_params)
        format.html { redirect_to reviews_url, notice: "Review was successfully updated." }
        format.json { render :show, status: :ok, location: @review }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reviews/1 or /reviews/1.json
  def destroy
    @review.destroy
    respond_to do |format|
      format.html { redirect_to reviews_url, notice: "Review was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.fetch(:review, {}).permit(:content,:user_ids,:positive,:comments_attributes=>{},:amenity_ids=>[])
    end
end
