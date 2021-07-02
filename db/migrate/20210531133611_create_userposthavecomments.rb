class CreateUserposthavecomments < ActiveRecord::Migration[6.0]
  def change
    create_table :userposthavecomments do |t|
      t.integer :userpost_id
      t.integer :userpostcomment_id
    end
  end
end
