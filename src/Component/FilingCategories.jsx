import { FaRegFileAlt, FaUser, FaBriefcase, FaGlobe, FaCoins, FaUsers } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

const cardData = [
  {
    icon: <FaRegFileAlt size={28} />,
    title: "Revised ITR",
    description: "Revise your ITR in a few mins",
  },
  {
    icon: <FaRegFileAlt size={28} />,
    title: "Belated ITR",
    description: "Easy ITR filing after the deadline",
    disabled: true,
  },
  {
    icon: <FaUser size={28} />,
    title: "Salaried",
    description: "Single or multiple sources of income",
  },
  {
    icon: <MdOutlineWorkOutline size={28} />,
    title: "Self-Employed",
    description: "Freelancers and other professionals",
  },
  {
    icon: <FaBriefcase size={28} />,
    title: "Business",
    description: "SMEs, MSMEs, Tally or other ERP users",
  },
  {
    icon: <FaGlobe size={28} />,
    title: "Foreign Income",
    description: "NRIs, RNORs, Foreign Income & Asset Holders",
  },
  {
    icon: <FaCoins size={28} />,
    title: "Stocks, Crypto",
    description: "Capital gains from Stocks, MFs, Crypto, F&O, etc.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "HUF",
    description: "Filings for HUF (Hindu Undivided Family)",
  },
];

export default function FilingCategories() {
  return (
    <section className="bg-[#f0fdf4] py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Who can file Income Tax Returns (ITR) on Cleartax?
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          No matter what your source of income is, we've got you covered. There’s a plan for everybody!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 min-h-[280px] h-full flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                card.disabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-800 shadow hover:shadow-xl hover:-translate-y-1"
              } border border-gray-200`}
            >
              {/* Main Card Content */}
              <div className="z-10">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 mx-auto">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>

              <div className="z-10 mt-auto">
                {!card.disabled ? (
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Know more →
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-500">Start now</span>
                )}
              </div>

              {/* Full-card hover overlay */}
              <div className="absolute inset-0 bg-blue-100 bg-opacity-90 text-blue-900 flex items-center justify-center text-center px-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 rounded-2xl">
                <p className="text-base font-medium">📢 This is some extra info shown on hover for this card!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
