require 'sinatra'
set :bind, '0.0.0.0'
set :public_folder, File.dirname(__FILE__) + '/static'

get '/calc do
  erb :calc
end

get '/' do
  # 'Hello world!'
  erb :index
end
