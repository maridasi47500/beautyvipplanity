require "application_system_test_case"

class UserpostsTest < ApplicationSystemTestCase
  setup do
    @userpost = userposts(:one)
  end

  test "visiting the index" do
    visit userposts_url
    assert_selector "h1", text: "Userposts"
  end

  test "creating a Userpost" do
    visit userposts_url
    click_on "New Userpost"

    fill_in "Content", with: @userpost.content
    click_on "Create Userpost"

    assert_text "Userpost was successfully created"
    click_on "Back"
  end

  test "updating a Userpost" do
    visit userposts_url
    click_on "Edit", match: :first

    fill_in "Content", with: @userpost.content
    click_on "Update Userpost"

    assert_text "Userpost was successfully updated"
    click_on "Back"
  end

  test "destroying a Userpost" do
    visit userposts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Userpost was successfully destroyed"
  end
end
