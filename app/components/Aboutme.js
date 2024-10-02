import 'aos/dist/aos.css';
function Aboutme() {
  return (
    <section className="text-gray-600 bg-[#fffDfA]" id='about'>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:px-10"  data-aos="fade-up">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            About Chris Simons
          </h1>
          <p className="mb-8 leading-relaxed">
            With over 15 years of experience in the real estate industry, <strong>Chris Simons</strong> has built a reputation as one of Dallas' most trusted and knowledgeable realtors. As a key team member at <strong>Heritage Realtors</strong>, Chris has guided countless clients through the complexities of buying and selling homes, ensuring each transaction is smooth and stress-free.
          </p>
          <p className="mb-8 leading-relaxed">
            Known for his deep understanding of the Dallas housing market, Chris is dedicated to finding the perfect home for every client, whether you're a first-time homebuyer or looking to expand your investment portfolio. His approach is centered on building long-term relationships, always putting his clients’ needs first and providing expert advice every step of the way.
          </p>
          <p className="mb-8 leading-relaxed">
            Chris believes that a home is more than just a place to live—it's an investment in your future. His personalized services and commitment to excellence make him the go-to realtor for anyone seeking to make confident, informed real estate decisions in the Dallas area.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"  data-aos="fade-left">
          <img
            className="object-cover object-center rounded grayscale-10"
            alt="Chris Simons"
            src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
