class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_liked, :upvotes, :downvotes
  has_one :user
  has_many :comments
end
