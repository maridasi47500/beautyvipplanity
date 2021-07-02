json.extract! prestation_info, :id, :length, :price, :created_at, :updated_at
json.url prestation_info_url(prestation_info, format: :json)
