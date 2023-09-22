import {useState, useRef} from 'react'
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';

import {styles} from "../styles.js";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion.js";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const isValidInput = (text) => {
        const regex = /^[a-zA-Z0-9\s.,'@!?éèêëàâäôöûüçÉÈÊËÀÂÄÔÖÛÜÇ]*$/;
        return regex.test(text);
    };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

      if (isValidInput(value)) {
          setForm({ ...form, [name]: value });
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('secret', 'secret_template',
        {
          from_name: form.name,
          to_name: 'Mathieu',
          from_email: form.email,
          to_email: 'mat1890@false.com',
          message: form.message,
        },
        'false',
        )
        .then(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');

            setForm({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            setLoading(false)
            console.log(error);
            alert('Something went wrong.')
        })
  }
  return (
    <div className={"xl:mt-10 flex-row max-[1000px]:flex-col-reverse flex overflow-hidden gap-32"}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={"flex-[0.5] bg-black-100 p-8 rounded-2xl"}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeader}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={"mt-12 flex flex-col gap-8"}
        >
          <label className={"flex flex-col"}>
            <span className={"text-white font-medium mb-4"}>Your Name</span>
            <input
                type={"text"}
                name={"name"}
                required={true}
                value={form.name}
                onChange={handleChange}
                placeholder={"What's your name?"}
                className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"}
            />
          </label>
          <label className={"flex flex-col"}>
            <span className={"text-white font-medium mb-4"}>Your Email</span>
            <input
                type={"email"}
                name={"email"}
                required={true}
                value={form.email}
                onChange={handleChange}
                placeholder={"What's your email?"}
                className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"}
            />
          </label>
          <label className={"flex flex-col"}>
            <span className={"text-white font-medium mb-4"}>Your Message</span>
            <textarea
                required={true}
                rows={7}
                name={"message"}
                value={form.message}
                onChange={handleChange}
                placeholder={"What do you want to say"}
                className={"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"}
            />
          </label>
          <button
            type={"submit"}
            className={"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={"xl:flex-1 xl:h-auto md:h-[500px] h-[300px]"}
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")