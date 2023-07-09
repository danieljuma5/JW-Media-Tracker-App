class ForumReplySerializer < ActiveModel::Serializer
  attributes :id, :body, :user_information,:created_at,:updated_at
  has_one :forum_post
  has_one :user

  def user_information
    user = User.find(object.user_id)
    UserSerializer.new(user)
  end
end
