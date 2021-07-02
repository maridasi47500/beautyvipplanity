require 'nokogiri'
require 'open-uri'
@page=File.open("./pagebeautyvip.html") { |f|Nokogiri::HTML(f)}
@images = @page.css('.opwvks06.hop1g133')
#Image.destroy_all


@imagetocreate=@images.map do |x|
  
nameimage = x.attributes['src'].value.split('/')[1]
descriptionimage=x.attributes['alt'].value
  {name: nameimage, description: descriptionimage}
end
#Image.joins(:prestations).where(prestations:[]).destroy_all
Image.create(@imagetocreate)
#Prestation.all.each do |prestation|
#  name=prestation.name.gsub(' ','%')
#  prestations=Prestation.where('name like ?','%'+name+'%')
#  prestationtodelete=prestations-prestations.joins(:images)
#  prestationtodelete.each {|x|x.destroy}
#end


