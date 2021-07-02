class CreateAlbumhaveimages < ActiveRecord::Migration[6.0]
  def change
    create_table :albumhaveimages do |t|
      t.integer :image_id
      t.integer :album_id
    end
  end
end
