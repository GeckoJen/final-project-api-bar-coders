// import admin from "../firebase/firebase-config.js";
// class middleware {
//       async decodeToken(req, res, next) {
//             try {
//                   const token = req.headers.authorization.split(" ")[1];
//                   const decodeValue = await admin.auth().verifyIdToken(token);
//                   if (decodeValue) {
//                         req.user = decodeValue;
//                         return next();
//                   }
//                   return res.json({ message: "Unauthorized" });
//             } catch (e) {
//                   console.log(e);
//                   return res.json({ message: "Internal Error" });
//             }
//       }
// }

// export default new middleware();
