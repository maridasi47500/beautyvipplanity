class CreateUserpostshaveimages < ActiveRecord::Migration[6.0]
  def change
    create_table :userpostshaveimages do |t|
      t.integer :userpost_id
      t.integer :image_id
    end
  end
end
