class Changecolumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :prestations, :prestationtype, :prestationtypecolumn
  end
end
