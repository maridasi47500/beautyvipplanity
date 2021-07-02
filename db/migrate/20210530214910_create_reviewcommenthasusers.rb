class CreateReviewcommenthasusers < ActiveRecord::Migration[6.0]
  def change
    create_table :reviewcommenthasusers do |t|
      t.integer :reviewcomment_id
      t.integer :user_id
    end
  end
end
