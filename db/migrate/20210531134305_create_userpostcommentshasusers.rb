class CreateUserpostcommentshasusers < ActiveRecord::Migration[6.0]
  def change
    create_table :userpostcommentshasusers do |t|
      t.integer :userpostcomment_id
      t.integer :user_id
    end
  end
end
