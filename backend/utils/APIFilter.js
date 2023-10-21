class ApiFilter{
    constructor(query,querystr){
    this.query=query;
    this.querystr=querystr    
    }

    search(){
        const keyword = this.querystr.keyword ?{
            name:{
                $regex:this.querystr.keyword,
                $options:'i'
            }
        }:{}
     

        this.query = this.query.find({...keyword})
        return this
    }


     filter(){
        const queryCopy = {...this.querystr}

        const removeFields= ['keyword','page']
        removeFields.forEach((el)=> delete queryCopy[el])

        this.query = this.query.find(queryCopy)
        return this
     }

}
export default ApiFilter