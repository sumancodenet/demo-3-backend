import { memberCreate, memberUpdate } from "../contoller/member.contoller.js"

export const member = (app) => {
    
    app.post('/api/create-member', memberCreate)
    app.get('/api/update-member', memberUpdate)
};