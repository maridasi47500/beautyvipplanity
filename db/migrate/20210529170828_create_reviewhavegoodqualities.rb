class CreateReviewhavegoodqualities < ActiveRecord::Migration[6.0]
  def change
    create_table :reviewhavegoodqualities do |t|
      t.integer :review_id
      t.integer :goodquality_id
    end
  end
end
