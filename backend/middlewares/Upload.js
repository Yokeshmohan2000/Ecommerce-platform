const multer = require('multer');


const storage=multer.diskStorage({
    destination:"./images",
    filename:(req,file,cb)=>{
        return cb(null,Date.now() + ' ' +file.originalname)
    }
    })
    

// File filter function to accept only image files 
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        // Reject non-image files
        return cb(new Error('Only image files are allowed!'), false);
      }
      // Accept image files
      cb(null, true);
    };


const upload = multer({ storage: storage });

module.exports= upload;
