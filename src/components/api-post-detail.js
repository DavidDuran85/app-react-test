import React from 'react'

const PostApiDetail = ({data, color, usuario}) => {
    //console.log("color: ", color)
    return(
        <article className={"message is-"+color}>
            <div className="message-header" key={data.id}>
                    <img src="https://via.placeholder.com/40/92c952"/>
                <p>
                    <strong>{    
                    usuario //+" - "+data.title
                }
                </strong>
                <small>{    
                    " - "+data.title
                }</small>
                
                </p>
            </div>
            <div className="message-body">
                <article className={"message is-"+color}>
                    <div className="message-body">
                    {
                        data.body
                        
                    }
                    
                    
                    </div>
                </article>
                <p>
                        <img src="https://via.placeholder.com/20/92c952"/>
                    <img src="https://via.placeholder.com/20"/>
                </p>
            </div>
        </article>
        
    )
}

export default PostApiDetail