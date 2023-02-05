const Formcreationjson = require("../models/formcreationjson-model");

insertformjson = (req, res) => {
    console.log("hi")
  try {
    const body = req.body;
    console.log(body);
    // if (
    //   !body ||
    //   !req.session.user[0].useremail ||
    //   req.session.user[0].useremail !== body.username
    // ) {
    //   return res.status(400).json({
    //     success: false,
    //     error: "You must provide a Formcreationjson",
    //   });
    // }

    const formcreationjson = new Formcreationjson(body);

    if (!formcreationjson) {
      return res.status(400).json({ success: false, error: err });
    }
    // console.log(req.session.user[0].useremail + " ==> " + "Formcreationjson");
    formcreationjson
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: formcreationjson._id,
          message: "Formcreationjson created!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "Formcreationjson not created!",
        });
      });
    //}
  } catch (error) {}
};

getformjson = async (req, res) => {
  try {
    const dataid = req.query.id;
console.log(dataid);
    // if (req.session.user[0].useremail) {
      if (true) {
      // console.log(req.session.user[0].useremail + " ==> " + "gettodo");
      await Formcreationjson.find({ _id: dataid }, (err, formcreationjsons) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        return res.status(200).json({ success: true, data: formcreationjsons });
      }).catch((err) => console.log(err));
    } else {
      return res.status(404).json({ success: false, error: "no result" });
    }
  } catch (error) {}
};

// getallformjson = async (req, res) => {
//   try {
//     if (req.session.user[0].useremail) {
//       await Formcreationjson.find(
//         {
//           $or: [
//             { username: req.session.user[0].useremail },
//             { access: req.session.user[0].useremail },
//           ],
//         },
//         (err, formcreationjsons) => {
//           if (err) {
//             return res.status(400).json({ success: false, error: err });
//           }
//           console.log(req.session.user[0].useremail + " ==> " + "formcreationjsons");
//           return res.status(200).json({ success: true, data: formcreationjsons });
//         }
//       ).catch((err) => console.log(err));
//     } else {
//       return res.status(404).json({ success: false, error: "no result" });
//     }
//   } catch (error) {}
// };
getallformjson = async (req, res) => {
  try {
    const dataid = req.query.id;
console.log(dataid);
    // if (req.session.user[0].useremail) {
      if (true) {
      // console.log(req.session.user[0].useremail + " ==> " + "gettodo");
      await Formcreationjson.find({ username: dataid }, (err, formcreationjsons) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        return res.status(200).json({ success: true, data: formcreationjsons });
      }).catch((err) => console.log(err));
    } else {
      return res.status(404).json({ success: false, error: "no result" });
    }
  } catch (error) {}
};
// removetodo = async (req, res) => {
//   try {
//     const idd = req.query.idd;

//     if (req.session.user) {
//       Todo.deleteOne(
//         { _id: idd, username: req.session.user[0].useremail },
//         (err, questions) => {
//           if (err) {
//             return res.status(400).json({ success: false, error: err });
//           }
//           console.log(req.session.user[0].useremail + " ==> " + "removetodo");
//           return res
//             .status(200)
//             .json({ success: true, data: "remove success " });
//         }
//       ).catch((err) => console.log(err));
//     } else {
//       return res.status(404).json({ success: false, error: "no result" });
//     }
//   } catch (error) {}
// };




module.exports = {
    insertformjson,
    getformjson,
    getallformjson
 
};
