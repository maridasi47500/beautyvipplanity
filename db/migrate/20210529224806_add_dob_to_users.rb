class AddDobToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :dob, :date
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :genre, :string
  end
end
