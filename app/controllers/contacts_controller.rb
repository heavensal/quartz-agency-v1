class ContactsController < ApplicationController
  def new
  end

  def create
    nom = params[:nom]
    prenom = params[:prenom]
    email = params[:email]
    telephone = params[:telephone]
    entreprise = params[:entreprise]
    message = params[:message]

    ContactMailer.formulaire_de_contact(nom, prenom, email, telephone, entreprise, message).deliver_now!

    redirect_to root_path, notice: 'Votre message a été envoyé avec succès!'
  end
end
