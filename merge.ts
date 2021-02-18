import  Like from '../models/Like';

import Scream from "./../models/Scream";
import  { LikeInterface } from "./../models/interface";
import { adminAuth } from '../config/firebase'


const likeOnScream = async (req, res) => {
    const { token } = req.headers;
  
    const { idScream } = req.params;
    
    
     try {
        const uid: any = await (await adminAuth.verifyIdToken(token)).uid;
        const uid_in_like = await Like.find({'idScream': idScream})
         
         
        const newLike = new Like({
            uid: uid,
            idScream: idScream
        })
            const doc = await  uid_in_like.find((data: any) => data.uid === uid)
  
        
        if(uid_in_like === null || !doc) {
            
           const docLike = await newLike.save()
            const response: any = await (await Scream.findById(idScream));
            await (await Scream.findById(idScream)).updateOne({
                likeCount: response.likeCount + 1
            });
           return await res.json(docLike)
        } 
     

        if(doc) {
                    const response: any = await (await Scream.findById(idScream));
                    await (await Scream.findById(idScream)).updateOne({
                      likeCount: response.likeCount - 1
                  });
                  await uid_in_like.map(async doc => {
                     if(doc.get('idScream') === idScream ) {
                        
                       await doc.deleteOne()
                     }
                  })
           return res.json({success_msg: 'you disliked successfully'})
         }
    
    

       
     } catch (error) {
          return res.json(error)
     }
} 

export { likeOnScream }