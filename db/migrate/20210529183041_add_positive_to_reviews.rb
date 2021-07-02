class AddPositiveToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :positive, :boolean
  end
end
