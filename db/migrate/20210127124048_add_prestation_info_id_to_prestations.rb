class AddPrestationInfoIdToPrestations < ActiveRecord::Migration[6.0]
  def change
    add_column :prestations, :prestation_info_id, :integer
  end
end
