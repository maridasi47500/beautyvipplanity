class CreateUserposthasusers < ActiveRecord::Migration[6.0]
  def change
    create_table :userposthasusers do |t|
      t.integer :userpost_id
      t.integer :user_id
    end
  end
end
