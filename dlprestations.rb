require "nokogiri"
require "open-uri"

@mystr=",\"description\":\""
@doc = File.read("./app/views/home/prestations.html.erb") 
@a=@doc.split(@mystr)[1..-2]
@a.each_with_index do |str,j|
  exit 1 if j== @a.length
  @postcontent="#{str.split('"')[1].squish.strip}"
  #p str
  p "==="
  #nom tout au début
  #
    desc=str.index('"')
    descvalue = Post.convert(str[0..desc-1])

  price=str.index('display_price')
  valueprice =Post.convert(str[price..-1].split(':')[1].split(',')[0]).gsub('"','')
  p "valueprice: #{valueprice}"
  durtype =str.index('duration_type')
  valuedurtype =str[durtype..-1].split(':')[1].split(',')[0].gsub('"','')
  p "valuedurtype: #{valuedurtype}"

  dur =str.index('duration')
  valuedur =str[dur..-1].split(':')[1].split(',')[0]
  p "valuedur: #{valuedur}"

  im =str.index('uri')

  name =str.index('name')
   valuename =Post.convert(str[name..-1].split(':')[1].split(',')[0]).gsub('"','')
   p "valuename: #{valuename}"
   @prestation=Prestation.find_or_create_by(price: valueprice, description: descvalue, duration: valuedur, durationtype: valuedurtype,name: valuename)
     if im
  valueim =str[im..-1].split(',')[0].split(':"')[1][0..-3].gsub(/\\/,"")
o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
filename = "#{(0...20).map { o[rand(o.length)] }.join}.jpg"
`wget "#{valueim}" -O ./app/assets/images/#{filename};`
  @prestation.images.find_or_create_by(description: descvalue, name: filename)

  end
  p "valueim: #{valueim}"

  #Post.find_or_create_by(content: @postcontent)
end