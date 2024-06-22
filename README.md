# goqii-task

A basic crud operation using react , (node and php laravel).

# Technologies Used

Node.js
Express.js
MySQL
JWT Authentication
Features
User Registration & Authentication
CRUD Operations on User Data
JWT-based Authorization
Password Hashing

# Prerequisites

Node.js: Ensure Node.js is installed (version >= 12.x)
npm: npm should be installed (version >= 10.x)
PHP: PHP version >= 8.0 for Laravel project
Composer: Dependency manager for PHP

#Installation
Node.js (Express) Project

1. Clone the Repository
   git clone https://github.com/CHANDAN605/goqii-task
   cd goqii-task

2. Install Dependencies
   npm install

3. Configure Environment Variables

Create a .env file in the root directory:
DB_USERNAME=root
DB_PASSWORD=""
DB_NAME=goqii
DB_HOST=127.0.0.1
JWT_SECRET=your_jwt_secret
PORT=8000

4. Start the Server
   npm start

# PHP (Laravel) Project

Clone the Repository

git clone https://github.com/CHANDAN605/php-crud-api.git
cd php-crud-api

2. Install Dependencies
   composer install

3. Configure Environment Variables
   cp .env.example .env

Edit the .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=goqii
DB_USERNAME=root
DB_PASSWORD=

4. Generate Application Key
   php artisan key:generate

5. Run Migrations and Passport Installation (for Laravel)

php artisan migrate
php artisan passport:install

6. Start the Server
   php artisan serve

# API list

1. POST /api/register
2. POST /api/login
3. GET /api/users --get all users
4. GET /api/users/:id -- get user by id
5. PUT /api/users/:id --update user
6. DELETE /api/users/:id --delete user
