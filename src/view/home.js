import './core/card_style.css'
import logo from '../logo.svg'
import {useEffect, useState} from 'react'

const Home = () => {
    const [backend_data, set_backend_data] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
        .then(res => res.json())
        .then(data => {
            set_backend_data(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [])

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12 mt-3">
                </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h1 className="my-4">
                        <small></small>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    {backend_data.map((post, i) => {
                        return (
                            <div className="col-md-4 mb-5">
                                <div className="card mb-4">
                                    <img className="card-img-top card-img-style" src={logo} alt="Card cap"/>
                                    <div className="card-body">
                                        <span className="badge badge-primary">{post.title}</span>
                                        <h2 className="card-title">{post.title}</h2>
                                        <p className="card-text">{post.body.substring(0, 50)}</p>
                                        <a href="/readmore" className="btn btn-primary">Read More &rarr;</a>
                                    </div>
                                    <div className="card-footer text-muted">
                                        Posted on  by
                                        <a href="/profile">Name</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {backend_data.map((post, i) => {
                                post = i
                                return ( 
                                
                                    <li className='page-item active'><a className='page-link' href={`index.php?page=${i+1}`}>{i+1}</a></li>
                                
                                )
                            })}
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
//style="width: 80%;margin-top:-50px;margin-left:35px;"