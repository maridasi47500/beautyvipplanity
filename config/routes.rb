Rails.application.routes.draw do
  get 'planity/show'
    post 'sendimage/:id', to: "images#sendimage", as: :sendimage
    get 'adddesc/:id', to: "images#adddesc", as: :adddesc

  put 'updatephoto', to: "images#updatephoto", as: :updatephoto
  put 'myphotonow/:id', to: "images#myphotonow", as: :myphotonow
  get 'dlmyphoto', to: "images#dlmyphoto", as: :dlmyphoto
  get 'myphoto', to: "images#myphoto", as: :myphoto

get "/photo", to: "images#show", as: :photo1

  get 'mypage/toutesmesphotos'
  get 'mypage/tousmesalbums'
  resources :pagealbums
          get '/beautyvip/photos_albums/:id', to: "pagealbums#show", as: :my_album_page

      get '/beautyvip/create_album', to: "pagealbums#new", as: :createnewalbum_page
      get '/beautyvip/add_photos/:id', to: "pagealbums#edit", as: :addphotostoalbum_page
post '/beautyvip/dlpictures', to: 'pagealbums#dlpicture', as: :pictureofthem_page
patch '/beautyvip/dlpictures/:id', to: 'pagealbums#dlpicture', as: :pictureofthem2_page

  resources :albums
          get '/:username/photos_albums/:id', to: "albums#show", as: :my_album, :constraints => { :username => /[^\/]+/ }

      get '/create_album', to: "albums#new", as: :createnewalbum
      get '/add_photos/:id', to: "albums#edit", as: :addphotostoalbum
post 'dlpictures', to: 'albums#dlpicture', as: :pictureofthem
patch 'dlpictures/:id', to: 'albums#dlpicture', as: :pictureofthem2
  resources :userposts do
    collection do
      get 'recommend'
      get 'enhance'
    end
    member do
      post 'createcomment'
      get 'mycomment/:commentid', action: :mycomment, as: :mycomment
      post 'updatecomment/:commentid', action: :updatecomment, as: :updatecomment
      get 'editcomment/:commentid', action: :editcomment, as: :editcomment
    end
    
  end
  get 'lastcommentuserposts', to: "userposts#lastcomment"
  get 'mygenrefield', to: "mysignup#mygenrefield"
  get 'mydatefield', to: "mysignup#mydatefield"
  get 'myphotos', to: "mysignup#myphotos"
  get 'chosemyphoto', to: "mysignup#chosemyphoto"
  get 'myprofilephotos', to: "mysignup#myprofilephotos"
  get 'chosemyppic', to: "mysignup#chosemyppic"
  get 'myorientation', to: "mysignup#myorientation"
  get 'addbio', to: "mysignup#addbio"
  get 'me', to: "mysignup#profile"
  get 'signout', to: "mysignup#signout"
  post 'mygenre', to: "mysignup#genre"
  post 'updateinfouser/:id', to: "mysignup#updateinfo", as: :updateinfo
  post 'updatebiouser/:id', to: "mysignup#updatebio", as: :updatebio
  put 'updateinfouser/:id', to: "mysignup#updateinfo", as: :updateinfo2
  put 'updatebiouser/:id', to: "mysignup#updateinfo", as: :updatebio2
  get 'signup', to: "mysignup#new"
  post 'createsignup', to: "mysignup#create"
  get 'login', to: "myownlogin#new"
  post 'createlogin', to: "myownlogin#create"
  devise_for :users, controllers: { sessions: 'myownlogin', registrations: 'mysignup' }
  resources :users
  resources :photos, controller: 'images', except: [:show]
  resources :reviews do
    collection do
      get 'recommend'
      get 'enhance'
    end
    member do
      post 'createcomment'
      get 'mycomment/:commentid', action: :mycomment, as: :mycomment
      post 'updatecomment/:commentid', action: :updatecomment, as: :updatecomment
      get 'editcomment/:commentid', action: :editcomment, as: :editcomment
    end
    
  end
  resources :services, controller: "prestations"
  resources :posts do
    member do
      post 'createcomment'
      get 'mycomment/:commentid', action: :mycomment, as: :mycomment
      post 'updatecomment/:commentid', action: :updatecomment, as: :updatecomment
      get 'editcomment/:commentid', action: :editcomment, as: :editcomment
    end
  end
  root to: "posts#index"
  get "lastcomment", to: "posts#lastcomment"
  get "lastcommentreview", to: "reviews#lastcomment"
  get 'home/index'
  get 'welcome/index'
  get "facebook", to: "home#index"
  resources :prestation_infos, path: 'infos', as: :prestations
  resources :images, path: 'photos'
  
  resources :prestationtypes
  get "bar_a_ongles/:id", to: "prestations#show", as: :bar_a_ongle
  resources :bar_a_ongles
    get '/beautyvip/photos', to: "mypage#toutesmesphotos", as: :photos1_page
    get '/beautyvip/photos_all', to: "mypage#toutesmesphotos", as: :photos2_page
    get '/beautyvip/photos_albums', to: "mypage#tousmesalbums", as: :albums1_page

    get '/:username', to: "myprofile#index", as: :myprofile, :constraints => { :username => /[^\/]+/ }
    get '/:username/about_contact_and_basic_info', to: "myprofile#about_contact_and_basic_info", as: :infos, :constraints => { :username => /[^\/]+/ }
    get '/:username/maphotodeprofilurl', to: "myprofile#urlphoto", as: :urlmaphotodeprofil, :constraints => { :username => /[^\/]+/ }
    get '/:username/photos', to: "myprofile#toutesmesphotos", as: :photos1, :constraints => { :username => /[^\/]+/ }
    get '/:username/photos_all', to: "myprofile#toutesmesphotos", as: :photos2, :constraints => { :username => /[^\/]+/ }
    get '/:username/photos_albums', to: "myprofile#tousmesalbums", as: :albums1, :constraints => { :username => /[^\/]+/ }
end
