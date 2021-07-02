class ImagesController < ApplicationController
  before_action :set_image, only: %i[ show edit update destroy myphotonow adddesc sendimage ]
protect_from_forgery except: [:myphoto,:dlmyphoto,:myphotonow,:sendimage]
  layout "posts"
  # GET /images or /images.json
  def index
    @images = Image.all
    @collections = []
  end
  def myphoto
    @image= Image.find(params[:id])
    render :photo, layout: false, locals: {image: @image}
  end
  def updatephoto
    @image =Image.find(params[:id])
    @user=User.find(params[:userid])
    view = params[:view]
    
    @cancel = params[:cancel] && params[:cancel] == 'true'
      @image.update(image_params)
      p @image.errors
      p @image.errors
      @user.update(image_id: @image.id)
    if !@cancel

      render layout: false, template: "mysignup/#{view}"
    else
      render layout: false, template: "myuserpage/#{view}"
    end
  end

  def dlmyphoto
    @image= Image.find(params[:id])
    render :dlphoto, layout: false, locals: {image: @image}
  end
  # GET /images/1 or /images/1.json
  def show
    render layout: "photo"

  end

  # GET /images/new
  def new
    @image = Image.new
  end

  # GET /images/1/edit
  def edit
  end
  def adddesc
    render locals: {image: @image}, layout: false
    
  end

  # POST /images or /images.json
  def create
    @image = Image.new(image_params)
    
    respond_to do |format|
      if @image.save
        format.html { redirect_to @image, notice: "Image was successfully created." }
        format.json { render :show, status: :created, location: @image }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /images/1 or /images/1.json
  def update
    respond_to do |format|
      if @image.update(image_params)
        format.html { redirect_to @image, notice: "Image was successfully updated." }
        format.json { render :show, status: :ok, location: @image }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end
  def myphotonow
    p image_params
    respond_to do |format|
      if @image.update(image_params)
        p @image.myname
        format.html { render inline: @image.name }
      else
        format.html { render inline: @image.name }
      end
    end
  end
  def sendimage
    respond_to do |format|
      if params[:cancel] || @image.update(image_params)
        p @image.myname
        format.html { render :sendimage, locals: {image: @image}, layout: false }
      else
        format.html { render :adddesc, locals: {image: @image}, layout: false }
      end
    end
  end

  # DELETE /images/1 or /images/1.json
  def destroy
    @image.destroy
    respond_to do |format|
      format.html { redirect_to images_url, notice: "Image was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def image_params
      params.require(:image).permit(:myname, :type,:name, :description)
    end
end
