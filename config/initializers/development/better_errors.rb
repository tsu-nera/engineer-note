if defined? BetterErrors
  BetterErrors::Middleware.allow_ip! '10.0.0.0/8'
  BetterErrors::Middleware.allow_ip! '172.16.0.0/12'
  BetterErrors::Middleware.allow_ip! '192.168.0.0/16'
end

if defined? BetterErrors
  BetterErrors.editor = proc { |full_path, line|
    full_path = full_path.sub(Rails.root.to_s, '/home/tsu-nera/RubymineProjects/engineer-note')
    "rubymine://open?url=file://#{full_path}&line=#{line}"
  }
end