import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

//[POST]
export const save = async (req, res, next) => {
  const { name, gender, birthday, dateAlone, avatar } = req.body;
  if (!gender || !name || !dateAlone) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const newUser = new User({
    name: name ?? "name",
    dateAlone: new Date(dateAlone),
    gender: gender,
    birthday: birthday ?? "1/1/2002",
    avatar: avatar ?? "",
  });
  newUser.save().then((user) => {
    res.status(200).json(user);
  });
};

// //[POST]
export const update = async (req, res, next) => {
  const id = req.params.id;
  if (id) {
    return res.status(400).json({ msg: "Dont have id user" });
  }
  const { name, gender, birthday, dateAlone, avatar } = req.body;
  const user = await User.updateOne(
    { _id: id },
    {
      name: name,
      dateAlone: new Date(dateAlone),
      gender: gender,
      birthday: birthday,
      avatar: avatar,
    }
  )
    .then((docs) => {
      if (docs) {
        User.findById(id, {}).then((data) => {
          res.status(200).json(data);
        });
      }
    })
    .catch((error) => {
      return res
        .status(400)
        .json({ msg: "Dont update profile user", error: error });
    });
};

//[GET]
export const rank = async (req, res, next) => {
  const cursor = User.find()
    .sort({ dateAlone: 1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      return res
        .status(400)
        .json({ msg: "Dont get rank", error: error });
    });
};
