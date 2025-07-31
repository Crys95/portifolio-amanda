import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="mr-1 flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        made by <IoMdHeart size={13} className="text-fuchsia-500" />
      </span>
      <strong className="font-medium">Amanda Vieira da Silva</strong>
    </footer>
  )
}
