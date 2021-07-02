require 'test_helper'

class BarAOnglesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bar_a_ongle = bar_a_ongles(:one)
  end

  test "should get index" do
    get bar_a_ongles_url
    assert_response :success
  end

  test "should get new" do
    get new_bar_a_ongle_url
    assert_response :success
  end

  test "should create bar_a_ongle" do
    assert_difference('BarAOngle.count') do
      post bar_a_ongles_url, params: { bar_a_ongle: { length: @bar_a_ongle.length, name: @bar_a_ongle.name, prestation_info_id: @bar_a_ongle.prestation_info_id, prestationtype_id: @bar_a_ongle.prestationtype_id, prestationtypecolumn: @bar_a_ongle.prestationtypecolumn, price: @bar_a_ongle.price } }
    end

    assert_redirected_to bar_a_ongle_url(BarAOngle.last)
  end

  test "should show bar_a_ongle" do
    get bar_a_ongle_url(@bar_a_ongle)
    assert_response :success
  end

  test "should get edit" do
    get edit_bar_a_ongle_url(@bar_a_ongle)
    assert_response :success
  end

  test "should update bar_a_ongle" do
    patch bar_a_ongle_url(@bar_a_ongle), params: { bar_a_ongle: { length: @bar_a_ongle.length, name: @bar_a_ongle.name, prestation_info_id: @bar_a_ongle.prestation_info_id, prestationtype_id: @bar_a_ongle.prestationtype_id, prestationtypecolumn: @bar_a_ongle.prestationtypecolumn, price: @bar_a_ongle.price } }
    assert_redirected_to bar_a_ongle_url(@bar_a_ongle)
  end

  test "should destroy bar_a_ongle" do
    assert_difference('BarAOngle.count', -1) do
      delete bar_a_ongle_url(@bar_a_ongle)
    end

    assert_redirected_to bar_a_ongles_url
  end
end
