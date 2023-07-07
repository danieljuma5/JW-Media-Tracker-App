class ForumReplySerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :forum_post
  has_one :user
end
