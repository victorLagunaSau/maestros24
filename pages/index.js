import Home001 from "../components/Home001";
import HomeKinder from "../components/HomeKinder";
import HomePrimariaB from "../components/HomePrimariaB";
import HomePrimariaA from "../components/HomePrimariaA";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import HomeSecundaria from "../components/HomeSecundaria";
import HomeBachillerato from "../components/HomeBachillerato";

export default function Home() {
	return (
		<>
			<SeoHead title='Maestros-Pathbooks'/>
			<Layout>
				<Home001/>
				<HomeKinder/>
				<HomePrimariaB/>
				<HomePrimariaA/>
				<HomeSecundaria/>
				<HomeBachillerato/>
			</Layout>
		</>
	);
}
