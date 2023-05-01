
import AwesomeTestimonial from 'react-awesome-testimonials';
import './testimonials.css'

const Testimonial = () => (
  <>
  <h1 className='testimonials' >Testimonials</h1>
  <AwesomeTestimonial
    testimonials={[
      {
        name: "Eva",
        company: "Amazon",
        img_src: "https://i.ibb.co/84h8svL/eight.png",
        review:
          "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Evelyn",
        company: "Netflix",
        img_src: "https://i.ibb.co/k8Jnx61/five.png",
        review:
          "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Jack",
        company: "Google",
        img_src: "https://i.ibb.co/Yj8pMF8/four.png",
        review:
          "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Sam",
        company: "Microsoft",
        img_src: "https://i.ibb.co/ph360c6/nine.png",
        review:
          "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Abigail",
        company: "Netflix",
        img_src: "https://i.ibb.co/gwNmrLn/one.png",
        review:
          "Lorem 5 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Mortal",
        company: "Google",
        img_src: "https://i.ibb.co/6PF0kMg/seven.png",
        review:
          "Lorem 6 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Bruno",
        company: "Netflix",
        img_src: "https://i.ibb.co/7G9rtfD/six.png",
        review:
          "Lorem 7 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Vernoica",
        company: "Facebook",
        img_src: "https://i.ibb.co/pXMvXhK/three.png",
        review:
          "Lorem 8 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
      {
        name: "Astro",
        company: "Netflix",
        img_src: "https://i.ibb.co/WzJD5sj/two.png",
        review:
          "Lorem 9 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
    ]}
  />
  </>
);

export default Testimonial