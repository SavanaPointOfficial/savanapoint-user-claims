import { adminAuth } from '../config/firebase';

import  Claims  from '../models/claims'

export const createClaims = async (req, res) => {
    const { token } = req.headers;
    const { claims } = req.body;
     
    try {
        const uid = await (await adminAuth.verifyIdToken(token)).uid;
     
   await adminAuth.setCustomUserClaims(uid, claims)
    .then(user => {
        
          return res.status(200).json({success_msg: "your account claims has been updated successfully"})
    }).catch(error => {
        return res.json(error)
    })
    } catch (error) {
        return res.json(error)
    }
}

export const getClaims = (req, res) => {
    const { token } = req.headers;
    adminAuth.verifyIdToken(token).then((token) => {
        return res.json(token)
    }).catch(error => {
        return res.json(error)
    })
}