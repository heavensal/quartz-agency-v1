class ContactMailer < ApplicationMailer
  def formulaire_de_contact(nom, email, message)
    @nom = nom
    @email = email
    @message = message
    mail(to: 'adamlamouri.pro@gmail.com', subject: 'Nouveau message du formulaire de contact')
  end
end
