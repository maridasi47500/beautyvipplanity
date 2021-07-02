class CreateCommenthasusers < ActiveRecord::Migration[6.0]
  def change
    create_table :commenthasusers do |t|
      t.integer :comment_id
      t.integer :user_id
    end
  end
end
