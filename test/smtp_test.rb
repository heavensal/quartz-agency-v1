require 'net/smtp'

smtp = Net::SMTP.new('smtp.gmail.com', 587)
smtp.enable_starttls

smtp.start('gmail.com', 'alice.bernaud@gmail.com', 'aovq gpso zqsm pkbx', :login) do |smtp|
  puts "Connexion SMTP réussie!"
end
