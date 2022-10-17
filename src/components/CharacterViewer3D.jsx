import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

const Scene = ({ srcFBX }) => {
	const fbx = useFBX(srcFBX);

	return <primitive object={fbx} scale={0.025} />;
};

export const CharacterViewer3D = ({ srcFBX }) => {
	return (
		<div className="w-[900px] h-[800px] flex items-center gap-8">
			<div className="w-[40%]">
				<p className="">
					Black Cat is an upcoming game that puts two players against one
					another in a competitive game of Black Jack - there is no house, no
					playing against the dealer,{" "}
					<span className="text-red-500">WINNER TAKES ALL</span>.
				</p>

				<p className="mt-4 ">
					<span className="text-red-500">PLAY</span> in a fantasy world and
					select characters that give will give you an edge for the jackpot. A
					succubus that can look into your opponents hearts to tell you there
					cards or a medium who can make ghost cards.{" "}
					<span className="text-red-500">THE CHOICE IS YOURS</span>.
				</p>
				<p className="mt-4">
					Climb the ladder against opponents across the world, turning a game of
					luck into a game of skill. The{" "}
					<span className="text-red-500">CASINO</span> awaits.
				</p>
			</div>
			<div className="w-[60%] h-full">
				<Canvas>
					<Suspense fallback={<Loader />}>
						<OrbitControls
							enableZoom={false}
							rotateSpeed={2}
							autoRotate={true}
							autoRotateSpeed={5}
							target={[0.6, 0.4, 0]}
						/>
						<Scene srcFBX={srcFBX} />
						<ambientLight intensity={0.6} />
						<spotLight position={[10, 15, 10]} angle={0.3} />
						<directionalLight position={[10, 10, 5]} intensity={3} />
						<directionalLight position={[-10, -10, -5]} intensity={2} />
						{/* <Environment preset="sunset" /> */}
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
};
