import Navbar from "@/app/Components/Navbar";

import styles from "../styles/Pages/Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, magni inventore sequi debitis quam atque delectus. Molestiae aperiam neque esse eum rem nesciunt sint illum porro, facilis voluptatibus, dignissimos vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate itaque minus facere impedit voluptatem sunt? Amet, voluptas! Sint quidem, provident, explicabo architecto facere iusto, quisquam voluptates a magni voluptate consequuntur?</p>
      </div>
    </div>
  )
}
export default Home;