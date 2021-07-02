class Pagealbum < ApplicationRecord
  has_and_belongs_to_many :images, :join_table => :pagealbumshaveimages, class_name: "Image"
      accepts_nested_attributes_for :images, :allow_destroy => true

    validates :images, length: { minimum: 1, message: "Add at least one picture to the album." }
    validates :title, presence: {message: "Add a title"}, uniqueness: {message: "Title already taken"}

  has_and_belongs_to_many :pagehavingalbums, :join_table => :pagehavealbums, class_name: "Page"
  before_validation :strip_whitespace


def images=(files)
  files.each do |file|
  if !file || file.is_a?(String)
        p "file is String"

        i=images.new(:name => file)

  else
    p "file is not String"
      pathfile = file.tempfile.path
    ext =file.original_filename.split('.').last
    filename =file.original_filename.parameterize+'.'+ext
      video = file.content_type.to_s.include?('video') #est-ce une video?
      p video
      if video
        i=images.new(:name => filename,:type => 'Video')
      else
    i=images.new(:name => filename)

      end


    `mv #{pathfile} #{Rails.root.to_s+"/app/assets/images/#{filename}"}`
  end

end
end
private
  def strip_whitespace
    title.strip.squish
  end

end
