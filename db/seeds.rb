# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding...'
BOOL = [true,false]
10.times do 
posts = Post.create(
  title:Faker::Movie.title,
  image_url:Faker::LoremFlickr.image,
  description:Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
  is_liked:BOOL.uniq.sample,
  upvotes:rand(1..10),
  downvotes:rand(1..10),
  user_id:rand(1..5)
)
end

15.times do
  comments = Comment.create(
    body:Faker::Quote.famous_last_words,
    user_id:rand(1..5),
    post_id:rand(1..10),
  )
end


puts '✅ Done seeding!'