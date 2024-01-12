puts 'seeding...'

# Create users
5.times do
  user = User.create!(
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password_digest: BCrypt::Password.create(Faker::Alphanumeric.alphanumeric(number: 10)),
    avatar_url: Faker::LoremFlickr.grayscale_image
  )
end

# Create forum posts
10.times do
  user = User.all.sample # Fetch a random user
  forum_post = ForumPost.create!(
    title: Faker::Movie.title,
    category: Faker::Book.genre,
    description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4),
    user: user
  )
end

# Create forum replies
20.times do
  user = User.all.sample # Fetch a random user
  forum_post = ForumPost.all.sample # Fetch a random forum post
  forum_reply = ForumReply.create!(
    body: Faker::Quote.most_interesting_man_in_the_world,
    user: user,
    forum_post: forum_post
  )
end

puts '✅ Done seeding!'
