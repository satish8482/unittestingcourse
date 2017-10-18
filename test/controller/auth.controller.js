
function AuthController(){

    function isAuthorised(roles,neededRole ){

        return roles.indexOf(neededRole) >=0;
    
    }
     return {isAuthorised};



}

module.exports=AuthController();