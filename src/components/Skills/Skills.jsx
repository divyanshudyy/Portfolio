import StarBorder from "./StarBorder";
import ScrollFloat from "../project/ScrollFloat";

export default function Skills() {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center gap-10">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Skills
        </ScrollFloat>
        <div className="h-1/2 w-2/3 flex justify-center items-center gap-10 flex-wrap ">
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
