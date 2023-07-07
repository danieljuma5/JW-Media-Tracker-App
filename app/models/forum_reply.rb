class ForumReply < ApplicationRecord
  belongs_to :forum_post
  belongs_to :user
end
