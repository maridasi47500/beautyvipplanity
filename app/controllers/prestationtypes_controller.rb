class PrestationtypesController < ApplicationController
  before_action :set_prestationtype, only: %i[ show edit update destroy ]

  # GET /prestationtypes or /prestationtypes.json
  def index
    @prestationtypes = Prestationtype.all
  end

  # GET /prestationtypes/1 or /prestationtypes/1.json
  def show
  end

  # GET /prestationtypes/new
  def new
    @prestationtype = Prestationtype.new
  end

  # GET /prestationtypes/1/edit
  def edit
  end

  # POST /prestationtypes or /prestationtypes.json
  def create
    @prestationtype = Prestationtype.new(prestationtype_params)

    respond_to do |format|
      if @prestationtype.save
        format.html { redirect_to @prestationtype, notice: "Prestationtype was successfully created." }
        format.json { render :show, status: :created, location: @prestationtype }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @prestationtype.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /prestationtypes/1 or /prestationtypes/1.json
  def update
    respond_to do |format|
      if @prestationtype.update(prestationtype_params)
        format.html { redirect_to @prestationtype, notice: "Prestationtype was successfully updated." }
        format.json { render :show, status: :ok, location: @prestationtype }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @prestationtype.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prestationtypes/1 or /prestationtypes/1.json
  def destroy
    @prestationtype.destroy
    respond_to do |format|
      format.html { redirect_to prestationtypes_url, notice: "Prestationtype was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prestationtype
      @prestationtype = Prestationtype.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def prestationtype_params
      params.require(:prestationtype).permit(:name)
    end
end
