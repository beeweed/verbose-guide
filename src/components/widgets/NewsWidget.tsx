import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Info } from "lucide-react";

const NEWS = [
  { title: "AI regulation talks heat up", readers: "10,234" },
  { title: "Tech hiring stabilizes", readers: "8,129" },
  { title: "Remote work trends 2024", readers: "5,342" },
  { title: "New energy vehicles surge", readers: "4,111" },
  { title: "Global supply chain updates", readers: "3,098" },
];

export default function NewsWidget() {
  return (
    <Card className="shadow-sm border-gray-200">
        <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-semibold">LinkedIn News</CardTitle>
            <Info className="w-4 h-4 text-gray-600 fill-current" />
        </CardHeader>
        <CardContent className="p-0 pb-4">
            <ul className="flex flex-col">
                {NEWS.map((item, index) => (
                    <li key={index} className="px-4 py-1 hover:bg-gray-100 cursor-pointer transition-colors">
                       <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 shrink-0"></div>
                           <div>
                                <h4 className="text-sm font-semibold text-gray-700 line-clamp-1">{item.title}</h4>
                                <span className="text-xs text-gray-500">{item.readers} readers</span>
                           </div>
                       </div>
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
  )
}
