export interface User {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
}

export function getUser(id: string, callback: (user: User) => void) {
    // db.collection('users', function(error, users) {
    //     if(error) { console.error(error); return; }
    //     users.find({_id: id}).batchSize(10).nextObject(function(error, user) {
    //         if(error) { console.error(error); return; }
    //         callback(user);
    //     });
    // });
    callback({_id: id, email: "", first_name: "", last_name: ""});
}