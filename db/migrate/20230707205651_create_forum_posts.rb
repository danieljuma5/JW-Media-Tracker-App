class CreateForumPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :forum_posts do |t|
      t.string :category
      t.string :title
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
