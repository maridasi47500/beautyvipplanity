require 'nokogiri'
require 'open-uri'
 print "Please enter your url with facebookid: "
name = gets
@doc = Nokogiri::HTML(URI.open(name))
