class ChangeGoodqualityToAmenities < ActiveRecord::Migration[6.0]
  def change
    rename_table :goodqualities, :amenities
  end
end
