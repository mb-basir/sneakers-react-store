function ProductImage({ item }) {
  return (
    <div className="flex-shrink-0">
      <img
        src={item.image}
        alt={`${item.image} image`}
        className="
            sm:flex-1
            md:w-[350px]    
            lg:w-[400px]     
            xl:w-[500px]     
            object-cover
            sm:rounded-tl-4xl
            sm:rounded-tr-4xl
            md:rounded-tr-none
            md:rounded-tl-4xl
            md:rounded-bl-4xl
            "
      />
    </div>
  );
}

export default ProductImage;
