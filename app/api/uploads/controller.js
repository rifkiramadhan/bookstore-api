const uploadImage = async (req, res, next) => {
    try {
      if (!req.file) {
          return res.status(403).json({
              message: 'No File Upload'
          });
      } else {
          res.status(201).json({
            message: 'Success Upload Image',
            data: {
                src: `/uploads/${req.file.filename}`
            },
          });
      }

    } catch (err) {
        next(err);
    };
};

module.exports = { uploadImage };