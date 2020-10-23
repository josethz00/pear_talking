import { mongoose } from "@typegoose/typegoose";
import { MONGODB_TESTS } from '../config';

export const testsConnection = () => { 
    const testc = mongoose.createConnection();
    testc.openUri(MONGODB_TESTS, { useNewUrlParser: true, useUnifiedTopology: true });
    return testc;
};