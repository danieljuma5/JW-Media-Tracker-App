class ForumRepliesController < ApplicationController
  before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :render_forum_reply_not_found
  def create
    forum_reply = ForumReply.create!(forum_reply_params)
    render json: forum_reply
  end
  def destroy
    forum_reply = find_by
    forum_reply.destroy
    head :no_content
  end
  def update
    forum_reply = find_by
    forum_reply.update!(forum_reply_params)
    render json: forum_reply,status: :accepted
  end
  private
  def find_by
    forum_reply = ForumReply.find(params[:id])
  end
  def forum_reply_params
    params.permit(:body,:forum_post_id,:user_id)
  end
  def render_forum_reply_not_found
    render json: {error: "Forum Reply Not Found"},status: :not_found
  end
  def authorize
    return render json: { error: ["Unauthorized"] }, status: :unauthorized unless session.include? :user_id
  end
end
