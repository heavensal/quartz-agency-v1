class ContactMailer < ApplicationMailer
  def formulaire_de_contact(nom, prenom, email, telephone, entreprise, message)
    @nom = nom
    @email = email
    @message = message
    @prenom = prenom
    @telephone = telephone
    @entreprise = entreprise

    mail(to: 'adamlamouri.pro@gmail.com', subject: 'Nouveau message du formulaire de contact')
  end
end
