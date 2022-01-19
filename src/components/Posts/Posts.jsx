import './Posts.css';
import { fetchPosts } from '../../redux/postsSlice'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import { Paper, styled } from '@mui/material';

const Item = styled(Paper)(() => ({
   
    textAlign: 'left',
    padding: "10px",
    margin: "10px"
    
    }));

const Posts = () => {
    let params = useParams();
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.data)
    const [openLoader, setOpenLoader] = useState(false)
    const status = useSelector(state => state.posts.status)

    useEffect(() => {
        dispatch(fetchPosts({id: params.userId}))
    }, [])

    useEffect(() => {
        setOpenLoader(status)
    }, [status])

    return (
        <div className="posts">
            <Loader status={openLoader} /> 
            <h1>Posts {params.name}</h1>
            {posts.map(item => {
                return (
                    <Item key={item.id}>
                        <h5 style={{marginBottom:"5px"}}>{item.title.charAt(0).toUpperCase()+item.title.slice(1)}</h5>
                        <span>{item.body.charAt(0).toUpperCase()+item.body.slice(1)}</span>
                    </Item>
                )    
            })}
        </div>
    );
}

export default Posts
