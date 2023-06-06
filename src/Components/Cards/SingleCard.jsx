import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <img
        alt="cover"
        src={item.show.image.original}
        className="h-56 w-full object-contain"
      />

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            {item.show.name}
          </h3>
          {item.show.rating.average && (
            <p className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#feca57"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#feca57"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              {item.show.rating.average}
            </p>
          )}
        </div>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {item.show.summary}
        </p>

        <Link
          to={`/movieDetails/${item.show.id}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
};

export default SingleCard;
