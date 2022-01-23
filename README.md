## SERVER TOKO BUKU
- (Latihan 15: 17. [Books] Delete)

### Express
- [Express Generator](https://expressjs.com/en/starter/generator.html)

### Rancangan Data
- [ERD](https://drive.google.com/file/d/1PnjYvxZks6F1pXzLYLUbeTvKXsR07Mgq/view?usp=sharing)
- [API Planning]('./api-planning.md)

### Cara Installasi
- npm install -g express-generator
  - Untuk menginstall express generator
- express -h
  - Untuk melihat pengaturan express
- express --no-view server-toko-buku
  - Untuk membuat project express automatice secara default
- npm install
  - Untuk menginstall semua dependencies yang tersedia pada file package.json
- npm install -g nodemon
  - Untuk menginstall dependencies nodemon sebagai auto restart menjalankan project express
- npm install --save sequelize mysql2
  - Untuk menginstall dependencies sequelize dan mysql
- npm install --save-dev sequelize-cli
  - Untuk menginstall devDependincies sequelize-cli sebagai mode development
- npm install bcryptjs
  - Untuk menginstall dependencies bcryptjs, dan berfungsi untuk membuat enkripsi pada password yang dibuat
- npm install jsonwebtoken
  - Untuk menginstall dependencies jsonwebtoken, dan berfungsi untuk membuat token data keamanan pada akun tiap user
- npm install multer
  - Untuk menginstall dependencies multer, dan berfungsi untuk mengupload image pada project express

### Perintah Sequelize Membuat Database
- npx sequelize-cli init
  - Untuk automatice dibuatkan folder config, models, migrations, dan seeders
- npx sequelize-cli db:create
  - Untuk automatice dibuatkan database secara migrasi yang sesuai pada file config.json
- npx sequelize-cli db:drop
  - Untuk automatice menghapus database yang sesuai pada file config.json

### Perintah Sequelize Membuat Table
- npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,role:enum
  - Untuk membuat table dengan nama Users beserta attributes nya dan automatice digenerate file user dan migrations
- npx sequelize-cli model:generate --name Category --attributes name:string,user:integer
  - Untuk membuat table dengan nama Categirys beserta attributes nya dan automatice digenerate file category dan migrations
- npx sequelize-cli model:generate --name Book --attributes title:string,user:integer,category:integer,author:string,image:text,published:date,price:integer,stock:integer
  - Untuk membuat table dengan nama Books beserta attributes nya dan automatice digenerate file book dan migrations
- npx sequelize-cli model:generate --name Transaction --attributes invoice:string,user:integer,date:date
  - Untuk membuat table dengan nama Transactions beserta attributes nya dan automatice digenerate file transactions dan migrations
- npx sequelize-cli model:generate --name DetailTransaction --attributes transaction:string,user:integer,book:integer,titleBook:string,imageBook:string,priceBook:integer,quantity:integer
  - Untuk membuat table dengan nama DetailTransactions beserta attributes nya dan automatice digenerate file transactions dan migrations
- npx sequelize-cli db:migrate
  - Untuk membuat table automatice secara migrasi
- npx sequelize-cli db:migrate:undo:all
  - Untuk menghapus semua table yang telah di buat secara migrasi

### Perintah Sequelize Membuat Seeders
- npx sequelize-cli seed:generate --name seeder-user
  - Untuk membuat file seeder-user
- npx sequelize-cli seed:generate --name seeder-category
  - Untuk membuat file seeder-user
- npx sequelize-cli seed:generate --name seeder-book
  - Untuk membuat file seeder-user
- npx sequelize-cli db:seed:all
  - Untuk membuat data table secara migrasi
- npx sequelize-cli db:seed:undo:all
  - Untuk menghapus data table secara migrasi
- npx sequelize-cli db:drop
  - Untuk membuat id data pada tiap table terhitung dari awal

### Perintah Document Sequelize
- npx sequelize-cli -h
  - Untuk melihat perintah sequelize

### Cara Menjalankan
- npm run start
  - Untuk menjalankan project express yang telah di install

### Pengertian
- Up
  - Digunakan untuk membuat table / data
- Down
  - Digunakan untuk menghapus table / data
- table SequelizeMeta
  - Adalah semua table yang ada di dalam file migrations