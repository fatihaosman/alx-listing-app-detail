const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${price * 7}</strong></p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;


// Explanation:

// Displays nightly price, date pickers, total cost, and a “Reserve now” button.

// Responsive & styled with Tailwind.

// Total cost is calculated statically for now (price * 7), later can be dynamic