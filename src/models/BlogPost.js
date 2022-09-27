const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    });

  BlogPostTable.associate = ({ User }) => {
    BlogPostTable.belongsTo(User, {
      as: 'user',
      foreignKey: 'userId'
    })
  }

  return BlogPostTable;
}

module.exports = BlogPostSchema;