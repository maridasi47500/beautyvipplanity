class RenameoclumnInReviewhavegoodqualities < ActiveRecord::Migration[6.0]
  def change
    rename_column :reviewhavegoodqualities, :goodquality_id, :amenity_id
  end
end
