class ForumPostSerializer < ActiveModel::Serializer
  attributes :id, :category, :title, :description,:created_at,:updated_at
  has_one :user
  has_many :forum_replies

end
