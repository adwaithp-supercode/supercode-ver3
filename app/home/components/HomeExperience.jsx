
"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Hero";
import TechnicalDepth from "./TechnicalDepth";
import ModelViewer from "./ModelViewer";
import styles from "../css/homeExperience.module.css";

import FooterBanner from "./FooterBanner";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function HomeExperience() {
    const experienceRef = useRef(null);
    const heroRef = useRef(null);
    const technicalRef = useRef(null);
    const modelRef = useRef(null);
    const modelTargetRef = useRef(null);

    useLayoutEffect(() => {
        const stage = modelRef.current;
        const target = modelTargetRef.current;
        const technical = technicalRef.current;

        if (!stage || !target || !technical) return;

        const ctx = gsap.context(() => {

            // Calculate where the model should finish
            const getDestination = () => {
                const currentX = gsap.getProperty(stage, "x");
                const currentY = gsap.getProperty(stage, "y");
                const currentScale = gsap.getProperty(stage, "scale");

                // Measure the original, unanimated positions
                gsap.set(stage, {
                    x: 0,
                    y: 0,
                    scale: 1,
                });

                const stageRect = stage.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();

                const destination = {
                    x:
                        targetRect.left + targetRect.width / 2 -
                        (stageRect.left + stageRect.width / 2),

                    y:
                        targetRect.top + targetRect.height / 2 -
                        (stageRect.top + stageRect.height / 2),
                };

                // Restore the current animation position
                gsap.set(stage, {
                    x: currentX,
                    y: currentY,
                    scale: currentScale,
                });

                return destination;
            };

            const moveModel = gsap.fromTo(
                stage,
                {
                    x: 0,
                    y: 0,
                    scale: 1,
                },
                {
                    x: () => getDestination().x,
                    y: () => getDestination().y,
                    scale: 1,
                    ease: "none",

                    scrollTrigger: {
                        trigger: technical,
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // Change the Technical Depth background during the same scroll
            gsap.fromTo(
                technical,
                {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                },
                {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    ease: "none",

                    scrollTrigger: {
                        trigger: technical,
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    },
                }
            );

        }, experienceRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={experienceRef} className={styles.experience}>

            <Header />

            <div ref={heroRef}>
                <Hero />
            </div>

            <div ref={technicalRef}>
                <TechnicalDepth modelTargetRef={modelTargetRef} />
            </div>

            <FooterBanner />

            <div ref={modelRef} className={styles.modelStage}>
                <ModelViewer />
            </div>

            <Footer />
        </main>
    );
}
