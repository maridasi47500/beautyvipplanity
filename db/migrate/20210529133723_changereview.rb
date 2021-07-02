class Changereview < ActiveRecord::Migration[6.0]
  def change
    rename_column :reviewhavecomments, :post_id, :review_id
  end
end
