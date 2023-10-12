import { configureStore } from '@reduxjs/toolkit';

import businessReduce from './storeBusiness/businessReduce'
import systemStore from './multipleTab/multipleTabReduce';

export const store = configureStore({
    reducer: {
        counter: businessReduce,
        multipleTab: systemStore
    },
});

