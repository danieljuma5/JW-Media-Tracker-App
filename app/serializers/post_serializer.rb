class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_liked, :upvotes, :downvotes,:created_at
  has_one :user
  has_many :comments
end
