import StarBorder from "./StarBorder";
import BlurText from "../Hero/BlurText";

export default function Skills() {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center gap-8">
        <BlurText
          text="Skills"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl mb-8 text-white font-bold"
        />
        <div className="h-1/2 w-4/5 flex justify-center items-center gap-5 flex-wrap">
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            Node
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            Express
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            MongoDB
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            React
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            Node
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            Express
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            MongoDB
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            React
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            Node
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            Express
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            MongoDB
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class w-40"
            color="cyan"
            speed="20s"
          >
            React
          </StarBorder>
        </div>
      </section>
    </>
  );
}
