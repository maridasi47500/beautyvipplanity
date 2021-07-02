class Page < ApplicationRecord
  has_and_belongs_to_many :albums, :join_table => :pagehavealbums, class_name: "Pagealbum"
  has_many :photosdesalbums, through: :albums, source: :images
  
  def mesphotosdesalbums
    photosdesalbums.reverse
  end

  def fourfirstalbums
    albums.first(4)
  end
end
