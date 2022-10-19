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

export const CharacterViewer3D = ({ selectedCharacher }) => {
	return (
		<div className="w-[900px] h-[800px] flex items-center gap-8">
			<div className="w-[40%]">
				{selectedCharacher.description.split("\n").map(desc => {
					return (
						<p
							key={desc}
							className="mt-4"
							dangerouslySetInnerHTML={{ __html: desc }}
						/>
					);
				})}
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
						<Scene srcFBX={selectedCharacher.fbx} />
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
