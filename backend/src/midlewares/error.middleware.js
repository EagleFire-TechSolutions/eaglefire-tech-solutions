const validateContact = (req, res, next) => {
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

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanBudget = budget ? budget.trim() : "";
    const cleanProjectType = projectType.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanProjectType || !cleanMessage) {
        return res.status(400).json({
            message: "Please provide all required fields.",
            success: false
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
        return res.status(400).json({
            message: "Please provide a valid email address.",
            success: false
        });
    }

    if (cleanName.length > 100) {
        return res.status(400).json({
            message: "Name should not exceed 100 characters.",
            success: false
        });
    }

    if (cleanMessage.length > 1000) {
        return res.status(400).json({
            message: "Message should not exceed 1000 characters.",
            success: false
        });
    }
    req.body = {
    name: cleanName,
    email: cleanEmail,
    budget: cleanBudget,
    projectType: cleanProjectType,
    message: cleanMessage
};

    next();
};

export default validateContact;