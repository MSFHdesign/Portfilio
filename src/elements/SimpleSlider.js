import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import SlideItem from "./SlideItem.js";
import { useEffect, useState } from "react";

export default function SimpleSlider({ options }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://headlesscms.siindesign.dk/wp-json/wp/v2/companyPic?_embed&v=9999");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);
    return (
        <section className="sliderBOX">
            <Slider {...options}>
                {posts.map(post => (
                    <SlideItem key={post.id} post={post} />
                ))}
            </Slider>
        </section>
    );
}
