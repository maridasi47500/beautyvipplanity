require "application_system_test_case"

class BarAOnglesTest < ApplicationSystemTestCase
  setup do
    @bar_a_ongle = bar_a_ongles(:one)
  end

  test "visiting the index" do
    visit bar_a_ongles_url
    assert_selector "h1", text: "Bar A Ongles"
  end

  test "creating a Bar a ongle" do
    visit bar_a_ongles_url
    click_on "New Bar A Ongle"

    fill_in "Length", with: @bar_a_ongle.length
    fill_in "Name", with: @bar_a_ongle.name
    fill_in "Prestation info", with: @bar_a_ongle.prestation_info_id
    fill_in "Prestationtype", with: @bar_a_ongle.prestationtype_id
    fill_in "Prestationtypecolumn", with: @bar_a_ongle.prestationtypecolumn
    fill_in "Price", with: @bar_a_ongle.price
    click_on "Create Bar a ongle"

    assert_text "Bar a ongle was successfully created"
    click_on "Back"
  end

  test "updating a Bar a ongle" do
    visit bar_a_ongles_url
    click_on "Edit", match: :first

    fill_in "Length", with: @bar_a_ongle.length
    fill_in "Name", with: @bar_a_ongle.name
    fill_in "Prestation info", with: @bar_a_ongle.prestation_info_id
    fill_in "Prestationtype", with: @bar_a_ongle.prestationtype_id
    fill_in "Prestationtypecolumn", with: @bar_a_ongle.prestationtypecolumn
    fill_in "Price", with: @bar_a_ongle.price
    click_on "Update Bar a ongle"

    assert_text "Bar a ongle was successfully updated"
    click_on "Back"
  end

  test "destroying a Bar a ongle" do
    visit bar_a_ongles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Bar a ongle was successfully destroyed"
  end
end
