const { Book, Category } = require('../../db/models');
const { Op } = require('sequelize');

module.exports = {
    getAllBooks: async (req, res, next) => {
        try {
            const { keyword = '', category = '' } = req.query;
            let condition = {
                user: req.user.id,
            };

            if (keyword !== '') {
                condition = {
                    ...condition,
                    title: {
                        [Op.like]: `%${keyword}%`
                    },
                };
            };

            if (category !== '') {
                condition = {
                    ...condition,
                    category: category
                };
            };

            const books = await Book.findAll(
                {
                    where: condition,
                    include: {
                        model: Category,
                        attributes: ['id', 'name'],
                    },
                },
            );

            res.status(200).json({
                message: 'Success Get All Books',
                data: books
            });

        } catch (err) {
            next(err);  
        };
    },

    createBooks: async (req, res, next) => {
        try {
          let user = req.user.id;
          const { title, price, category, author, published, stock, image } = req.body;
          const checkCategory = await Category.findOne({
              where: {
                  id: category,
                  user: user
              },
          });
          const books = await Book.create({
            title,
            price,
            category,
            author,
            published,
            stock,
            image,
            user
        });

          if (!checkCategory) {
            return res.status(404).json({
                message: 'Id Category Not Found'
            });
          } else {              
              res.status(201).json({
                  message: 'Success Create Books',
                  data: books
              });
          };

        } catch (err) {
            next(err);
        };
    },

    updateBooks: async (req, res, next) => {
        try {
          let user = req.user.id;
          const { id } = req.params;
          const { title, price, category, author, published, stock, image } = req.body;
          const checkCategory = await Category.findOne({
              where: {
                  id: category,
                  user: user
              },
          });
          const checkBook = await Book.findOne({
            where: {
                id: id
            },
          });

          if (!checkBook) {
            return res.status(404).json({
                mesage: 'Id Book Not Found'
            });
          };

          const books = await checkBook.update({
            title,
            price,
            category,
            author,
            published,
            stock,
            image,
            user
          });

          if (!checkCategory) {
            return res.status(404).json({
                message: 'Id Category Not Found'
            });
          } else {              
              res.status(200).json({
                  message: 'Success Update Books',
                  data: books
              });
          };

        } catch (err) {
            next(err);
        };
    },

    deleteBooks: async (req, res, next) => {
        try {
          const books = await Book.findOne({
              where: {
                  id: req.params.id
              },
          });

          if (!books) {
            return res.status(404).json({
                mesage: 'Id Book Not Found'
            });
          } else {
            books.destroy();
    
            return res.status(200).json({
                mesage: 'Success Delete Books'
            });
          };
        
        } catch (err) {
            next(err);
        };
    }
};