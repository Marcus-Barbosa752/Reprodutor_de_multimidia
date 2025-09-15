import React, { useState, useEffect } from "react"

function InstalarComoApp() {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [installable, setInstallable] = useState(false)

    useEffect(() => {
        const handler = (event) => {
            // Evita que o prompt apareça automaticamente
            event.preventDefault()
            // Salva o evento para disparar depois
            setDeferredPrompt(event)
            setInstallable(true)
        }

        window.addEventListener("beforeinstallprompt", handler)

        return () => window.removeEventListener("beforeinstallprompt", handler)
    }, [])
}

export default InstalarComoApp