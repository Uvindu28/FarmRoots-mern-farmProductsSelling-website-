import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";


export const update = async (req,res,next)=> {

    if (req.params.id === req.user.id) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          next(err);
        }
      } else {
        return next(createError(403, "You can update only your account!"));
      }

}
export const deleteUser = async (req,res,next)=> {

    if (req.params.id === req.user.id) {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted.");
        } catch (err) {
          next(err);
        }
      } else {
        return next(createError(403, "You can delete only your account!"));
      }
}
export const getUser = async (req,res,next)=> {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
      } catch (err) {
        next(err);
      }

}

export const like = async (req, res, next) => {
  const id = req.user.id;
  const userId = req.params.userId;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    }, { new: true });  // Return the updated user

    res.status(200).json({
      message: "The profile has been liked.",
      likesCount: updatedUser.likes.length,
      dislikesCount: updatedUser.dislikes.length,
    });
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const userId = req.params.userId;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    }, { new: true });  // Return the updated user

    res.status(200).json({
      message: "The profile has been disliked.",
      likesCount: updatedUser.likes.length,
      dislikesCount: updatedUser.dislikes.length,
    });
  } catch (err) {
    next(err);
  }
};
