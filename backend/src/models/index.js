import User from './user.js';
import Document from './document.js';


//Define Model Relation ships here

User.hasMany(Document, {foreignKey: 'ownerID'});
Document.belongsTo(User, {foreignKey: 'ownerId'});

export {User, Document};