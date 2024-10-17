export default function Gallery() {
  const cloudinaryUrlProperties = 'f_auto,w_300,h_500,c_fill,g_auto'
  const cloudinaryUrlImages = [
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties}/docs/blue_sweater_model`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties}/samples/look-up`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties}/woman-business-suit`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties}/samples/smile`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties}/woman-blackdress-stairs`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties}/samples/people/kitchen-bar`
  ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {cloudinaryUrlImages.map((urlImage, index) => (
        <div
          key={index}
          className="aspect-[9/16] m-2"
        >
          <img
            className="object-cover w-full h-full rounded-lg shadow-lg"
            src={urlImage}
            alt={`Example image ${index}`}
          />
          <p className="text-center mt-4">Lorem ipsum dolor</p>
        </div>
      ))}
    </div>
  )
}