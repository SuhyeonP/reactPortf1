module.exports=(sequelize,DataTypes)=>{
    const Review=sequelize.define('Review', {
        reviewId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    })
    Review.associate=(db)=>{
        db.Review.belongsTo(db.User);
        db.Review.belongsTo(db.Store);
        db.Review.hasMany(db.Image)
    }
    return Store;
}