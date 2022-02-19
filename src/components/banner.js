import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Banner = {
    render() {
        return `
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <img src="https://picsum.photos/1500/400" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="https://picsum.photos/1500/400" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="https://picsum.photos/1500/400" alt="" />
                </div>
            </div>
        </div>
        `;
    },
    afterRender() {
        const swiper = new Swiper(".swiper");
    },
};
export default Banner;