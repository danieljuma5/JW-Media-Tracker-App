class PostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_post_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_post_invalid_unprocessable_entity
  def index
    render json: Post.all
  end
  def show
    post = find_by
    render json: post
  end
  def update
    post = find_by
    post.update!(posts_params)
    render json: post, status: :ok

  end
  def create 
    post = Post.create!(posts_params)
    render json: post,status: :created
  end
  def destroy
    post = find_by
    post.destroy
    head :no_content
  end

  private
  def posts_params
    # params.permit(:id,:title,:image_url,:description,:is_liked,:upvotes,:downvotes)
     post_params = params.require(:post).permit(:is_liked,:upvotes,:downvotes,:title,:image_url,:description,:user_id)
  end
  def find_by
    post = Post.find(params[:id])
  end
  def render_post_not_found
    render json: {error: "Post Not Found"},status: :not_found
  end
  def render_post_invalid_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    
  end
end
