import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//@desc Auth the user
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Email or password incorrect!');
  }

  res.send({ email, password });
});

//@desc Get user profile
//@route POST /api/users/profile
//@access Protected
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

console.log(user)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});

//@desc Register the user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if(userExists){
    res.status('400')
    throw new Error('User already exists!')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  }else{
    res.status(400)
    throw new Error('User not created!')
  }
});

export { authUser, getUserProfile , registerUser};