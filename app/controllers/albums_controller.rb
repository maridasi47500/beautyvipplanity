class AlbumsController < ApplicationController
  before_action :set_album, only: %i[ show edit update destroy ]
protect_from_forgery except: [:dlpicture]
  layout 'album'
  # GET /albums or /albums.json
  def index
    @albums = Album.all.joins(:userhavingalbums)
  end

  # GET /albums/1 or /albums/1.json
  def show
      render :show, layout: 'userpage'

  end

  # GET /albums/new
  def new
    @album = Album.new
          @images=[]

  end

  # GET /albums/1/edit
  def edit
        @myalbum = Album.find(params[:id])

    if current_user.album_ids.include?(params[:id])
      redirect_to root_path 
    else
      render :edit
    end
  end

  # POST /albums or /albums.json
  def create
    @album = Album.new(album_params)
        @images=album_params[:images_attributes].values.map {|x| Image.new(x)} rescue []

    respond_to do |format|
      if @album.save
        current_user.albums << @album
        format.html { redirect_to my_album_path(username: current_user.username, id: @album.id), notice: "Album was successfully created." }
        format.json { render :show, status: :created, location: @album }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @album.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /albums/1 or /albums/1.json
  def update
        @images=album_params[:images_attributes].values.map {|x| Image.new(x)} rescue []
        @myalbum = Album.find(params[:id])

    respond_to do |format|
      if @myalbum && @myalbum.errors && @myalbum.errors.full_messages.length > 0
        @album=@myalbum
          format.html { render :edit, status: :unprocessable_entity, notice: "Add pictures." }
          format.json { render json: @album.errors, status: :unprocessable_entity }
      elsif @album.update(album_params)
        format.html { redirect_to my_album_path(username: current_user.username, id: @album.id), notice: "Album was successfully updated." }
        format.json { render :show, status: :ok, location: @album }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @album.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /albums/1 or /albums/1.json
  def destroy
    @album.destroy
    respond_to do |format|
      format.html { redirect_to albums_url, notice: "Album was successfully destroyed." }
      format.json { head :no_content }
    end
  end
  def dlpicture
    @album = Album.new(album_params)
    @newalbum=Album.new
    @images=@album.images
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album
      @album = Album.find(params[:id]) rescue Album.new
      @images=[]
    
    end

    # Only allow a list of trusted parameters through.
    def album_params
      params.require(:album).permit(:title, :images_attributes, :usedate,:images=>{},:images_attributes=>{},:images=>[])
    rescue ActionController::ParameterMissing
      @myalbum.errors.add(:base, "Add some pictures.")
    
    end
end
