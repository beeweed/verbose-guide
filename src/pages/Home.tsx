import IdentityCard from "../components/feed/IdentityCard";
import CreatePost from "../components/feed/CreatePost";
import Feed from "../components/feed/Feed";
import NewsWidget from "../components/widgets/NewsWidget";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left Sidebar */}
      <div className="hidden md:block md:col-span-3">
        <IdentityCard />
      </div>

      {/* Main Feed */}
      <div className="col-span-1 md:col-span-6">
        <CreatePost />
        <div className="flex items-center justify-between mb-2">
             <div className="h-[1px] bg-gray-300 flex-1"></div>
             <span className="text-xs text-gray-500 px-2 flex items-center gap-1">Sort by: <span className="font-semibold text-black cursor-pointer">Top</span></span>
        </div>
        <Feed />
      </div>

      {/* Right Sidebar */}
      <div className="hidden md:block md:col-span-3">
        <NewsWidget />
        <div className="mt-4 flex flex-wrap gap-2 px-6 justify-center">
            {['About', 'Accessibility', 'Help Center', 'Privacy & Terms', 'Ad Choices'].map(link => (
                <a key={link} href="#" className="text-xs text-gray-500 hover:text-blue-600 hover:underline">{link}</a>
            ))}
        </div>
        <div className="mt-2 text-center text-xs text-gray-500">
             LinkedIn Clone © 2024
        </div>
      </div>
    </div>
  )
}
