const { Activities } = require("../../db");

const deleteActivityController = async (id) => {
    const activityToDelete = await Activities.findByPk(id)
    await activityToDelete.destroy()
    return {
        message: "Activity successfully deleted"
    };
};

module.exports = deleteActivityController;