class AddMyothergenreToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :myothergenre, :string
  end
end
