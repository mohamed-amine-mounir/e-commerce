// import { Link } from "react-router-dom";

// const Categories = () => {
//   return (
//     <>
//       <div className="container mx-auto p-4 pt-60" id="categories">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center space-x-2">
//             <Link
//               to="/"
//               className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="tabler-icon tabler-icon-chevron-left"
//               >
//                 <path d="M15 6l-6 6l6 6"></path>
//               </svg>
//               <span>Home</span>
//             </Link>
//             <h3 className="text-lg font-semibold">All</h3>
//           </div>
//           <div className="space-x-2">
//             <Link to="/categories/all">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 All
//               </button>
//             </Link>
//             <Link to="/categories/furnitures">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 Furnitures
//               </button>
//             </Link>
//             <Link to="/categories/electronics">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 Electronics
//               </button>
//             </Link>
//             <Link to="/categories/lamps">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 Lamps
//               </button>
//             </Link>
//             <Link to="/categories/clothes">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 Clothes
//               </button>
//             </Link>
//             <Link to="/categories/chairs">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 Chairs
//               </button>
//             </Link>
//             <Link to="/categories/skincare">
//               <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md">
//                 Skin Care
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Categories;
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div
      className="container mx-auto px-4 pt-16 sm:pt-24 md:pt-32 lg:pt-40"
      id="categories"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
            <span className="text-sm font-medium">Home</span>
          </Link>
          <h3 className="text-lg font-semibold">All</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "All",
            "Furnitures",
            "Electronics",
            "Lamps",
            "Clothes",
            "Chairs",
            "Skin Care",
          ].map((category) => (
            <Link
              key={category}
              to={`/categories/${category.toLowerCase().replace(" ", "")}`}
            >
              <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition duration-300">
                {category}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
