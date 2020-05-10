import React, { useState, useEffect } from 'react'
const LikeButton: React.FC = () => {
    const [like, setlike] = useState(0)
    useEffect(() => {
        console.log('document title click')
        document.title = `点击了${like}次`
    }, [like])
    function handleClick() {
        setTimeout(() => {
            alert('you click   ' + like)
        }, 3000);
    }
    return (
        <>
        <button onClick={() => {setlike(like + 1)}}>
            {like}次数
        </button>
        <button onClick={handleClick}>
            alert
        </button>
        </>
    )
}

export default LikeButton;