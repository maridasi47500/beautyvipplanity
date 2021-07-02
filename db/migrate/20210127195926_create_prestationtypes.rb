class CreatePrestationtypes < ActiveRecord::Migration[6.0]
  def change
    create_table :prestationtypes do |t|
      t.string :name
    end
  end
end
