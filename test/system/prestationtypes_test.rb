require "application_system_test_case"

class PrestationtypesTest < ApplicationSystemTestCase
  setup do
    @prestationtype = prestationtypes(:one)
  end

  test "visiting the index" do
    visit prestationtypes_url
    assert_selector "h1", text: "Prestationtypes"
  end

  test "creating a Prestationtype" do
    visit prestationtypes_url
    click_on "New Prestationtype"

    fill_in "Name", with: @prestationtype.name
    click_on "Create Prestationtype"

    assert_text "Prestationtype was successfully created"
    click_on "Back"
  end

  test "updating a Prestationtype" do
    visit prestationtypes_url
    click_on "Edit", match: :first

    fill_in "Name", with: @prestationtype.name
    click_on "Update Prestationtype"

    assert_text "Prestationtype was successfully updated"
    click_on "Back"
  end

  test "destroying a Prestationtype" do
    visit prestationtypes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Prestationtype was successfully destroyed"
  end
end
