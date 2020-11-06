module.exports = (sequelize,DataTypes)=>{
    const Image=sequelize.define('Image', {
        imageId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            autoIncrement:true,
        },
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    })
    Image.associate=(db)=>{
        db.Image.belongsTo(db.Review);
    }
    return Image;
}