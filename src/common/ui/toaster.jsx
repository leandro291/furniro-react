import { useToastStore } from '../../features/pages/shop/store/toast-store'

export function Toaster() {

    const toast = useToastStore((s) => s.toast)

    return (
        <div role="status" aria-live="polite" className='fixed bottom-6 inset-x-0 z-[60] flex justify-center px-4 pointer-events-none'>
            {toast && (
                <div
                    key={toast.id}
                    className={`font-['Poppins'] text-sm text-white px-5 py-3 rounded-lg shadow-lg transition-[opacity,transform] ease-out starting:opacity-0 starting:translate-y-2 ${
                        toast.type === "error" ? "bg-red-600" : "bg-gray-900"
                    } ${toast.visible ? "opacity-100 duration-200" : "opacity-0 translate-y-1 duration-150"}`}
                >
                    {toast.message}
                </div>
            )}
        </div>
    )
}
