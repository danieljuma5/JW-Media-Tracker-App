class UserSerializer < ActiveModel::Serializer
  attributes :id, :username,:email,:avatar_url, :password_digest
end
