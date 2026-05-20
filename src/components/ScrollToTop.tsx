import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        const startY = window.scrollY
        if (startY === 0) return

        const duration = 800 //
        const startTime = performance.now()

        // easeOutExpo: starts fast, decelerates gently into place
        const easeOutExpo = (t: number) =>
            t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

        let frameId: number

        const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutExpo(progress)

            window.scrollTo(0, startY * (1 - eased))

            if (progress < 1) {
                frameId = requestAnimationFrame(animate)
            }
        }

        frameId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(frameId)
    }, [pathname])

    return null
}