class ContactMailer < ApplicationMailer
  def formulaire_de_contact(nom, email, message)
    @nom = nom
    @email = email
    @message = message
    mail(to: 'alice.bernaud13001@gmail.com', subject: 'Nouveau message du formulaire de contact')
  end
end
