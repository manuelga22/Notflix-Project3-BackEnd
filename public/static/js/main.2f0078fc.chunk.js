(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){e.exports=a(397)},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},221:function(e,t,a){},369:function(e,t){},371:function(e,t){},373:function(e,t){},394:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(77),s=a.n(o),c=(a(153),a(4)),l=a(5),i=a(7),m=a(6),u=a(8),p=(a(154),a(9)),h=(a(155),a(3)),d=a.n(h),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={moviesToShow:[],searchValue:""},a.doLogOut=function(){d.a.post("".concat("https://thenotflix.herokuapp.com","/route/logout"),{},{withCredentials:!0}).then(function(e){console.log(e),a.props.getUser(),a.props.emptyTheState(),a.props.history.push("/")}).catch(function(e){console.log(e)})},a.searchBar=function(e){a.props.history.push("/showResults/".concat(a.state.searchValue))},a.handleChange=function(e){a.setState({searchValue:e.target.value})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper colorNav"},r.a.createElement(p.b,{to:"/",className:"left logo"},r.a.createElement("span",{href:"#",className:"brand-logo left-align"},r.a.createElement("b",null,"Notflix"))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},this.props.user?r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement("span",{className:"welcomeUser "},"Welcome ",this.props.user.nickName)),r.a.createElement("li",null,r.a.createElement("button",{className:"btn red",onClick:this.doLogOut},"Log-out")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/favorites"},r.a.createElement("button",{href:"#",className:"btn red"},"Favorites"))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/profile"},r.a.createElement("button",{href:"#",className:"btn red"},"Profile")))):r.a.createElement(n.Fragment,null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signUp"},r.a.createElement("button",{href:"#",className:"btn red"},"Sign-Up"))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/logIn"},r.a.createElement("button",{href:"#",className:"btn red"},"Log-In")))),r.a.createElement("li",null,r.a.createElement("nav",{className:"searchBar "},r.a.createElement("div",{className:"nav-wrapper searchBar white "},r.a.createElement("form",{onSubmit:this.searchBar},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{id:"search",onChange:this.handleChange,value:this.state.searchValue,type:"search"}),r.a.createElement("label",{className:"label-icon",htmlFor:"search"},r.a.createElement("i",{className:"material-icons black-text"},"search")),r.a.createElement("i",{className:"material-icons black-text"},"close")))))))))))}}]),t}(n.Component),f=(a(43),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={movies:[],newMovies:[],loading:!0},a.fetchPopularMovies=function(){d.a.get("".concat("https://thenotflix.herokuapp.com","/route/getMovies")).then(function(e){a.setState({movies:e.data.movies,loading:!1})}).catch(function(e){return console.log(e)})},a.fetchNewestMovies=function(){d.a.get("".concat("https://thenotflix.herokuapp.com","/route/newMovies")).then(function(e){a.setState({newMovies:e.data.movies,loading:!1})}).catch(function(e){return console.log(e)})},a.getPopularMovies=function(){return a.state.movies.map(function(e,t){return r.a.createElement(p.b,{className:"links ",key:t,to:"/movieInfo/".concat(e.imdb_id)},r.a.createElement("img",{className:"imageSizeHome force-overflow zoom hoverable z-depth-5 ",src:e.images.banner,alt:""}))})},a.getNewestMovies=function(){return a.state.newMovies.map(function(e,t){return r.a.createElement(p.b,{className:"links ",key:t,to:"/movieInfo/".concat(e.imdb_id)},r.a.createElement("img",{className:"imageSizeHome force-overflow zoom hoverable z-depth-5 ",src:e.images.banner,alt:""}))})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchPopularMovies(),this.fetchNewestMovies()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"movieCartHome scrollbar",id:"style-3"},r.a.createElement("h3",{className:"titleCategory"},r.a.createElement("b",null,"Popular Movies")),this.state.loading?r.a.createElement("div",{className:"progress white"},r.a.createElement("div",{className:"indeterminate red"})):r.a.createElement(n.Fragment,null,this.getPopularMovies())),r.a.createElement("div",{className:"movieCartHome scrollbar",id:"style-3"},r.a.createElement("h3",{className:"titleCategory"},r.a.createElement("b",null,"Newest Movies")),this.state.loading?r.a.createElement("div",{className:"progress white"},r.a.createElement("div",{className:"indeterminate red"})):r.a.createElement(n.Fragment,null,this.getNewestMovies())))}}]),t}(n.Component)),g=a(27),E=(a(90),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={message:null,username:"",password:"",nickName:"",password2:"",newImage:null,user:{}},a.tryToSignUp=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.nickName,o=a.state.password2,s=a.state.newImage,c=new FormData;c.append("username",t),c.append("password",n),c.append("nickName",r),c.append("password2",o),c.append("image",s),d.a.post("".concat("https://thenotflix.herokuapp.com","/route/signup"),c,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then(function(e){a.props.getUser(),a.setState({user:e.data.user},function(){a.props.history.push("/")})}).catch(function(e){return console.log(e)})},a.handleError=function(){},a.updateUser=function(e){console.log(e.target.name),a.setState(Object(g.a)({},e.target.name,e.target.value))},a.updateFileInState=function(e){a.setState({newImage:e.target.files[0]})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"userForm container hoverable"},r.a.createElement("h3",null,"Create your Account"),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:this.tryToSignUp},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{placeholder:"Name",id:"nickName",name:"nickName",type:"text",class:"validate",onChange:function(t){return e.updateUser(t)}}),r.a.createElement("label",{htmlfor:"nickName"})),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("label",null,"Add a profile Picture"),r.a.createElement("input",{type:"file",class:"validate",name:"image",onChange:this.updateFileInState})),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"email",type:"text",name:"username",placeholder:"email",class:"validate",onChange:function(t){return e.updateUser(t)}}),r.a.createElement("label",{htmlfor:"email"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",type:"password",name:"password",placeholder:"enter password",class:"validate",onChange:function(t){return e.updateUser(t)}}),r.a.createElement("label",{htmlfor:"password"})),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password2",type:"password",name:"password2",placeholder:"confirm password",class:"validate",onChange:function(t){return e.updateUser(t)}}),r.a.createElement("label",{htmlfor:"password2"}))),r.a.createElement("div",{className:"row"}),r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Create",r.a.createElement("i",{className:"material-icons right"},"done")))),this.state.message?r.a.createElement("div",null,this.handleError()):r.a.createElement("p",null))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.updateInputs=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.tryToLogin=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;d.a.post("".concat("https://thenotflix.herokuapp.com","/route/login"),{username:t,password:n},{withCredentials:!0}).then(function(){a.props.getUser(),a.props.history.push("/")})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"logInCart font-color "},r.a.createElement("form",{className:"logIn hoverable font-color",onSubmit:this.tryToLogin},r.a.createElement("h2",null,"Log-In"),r.a.createElement("label",{for:"username"}),r.a.createElement("input",{name:"username",placeholder:"email",onChange:this.updateInputs,required:!0}),r.a.createElement("label",{for:"password"}),r.a.createElement("input",{name:"password",placeholder:"password",type:"password",onChange:this.updateInputs,required:!0}),r.a.createElement("button",{className:"btn waves-effect waves-light red"},"log-in")))}}]),t}(n.Component),w=a(42),y=(a(220),a(221),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).trigger=r.a.createElement(w.Button,null,"Edit"),a.state={nickName:"",username:"",newimage:""},a.updateFileInState=function(e){console.log(e.target.files[0]),a.setState({newimage:e.target.files[0]})},a.printTheUserInfo=function(){if(a.props.user)return r.a.createElement("div",{className:"ProfileInfo "},r.a.createElement("img",{className:"ProfilePicture",src:a.props.user.image,alt:""}),r.a.createElement("div",{className:"profileInfo2"},r.a.createElement("h3",null,r.a.createElement("b",null,"Name:")," ",a.props.user.nickName),r.a.createElement("h4",null,r.a.createElement("b",null,"Email:")," ",a.props.user.username)))},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value)),console.log([e.target.name],e.target.value)},a.update=function(e){e.preventDefault();var t=a.state.nickName,n=a.state.username,r=(a.state.newimage,new FormData);r.append("username",t),r.append("nickName",n),r.append("imageUrl",a.state.newimage),d.a.post("".concat("https://thenotflix.herokuapp.com","/route/user/edit/").concat(a.props.user._id),r).then(function(){console.log("updating user info"),a.props.getUser()}).catch(function(e){return console.log(e)})},a.deleteUser=function(){d.a.post("".concat("https://thenotflix.herokuapp.com","/route/user/delete/").concat(a.props.user._id)).then(function(){a.props.getUser(),a.props.history.push("/")}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t={color:"black"};return r.a.createElement(n.Fragment,null,this.printTheUserInfo(),r.a.createElement(w.Modal,{header:"Edit Your Profile Information",trigger:this.trigger},r.a.createElement("form",{onSubmit:this.update,style:t},this.props.user?r.a.createElement(n.Fragment,null,r.a.createElement("label",{for:"name"},"Change your profile picture"),r.a.createElement("input",{type:"file",name:"imageUrl",onChange:this.updateFileInState}),r.a.createElement("label",{for:"username"}),r.a.createElement("input",{name:"username",type:"email",onChange:function(t){return e.handleChange(t)},placeholder:this.props.user.username,style:t,required:!0}),r.a.createElement("label",{for:"nickName"}),r.a.createElement("input",{name:"nickName",type:"text",onChange:function(t){return e.handleChange(t)},placeholder:this.props.user.nickName,style:t,required:!0}),r.a.createElement("button",{className:"btn"},"Submit")):r.a.createElement("p",null,"there is no user logged in"))),r.a.createElement("button",{onClick:this.deleteUser,className:"btn deleteBtn"},"Delete Your Profile"))}}]),t}(n.Component)),N=a(147),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={moviesToShowInFavorites:null},a.showMoviesInFavorites=function(){return console.log(a.state.moviesToShowInFavorites),a.props.getUser(),0===a.props.user.favorites.length?(a.setState({moviesToShowInFavorites:null}),r.a.createElement("h2",null,"No Movies in Favorites")):a.state.moviesToShowInFavorites.map(function(e,t){return console.log(e),r.a.createElement("div",{className:"favoritesList"},r.a.createElement(p.b,{className:"linksOfFavorites imageSize",key:t,to:"/movieInfo/".concat(e.imdb_id)},r.a.createElement("img",{className:"imageSize hoverable z-depth-5 zoom",key:t,src:e.images.banner,alt:""})),r.a.createElement("button",{className:"btn",onClick:function(){var t=e._id,n=a.props.user._id;a.props.deleteFromList(t,n).then(function(){a.props.getUser(),setTimeout(function(){a.getActualMoviesWithTheInfo()},500)})}},"Delete from list"))})},a.getActualMoviesWithTheInfo=function(){var e=[];console.log(a.props.user),a.props.user.favorites.forEach(function(t){console.log("getting info",t.movies),d.a.get("".concat("https://thenotflix.herokuapp.com","/route/getInfoOfmovie/").concat(t.movies)).then(function(n){console.log(n);var r=Object(N.a)({},n.data.movie);r._id=t._id,e.push(r),a.setState({moviesToShowInFavorites:e})})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state),setTimeout(function(){e.getActualMoviesWithTheInfo()},200)}},{key:"render",value:function(){return r.a.createElement("div",{className:"movieCart"},this.state.moviesToShowInFavorites?this.showMoviesInFavorites():r.a.createElement("h2",null,"Nothing In Favorites"))}}]),t}(n.Component),O=a(23),I=a.n(O),j=a(37),x=(a(223),function(e){function t(){var e,o;Object(c.a)(this,t);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return(o=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={img:"",synopsis:"",title:"",torrentID:"",loading:!0,opened:!1,torrenthash:"",downloadLink:"",checkbox:!0,comment:"",isTheMovieInFavorites:!1},o.getLinksForDownload=function(){var e=a(359);d.a.get("".concat("https://thenotflix.herokuapp.com","/route/movieInfo/").concat(o.props.match.params.id)).then(function(t){var a=t.data.movieInfo;console.log(a),o.setState({img:a.images.banner,title:a.title,synopsis:a.synopsis,torrentID:a.torrents.en["1080p"].url,loading:!1}),o.setState({torrenthash:e(o.state.torrentID).infoHash.toUpperCase()}),o.setState({downloadLink:"https://yts.lt/torrent/download/".concat(o.state.torrenthash)})})},o.addToFavorites=function(e){o.setState({checkbox:!o.state.checkbox},function(){o.state.checkbox?o.props.user.favorites.forEach(function(e){d.a.get("".concat("https://thenotflix.herokuapp.com","/route/getMovie/").concat(e._id)).then(function(t){o.props.match.params.id===t.data.movie&&(o.props.getUser(),o.props.deleteFromList(e._id,o.props.user._id)),o.props.getUser()})}):(d.a.post("".concat("https://thenotflix.herokuapp.com","/route/addToFavorites/").concat(o.props.user._id,"/").concat(o.props.match.params.id),{}).then(function(e){o.props.getUser(),console.log(e)}),o.setState({state:o.state}))})},o.handleTextArea=function(e){o.setState({comment:e.target.value})},o.handleMovieReview=function(e){e.preventDefault();var t=o.state.comment;o.props.user.favorites.forEach(function(){var e=Object(j.a)(I.a.mark(function e(a){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.movies!==o.props.match.params.id){e.next=3;break}return e.next=3,d.a.post("".concat("https://thenotflix.herokuapp.com","/route/createNote/").concat(a._id),{review:t});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},o.isMovieInFavorites=function(){o.props.user.favorites.forEach(function(e){e.movies===o.props.match.params.id&&o.setState({isTheMovieInFavorites:!0})})},o.getInfoOfMovie=function(){return r.a.createElement("div",{className:"container infoOfMovies"},r.a.createElement("div",{className:"titleAndSynopsis"},r.a.createElement("h1",{className:"titleInfo"},o.state.title),r.a.createElement("p",{className:"synopsis"},o.state.synopsis),r.a.createElement("a",{className:"btn downloadBtn ",href:o.state.downloadLink},"Download"),o.props.user?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:o.addToFavorites}),r.a.createElement("span",null,"Add to favorites"))),o.state.isTheMovieInFavorites?r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:o.handleMovieReview},r.a.createElement("textarea",{type:"text",placeholder:"Add a review",style:{color:"white"},onChange:o.handleTextArea,required:!0}),r.a.createElement("button",{className:"btn grey"},"submit")),r.a.createElement(p.b,{to:"/movieReview/".concat(o.props.match.params.id)},r.a.createElement("button",{className:"btn red"},"See Reviews"))):r.a.createElement("p",null)):r.a.createElement("p",null)),r.a.createElement("img",{className:"bannerInfo",src:o.state.img,alt:""}))},o}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getLinksForDownload(),setTimeout(function(){e.isMovieInFavorites()},500)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?r.a.createElement("div",{className:"progress white"},r.a.createElement("div",{className:"indeterminate red"})):this.getInfoOfMovie())}}]),t}(n.Component)),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={movieResults:[]},a.fetchMovies=function(e){d.a.get("".concat("https://thenotflix.herokuapp.com","/route/search/").concat(e)).then(function(e){a.setState({movieResults:e.data.movie})}).catch(function(e){console.log(e)})},a.showMovies=function(){return a.state.movieResults.map(function(e,t){return r.a.createElement(p.b,{className:"links",key:t,to:"/movieInfo/".concat(e.imdb_id)},r.a.createElement("img",{className:"imageSize zoom",src:e.images.banner,alt:""}))})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movies;this.fetchMovies(e)}},{key:"shouldComponentUpdate",value:function(e){return console.log(this.props.match.params.movies,e.match.params.movies),!0}},{key:"render",value:function(){return r.a.createElement("div",{className:"movieCart"},this.state.movieResults.length>=1?this.showMovies():r.a.createElement("div",{className:"progress white"},r.a.createElement("div",{className:"indeterminate red"})))}}]),t}(n.Component),S=(a(394),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ObjectId:"",reviews:[],loading:!0,comment:"",theReview:""},a.getAllReviews=function(){console.log(a.props.user),console.log(a.props),a.props.user.favorites.forEach(function(){var e=Object(j.a)(I.a.mark(function e(t,n){var r;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.movies!==a.props.match.params.movieId){e.next=13;break}return e.prev=1,e.next=4,d.a.get("".concat("https://thenotflix.herokuapp.com","/route/getReviews/").concat(t._id));case 4:r=e.sent,console.log(r.data.reviews.review),a.setState({reviews:r.data.reviews.review,loading:!1}),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return");case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t,a){return e.apply(this,arguments)}}())},a.deleteReview=function(e){console.log(e.review),a.props.user.favorites.forEach(function(){var t=Object(j.a)(I.a.mark(function t(n,r){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n),n.movies!==a.props.match.params.movieId){t.next=13;break}return console.log("here"),t.prev=3,t.next=6,d.a.post("".concat("https://thenotflix.herokuapp.com","/route/delete/").concat(n._id,"/").concat(e.review),{});case 6:a.getAllReviews(),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(3),console.log(t.t0),t.abrupt("return");case 13:case"end":return t.stop()}},t,null,[[3,9]])}));return function(e,a){return t.apply(this,arguments)}}())},a.updateReview=function(e,t){t.preventDefault(),console.log(e),a.props.user.favorites.forEach(function(){var t=Object(j.a)(I.a.mark(function t(n,r){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.movies!==a.props.match.params.movieId){t.next=10;break}return t.prev=1,t.next=4,d.a.post("".concat("https://thenotflix.herokuapp.com","/route/update/").concat(n._id,"/").concat(e,"/").concat(a.state.theReview),{review:a.state.theReview});case 4:a.getAllReviews(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e,a){return t.apply(this,arguments)}}())},a.handleTextArea=function(e){console.log(e.target.value),a.setState({theReview:e.target.value}),console.log(a.state.theReview)},a.setStateOfComment=function(e){a.setState({comment:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.getAllReviews()},500)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w.Modal,{id:"editReviewForm",header:"Edit The Review"},r.a.createElement("form",{onSubmit:function(t){return e.updateReview(e.state.comment,t)}},r.a.createElement("textarea",{type:"text",name:"review",style:{color:"black"},onChange:this.handleTextArea,placeholder:this.state.comment,required:!0}),r.a.createElement("button",{className:"btn "},"submit"))),this.state.loading?r.a.createElement("p",null,"loading..."):this.state.reviews.map(function(t){return r.a.createElement("div",{className:"reviewCart container "},r.a.createElement("p",{style:{color:"white"}},t),r.a.createElement("div",{className:"btnReview "},r.a.createElement("button",{className:"btn reviewBtn grey",onClick:function(){e.deleteReview({review:t})}},"Delete review"),r.a.createElement("button",{href:"#editReviewForm",className:"modal-trigger btn reviewBtn grey",onClick:function(){e.setStateOfComment(t)}},"Edit")))}))}}]),t}(n.Component)),F=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer dark grey darken-3 footerConfiguration"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l6 s12"},r.a.createElement("h5",{className:"white-text"},"Third Project made by Manuel Garcia"),r.a.createElement("p",{className:"grey-text text-lighten-4"},"Download movies for free in 1080p")),r.a.createElement("div",{className:"col l4 offset-l2 s12"},r.a.createElement("h5",{className:"white-text"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"})),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"})),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"})),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"})))))))}}]),t}(n.Component),M=a(28),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).moviesInSearch=[],a.state={currentlyLoggedIn:null,test:!1,movieLink:[],idObjectsMoviesInFavorites:[],imdbIdsOfMovie:[],moviesToShowInFavorites:[]},a.getCurrentlyLoggedInUser=function(){d.a.get("".concat("https://thenotflix.herokuapp.com","/route/getcurrentuser"),{withCredentials:!0}).then(function(e){console.log("yay really fetching the user now");var t=e.data;return a.setState({currentlyLoggedIn:t}),t}).catch(function(){a.setState({currentlyLoggedIn:null})})},a.deleteFromList=function(e,t){return console.log("deleting in app.js"),d.a.post("".concat("https://thenotflix.herokuapp.com","/route/deleteFromFavorites/").concat(t,"/").concat(e),{})},a.emptyTheStateOfFavorites=function(){a.setState({idObjectsMoviesInFavorites:[],imdbIdsOfMovie:[],moviesToShowInFavorites:[]})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},r.a.createElement(M.a,{path:"/",render:function(t){return r.a.createElement(v,Object.assign({},t,{logout:e.logout,search:e.searchBar,getUser:e.getCurrentlyLoggedInUser,emptyTheState:e.emptyTheStateOfFavorites,user:e.state.currentlyLoggedIn,searchBar:function(t){return e.searchBar(t)}}))}}),r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(f,Object.assign({},t,{moviesToShow:e.state.moviesToShow}))}}),r.a.createElement(M.a,{exact:!0,path:"/movieInfo/:id",render:function(t){return r.a.createElement(x,Object.assign({},t,{user:e.state.currentlyLoggedIn,getUser:e.getCurrentlyLoggedInUser,link:e.state.movieLink,idsOfMovieObjects:e.state.idObjectsMoviesInFavorites,deleteFromList:e.deleteFromList}))}}),r.a.createElement(M.a,{exact:!0,path:"/showResults/:movies",component:C}),r.a.createElement(M.a,{exact:!0,path:"/movieReview/:movieId",render:function(t){return r.a.createElement(S,Object.assign({},t,{user:e.state.currentlyLoggedIn}))}}),r.a.createElement(M.a,{exact:!0,path:"/favorites",render:function(t){return r.a.createElement(k,Object.assign({},t,{user:e.state.currentlyLoggedIn,getUser:e.getCurrentlyLoggedInUser,userFavorites:e.state.idObjectsMoviesInFavorites,deleteFromList:e.deleteFromList,getActualMoviesWithTheInfo:e.getActualMoviesWithTheInfo}))}}),r.a.createElement(M.a,{exact:!0,path:"/signUp",render:function(t){return r.a.createElement(E,Object.assign({},t,{getUser:e.getCurrentlyLoggedInUser}))}}),r.a.createElement(M.a,{exact:!0,path:"/logIn",render:function(t){return r.a.createElement(b,Object.assign({},t,{getUser:e.getCurrentlyLoggedInUser}))}}),r.a.createElement(M.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(y,Object.assign({},t,{getUser:e.getCurrentlyLoggedInUser,user:e.state.currentlyLoggedIn}))}}))),r.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(395),a(396);s.a.render(r.a.createElement(p.a,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){},90:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.2f0078fc.chunk.js.map