class Userpost < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :comments, :join_table => :userposthavecomments, class_name: "Userpostcomment"
accepts_nested_attributes_for :comments, allow_destroy: true
  has_and_belongs_to_many :images, :join_table => :userpostshaveimages
  accepts_nested_attributes_for :images, allow_destroy: true

  has_many :userposthasusers
  has_many :users, through: :userposthasusers, class_name: "User"
  validates_length_of :users, maximum: 1
  def mycontent
    content.gsub("\\n","").gsub("\\ud83c\\udf80","").gsub("\\ud83d\\udc9c","").gsub("\\ud83d\\udcde","").gsub(/\\u[\da-f]{4}/i) { |m| [m[-4..-1].to_i(16)].pack('U') }
  end

end
