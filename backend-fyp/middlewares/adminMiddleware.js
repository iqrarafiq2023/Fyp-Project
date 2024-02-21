// adminMiddleware.js

import ErrorHandler from './error.js';
import jwt from 'jsonwebtoken';
export const isAdmin = (req, res, next) => {
  // Check if the authenticated user is an admin
  // const token = req.headers.authorization;
  const { token } = req.cookies;

  if (!token) {
      return next(new ErrorHandler('Unauthorized: No token provided', 401));
  }

   // Verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      console.log(token)
        if (err) {
            return next(new ErrorHandler('Unauthorized: Invalid token', 401));
            
        }

        // Check if the decoded user has admin role
        if (decoded.role === 'Admin') {
            return next();
        } else {
            return next(new ErrorHandler('Access Denied: Admin Only', 403));
          
        }});
      };
