/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URI:"mongodb+srv://umer:123@cluster0.nszpwqv.mongodb.net/ecom?retryWrites=true&w=majority"
    ,
    Api_URL: 'http://localhost:3000'},
}

module.exports = nextConfig
