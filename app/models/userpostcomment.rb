class Userpostcomment < ApplicationRecord
  has_and_belongs_to_many :posts, :join_table => :userposthavecomments, class_name: "Userpost"
  has_many :userpostcommentshasusers

  has_many :users, through: :userpostcommentshasusers, class_name: "User"
  validates_length_of :users, maximum: 1
  def post
    posts[0]
  end

end
