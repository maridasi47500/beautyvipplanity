class CreateUsershavealbums < ActiveRecord::Migration[6.0]
  def change
    create_table :usershavealbums do |t|
      t.integer :user_id
      t.integer :album_id
    end
  end
end
