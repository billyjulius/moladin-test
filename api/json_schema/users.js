const users = {
    type: 'object',
    required: ['id', 'email', 'first_name', 'last_name', 'avatar']    
}

const getUsers = {
    type: 'object',
    required: ['data'],
    properties: {
        data: users
    }
}

const listUsers = {
    type: 'object',
    required: ['page', 'per_page', 'total', 'total_pages', 'data'],
    properties: {
        data: {
            type: 'array',
            items: users
        }
    }
}

module.exports = {getUsers, listUsers}