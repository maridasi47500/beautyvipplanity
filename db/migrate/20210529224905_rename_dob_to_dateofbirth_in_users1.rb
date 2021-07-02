class RenameDobToDateofbirthInUsers1 < ActiveRecord::Migration[6.0]
  def change
      rename_column :users, :dob, :dateofbirth
  end

end
