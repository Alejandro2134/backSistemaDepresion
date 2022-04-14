import '@fnd/external_interfaces/env';
import { User } from '../models/user/User';

const dbInit = () => {
    User.sync({ force: process.env.ENV == 'development' ? true : false});
};

export { dbInit };
