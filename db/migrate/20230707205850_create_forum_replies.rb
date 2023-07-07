class CreateForumReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_replies do |t|
      t.text :body
      t.references :forum_post, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
