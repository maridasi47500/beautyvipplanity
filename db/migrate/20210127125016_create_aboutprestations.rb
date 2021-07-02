class CreateAboutprestations < ActiveRecord::Migration[6.0]
  def change
    create_table :aboutprestations do |t|
      t.integer :prestation_id
      t.integer :prestation_info_id
    end
  end
end
