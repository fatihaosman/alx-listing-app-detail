import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces/index";
import ReviewSection from "@/components/property/ReviewSection";
import BookingSection from "@/components/property/BookingSection";


export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Property Name & Rating */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Flex layout for main content */}
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        {/* Left Column: Images, Description, Amenities */}
        <div className="flex-1 space-y-4">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
            {/* Add more images if needed */}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{property.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap space-x-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">{amenity}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Booking Section */}
        <div className="w-full lg:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>

      {/* Reviews below */}
      <ReviewSection reviews={property.reviews} />
    </div>
  );
};

// export default PropertyDetail;

}


// useRouter() gives access to URL parameters. Here, id corresponds to the property name.

// We search for the property in PROPERTYLISTINGSAMPLE (constant array of property objects).

// If the property exists, we render PropertyDetail component, passing the property data as props.

// This page is dynamic; each property can be accessed via /property/<property_name>.