class AddPrestationtypeIdToPrestations < ActiveRecord::Migration[6.0]
  def change
    add_column :prestations, :prestationtype_id, :integer
  end
end
