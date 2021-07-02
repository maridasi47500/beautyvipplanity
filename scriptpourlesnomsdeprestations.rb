require 'nokogiri'
require 'open-uri'
@page=File.open("./beauty vip services.html") { |f|Nokogiri::HTML(f)}
@prestations = @page.css('.rq0escxv')

paspremier = false
prestations=[]
typeprestations=[]
images=[]
PrestationInfo.destroy_all
Aboutprestation.destroy_all
Photosprestation.destroy_all
Prestation.destroy_all
Image.destroy_all

@prestations.each do |prestation|
  #p prestation.text
  prestation.children.each_with_index do |child,i|
    child.children.each_with_index do |children, j|
      children.children.each_with_index do |lastchild, k|
        lastchild.children.each_with_index do |lastlastchild, l|
          lastlastchild.children.each_with_index do |llchild, m|
            p llchild.attributes.keys
            p 1

            llchild.children.each_with_index do |dernierchild, n|
              p dernierchild.attributes.keys
              p 2
              dernierchild.children.each_with_index do |enfant, o|
                if prestations.length > 0 && typeprestations.length > 0
                  prestation=prestations[0]
                  prestation.prestations << typeprestations
                  typeprestations.each do |presta|
                    p presta
                    p images
                    presta.images << images
                  end

                end
            p '======='
prestations=[]
typeprestations=[]
images = []

                enfant.children.each_with_index do |dernier, p|
                      p dernier.attributes.keys
                      p 3

                  dernier.children.each_with_index do |dernierenfant, q|
                      p dernierenfant.attributes.keys

                    dernierenfant.children.each_with_index do |dernierediv, r|
                      keys = dernierediv.attributes
                      if keys.keys.length == 5 && keys.keys.include?('src')
                        p keys.keys
                        createnom=keys['src'].value
                        if createnom.index('/')
                          createnom=createnom.split('/')[1]
                        end
                        image=Image.find_or_create_by(name:createnom)
                        images.push(image)
                      end

                      #p '---n°'+r.to_s+'---', dernierediv.text
                      str = dernierediv.text
                      paspremier = true if str == "Beauty vip La Garde Hyères"
                      if paspremier
                        if str.index('€')
                          presta=str.split('·')
                          newprestation=PrestationInfo.find_or_create_by(price: presta[1].squish,length: presta[0].squish)
                          prestations.push(newprestation)
                        else
                          newprestation=Prestation.create(name: str)
                          typeprestations.push(newprestation)
                        end
                      end
                    end
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end
