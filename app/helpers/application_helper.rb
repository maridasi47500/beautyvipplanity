module ApplicationHelper
  def resource
    current_user || User.new
  end
  def resource_name
    :user
  end

end
