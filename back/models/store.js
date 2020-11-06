module.exports = (sequelize,DataTypes)=>{
    const Store=sequelize.define('Store', {
        storeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
        },
        storeEmail: {
            type: DataTypes.STRING(45), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
        },
        storeName: {
            type: DataTypes.STRING(20),
            allowNull: false, // 필수
        },
        storeAddress: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        storePart: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(4),
            allowNull: false, // 필수
        },
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    })
    Store.associate=(db)=>{
        db.Store.hasMany(db.Review);
        db.Store.belongsToMany(db.User,{through:'Follower',as:'Follower'})
    }
    return Store;
}