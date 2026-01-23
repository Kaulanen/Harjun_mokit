"use client"

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({
  open,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur/10 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-18 max-w-md w-full shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  )
}
