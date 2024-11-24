const db = require('./db');

const getByEmailOrPhone = async (email, phoneNumber) => {
    const [records] = await db.execute(
        `select * from Contact where email = '${email}' or phoneNumber = '${phoneNumber}'`
    );
    return records;
};

const getByEmailAndPhone = async (email, phoneNumber) => {
    const [records] = await db.execute(
        `select * from Contact where email = '${email}' and phoneNumber = '${phoneNumber}'`
    );
    return records;
};

const addContact = async (email, phoneNumber, linkedId = null, linkPrecedence = 'primary') => {
    const [newRecord] = await db.execute(
        `insert into Contact (email, phoneNumber, linkedId, linkPrecedence, createdAt, updatedAt) values(?, ?, ?, ?, now(), now())`,
        [email, phoneNumber, linkedId, linkPrecedence]
    );
    return newRecord.insertId;
};

const updateById = async (id, updates) => {
    const keysToUpdate = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updates), id];
    await db.execute(`update Contact set ${keysToUpdate} where id = ?`, values);
};

const updateByLinkedId = async (linkedId, updates) => {
    const keysToUpdate = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updates), linkedId];
    await db.execute(`update Contact set ${keysToUpdate} where linkedId = ?`, values);
};

const getByLinkedId = async (primaryId) => {
    const [rows] = await db.execute(
        `select * from Contact where (id = ? OR linkedId = ?)`,
        [primaryId, primaryId]
    );
    return rows;
};

const getByEmail = async (email) => {
    const [emails] = await db.execute(
        `select * from Contact where email = ?`, [email]
    );
    return emails;
};

const getByPhone = async (phone) => {
    const [phones] = await db.execute(
        `select * from Contact where phoneNumber = ?`, [phone]
    );
    return phones;
};

module.exports = {
    getByEmailOrPhone,
    getByEmailAndPhone,
    addContact,
    updateById,
    updateByLinkedId,
    getByLinkedId,
    getByEmail,
    getByPhone
};
