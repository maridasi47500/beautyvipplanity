require "nokogiri"
require "open-uri"

@mystr="\"story\":{\"message\":{\"text\""
@doc = File.read("./app/views/home/index.html.erb") 
@a=@doc.split(@mystr)[1..-2]
@a.each_with_index do |str,j|
  exit 1 if j== @a.length
  @postcontent="#{str.split('"')[1].squish.strip}"
  #p str(@postcontent)
  Post.find_or_create_by(content: @postcontent)
end