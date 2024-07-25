import React from "react";

function Rating({ rate }) {

    const stars = Array(5).fill(null)

    return (
        <>
            <div>
                {stars.map((_, index) => (
                    <span key={index} style={{ color: index < rate ? '#ffc107' : '#e4e5e9' }}>
                        ★
                    </span>
                ))}
            </div>
        </>
    )
}

export { Rating }