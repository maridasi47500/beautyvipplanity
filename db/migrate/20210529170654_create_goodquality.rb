class CreateGoodquality < ActiveRecord::Migration[6.0]
  def change
    create_table :goodqualities do |t|
      t.string :name
    end
  end
end
