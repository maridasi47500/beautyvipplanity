class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :bannerimage, :bannerimage_id
    rename_column :users, :image, :image_id
  end
end
