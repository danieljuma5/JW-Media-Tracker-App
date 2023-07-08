class ForumPostSerializer < ActiveModel::Serializer
  attributes :id, :category, :title, :description
  has_one :user
  has_many :forum_replies

end
