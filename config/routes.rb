Rails.application.routes.draw do
  root 'pages#home'
  get 'coaching', to: 'pages#coaching', as: 'coaching'
  get 'ucg', to: 'pages#ucg', as: 'ucg'
  get 'contenu', to: 'pages#contenu', as: 'contenu'
  get 'masterclass', to: 'pages#masterclass', as: 'masterclass'
  get 'communitymanagement', to: 'pages#communitymanagement', as: 'communitymanagement'
  get 'website', to: 'pages#website', as: 'website'
  get 'cgv', to: 'pages#cgv', as: 'cgv'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check


  post '/', to: 'contacts#create', as: 'mail'

  # Defines the root path route ("/")
  # root "posts#index"
end
