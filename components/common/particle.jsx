"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBigCirclesPreset } from "@tsparticles/preset-big-circles";
import { loadFireworksPreset } from "@tsparticles/preset-fireworks";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
    const particlesInitCb = useCallback(async (engine) => {
        await loadLinksPreset(engine);
    }, []);

    const particlesLoaded = useCallback((container) => {
    }, []);

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(particlesInitCb).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            preset: "links",
            duration: 90,
            fpsLimit: 90,
            fullScreen: {
                zIndex: -1,
            },
        }),
        []
    );

    return (
        <Fragment>
            {init && (
                <Particles
                    id="tsparticles"
                    options={options}
                    particlesLoaded={particlesLoaded}
                />
            )}
        </Fragment>
    );
}
