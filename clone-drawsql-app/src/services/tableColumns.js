import { v4 as uuidv4 } from 'uuid';

export const columnData = {
  id: uuidv4(),
  name:'',
  type:'',
  nullable: false,
  key: '',
  options: {
    autoincrement: true,
    unsigned: true,
  },
}
