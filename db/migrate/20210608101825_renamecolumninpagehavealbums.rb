class Renamecolumninpagehavealbums < ActiveRecord::Migration[6.0]
  def change
    rename_column :pagehavealbums, :album_id, :pagealbum_id
  end
end
