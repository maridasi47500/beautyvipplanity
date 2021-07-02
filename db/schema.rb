# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_09_145145) do

  create_table "aboutprestations", force: :cascade do |t|
    t.integer "prestation_id"
    t.integer "prestation_info_id"
  end

  create_table "albumhaveimages", force: :cascade do |t|
    t.integer "image_id"
    t.integer "album_id"
  end

  create_table "albums", force: :cascade do |t|
    t.string "title"
    t.boolean "usedate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "amenities", force: :cascade do |t|
    t.string "name"
  end

  create_table "commenthasusers", force: :cascade do |t|
    t.integer "comment_id"
    t.integer "user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "content"
  end

  create_table "imageposts", force: :cascade do |t|
    t.integer "image_id"
    t.integer "post_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "type"
  end

  create_table "pagealbums", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pagealbumshaveimages", force: :cascade do |t|
    t.integer "pagealbum_id"
    t.integer "image_id"
  end

  create_table "pagehavealbums", force: :cascade do |t|
    t.integer "page_id"
    t.integer "pagealbum_id"
  end

  create_table "pages", force: :cascade do |t|
  end

  create_table "photos", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "photosprestations", force: :cascade do |t|
    t.integer "image_id"
    t.integer "prestation_id"
  end

  create_table "postcomments", force: :cascade do |t|
    t.integer "post_id"
    t.integer "comment_id"
  end

  create_table "posthasusers", force: :cascade do |t|
    t.integer "post_id"
    t.integer "user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prestation_infos", force: :cascade do |t|
    t.string "price"
    t.string "length"
  end

  create_table "prestations", force: :cascade do |t|
    t.string "name"
    t.integer "prestation_info_id"
    t.integer "prestationtype_id"
    t.string "prestationtypecolumn"
    t.string "price"
    t.string "length"
    t.text "description"
    t.string "duration"
    t.string "durationtype"
  end

  create_table "prestationtypes", force: :cascade do |t|
    t.string "name"
  end

  create_table "reviewcommenthasusers", force: :cascade do |t|
    t.integer "reviewcomment_id"
    t.integer "user_id"
  end

  create_table "reviewcomments", force: :cascade do |t|
    t.text "content"
  end

  create_table "reviewhasusers", force: :cascade do |t|
    t.integer "review_id"
    t.integer "user_id"
  end

  create_table "reviewhavecomments", force: :cascade do |t|
    t.integer "reviewcomment_id"
    t.integer "review_id"
  end

  create_table "reviewhavegoodqualities", force: :cascade do |t|
    t.integer "review_id"
    t.integer "amenity_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "content"
    t.boolean "positive"
  end

  create_table "services", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "userhavebannerimages", force: :cascade do |t|
    t.integer "user_id"
    t.integer "image_id"
  end

  create_table "userhaveimages", force: :cascade do |t|
    t.integer "user_id"
    t.integer "image_id"
  end

  create_table "userpostcomments", force: :cascade do |t|
    t.string "content"
  end

  create_table "userpostcommentshasusers", force: :cascade do |t|
    t.integer "userpostcomment_id"
    t.integer "user_id"
  end

  create_table "userposthasusers", force: :cascade do |t|
    t.integer "userpost_id"
    t.integer "user_id"
  end

  create_table "userposthavecomments", force: :cascade do |t|
    t.integer "userpost_id"
    t.integer "userpostcomment_id"
  end

  create_table "userposts", force: :cascade do |t|
    t.string "content"
    t.integer "user_id"
  end

  create_table "userpostshaveimages", force: :cascade do |t|
    t.integer "userpost_id"
    t.integer "image_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.date "dateofbirth"
    t.string "firstname"
    t.string "lastname"
    t.string "genre"
    t.string "myothergenre"
    t.string "username"
    t.string "image_id"
    t.string "bannerimage_id"
    t.boolean "displaygenre"
    t.boolean "interestedwomen"
    t.boolean "interestedmen"
    t.text "bio"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "usershavealbums", force: :cascade do |t|
    t.integer "user_id"
    t.integer "album_id"
  end

end
