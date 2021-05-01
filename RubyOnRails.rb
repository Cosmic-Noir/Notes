# Ruby on Rails Notes

# rails new ___ - Creating a new Ruby on Rails App From Scratch in the terminal, not in the file. Generates files and folders to build the app. Starting point of every app.

rails new MySite

# bundle install - Then run this command to install dependencies. The packages in ruby are called gems, and they are listed in the Gemfile.

bundle install

# rails server - command to start the Rails development server to preview the app at http://localhost:8000 . The dev server is called WEBrick.

rails server

# Request Response Cycle - Traces how a user's request flows through the app. You need 3 things to ruild a Rails app: a controller, a route, and a view.
    # 1. Browser makes request to URL (i.e. localhost:8000).
    # 2. Request hits the Rails 'router' in 'config/routes.rb'. The router recognizes the URL and sends the request to the 'controller'.
    # 3. The conrtoller then receives and processes the request.
    # 4. When the controller is done processing, passes the request the 'view'.
    # 5. The view then renders the page as HTML.
    # 6. The controller then sends the HTMl back to the browser to be seen.

# rails generate controller __name___ - Command that creates a controller by the name of given name. This will generate a file in this path: app/controllers/nameOf_controller.rb

rails generate controller Pages

# Inside of the generated controller file, you have a named controller that inherits from ApplicationController. Inside this you can set methods called 'controller actions' (methods in a Rails controller). Ex:

class PagesController < ApplicationController

    def home

    end
end

# Creating Routes - Once you have a controller with a defined 'controller action', you can go to your config/routes.rb file and actually create a new route, by default there will be this method:

Rails.application.routes.draw.do
 # controller actions here
end

# Then inside you can create the route and define which controller and which action to use:

Rails.application.routes.draw.do
    get '/welcome' => 'pages#home'
end

# To create a home page with no arguments in the HTML you can set the root like so:

Rails.application.routes.draw.do
    root 'pages#home'
end

# You can also rename routes like so:

get '/movies/:id' => 'movies#show', as: :movie

# Now that you have a 'welcome' route, a 'pages' controller, and a 'home' controller action, we need a view. Do so in app/views/pages/home.html.erb. Creating this route/path/action will also create the corresponding view in the corresponding controller folder. You can fill this with HTML:

<div class='main'>
    <div class="container">
        <h1>Hello my name is Violet</h1>
        <p>I make Rails apps.</p>
    </div>
</div>

# Now when you render the route: localhost:8000/welcome you will see the above html rendered on the page.

# All in all, there are about 5 steps to creating a simple Rails app:
    # 1. Create a new rails app.
    # 2. Create a controller and an action.
    # 3. Create a route that matches a URL to the controller action.
    # 4. Creat a view with HTML and styled with CSS
    # 5. Run the local server and view in browser

# Model - The model returns data from the database to the controller action. Then the action controller passes the data to the view, which then renders the page as HTML. The controlelr sends the HTML back to the browser.

# Great diagram about Request/Response cycle with Model and Database: https://www.codecademy.com/articles/request-response-cycle-dynamic

# rails generate model Message - create a new Model. This will generage a file in app/models/message.rb an drepresents a table in a database. This will also generate a file in 'db/migrate' with the title starting with the timestamp. Migrations are a way to update databases.

rails generate model Message

# You can also apparently create a migration alone

rails generate migration MigrationName

# Inside you will see a new class called Create__(Message in above ex)__, which inherits from the class ActiveRecord::Migration. Note:
    # def change - this method tells Rails what change to make to the database. Below, the method uses create_table to make a new table in the database for storing messages, in this case.
    # t.text :content - creates a text column named 'content' in the messages table.
    # t.timestamps - Rails command that creates two more columns called 'created_at' and 'updated_at' in the messages table. These will automatically update when a column is created and updated.

class CreateMessages < ActiveRecord::Migration
    def change
      create_table :messages do |t|
      t.text :content
        t.timestamps
      end
    end
  end

# t.references :table_name - You can create a foreign key reference to a table in this way:

class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :author
      t.string :comment
      t.references :book, foreign_key: true
      t.timestamps
    end
  end
end

# You can also use t.belongs_to when there is a 'belongs_to' relationship to reference other tablers:

class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.belongs_to :movie, index: true
      t.belongs_to :actor, index: true
      t.timestamps
    end
  end
end

# bundle exec rake db:migrate - To run your migration, this command updates the database with any new data migrats.

bundle exec rake db:migrate

# bundle exec rake db:seed - to seed the database, execute this order in the terminal.

bundle exec rake db:seed

# Standard Controller Actions - Rails defines 7 standard controller actions to do common things with data, such as display and modifying them.

# Resource: https://www.codecademy.com/articles/standard-controller-actions

# The below method, index, stores all returned Messages from the server:

class MessagesController < ApplicationController
    def index
      @messages = Message.all
    end
  end


  # .erb - This file is a 'web template', HTML files that contain variables and control flow statements. You can use web templates to loop through and display data from the database. In the file, app/views/index.html.erb (for this exp), is the HTMl returned. Below, added is code that allow
        # <% @messages.each do |message| %> - iterates over each message in @messages array, which was created in the Messages controller's 'index' action.
        # <%= message.content %> & <% message.created_at %> - used to display the data from message as the array is iterated over.


  <div class="header">
  <div class="container">
    <img src="http://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/logo-1m.svg">
    <h1>Messenger</h1>
  </div>
</div>

<div class="messages">
  <div class="container">

<% @messages.each do |message| %>
    <div class="message">
      <p class="content"><%= message.content %></p>
      <p class="time"><% message.created_at %></p>
    </div>
    <% end %>
  </div>
</div>


# *** Note that the above language in Rails is considered ERB or Embedded Ruby.

# Example of form in ERB:

<%= form_for(@message) do if |f| %>
    <div class='field'>
      <%= f.label :message %><br>
      <%= f.text_area :content %>
    </div>
    <div class='actions'>
      <%= f.submit "Create" %>
  </div>
  <% end %>
<% end %>

# resrouces :thing - 'resource route' maps URLs to the symbol controller's seven standard actions.





# Migrations - source: https://edgeguides.rubyonrails.org/active_record_migrations.html
  # Think of each Migration as a new 'version' of the database.
  # Active Record - knows how to update schema to the latest version. This will automatically update your db/schema.rb file to match the up-to-date DB structure.

  # The migration below adds a table called products with a string column called name and a text column called description. timestamps adds two columns, created_at and updated_at and are automatically handled ny Active Record. ex:

  class CreateProducts < ActiveRecord::Migration[6.0]
    def change
      create_table :products do |t|
        t.string :name
        t.text :description

        t.timestamps
      end
    end
  end

# Migrations are stored in the db/migrate directory.

# Ex of adding two columns, :part_number and :price to the :products table

class AddDetailsToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :part_number, :string
    add_column :products, :price, :decimal
  end
end

# The below example will create a user_id column and appropriate index? **** Does this just mean, we are adding a column called user_id, that IS a foreign_key, and referneces the :user table or column? ****

class AddUserRefToProducts < ActiveRecord::Migration[6.0]
  def change
    add_reference :products, :user, foreign_key: true
  end
end

# Ex of polymorphic reference column?

class AddDetailsToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :price, :decimal, precision: 5, scale: 2
    add_reference :products, :supplier, polymorphic: true
  end
end

# polymorphic - option - when set to true, adds a type column for belongs_to associations.

# create_table - method will by default generate a primary key called 'id', but can be changed with the :primary_key option.

# create_join_table - creates a has and belongs to many 'join' table. In the below example, this will create a categories_producs table with two colmns called 'category_id' and 'product_id'. These columns have an option ':null' which is set to false by default.

create_join_table :products, :categories

# :null: false can be overriden like so:

create_join_table :products, :categories, column_options: { null: true }

# Note that by default, the name of the table joins together the two specified words in alphabetical order. If you want a custom table name, specify :table_name option like so, which will create a table called 'categorization':

create_join_table :products, :categories, table_name: :categorization


# change_table - used for changing existing tables. The below code removes the columns descripton and name, creates a part_number string column and adds an index on it. Then it renams the upccode column.  Ex:

change_table :products do |t|
  t.remove :description, :name
  t.string :part_number
  t.index :part_number
  t.rename :upccode, :upc_code
end

# change_column - similar to add_column and remove_column. ** Note that change_column command is irreversible **. In the examples below, ':name' field on the products table set to a NOT NULL column, and changes the default value of the :approved filed from true to false.

change_column_null :products, :name, false
change_column_default :products, :approved, from: true, to: false

# Other column modifiers:

# limit Sets the maximum size of the string/text/binary/integer fields.
# precision Defines the precision for the decimal fields, representing the total number of digits in the number.
# scale Defines the scale for the decimal fields, representing the number of digits after the decimal point.
# polymorphic Adds a type column for belongs_to associations.
# null Allows or disallows NULL values in the column.
# default Allows to set a default value on the column. Note that if you are using a dynamic value (such as a date), the default
# will only be calculated the first time (i.e. on the date the migration is applied).
# comment Adds a comment for the column.

# Foreign Keys - The below example creates a author_id column in the articles table. The key references the 'id' column of the 'authors' table.

add_foreign_key :articles, :authors

# Removing a foreign key:

# let Active Record figure out the column name
remove_foreign_key :accounts, :branches

# remove foreign key for a specific column
remove_foreign_key :accounts, column: :owner_id

# remove foreign key by name
remove_foreign_key :accounts, name: :special_fk_name

# Migration definitions:

add_column
add_foreign_key
add_index
add_reference
add_timestamps
change_column_default (must supply a :from and :to option)
change_column_null
create_join_table
create_table
disable_extension
drop_join_table
drop_table (must supply a block)
enable_extension
remove_column (must supply a type)
remove_foreign_key (must supply a second table)
remove_index
remove_reference
remove_timestamps
rename_column
rename_index
rename_table


# More on DB relationships

# has_many - used in models. Notes that a single of whatever Model can have multiple ____ that is referenced. So in the example below, a single Tag can have multiple destinations.

class Tag < ActiveRecord::Base
  has_many :destinations
end

# belongs_to - denotes that each Model belongs to a single ____ model that is referenced. So in the example below, A single destination belongs to a single tag.

class Destination < ActiveRecord::Base
  belongs_to :tag
end

# through: - You can also make associations in models 'through' each other. This allows you to access information about a part's movie via actors, as the actor has a part, and that part belongs to a movie. Like so:

class Movie < ActiveRecord::Base
  has_many :parts
  has_many :actors, through: :parts
end


# Note that you can "name" routes with the 'as:' like so:

get '/tags/:id' => 'tags#show', as: :tag

# This means that when you rake the routes, this path will be "tag" and can be referenced in rails as

tag_path

# Ex of creating a seed for the db.

b1 = Book.create(title: "Eye of the World", author: "Robert Jordan", description: "The most epic story", publisher: "Tor Books", weeks_on_list: 200, rank_this_week: 1)

Review.create(comment: "Unreal, the best series ever written", author: "K Train", book_id: b1.id)

# Then seed the db:

bundle exec rake db:seed

# Now that the data exists, and there is a 'has_many' relationship that a book has many reviews, and a review has only one book, this association allows us to query for data in the controller to be used:

class BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.find params[:id]
    @reviews = @book.reviews
  end
end


# Service workers. Long running syncrhornous web requests in a production applicatino are not a good idea. Need to offload the long-running request ot a background worker.

# On heroku, the max time a request can run for is 30 seconds before receivng a time out error. On herkou, you're paying for application processes, or "Dynos" on Heroku. Specifically made for handling web requests.

# We can add the request to a "to do" list, notify the user that they will receive their results when it is finished.

# Worker - Ruby object that is deployed on another process, which is seperate from teh process handling the web request. This is not limited by the 30 second time out lmit.

#  Redis - databse used as the que

#  sidekiq - Ruby library for managing worker process which reads of a que (redis). Does have another UI library called sinatra. You can add these to your project by adding these libraries to your gem file and gem install.

#  First we need to require sidekiq in our routes file and add a route like this:

require 'sidekiq/web'
mount Sidekiq::Web => "/sidekiq"

#  Now, when you go to to localhost:3000/sidekiq - This will give you the sidekiq que, which shows you the que. Now you can add tasks to the que.

# Now you make your worker by creating a new ruby class and including the sidekiq module. Workers tend to retry over and over again if they fail, but you can turn this off with retry: false.``

# Each worker method has a default 'perform' method which is run when it reads a message off of the queue. You can put messages on the queue and take them off with parameters.

class ReportWorker
  include Sidekiq::Worker
  sidekiq_option retry: false

  def perform()
  end
end

#  Ex of console logging a message every time a process. You can put messages on the queue with parameters and have them read off with parameters?

class ReportWorker
  include Sidekiq::Worker
  sidekiq_option retry: false

  def perform(start_date, end_date)
    puts "SIDEKIQ WORKER GENERATING A REPORT FROM #{start_date} to #{end_date}"
  end
end

#  Note that the worker is called from the controller:

class Sales Controller < ApplicationController
  def index

  end

  def ReportWorker
    ReportWorker.perform_async("07-01-2016", "08-01-2016")
    # The text below is what is rendered to the page when the ReportWorker method is called, after the ReportWorker.perform is called and added to the queue
    render text: "REquest to generate report added to the queuke"
  end
end

# So once you have some tasks added to the queue (you can see these on teh sidekiq dashboard), then in your terminal, you can start running sidekiq with this command, where the integer arguement is the number of threads you want to run:

sidekiq -c 1

#  You will then see it is runing, and with the above example, it should return:
SIDEKIQ WORKER GENERATING A REPORT FROM 07-01-2016 to 08-01-2016

# Note that sidekiq is auto configured to look for Redis on their default port, no need to configure.

# Now you need to update your Procfile and define a new worker type, this will cause this to run on deployment when you push to Heroku.

reportWorker: bundle exec sidekiq -c 1

#  Now you must make sure that Redis is listed as an add on on Heroku. Then you need to set an env variable in Heroku,

REDIS_PROVIDER  # Should be set to equal to REDISTOGO_URL variable (not it's value) (if you picked Reids to go on add ons).

#  Then you should start the 'reportWorker', or whatever it is called in the Heroku dashboard. You can also start this in your terminal with this command. This tells Heroku to scale dyno config so that we have one process of the worker running.

heroku ps:scale reportworker-1

# Now you can run the below command to see heroku logs, note that anything in [] is the name of the dyno, where heroku's dyno appears as herkou[web.1] and app[web.1], and our worker would appear as heroku[reportWorker.1] and app[reportWorker.1].

heroku logs -t

# Once this is running, if something is done on production, you can see the logs of things happening.



#

# Creating a user login system
# source: https://dev.to/kjdowns/creating-a-user-login-system-ruby-on-rails-2kl2

# 1. Add bycrpt to your gemfile - this may have been automatically - then run bundle install, Ex:

gem 'bcrypt'

bundle install

# 2. Creating the model for username and password fields, using the rails generator:
 # - this will create a model and a migration - the migration will create a User table with a username and password column with id and time stamps.
 # - `passsword_digest` is used due to bcrypt, this column will give us access to a password and `password_confirmation` field and allow us to authenticate.

rails g model User username:string password_digest_string

# Next create a helper in the models/user.rb file to verify:

class User < ApplicationRecord
  has_secure_password
end

# create your database using

rails db:create

# then run your migration:

rails db:migrate

# Sessions - This example will use sessions so that a user can be remembered and not have to continuously log in.

# Helpers - methods to tell if there is an active session with the current_user, and return that user's database model.

# Place this code in helpers/application_helper.rb

module ApplicationHelper
  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) if !!session[:user_id]
  end
end

# Routes - setup session and user controllers, session handles logging in and out - basic setup in routes.rb file:

root 'sessions#home'

resources :users, only: [:new, :create, :edit, :update, :show, :destroy]

get '/login' to: 'sessions#login'
post '/login', to: 'sessions#create'
post '/logout', to: 'sessions#destroy'
get '/logout' to: 'sessions#destroy'

# Next create the controller files in app/controllers folder, remember to use the plural for controllers, as this is where they are ALL handled.
# - sessions_controller.rb
# - Remember that in Ruby the double bang "!!" means that it not only returns the opposite boolean, but it ensures the value IS  a boolean and converts it.

# Ex of SessionsController:

class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])

    if !!@user && @user.authentication(params[:password])

      session[:user_id] = @user.user_id
      redirect_to user_path
    else
      message = "Something went wrong! Please try again."
      redirect_to login_path, notice: message
    end
  end
end

# Ex UsersController

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.user_id
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

# Next is creating the views that we can interact with.
# - Create /app/views/users and /sesssions folders to hold the associated views for the corresponding controllers

# Then create the view files that match the actions in the corresponding controller
# - app/views/sessions/login.html.erb ex:

<div>
  <h2>Log In</h2>
  <%= form_tag '/login' do %>
    Username: <%= text_field_tag :username %><br>
    Password: <%= password_field_tag :password %><br>
  <% end %>
</div>

# - app/views/users/new.html.erb

<h1>New Users Page</h1>
<%= form_for @user do |f| %>
  <%= f.label :username %>
  <%= f.text_field :username %><br>
  <%= f.label :password %>
  <%= f.password_field :password %><br>
  <%= f.submit "Create Account" %>
<% end%>































