class CreatePrestationInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :prestation_infos do |t|
      t.string :price
      t.string :length
    end
  end
end
