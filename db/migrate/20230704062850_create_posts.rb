class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image_url
      t.text :description
      t.boolean :is_liked
      t.integer :upvotes
      t.integer :downvotes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
