class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :replies
  # validates :username, presence: true
  # validates :avatar_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp }
  # validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validate :validate_avatar_url_count

  # private

  # def validate_avatar_url_count
  #   urls = avatar_url.to_s.split(",").map(&:strip)
  #   errors.add(:avatar_url, "can only contain one URL") if urls.size > 1
  # end
end
