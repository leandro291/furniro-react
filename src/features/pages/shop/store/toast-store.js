import { create } from "zustand";

const VISIBLE_MS = 2500
const EXIT_MS = 150

let timers = []

// Un solo toast a la vez: uno nuevo reemplaza al anterior (misma lógica que alert, sin bloquear).
export const useToastStore = create((set) => ({
    toast: null,

    showToast: (message, type = "success") => {
        timers.forEach(clearTimeout)
        set({ toast: { id: Date.now(), message, type, visible: true } })
        timers = [
            setTimeout(() => set((s) => ({ toast: s.toast && { ...s.toast, visible: false } })), VISIBLE_MS),
            setTimeout(() => set({ toast: null }), VISIBLE_MS + EXIT_MS),
        ]
    },
}))

export const toast = (message, type) => useToastStore.getState().showToast(message, type)
