const  firebase = require('../config/firebase');
import { adminAuth, firestore } from '../config/firebase'


export const guards = (req, res, next) => {
  
    
      let idToken;
      if (
        req.headers.token 
        
      ) {
        idToken = req.headers.token;
      } else {
        console.error('No token found');
        return res.status(403).json({ error: 'Unauthorized' });
      }
    
    adminAuth
       
        .verifyIdToken(idToken)
        .then(data => {
          next()
        }).catch(error => res.json(error))
};

