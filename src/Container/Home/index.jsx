import React, { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMoviesComponent from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

const HomeContainer =()=>{

    const [content ,setContent] = useState([]);
    const [pageno ,setPageno] = useState(1);
    const [paginationno ,setPaginationno] = useState(0);

        const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

        const GetDataTrending = async ()=>{
                const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`);
                setContent(data.results);
                setPaginationno(data.total_pages)
                console.log('data',data);
        }
        useEffect(()=>{
                GetDataTrending();
        },[])
        

        const handleClick = (number)=>{
            setPageno(number);
        }

        useEffect(()=>{
            console.log('Trending Component didupdate mount');
            GetDataTrending();
            //eslint-disable-next-line
        }, [pageno])

        
    return (
        <main className="homePage"  style={{ padding: '20px' }}>
       <Container>
        <Row>
            <Col className='col-12'>
            <section>
                <h1 className="txtCenter">Top Trending</h1>
                <h1 className="txtCenter">Series and Movies </h1>
            </section>
            </Col>
        {
            content && content.length > 0 ? content.map((item)=>{
                return(
                    <CardMoviesComponent key={item.id} data={item}
                    mediaType="tv"/>
                )
            }) : 'loading Content...'
        }

                {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }


        </Row>
       </Container>
        </main>
    )
}
export default HomeContainer;