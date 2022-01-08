import Link from "next/link";
import { Navigation, Wrapper } from "./styles";

export const Head = () => {
  return (
    <Wrapper>
      <h3>My Muse</h3>
      <Navigation>
        <Link href="/muse" passHref>
          <a>Songs</a>
        </Link>
        <Link href="/muse/artist" passHref>
          <a>Artists</a>
        </Link>
        <Link href="/muse/album" passHref>
          <a>Albums</a>
        </Link>
      </Navigation>
    </Wrapper>
  );
};
