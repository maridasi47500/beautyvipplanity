class Comment < ApplicationRecord
  has_and_belongs_to_many :posts, :join_table => :postcomments
  has_many :commenthasusers
  has_many :users, through: :commenthasusers, class_name: "User"
  validates_length_of :users, maximum: 1
  def content=(cont)
    write_attribute(:content,cont.squish.strip)
  end
  def post
    posts[0]
  end
end
