class PlanityController < ApplicationController
  layout 'planitymain'
    rescue_from ActionController::RoutingError, :with => :error_render_method
  def show
  end
  def error_render_method
    render :template => "public/error_404", :status => 404
  end
end
