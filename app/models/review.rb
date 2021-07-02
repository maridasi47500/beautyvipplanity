class Review < ApplicationRecord
  has_and_belongs_to_many :comments, class_name: "Reviewcomment", :join_table => :reviewhavecomments
  accepts_nested_attributes_for :comments
  has_many :reviewhasusers
  has_many :users, through: :reviewhasusers, class_name: "User"
  validates_length_of :users, maximum: 1
  has_and_belongs_to_many :amenities, :join_table => :reviewhavegoodqualities
  def myamenities
    amenities.pluck(:name).map{|x| "<b><span class=\"myamenity\">#{x}</span></b>"}.join('<b>·</b>')
  end
  def mytypereview(params)
(positive != nil ? positive : (params[:action] == "recommend" ? "1" : "0"))    
  end
  def recommende
    positive ? "recommende " : "ne recommende pas "
  end
end
