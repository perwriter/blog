"use client";

import React, { useState } from 'react';

const Upvote: React.FC = () => {
    const [likeCount, setLikeCount] = useState<number>(0);

    return (
        <button className='ring-1 px-2 py-1 ring-blue-400 rounded-md' onClick={() => setLikeCount(likeCount + 1)}>
            Like {likeCount}
        </button>
    );
}

export default Upvote;
