let token = "4d8fe3636e290006009e0befa7c2b8a81f39f658f0909f67"

export const server_calls ={
    get: async () => {
        const response = await fetch(`https://rogue-glitter-heron.glitch.me/api/cars`,
        //const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json', 
                //'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to fetch data');
        }
        return await response.json()
    },

    create: async(data: any = {}) =>{
        const response = await fetch(`https://rogue-glitter-heron.glitch.me/api/cars`,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json', 
                //'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to create data');
        }
        return await response.json()
    },

    update: async(id:string, data: any = {}) =>{
        const response = await fetch(`https://rogue-glitter-heron.glitch.me/api/cars/${id}`,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json', 
                //'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to update data');
        }
        return await response.json()
    },

    delete: async(id:string) =>{
        const response = await fetch(`https://rogue-glitter-heron.glitch.me/api/cars/${id}`,
        {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json', 
                'x-access-token': `Bearer ${token}`
            },
            //mode: 'cors'
        });
        if (!response.ok){
            throw new Error('Failed to delete data');
        }
        return;
    },

}