import { motion } from "framer-motion";

function Link({ image, Name, href }) {
  return (
    <motion.a
      whileHover={{
        scale: [1, 1.15, 1.1],
        zIndex: 50,
        transition: {
          duration: 1,
        },
      }}
      className="flex items-center w-full max-w-md cursor-pointer p-3 my-3 mx-auto rounded-md r-2 ring-[2px] ring-indigo-400 text-gray-700 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl z-30"
      rel="noreferrer"
      target="_blank"
      href={href}
    >
      {image && <img src={image} className="h-10 w-10" alt={Name} />}
      <h2 className="text-xl font-semibold ml-3 md:ml-6">{Name}</h2>
    </motion.a>
  );
}

export default Link;
