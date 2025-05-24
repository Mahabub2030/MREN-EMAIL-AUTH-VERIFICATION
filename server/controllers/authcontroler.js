
import bcrypt from 'bcryptjs'

export const regiser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.json({success:false, message:'missing details'})
    }
    try {
        
    } catch { error } {
        res.json({success:false, message: error.message})
    }
}