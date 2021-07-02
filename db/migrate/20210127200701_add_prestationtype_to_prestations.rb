class AddPrestationtypeToPrestations < ActiveRecord::Migration[6.0]
  def change
    add_column :prestations, :prestationtype, :string
  end
end
