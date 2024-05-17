var mongoose=require('mongoose')
var Schema=mongoose.Schema;
async function mongoconnect(){
var skillschema=new Schema({
    Name:String,
    experience:Number,
    proficiency:String
})
var jobseekerschema=new Schema({
    personname:String,
    email:String,
    Age:Number,
    certified:Boolean,
    skills:[skillschema]
})
var job=mongoose.model('jobseeker',jobseekerschema);
mongoose.connect("mongodb://127.0.0.1:27017/Employee");
var jobseeker1=new job({
    personname:"ram",
    email:"ram@gmail.com",
    Age:22,
    certified:true,
    skills:[{Name:"java",experience:2,proficiency:"beginner"},
    {Name:"python",experience:3,proficiency:"intermediate"}
    ]

})
jobseeker1.save();
const result=await job.find({"skills.experience":{$lte:2}})
result.map(record=>console.log(record))
}
mongoconnect()

