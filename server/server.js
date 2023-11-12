const express = require('express');
const {join, resolve} = require('path');
const PORT = process.env.PORT || 8080;
express()
    .use(express.static(join(resolve('..'), 'client')))
    .get('/tasks', (request, response) => {
        const tasksSortedByStatus = getTasks();
        Object.keys(tasksSortedByStatus).length > 0
            ? response.json(tasksSortedByStatus)
            : response.sendStatus(204);
    })
    .put('/tasks', (request, response) => {
        if(request.query.task, request.query.oldStatus, request.query.newStatus) {
            if(changeTaskStatus(request.query.task, request.query.oldStatus, request.query.newStatus)) {
                response.sendStatus(204);
            }
        }
    })
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`));