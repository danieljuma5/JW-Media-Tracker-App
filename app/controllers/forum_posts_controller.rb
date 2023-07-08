class ForumPostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_forum_post_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_forum_post_unprocessable_entity
before_action :authorize, only:[:create,:show]
skip_before_action :authorize, only:[:index]
  def index
    render json: ForumPost.all
  end

  def show
    forum_post =  find_by
    render json: forum_post,status: :ok
  end
  def create
    forum_post = ForumPost.create!(forum_post_params)
    render json: forum_post,status: :created
  end
  def destroy
    forum_post = find_by
    forum_post.destroy
    head :no_content
  end

  private

  def authorize
   return render json: { error: "Unauthorized Access" }, status: :unauthorized unless session.include?(:user_id)
   end
  def forum_post_params
    params.permit(:category,:title,:description,:user_id)
  end
  def find_by
    forum_posts = ForumPost.find(params[:id])
  end
  def render_forum_post_not_found
    render json: {error: "Forum Post Not Found"},status: :not_found
  end
  def render_forum_post_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity 
  end
end
