require 'test_helper'

class MypageControllerTest < ActionDispatch::IntegrationTest
  test "should get toutesmesphotos" do
    get mypage_toutesmesphotos_url
    assert_response :success
  end

  test "should get tousmesalbums" do
    get mypage_tousmesalbums_url
    assert_response :success
  end

end
