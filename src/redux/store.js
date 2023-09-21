// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
// import { filtersReducer, tasksReducer } from './reducer';

// Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
