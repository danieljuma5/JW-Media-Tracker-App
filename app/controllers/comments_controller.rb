class CommentsController < ApplicationController
  before_action :authorize, only: [:create]
  def create
    comment = Comment.create!(comment_params)
    render json: comment
  end
  private
  def comment_params
    params.permit(:body,:post_id,:user_id)
  end
  def authorize
    return render json: { errors: ["Unauthorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
