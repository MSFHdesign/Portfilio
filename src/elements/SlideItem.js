import '../styles/sliderImgs.css'
export default function SlideItem({ post }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article className="SliderItemClass">
            <img className="slidersLogoImgs" src={image} alt={post.title.rendered} />
        </article>
    );
}
