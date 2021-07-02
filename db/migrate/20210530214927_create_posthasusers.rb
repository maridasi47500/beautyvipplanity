class CreatePosthasusers < ActiveRecord::Migration[6.0]
  def change
    create_table :posthasusers do |t|
      t.integer :post_id
      t.integer :user_id
    end
  end
end
