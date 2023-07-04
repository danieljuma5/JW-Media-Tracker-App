class PostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_post_not_found
  def index
    render json: Post.all
  end
  def show
    post = find_by
    render json: post
  end

  private
  def find_by
    post = Post.find(params[:id])
  end
  def render_post_not_found
    render json: {error: "Post Not Found"},status: :not_found
  end
end
