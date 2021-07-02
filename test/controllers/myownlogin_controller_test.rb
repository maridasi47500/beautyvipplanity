require 'test_helper'

class MyownloginControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get myownlogin_index_url
    assert_response :success
  end

end
