class Reviewcomment < ApplicationRecord
    has_and_belongs_to_many :reviews, class_name: "Review", :join_table => :reviewhavecomments
    has_many :reviewcommenthasusers
  has_many :users, through: :reviewcommenthasusers, class_name: "User"
  validates_length_of :users, maximum: 1

  def review
    reviews[0]
  end

end
