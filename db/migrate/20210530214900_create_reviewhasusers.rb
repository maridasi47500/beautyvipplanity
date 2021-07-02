class CreateReviewhasusers < ActiveRecord::Migration[6.0]
  def change
    create_table :reviewhasusers do |t|
      t.integer :review_id
      t.integer :user_id
    end
  end
end
