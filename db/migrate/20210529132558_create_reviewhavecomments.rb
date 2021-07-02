class CreateReviewhavecomments < ActiveRecord::Migration[6.0]
  def change
    create_table :reviewhavecomments do |t|
      t.integer :reviewcomment_id
      t.integer :post_id
    end
  end
end
