import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';
import axios from 'axios';
import { BsFillXCircleFill } from "react-icons/bs";

const LeftListBarComponent = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    const GetDataList = async () => {
        const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
        setGenres(genres);
    };

    useEffect(() => {
        GetDataList();
    }, []); // Run once on mount

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };

    return (
        <aside className='asideBar'>
            <h3>Filter By :- </h3>
            <ListGroup>
                {selectedGenres && selectedGenres.map((item) => (
                    <ListGroup.Item
                        className='selected'
                        onClick={() => handleRemove(item)}
                        key={`${item.id}newtag`}
                    >
                        {item.name}
                        <i><BsFillXCircleFill /></i>
                    </ListGroup.Item>
                ))}
                {genres && genres.length > 0 ? genres.map((item) => (
                    <ListGroup.Item
                        key={item.id}
                        onClick={() => handleAdd(item)}
                    >
                        {item.name}
                    </ListGroup.Item>
                )) : 'Loading content...'}
            </ListGroup>
        </aside>
    );
};

export default LeftListBarComponent;

































// import React, {useEffect} from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import './style.css';
// import axios from 'axios';
// import {BsFillXCircleFill } from "react-icons/bs";

// const LeftListBarComponent = (
//     {
//         selectedGenres,
//         setSelectedGenres,
//         genres,
//         setGenres,
//         type,
//         setPage
//         }
// )=>{

//     const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    

//     const GetDataList = async ()=>{
//         const {data:{genres}} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
//         //console.log('genres', genres);
//         setGenres(genres)
//     }
//     useEffect(()=>{
        
//         GetDataList();
//         return ()=>{
//             setGenres({});
//         }
//         //eslint-disable-next-line
//     }, [])

//     const handleAdd = (genre)=>{
//         setSelectedGenres([...selectedGenres, genre])
//         //console.log('oldSelectedGenres', selectedGenres)
//         setGenres(genres.filter((g)=>{ return g.id !== genre.id}));
//         return setPage(1)
//     }
//     const handleRemove = (genre)=>{
//         setSelectedGenres(
//             selectedGenres.filter((g)=>{ 
//                 return g.id !== genre.id
//             })
//         )
//         //console.log('oldSelectedGenres', selectedGenres)
//         setGenres([...genres,genre]);
//         return setPage(1)
//     }

//     return (
//         <aside className='asideBar'>
//             <h3>Filter By :- </h3>
//             <ListGroup>
//                 {
//                     selectedGenres && selectedGenres.map((item)=>{
//                         return (
//                             <ListGroup.Item className='selected' onClick={()=>{return handleRemove(item)}} key={`${item.id}newtag`}>
//                                 {item.name}
//                                 <i><BsFillXCircleFill /></i>
//                             </ListGroup.Item>
//                         )
//                     })
//                 }
//                 {
//                     genres && genres.length > 0 ? genres.map((item)=>{
//                         return(
//                             <ListGroup.Item key={item.id} onClick={()=>{return handleAdd(item)}}>
//                                 {item.name}
//                             </ListGroup.Item>
//                         )
//                     }) : 'Loading content...'
//                 }
//             </ListGroup>
//         </aside>
//     )
// }

// export default LeftListBarComponent;





