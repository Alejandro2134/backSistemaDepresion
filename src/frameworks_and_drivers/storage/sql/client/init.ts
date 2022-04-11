import { User } from '../models/user/User';

const dbInit = () => {
    User.sync({ force: true });
};

export { dbInit };
