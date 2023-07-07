class CommentsController < ApplicationController
  before_action :authorize, only: [:create]
  def create
    comment = Comment.create!(comment_params)
    render json: comment
  end
  def destroy
    comment = find_by
    comment.destroy
    head :no_content
  end
  def update
    comment = find_by
    comment.update!(comment_params)
    render json: comment,status: :accepted
  end
  private
  def find_by
    comment = Comment.find(params[:id])
  end
  def comment_params
    params.permit(:body,:post_id,:user_id)
  end
  def authorize
    return render json: { errors: ["Unauthorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
