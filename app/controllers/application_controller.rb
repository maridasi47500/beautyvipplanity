class ApplicationController < ActionController::Base
  before_action :authenticatemyuser
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
  def authenticatemyuser
    p request.path != login_path
    p request.path
    if !user_signed_in? && request.path != login_path && request.path != signup_path  && params[:controller] != 'myownlogin' && params[:controller] != 'mysignup' && (params[:controller] != 'planity')
      redirect_to login_path
    end
  end
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, address_attributes: [:country, :state, :city, :area, :postal_code]])
  end
end
