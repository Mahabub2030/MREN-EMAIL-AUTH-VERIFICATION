
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const regiser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.json({success:false, message:'missing details'})
    }
    try {
        const existingUser = await userModel


        const hashedPassword = await bcrypt.hash(password, 10);

        
    } catch { error } {
        res.json({success:false, message: error.message})
    }
}