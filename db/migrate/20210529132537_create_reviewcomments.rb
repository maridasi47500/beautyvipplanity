class CreateReviewcomments < ActiveRecord::Migration[6.0]
  def change
    create_table :reviewcomments do |t|
      t.text :content
    end
  end
end
