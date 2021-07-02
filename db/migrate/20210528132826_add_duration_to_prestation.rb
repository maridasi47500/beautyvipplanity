class AddDurationToPrestation < ActiveRecord::Migration[6.0]
  def change
    add_column :prestations, :duration, :string
    add_column :prestations, :durationtype, :string
  end
end
