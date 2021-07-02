require 'test_helper'

class PlanityControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get planity_show_url
    assert_response :success
  end

end
