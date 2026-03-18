// There are many ways to write express but here we will write it in a form so that we can write frontend in same file...

const express = require('express') // We can also use import but need to make change in package.json from commonjs -> module


function block1_basicServer(){
    return new Promise((resolve)=>{
       const app = express()

       app.use(express.json())  // It's a middleware it parses incoming JSON stringf from frontend to js object so that it can be further used in req.body

       // Let's start writing API endPoints

       app.get('/menu',(req,res)=>{
         res.json({
           veg: ["Rajma", "Amritsari Chholey", "Daal Fry"],
           nonVeg: ["Biryani", "Omlette", "Chicken"],
         }); // res.json() has 2 responsibilties 1. It set's content type to application/JSON and also serialize the data

        })


         //**** Query Params**** */
         app.get("/search", (req, res) => {
           const { q, limit } = req.query; // It will be a object and we are destructing q and limit from it...
           res.json({
             query: q,
             limit: limit || "8",
           });
         });


         //**** Route Params**** */
         app.get('/menu/:type',(req,res)=>{
            const {type} = req.params  // Remember it is object so destrcutring will also happen in object way
            res.json({
                type,
                available : "yes"
            })
         })

         // Post
         app.post('/order',(req,res)=>{
            const order = req.body // This is js object
            res.status(200).json({
                status : "created",
                order
            })
         })
         

        const server = app.listen(0,async ()=>{
            const port = server.address().port
            const base = `http://127.0.0.1:${port}`;

            try {
                // console.log(server);
                const menuRes = await fetch(`${base}/menu`);
                console.log(menuRes);
                const menuData = await menuRes.json() // converts String to js object
                console.log(menuData);
                console.log('GET /menu' , JSON.stringify(menuData));

                console.log("*************************************")

                const searchRes = await fetch(
                  `${base}/search?q=biryani&limit=5`,
                );
                const searchData = await searchRes.json();
                console.log("GET /search", JSON.stringify(searchData));
                console.log("+++++++++++++++++++++++++++++++++");

                const menuItemRes = await fetch(`${base}/menu/42`);
                const menuItemData = await menuItemRes.json();
                console.log("POST /menu", JSON.stringify(menuItemData));
                console.log("+++++++++++++++++++++++++++++++++");


                const orderRes = await fetch(`${base}/order`,{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                        body: JSON.stringify({
                            dish:'biryani',
                            quantity : 2
                        })
                    }
                })

                const orderData = await orderRes.json()
                console.log('POST /order' , JSON.stringify(orderData))
                console.log("*******************************")


            }
            catch (error) {
                console.log(error);
            }

            server.close(()=>{
                console.log("Block 1 served....")
                resolve()
            })

            
        })


    })
}

function block_2_response(){
    return new Promise((resolve)=>{
        const app = express()

        app.use(express.json())

        app.get('/text',(req,res)=>{
            res.send('Hii Divyansh here')
        })
        
        app.get('/json',(req,res)=>{
            res.json({
                framework : json,
                version : '4.5.5'
            })
        })

        app.get('/not-found',(req,res)=>{
            res.status(404).json({
                error: "Page not found"
            })
        })

        app.get('/health',(req,res)=>{
            res.sendStatus(200) // it is used in aws and asg detection
        })  // or /ping


        app.get('/old-menu',(req,res)=>{
            // add entry in DB to see how many users are also use old route
            res.redirect(301,'/new-menu')
        })

        app.get('/xml',(req,res)=>{
            res.type('application/xml').send('<dish> <name><Biryani></name></dish>')
        })
       
        app.get('/custom-headers',(req,res)=>{
            res.set('x-powered-by','DevDivyansh')
            res.set('x-Requested-by','12345');
            res.json({
                message : "Custom Headers Set"
            })
        })

        app.get('/no-content',(req,res)=>{
            res.status(204).end()
        })

        const server = app.listen(0,async () =>{
            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`;

            try {
               
                const textRes = await fetch(`${base}/text`);
                console.log(textRes);
                const textData = await textRes.text()
                console.log(textData);
                console.log('GET /text',JSON.stringify(textData))
                
            } catch (error) {
                console.log(error)
            }


            // server.close(()=>{
            //     console.log("Block 2 executed");
            //     resolve()
            // })

            resolve()
        })


    })
}

async function main(){
    await block1_basicServer()
    await block_2_response()
    // process.exit() // It will forcefully close the server...
}

main()





