module UsersHelper
  def gravatar_for(user, options = { size: 80 })
    return if user.nil?
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    size = options[:size]
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
    image_tag(gravatar_url, alt: user.name, class: "gravatar")
  end

  def link_for(user)
    if current_user.admin? && !current_user?(user)
      tag = " | <a href=\"/users/#{user.id}\" data-method=\"delete\" rel=\"nofollow\" data-confirm=\"Are you sure?\">delete</a>"
    else
      tag = ""
    end
    "<a href=\"/users/#{user.id}\">#{user.name}</a> #{tag}"
  end

  def stats_data(user)
    s = {}
    return s if user.nil?
    s[:following_user_path] = following_user_path(user)
    s[:followers_user_path] = followers_user_path(user)
    s[:following_count] = user.following.count
    s[:followers_count] = user.followers.count
    s
  end
end
