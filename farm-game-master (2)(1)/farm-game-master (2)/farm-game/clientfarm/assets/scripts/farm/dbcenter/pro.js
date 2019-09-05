//let pra=require('farm/dbcenter/pra.js')
import Pra from 'farm/dbcenter/pra.js'
class Pro{
    constructor(a){
        this._a=a
        let pra=new Pra(this._a)
        pra.post()
    }
    

}
let pro=new Pro()
