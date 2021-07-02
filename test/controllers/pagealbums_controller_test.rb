require 'test_helper'

class PagealbumsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pagealbum = pagealbums(:one)
  end

  test "should get index" do
    get pagealbums_url
    assert_response :success
  end

  test "should get new" do
    get new_pagealbum_url
    assert_response :success
  end

  test "should create pagealbum" do
    assert_difference('Pagealbum.count') do
      post pagealbums_url, params: { pagealbum: { title: @pagealbum.title } }
    end

    assert_redirected_to pagealbum_url(Pagealbum.last)
  end

  test "should show pagealbum" do
    get pagealbum_url(@pagealbum)
    assert_response :success
  end

  test "should get edit" do
    get edit_pagealbum_url(@pagealbum)
    assert_response :success
  end

  test "should update pagealbum" do
    patch pagealbum_url(@pagealbum), params: { pagealbum: { title: @pagealbum.title } }
    assert_redirected_to pagealbum_url(@pagealbum)
  end

  test "should destroy pagealbum" do
    assert_difference('Pagealbum.count', -1) do
      delete pagealbum_url(@pagealbum)
    end

    assert_redirected_to pagealbums_url
  end
end
