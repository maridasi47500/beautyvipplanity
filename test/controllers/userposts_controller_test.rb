require 'test_helper'

class UserpostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @userpost = userposts(:one)
  end

  test "should get index" do
    get userposts_url
    assert_response :success
  end

  test "should get new" do
    get new_userpost_url
    assert_response :success
  end

  test "should create userpost" do
    assert_difference('Userpost.count') do
      post userposts_url, params: { userpost: { content: @userpost.content } }
    end

    assert_redirected_to userpost_url(Userpost.last)
  end

  test "should show userpost" do
    get userpost_url(@userpost)
    assert_response :success
  end

  test "should get edit" do
    get edit_userpost_url(@userpost)
    assert_response :success
  end

  test "should update userpost" do
    patch userpost_url(@userpost), params: { userpost: { content: @userpost.content } }
    assert_redirected_to userpost_url(@userpost)
  end

  test "should destroy userpost" do
    assert_difference('Userpost.count', -1) do
      delete userpost_url(@userpost)
    end

    assert_redirected_to userposts_url
  end
end
