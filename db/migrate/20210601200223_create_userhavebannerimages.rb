class CreateUserhavebannerimages < ActiveRecord::Migration[6.0]
  def change
    create_table :userhavebannerimages do |t|
      t.integer :user_id
      t.integer :image_id
    end
  end
end
