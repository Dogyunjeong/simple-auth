import bcrypt from 'bcrypt'

const saltRounds = 10;

export const saltPassword = (password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if (err) {
                return reject(err)
            } else {
                return resolve(hash)
            }
        });
    })
}