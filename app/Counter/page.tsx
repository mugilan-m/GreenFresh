'use client';
import { useState } from 'react';
import { useCountStore } from './_store';
export default function Page() {
    // Or, we can fetch what we need from the store
    
    // remark below if you don't want to use persist store
    const { addTodo, removeTodo, todos} = useCountStore((state) => state);

   // const store = usePersistStore(useCountStore, (state) => state);
   const [todoText, setTodoText] = useState("");

    return (
        // <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
        //     <h1>
        //         enter your todo 
        //     </h1>
        //     <input type='text' placeholder='enter your todo'  onChange={(e) => setTodoText(e.target.value)}
        // value={todoText}/>
        //     <div className="flex gap-2">
        //         <button onClick={() => {
        //   if (todoText.length) {
        //     addTodo(todoText);
        //     setTodoText("");
        //   }
        // }} className="border border-white p-1.5 font-medium rounded-md">
        //         ADD
        //         </button>
        //         {
        //             todos.map((i,index)=>{
        //                 return(
        //                     <div key={index} >
        //                         <h1>{index}</h1>
        //                         <span>{i.description}</span>
        //                         <button   onClick={() => {
        //           removeTodo(i.id);
        //         }}>remove </button>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </main>
        <div>
            <h1>Hi User !</h1>
        </div>
    );
}


/*

'use client';
import { useCountStore } from './_store';
import usePersistStore from './helpers/usePersistStore';
export default function Page() {
    // Or, we can fetch what we need from the store
    
    // remark below if you don't want to use persist store
     const { count, decrease, increase } = useCountStore((state) => state);

   // const store = usePersistStore(useCountStore, (state) => state);

    return (
        <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1>
                Counter <span>{count}</span>
            </h1>
            <div className="flex gap-2">
                <button onClick={increase} className="border border-white p-1.5 font-medium rounded-md">
                Increase
                </button>
                <button onClick={decrease} className="border border-white p-1.5 font-medium rounded-md">
                Decrease
                </button>
            </div>
        </main>
    );
}
*/