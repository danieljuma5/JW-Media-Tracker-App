class UsersController < ApplicationController
  before_action :authorize, only: :show
  skip_before_action :authorize,only: :create
rescue_from ActiveRecord::RecordInvalid, with: :render_user_invalid_unprocessable_entity
  def create
       user = User.create!(user_params)
      # return render json: { errors: [user.errors.full_messages] }, status: :unprocessable_entity unless user.valid?
        session[:user_id] ||= user.id
        render json: user, status: :created
  end
   def show
    user = User.find_by(id: session[:user_id])
      render json: user
  end

  private
  def authorize
    render json: {errors: ["Not Authorized"]},status: :unauthorized unless session.include? :user_id
  end
  def render_user_invalid_unprocessable_entity(invalid)
    render json: { errors: [invalid.record.errors.full_messages] }, status: :unprocessable_entity
  end
  def user_params
   params.permit(:username, :email, :password,:avatar_url)
  end
end
