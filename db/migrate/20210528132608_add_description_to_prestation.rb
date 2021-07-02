class AddDescriptionToPrestation < ActiveRecord::Migration[6.0]
  def change
    add_column :prestations, :description, :text
  end
end
