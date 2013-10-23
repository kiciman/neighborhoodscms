class HomeController < ApplicationController

  def index
    
  end

  def city
    c = City.find_by_name(params[:city])
    @city_description = c.description
    @city_name = c.name
    @neighborhood_list = c.hoods
    @groups_of_num = @neighborhood_list.count / 3
  end

end
