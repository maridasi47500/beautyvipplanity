require 'test_helper'

class PrestationtypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prestationtype = prestationtypes(:one)
  end

  test "should get index" do
    get prestationtypes_url
    assert_response :success
  end

  test "should get new" do
    get new_prestationtype_url
    assert_response :success
  end

  test "should create prestationtype" do
    assert_difference('Prestationtype.count') do
      post prestationtypes_url, params: { prestationtype: { name: @prestationtype.name } }
    end

    assert_redirected_to prestationtype_url(Prestationtype.last)
  end

  test "should show prestationtype" do
    get prestationtype_url(@prestationtype)
    assert_response :success
  end

  test "should get edit" do
    get edit_prestationtype_url(@prestationtype)
    assert_response :success
  end

  test "should update prestationtype" do
    patch prestationtype_url(@prestationtype), params: { prestationtype: { name: @prestationtype.name } }
    assert_redirected_to prestationtype_url(@prestationtype)
  end

  test "should destroy prestationtype" do
    assert_difference('Prestationtype.count', -1) do
      delete prestationtype_url(@prestationtype)
    end

    assert_redirected_to prestationtypes_url
  end
end
