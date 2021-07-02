class AddTypeToImage < ActiveRecord::Migration[6.0]
  def change
    add_column :images, :type, :string
  end
end
