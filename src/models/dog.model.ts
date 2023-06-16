import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

interface DogAttributes {
  id: string;
  name: string;
  color: string;
  tail_length: number;
  weight: number;
};

interface DogCreationAttributes
  extends Optional<DogAttributes, 'id'> {}

interface DogInstance
  extends Model<DogAttributes, DogCreationAttributes>,
    DogAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

const Dog = sequelize.define<DogInstance>(
  'Dog',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: true,
    },
    color: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    tail_length: {
      allowNull: true,
      type: DataTypes.SMALLINT,
      validate: {
        min: 0,
      },
    },
    weight: {
      allowNull: true,
      type: DataTypes.SMALLINT,
      validate: {
        min: 0,
      },
    }
  }
);

export default Dog;