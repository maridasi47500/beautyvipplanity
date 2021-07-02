class CreatePrestations < ActiveRecord::Migration[6.0]
  def change
    create_table :prestations do |t|
      t.string :name
      t.string :price
      t.string :length
    end
  end
end
