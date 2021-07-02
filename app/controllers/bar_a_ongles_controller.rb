class BarAOnglesController < ApplicationController
  before_action :set_bar_a_ongle, only: %i[ show edit update destroy ]

  # GET /bar_a_ongles or /bar_a_ongles.json
  def index
    @bar_a_ongles = BarAOngle.all
  end

  # GET /bar_a_ongles/1 or /bar_a_ongles/1.json
  def show
  end

  # GET /bar_a_ongles/new
  def new
    @bar_a_ongle = BarAOngle.new
  end

  # GET /bar_a_ongles/1/edit
  def edit
  end

  # POST /bar_a_ongles or /bar_a_ongles.json
  def create
    @bar_a_ongle = BarAOngle.new(bar_a_ongle_params)

    respond_to do |format|
      if @bar_a_ongle.save
        format.html { redirect_to @bar_a_ongle, notice: "Bar a ongle was successfully created." }
        format.json { render :show, status: :created, location: @bar_a_ongle }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @bar_a_ongle.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bar_a_ongles/1 or /bar_a_ongles/1.json
  def update
    respond_to do |format|
      if @bar_a_ongle.update(bar_a_ongle_params)
        format.html { redirect_to @bar_a_ongle, notice: "Bar a ongle was successfully updated." }
        format.json { render :show, status: :ok, location: @bar_a_ongle }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @bar_a_ongle.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bar_a_ongles/1 or /bar_a_ongles/1.json
  def destroy
    @bar_a_ongle.destroy
    respond_to do |format|
      format.html { redirect_to bar_a_ongles_url, notice: "Bar a ongle was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bar_a_ongle
      @bar_a_ongle = BarAOngle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bar_a_ongle_params
      params.require(:bar_a_ongle).permit(:name, :prestation_info_id, :prestationtype_id, :prestationtypecolumn, :price, :length)
    end
end
