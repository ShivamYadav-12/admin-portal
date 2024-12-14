export const UserColumns =[
   
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'username',
            headerName: 'user',
            width: 230,
        },
            {
                field:'email',
                headerName:'Email',
                width:230,
                },
                {
                    field:'address',
                    headerName:'Adresss',
                    width:100,
                    },
                    {
                        field:'phonenumber',
                        headerName:'Phonenumber',
                        width:160,
                        renderCell:(params)=>{
                            return(
                            <div className={`cellwithStatus ${params.row.status}`}>
                                {params.row.status}
                            </div>

                            );
                        },
                        },

        {
          cellRender:(params) =>{
            return(
            <div className="cellwithImg">
              <img className="cellImg" src={params.row.img} alt="avatar" />
            </div>
            );
          },
            
        },


]; 
//export const UserRows =[
//     {
//         id : 1,
//         username:'Shikamaru',
//         status:'Active',
//         email:'ishowspeed@Gmail.com',
//         age:35,

//     },
//     {
//         id : 2,
//         username:'Sasuke',
//         status:'Active',
//         email:'isasuke@Gmail.com',
//         age:25,

//     },
//     {
//         id : 3,
//         username:'Kakashi',
//         status:'Passive',
//         email:'ishowspeed@Gmail.com',
//         age:45,

//     },
//     {
//         id : 4,
//         username:'Rin',
//         status:'Pending',
//         email:'Rin@Gmail.com',
//         age:25,

//     },
//     {
//         id : 5,
//         username:'Jiraya',
//         status:'Active',
//         email:'Jirayalegend@Gmail.com',
//         age:55,

//     },
//     {
//         id : 6,
//         username:'Itachi',
//         status:'Active',
//         email:'Clanslayer@Gmail.com',
//         age:35,

//     },
//     {
//         id : 7,
//         username:'Luufy',
//         status:'Passive',
//         email:'Monkeydluffy@Gmail.com',
//         age:20,

//     },
//     {
//         id : 8,
//         username:'Nami',
//         status:'Active',
//         email:'Nami245@Gmail.com',
//         age:26,

//     },
//     {
//         id : 9,
//         username:'Itachi',
//         status:'Active',
//         email:'Clanslayer@Gmail.com',
//         age:35,

//     }, {
//         id : 10,
//         username:'Zoro',
//         status:'Pending',
//         email:'zorolostagain@Gmail.com',
//         age:35,

//     },
// ];
