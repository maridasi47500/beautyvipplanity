class AddDisplaygenreToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :displaygenre, :boolean
  end
end
