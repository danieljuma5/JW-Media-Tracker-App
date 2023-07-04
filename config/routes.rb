Rails.application.routes.draw do
  resources :users, only:[:index,:create, :update]
  resources :posts
  resources :comments, only:[:index,:update,:destroy]
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
