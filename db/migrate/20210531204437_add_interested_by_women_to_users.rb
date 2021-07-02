class AddInterestedByWomenToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :interestedwomen, :boolean
    add_column :users, :interestedmen, :boolean
  end
end
