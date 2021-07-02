class CreatePhotosprestations < ActiveRecord::Migration[6.0]
  def change
    create_table :photosprestations do |t|
      t.integer :image_id
      t.integer :prestation_id
    end
  end
end
