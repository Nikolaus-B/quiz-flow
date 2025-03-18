import AchievementChart from "@/components/AchievementChart/AchievementChart";
import Logo from "@/components/elements/Logo/Logo";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/store";
import { fetchUserData } from "@/store/user/userOperations";

import { useEffect } from "react";
import { Link } from "react-router";

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <section className="section flex flex-col items-center ">
      <Logo />
      <h3 className="my-[1.2rem] font-bold text-[2.5rem]">
        Change your <span className="text-[#31728D]">love life</span>
      </h3>
      <p className="inline-block mb-[4.2rem] text-[1.6rem] text-wrap font-light leading-[120%]">
        with easy-to-use practical tips that you can apply in any situation
      </p>
      <AchievementChart />
      <p className="mt-[4.2rem] mb-[1.2rem] font-bold text-[1.8rem]">
        What is your main goal?
      </p>
      <div className="flex gap-[1.2rem] mb-[1.2rem]">
        <Link to="goal-multiform/build-connection">
          <Button variant={"select"} size={"regularSelect"}>
            Build a deep connection
          </Button>
        </Link>
        <Link to="/goal-multiform/emotional-attraction">
          <Button variant={"select"} size={"regularSelect"}>
            Create emotional attraction
          </Button>
        </Link>
      </div>
      <Button variant={"text"} size={"regulatText"}>
        Other
      </Button>
      <p className=" font-light text-[1.4rem] text-[#666666] mt-[2.3rem] whitespace-pre-line text-center">
        By continuing, you agree to our Terms of Service | Privacy Policy {"\n"}
        2024 © All Rights Reserved.
      </p>
    </section>
  );
}

export default HomePage;
