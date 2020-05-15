import Home from './components/Home';
import Header from './components/Header'

const User = resolve => {
    require.ensure(["./components/user/User"] , () => {
        resolve(require("./components/user/User"));
    }, "User" ) // sondaki ekledigimiz user user comp. eklenince altindakileride bundle a eklemek icin
}

const UserStart = resolve => {
    require.ensure(["./components/user/UserStart"] , () => {
        resolve(require("./components/user/UserStart"));
    }, "User")
}

const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail"] , () => {
        resolve(require("./components/user/UserDetail"));
    }, "User")
}

const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit"] , () => {
        resolve(require("./components/user/UserEdit"));
    }, "User")
}

// import User from './components/user/User';
// import UserStart from './components/user/UserStart';
// import UserDetail from './components/user/UserDetail';
// import UserEdit from './components/user/UserEdit';


export const routes = [ //hangi istek gelirse hangi component calisacak
    {path : '/' , name: 'anasayfa'  , components : {
        default : Home ,
        "header-top" : Header
    } } ,
    {path : '/user/' , name: 'kullanici' ,
    components : {
        default : User,
        "header-top" : Header
    },
    children : [
        { path: '', component : UserStart }, // /user
        { path: ':id', component : UserDetail , beforeEnter: (to, from, next) => {
            console.log("root seviyesinde kontrol");
            next(true);
        } }, // /user/12
        { path: ':id/edit', component : UserEdit , name : "userEdit"}, // /user/12/edit
    ]},
    { path : "/redirect" , redirect : "/user"  },
    { path :  "*" , redirect : "/"  }
];
