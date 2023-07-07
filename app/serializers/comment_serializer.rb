class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_information, :created_at, :updated_at
  has_one :user, serializer: UserSerializer
  has_one :post

  def user_information
    user = User.find(object.user_id)
    UserSerializer.new(user)
  end
end
