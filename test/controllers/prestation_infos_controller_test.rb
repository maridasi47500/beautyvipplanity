require 'test_helper'

class PrestationInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prestation_info = prestation_infos(:one)
  end

  test "should get index" do
    get prestation_infos_url
    assert_response :success
  end

  test "should get new" do
    get new_prestation_info_url
    assert_response :success
  end

  test "should create prestation_info" do
    assert_difference('PrestationInfo.count') do
      post prestation_infos_url, params: { prestation_info: { length: @prestation_info.length, price: @prestation_info.price } }
    end

    assert_redirected_to prestation_info_url(PrestationInfo.last)
  end

  test "should show prestation_info" do
    get prestation_info_url(@prestation_info)
    assert_response :success
  end

  test "should get edit" do
    get edit_prestation_info_url(@prestation_info)
    assert_response :success
  end

  test "should update prestation_info" do
    patch prestation_info_url(@prestation_info), params: { prestation_info: { length: @prestation_info.length, price: @prestation_info.price } }
    assert_redirected_to prestation_info_url(@prestation_info)
  end

  test "should destroy prestation_info" do
    assert_difference('PrestationInfo.count', -1) do
      delete prestation_info_url(@prestation_info)
    end

    assert_redirected_to prestation_infos_url
  end
end
