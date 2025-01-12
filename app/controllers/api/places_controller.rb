module Api
  class PlacesController < ApplicationController
  def index
    places = Place.all.map do |place|
      {
        name: place.name,
        city: place.city,
        latest_download_speed: latest_download_speed(place),
        latest_download_units: latest_download_units(place),
        number_of_measurements: number_of_measurements(place)
      }
    end

    render(json: { places: places })
  end

  def latest_download_speed(place)
    place.internet_speeds.order("created_at DESC").last&.download_speed
  end

  def latest_download_units(place)
    place.internet_speeds.order("created_at DESC").last&.download_units
  end
  # place.internet_speeds.order("created_at DESC").last&.download_units
  # in above, & works as short ckt
  # not a good code, fix it later

  def number_of_measurements(place)
    place.internet_speeds.count
  end

  end
end
