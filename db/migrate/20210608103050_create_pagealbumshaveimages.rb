class CreatePagealbumshaveimages < ActiveRecord::Migration[6.0]
  def change
    create_table :pagealbumshaveimages do |t|
      t.integer :pagealbum_id
      t.integer :image_id
    end
  end
end
