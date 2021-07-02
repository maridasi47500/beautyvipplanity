require "application_system_test_case"

class PagealbumsTest < ApplicationSystemTestCase
  setup do
    @pagealbum = pagealbums(:one)
  end

  test "visiting the index" do
    visit pagealbums_url
    assert_selector "h1", text: "Pagealbums"
  end

  test "creating a Pagealbum" do
    visit pagealbums_url
    click_on "New Pagealbum"

    fill_in "Title", with: @pagealbum.title
    click_on "Create Pagealbum"

    assert_text "Pagealbum was successfully created"
    click_on "Back"
  end

  test "updating a Pagealbum" do
    visit pagealbums_url
    click_on "Edit", match: :first

    fill_in "Title", with: @pagealbum.title
    click_on "Update Pagealbum"

    assert_text "Pagealbum was successfully updated"
    click_on "Back"
  end

  test "destroying a Pagealbum" do
    visit pagealbums_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Pagealbum was successfully destroyed"
  end
end
