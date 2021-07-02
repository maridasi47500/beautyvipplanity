class Userposthasuser < ApplicationRecord
  belongs_to :user
  belongs_to :userpost
end
