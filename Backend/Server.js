import 'dotenv/config'

import App from './src/App'
import connectToDb from './src/Config/Databse'
connectToDb()
 
const PORT=process.env.PORT||3000

App.listen(PORT,()=>{
    console.log('server is running on port 3000')
})