import React from "react";

function VideoGellery() {
    return (
        <>
            <section id="video">
                <div className="gellery-video">
                    <div className="inner-head">
                        <h1>Video Gellery</h1>
                    </div>
                    <div className="youtube-video">
                        <div className="ifram-video">
                            <iframe src="https://www.youtube.com/embed/jRsj4LqYR1E?controls=1&rel=0&playsinline=0&modestbranding=0&enablejsapi=1&origin=https%3A%2F%2Fwww.aasraphysio.com&autoplay=1" width='380px' height='225px' title="a2"></iframe>
                        </div>
                        <div className="ifram-video">
                            <iframe src="https://www.youtube.com/embed/jRsj4LqYR1E?controls=1&rel=0&playsinline=0&modestbranding=0&enablejsapi=1&origin=https%3A%2F%2Fwww.aasraphysio.com&autoplay=1" width='380px' height='225px' title="a2"></iframe>
                        </div>
                        <div className="ifram-video">
                            <iframe src="https://www.youtube.com/embed/jRsj4LqYR1E?controls=1&rel=0&playsinline=0&modestbranding=0&enablejsapi=1&origin=https%3A%2F%2Fwww.aasraphysio.com&autoplay=1" width='380px' height='225px' title="a2"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export { VideoGellery }