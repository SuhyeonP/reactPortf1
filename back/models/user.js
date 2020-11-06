module.exports = (sequelize,DataTypes)=>{
    const User=sequelize.define('User', {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            autoIncrement:true,
        },
        userId:{
            type: DataTypes.STRING(45),
            allowNull: false, // 필수
        },
        userName: {
            type: DataTypes.STRING(45),
            allowNull: false, // 필수
        },
        userPw: {
            type: DataTypes.STRING(4),
            allowNull: false, // 필수
        },
        storeUser:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
        sequelize,
    })
    User.associate=(db)=>{
        db.User.hasMany(db.Review);
        db.User.belongsToMany(db.Store,{through:'Follower',as:'Following'});
    }
    return User;
}