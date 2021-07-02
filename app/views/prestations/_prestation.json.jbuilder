json.extract! prestation, :id, :name, :prestationtype_id, :prestationtypecolumn, :price, :length, :created_at, :updated_at
json.url prestation_url(prestation, format: :json)
