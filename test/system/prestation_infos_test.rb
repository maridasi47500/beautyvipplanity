require "application_system_test_case"

class PrestationInfosTest < ApplicationSystemTestCase
  setup do
    @prestation_info = prestation_infos(:one)
  end

  test "visiting the index" do
    visit prestation_infos_url
    assert_selector "h1", text: "Prestation Infos"
  end

  test "creating a Prestation info" do
    visit prestation_infos_url
    click_on "New Prestation Info"

    fill_in "Length", with: @prestation_info.length
    fill_in "Price", with: @prestation_info.price
    click_on "Create Prestation info"

    assert_text "Prestation info was successfully created"
    click_on "Back"
  end

  test "updating a Prestation info" do
    visit prestation_infos_url
    click_on "Edit", match: :first

    fill_in "Length", with: @prestation_info.length
    fill_in "Price", with: @prestation_info.price
    click_on "Update Prestation info"

    assert_text "Prestation info was successfully updated"
    click_on "Back"
  end

  test "destroying a Prestation info" do
    visit prestation_infos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Prestation info was successfully destroyed"
  end
end
