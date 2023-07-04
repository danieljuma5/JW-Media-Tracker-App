class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :is_liked, :upvotes, :downvotes
  has_one :user
end
