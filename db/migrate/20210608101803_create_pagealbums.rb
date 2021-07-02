class CreatePagealbums < ActiveRecord::Migration[6.0]
  def change
    create_table :pagealbums do |t|
      t.string :title

      t.timestamps
    end
  end
end
