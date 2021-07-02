json.extract! album, :id, :title, :created_at, :updated_at
json.url pagealbum_url(album, format: :json)
