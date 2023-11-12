const {existsSync, readFileSync, writeFileSync} = require('fs');
module.exports = function(path) {
    const tasksSortedByStatus = null;
    if(existsSync(path))
        tasksSortedByStatus = JSON.parse(readFileSync(path));
    else
        ;

    return {
        getTasks() {
            return tasksSortedByStatus;
        },
        changeTaskStatus(task, oldStatus, newStatus) {
            if(tasksSortedByStatus[oldStatus] instanceof Array && tasksSortedByStatus[newStatus] instanceof Array) {
                for (let i = 0; i < tasksByStatus[oldStatus].length; i++) {
                    if (tasksByStatus[oldStatus][i] === task) {
                        index = i;
                        break;
                    }
                }
                if(index !== -1) {
                    tasksSortedByStatus[oldStatus].splice(index, 1);
                    tasksSortedByStatus[newStatus].push(task);
                    writeFileSync(path, JSON.stringify(tasksSortedByStatus));
                }
                return true;
            }
            return false;
        }
    };
};