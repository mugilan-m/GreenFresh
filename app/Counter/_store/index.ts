import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from "uuid";

interface States {
  count: number;
}

interface Todo {
    id: string;
    description: string;
    completed: boolean;
}


interface Actions {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
}

//normal 
// export const useCountStore = create<States & Actions>((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
// }));
//to store data in localstorage
export const useCountStore = create(
    persist<States  & Actions >((set) => ({
            count: 0,
            todos: [],
            addTodo: (description: string) => {
                set((state) => ({
                  todos: [
                    ...state.todos,
                    {
                        id:  uuidv4(),
                        description,
                        completed: false,
                    } as unknown as Todo,
                  ],
                }));
              },
              removeTodo: (id) => {
                set((state) => ({
                  todos: state.todos.filter((todo) => todo.id !== id),
                }));
              },

        }),
        {
            name: 'count-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);



