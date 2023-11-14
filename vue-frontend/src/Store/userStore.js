import axios from "axios";

export const userStore = {
    namespaced : true,
    state : () => ({
        test : 0,
        test1 : {
            test1_a : 'a',
            test1_b : 'b',
        }
    }),
    getters : {
        getTest : state => state.test,
        getTest1 : state => state.test1,
        getTest1_a : state => state.test1['test1_a'],
    },
    mutations : {
        setTest : (state, data) => {
            state.test = data
        },
        setTest1 : (state, data) => {
            state.test1['test1_a'] = data['a']
            state.test1['test1_b'] = data['b']
        }
    },
    actions : {
        getAPIfromServer : context => {
            axios({
                url:'',
                method:'POST',
                headers:{
                    'Content-type': 'application/json',
                },
                data:JSON.stringify({
                    'test':'test'
                })
            })
            .then( (res) => {
                console.log(res);
            })
        }
    }
}