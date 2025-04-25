import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.router();
   // register a new user
 router.post('/register', async(req, res)=> {

    // password hashing

    // new user create 

    // save new user

    // return  status to UI

 });





    // login and generate JWT 
    router.post('/login', async(req, res)=> {

        // user find out based on username

        // if user found then verify decrypted password 

        // if password mismatch send error message to ui

        // if password matched then generate JWT token 

        // if JWT token created successfully then it back to UI

    });
