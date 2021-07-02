class PrestationInfosController < ApplicationController
  before_action :set_prestation_info, only: %i[ show edit update destroy ]

  # GET /prestation_infos or /prestation_infos.json
  def index
    @baraongle = BarAOngle.joins(:prestationtype).select('prestations.*, prestationtypes.name as prestationtypename').distinct.group_by{|x|x.prestationtypename}
    @epilation = Epilation.joins(:prestationtype).select('prestations.*, prestationtypes.name as prestationtypename').distinct.group_by{|x|x.prestationtypename}
  end

  # GET /prestation_infos/1 or /prestation_infos/1.json
  def show
  end

  # GET /prestation_infos/new
  def new
    @prestation_info = Prestation.new
  end

  # GET /prestation_infos/1/edit
  def edit
  end

  # POST /prestation_infos or /prestation_infos.json
  def create
    @prestation_info = Prestation.new(prestation_info_params)

    respond_to do |format|
      if @prestation_info.save
        format.html { redirect_to new_prestation_path, notice: "Prestation info was successfully created." }
        format.json { render :show, status: :created, location: @prestation_info }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @prestation_info.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /prestation_infos/1 or /prestation_infos/1.json
  def update
    respond_to do |format|
      if @prestation_info.update(prestation_info_params)
        format.html { redirect_to new_prestation_path, notice: "Prestation info was successfully updated." }
        format.json { render :show, status: :ok, location: @prestation_info }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @prestation_info.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prestation_infos/1 or /prestation_infos/1.json
  def destroy
    @prestation_info.destroy
    respond_to do |format|
      format.html { redirect_to prestation_infos_url, notice: "Prestation info was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prestation_info
      @prestation_info = Prestation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def prestation_info_params
      params.require(:prestation).permit(:length,:name, :price,:prestationtype_id,:prestationtypecolumn,:prestations_attributes=>{})
    end
end
