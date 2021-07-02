class CreatePagehavealbums < ActiveRecord::Migration[6.0]
  def change
    create_table :pagehavealbums do |t|
      t.integer :page_id
      t.integer :album_id
    end
  end
end
