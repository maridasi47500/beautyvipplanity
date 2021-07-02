class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable
  has_many :posts, class_name: "Userpost"
  belongs_to :bannerimage, foreign_key: "bannerimage_id", class_name: "Image", optional: true
  has_and_belongs_to_many :allbannerimages, :join_table => :userhavebannerimages, class_name: "Image"
  has_and_belongs_to_many :allimages, :join_table => :userhaveimages, class_name: "Image"
  belongs_to :image, foreign_key: "image_id", class_name: "Image", optional: true
  accepts_nested_attributes_for :image, allow_destroy: true
  has_and_belongs_to_many :albums, :join_table => :usershavealbums
  has_many :photosdesalbums, through: :albums, source: :images
  def mybio
    bio.to_s.squish.strip
  end
  def mesphotosdesalbums
    photosdesalbums.reverse
  end
  def fullname
    "#{firstname} #{lastname}"
  end
  def imagesimportees
    allimages+allbannerimages
  end
  def dateofbirth2=(d)
    p d
    p "date"
    y=d[1]
    
    day=dateofbirth.day
    m=dateofbirth.month
    mydate=Date.new(y,m,day)
    write_attribute(:dateofbirth,mydate)
  end
  def dateofbirth1=(d)
    p d
    p "date"
    m=d[2]
    day=d[3]
    yourdate=read_attribute(:dateofbirth)
    y=yourdate.year
    mydate=Date.new(y,m,day)

    write_attribute(:dateofbirth,mydate)

  end
  def dateofbirth1
   dateofbirth
  end
  def dateofbirth2
    dateofbirth
  end
  def imagepath
    (Image.find(read_attribute(:image_id)) ? Image.find(read_attribute(:image_id)).name : nil) rescue nil
  end
def image=(file)
  p file
  if !file || file.is_a?(String)
        i=Image.find_or_create_by(:name => file)
allimages << i
        self.write_attribute(:image_id,i.id)

  else
      pathfile = file.tempfile.path
    ext =file.original_filename.split('.').last
    filename =file.original_filename.parameterize+'.'+ext

    i=Image.find_or_create_by(:name => filename)
    allimages << i

        self.write_attribute(:image_id,i.id)
    `mv #{pathfile} #{Rails.root.to_s+"/app/assets/images/#{filename}"}`
  end

end
  def bannerimage
    (Image.find(read_attribute(:bannerimage_id)) ? Image.find(read_attribute(:bannerimage_id)).name : nil) rescue nil
  end
def bannerimage=(file)
  if !file || file.is_a?(String)
        i=Image.find_or_create_by(:name => file)
        allbannerimages << i
        self.write_attribute(:bannerimage_id,i.id)

  else
      pathfile = file.tempfile.path
    ext =file.original_filename.split('.').last
    filename =file.original_filename.parameterize+'.'+ext
        i=Image.find_or_create_by(:name => filename)
        allbannerimages << i

        self.write_attribute(:bannerimage_id,i.id)
    `mv #{pathfile} #{Rails.root.to_s+"/app/assets/images/#{filename}"}`
  end

end

  def genrevalue
    @mygenres={"f" => "Femme",
      "h" => "Homme",
      "il" => "Il",
      "elle" => "Elle",
      "on" => "On"
      
    }
    myothergenre.to_s.length > 0 ? "#{myothergenre} #{genre.to_s.length > 0 ? "(#{mygenrevalue})" : "" }" : @mygenres[genre]
  end
  def myothergenre=(str)
    write_attribute(:myothergenre,str.squish.strip)
  end
  def genre=(str)
    write_attribute(:genre,str.squish.strip)
  end
  def mygenrevalue
    @mygenres={
      "il" => "Il",
      "elle" => "Elle",
      "on" => "On"
      
    }
    @mygenres[genre]
  end
  def shortdate
    I18n.l dateofbirth, format: :shortdate, locale: :fr
  end
  def year
    I18n.l dateofbirth, format: :myyear, locale: :fr

  end
  def genrefield1
    if genre != 'f' && genre != 'h'
      'p'
    elsif genre == 'f'
      'f'
    else
      'h'
    end
    
  end
  #
  ##, :registerable,
         #:recoverable, :rememberable, :validatable
end
