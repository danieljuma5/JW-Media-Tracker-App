class ForumPost < ApplicationRecord
  belongs_to :user
  has_many :forum_replies,dependent: :destroy
end
