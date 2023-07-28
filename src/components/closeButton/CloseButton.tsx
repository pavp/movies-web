interface ICloseButton {
  onClose: () => void
}
export const CloseButton = ({ onClose }: ICloseButton) => {
  return (
    <button
      style={{ color: 'white', fontSize: 24 }}
      className="absolute top-4 right-4 rounded hover:bg-c-light-blue px-2"
      onClick={onClose}>
      <i className="fa-solid fa-close"></i>
    </button>
  )
}
