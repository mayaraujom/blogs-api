const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    }
  );

  PostCategoryTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: "categories",
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    Category.belongsToMany(BlogPost, {
      as: "posts",
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  }

  return PostCategoryTable;
}

module.exports = PostCategorySchema;