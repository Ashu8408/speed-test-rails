# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


Place.delete_all
Place.create!(name: "PVR", address: "abc street", city: "New Delhi")
Place.create!(name: "My home", address: "CHPG saket", city: "New Delhi")

InternetSpeed.create!(place_id: place.id, download_speed: 25.55, download_units: "mbps")
InternetSpeed.create!(place_id: place.id, download_speed: 25.55, download_units: "mbps")
