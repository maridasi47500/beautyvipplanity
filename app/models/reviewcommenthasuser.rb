class Reviewcommenthasuser < ApplicationRecord
belongs_to :reviewcomment
belongs_to :user
end
