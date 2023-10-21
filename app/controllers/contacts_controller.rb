class ContactsController < ApplicationController
  def new
  end

  def create
    nom = params[:contact][:nom]
    email = params[:contact][:email]
    message = params[:contact][:message]


    ContactMailer.formulaire_de_contact(nom, email, message).deliver_now!

    # Redirigez l'utilisateur après l'envoi du formulaire
    redirect_to root_path, notice: 'Votre message a été envoyé avec succès!'
  end
end
