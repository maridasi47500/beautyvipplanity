class CreatePostcomments < ActiveRecord::Migration[6.0]
  def change
    create_table :postcomments do |t|
      t.integer :post_id
      t.integer :comment_id
    end
  end
end
