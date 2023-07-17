const Book = (props)=>{
    const {img,title,author,getbook,id} = props;
   

    return(
        <article className ='book '>
            <h3 className="number">{id + '.'}</h3>
            <img src = {img} alt ={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            
        </article>
    )
};
export default Book;