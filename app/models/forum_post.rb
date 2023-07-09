class ForumPost < ApplicationRecord
  belongs_to :user
  has_many :forum_replies,dependent: :destroy
  validates :title, presence: true
  validates :category,presence: true
  validates :description, length: {minimum: 10}

end
