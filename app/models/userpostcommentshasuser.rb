class Userpostcommentshasuser < ApplicationRecord
  belongs_to :user
  belongs_to :userpostcomment
end
