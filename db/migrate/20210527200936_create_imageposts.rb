class CreateImageposts < ActiveRecord::Migration[6.0]
  def change
    create_table :imageposts do |t|
      t.integer :image_id
      t.integer :post_id
    end
  end
end
