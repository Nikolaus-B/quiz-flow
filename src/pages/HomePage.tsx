import HomeSection from "@/components/sections/HomeSection/HomeSection";
import { useAppDispatch } from "@/store/store";
import { fetchUserData } from "@/store/user/userOperations";
import { useEffect } from "react";

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return <HomeSection />;
}

export default HomePage;
