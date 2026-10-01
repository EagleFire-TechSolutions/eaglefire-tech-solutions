import  Contact  from "../models/contact.model.js";
import createContact from "../services/contact.service.js";
import sendContactNotification from "../services/email.service.js";

const contactForm = async (req, res) => {
    try {
        const {
            name,
            email,
            budget,
            projectType,
            message
        } = req.body;

        if (!name || !email || !projectType || !message) {
            return res.status(400).json({
                message: "Please provide all required fields.",
                success: false
            });
        }

        const contactCreate = await createContact({
            name,
            email: email.toLowerCase(),
            budget,
            projectType,
            message
        });
        await sendContactNotification({
    name,
    email,
    projectType,
    budget,
    message
});

        return res.status(201).json({
            message: "New contact has been created.",
            success: true,
            data: {
                id: contactCreate._id,
                name: contactCreate.name,
                projectType: contactCreate.projectType,
                budget: contactCreate.budget,
                message: contactCreate.message,
                status: contactCreate.status
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

export default contactForm;