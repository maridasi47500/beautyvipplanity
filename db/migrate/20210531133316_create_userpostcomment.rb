class CreateUserpostcomment < ActiveRecord::Migration[6.0]
  def change
    create_table :userpostcomments do |t|
      t.string :content
    end
  end
end
