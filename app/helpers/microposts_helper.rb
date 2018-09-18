module MicropostsHelper
  def feed_data(microposts)
    ret = []
    microposts.each do |micropost|
      m = {}
      m[:id] = micropost.id
      m[:user_id] = micropost.user.id
      m[:user_name] = micropost.user.name
      m[:content] = micropost.content
      m[:created_at] = time_ago_in_words(micropost.created_at)
      m[:gravatar] = gravatar_for(micropost.user, {size: 50})
      ret << m
    end
    ret
  end
end
