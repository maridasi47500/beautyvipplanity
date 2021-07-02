class Image < ApplicationRecord
  has_and_belongs_to_many :prestations, :join_table => :photosprestations
  def name
    name=read_attribute(:name)
"/assets/"+name.to_s
  end
    def description
    read_attribute('description')
  end
def description=(file)
    write_attribute(:description, file)

end
  def myname
    read_attribute(:name)
  end
def myname=(file)
  p file
  if !file.is_a?(String)
      pathfile = file.tempfile.path
      p pathfile
      name =file.original_filename
      p file.content_type
      video = file.content_type.to_s.include?('video') #est-ce une video?
      p video
      ext = name.include?('.') ? name.split('.').last : ''
      filename = DateTime.now.to_s.gsub(/[^0-9]/, '')+'.'+ext
      self.write_attribute(:name,filename)
      if video
        self.write_attribute(:type,'Video')

      end
      abs="/app/assets/images/#{filename}"
      p abs
      `mv #{pathfile} #{Rails.root.to_s+abs}`
  else

      self.write_attribute(:name,file.gsub('/assets/',''))
  end
end
def name=(file)
  p file
  if !file.is_a?(String)
      pathfile = file.tempfile.path
      p pathfile
      name =file.original_filename
      p file.content_type
      video = file.content_type.to_s.include?('video') #est-ce une video?
      p video
      ext = name.include?('.') ? name.split('.').last : ''
      filename = DateTime.now.to_s.gsub(/[^0-9]/, '')+'.'+ext
      self.write_attribute(:name,filename)
      if video
        self.write_attribute(:type,'Video')

      end
      abs="/app/assets/images/#{filename}"
      p abs
      `mv #{pathfile} #{Rails.root.to_s+abs}`
  else

      self.write_attribute(:name,file.gsub('/assets/',''))
  end
end
end
