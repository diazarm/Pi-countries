const { Activities } = require("../../db");

const deleteActivityController = async (id) => {
    console.log("a destruir "+id);
    const activityToDelete = await Activities.findByPk(id)
    await activityToDelete.destroy()
    return {
        message: "Activity successfully deleted"
    };
};

module.exports = deleteActivityController;