good=[]
bad=[]
a=Amenity.find_or_create_by(name: "Expérience de luxe")
good.push(a)
a=Amenity.find_or_create_by(name: "Experts cheveux naturels")
good.push(a)

a=Amenity.find_or_create_by(name: "Produits professionnels")
good.push(a)

a=Amenity.find_or_create_by(name: "Travail de maître")
good.push(a)

a=Amenity.find_or_create_by(name: "Expert colouring")
good.push(a)

a=Amenity.find_or_create_by(name: "Adapté cheveux bouclés")
good.push(a)

a=Amenity.find_or_create_by(name: "Peu de disponibilités")
bad.push(a)

a=Amenity.find_or_create_by(name: "Service expéditif")
bad.push(a)

a=Amenity.find_or_create_by(name: "Prestations irrégulières")
bad.push(a)

a=Amenity.find_or_create_by(name: "Manque d'expérience")
bad.push(a)

a=Amenity.find_or_create_by(name: "Salon sale")
bad.push(a)

a=Amenity.find_or_create_by(name: "Expérience douloureuse")
bad.push(a)
a=Amenity.find_or_create_by(name: "Dernière minute")
good.push(a)
a=Amenity.find_or_create_by(name: "Bons plans")
good.push(a)
a=Amenity.find_or_create_by(name: "Magnifique balayage")
good.push(a)
a=Amenity.find_or_create_by(name: "Consultation gratuite")
good.push(a)
a=Amenity.find_or_create_by(name: "Super coupe")
good.push(a)
a=Amenity.find_or_create_by(name: "Résultats incroyables")
good.push(a)
a=Amenity.find_or_create_by(name: "Produits capillaires professionnels")
good.push(a)
a=Amenity.find_or_create_by(name: "Résultats incroyables")
good.push(a)
a=Amenity.find_or_create_by(name: "Jolie décoration")
good.push(a)
a=Amenity.find_or_create_by(name: "Great blowouts")
good.push(a)
a=Amenity.find_or_create_by(name: "Sans réservation")
good.push(a)
a=Amenity.find_or_create_by(name: "Coupe géniale")
good.push(a)
a=Amenity.find_or_create_by(name: "Coiffeur expert")
good.push(a)
a=Amenity.find_or_create_by(name: "Bien pour les enfants")
good.push(a)
a=Amenity.find_or_create_by(name: "Coupe abordable")
good.push(a)
a=Amenity.find_or_create_by(name: "Résultat magnifique")
good.push(a)

Page.create! if !Page.first