import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export default function IdentityCard() {
  return (
    <Card className="overflow-hidden mb-2 shadow-sm border-gray-200">
        <div className="h-14 bg-gradient-to-r from-blue-300 to-blue-600 bg-cover bg-center"></div>
        <CardContent className="pt-0 pb-4 px-0 flex flex-col items-center">
            <div className="-mt-10 mb-3 border-2 border-white rounded-full bg-white">
                 <img src="https://github.com/shadcn.png" alt="Profile" className="w-16 h-16 rounded-full" />
            </div>
            <h3 className="font-semibold text-lg hover:underline cursor-pointer">Teta AI</h3>
            <p className="text-xs text-gray-500 mb-4 px-4 text-center">AI Project Lead | Full Stack Developer</p>
            
            <Separator />
            
            <div className="w-full py-3 px-3 hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
                    <span>Who's viewed your profile</span>
                    <span className="text-primary">42</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mt-1">
                    <span>Impressions of your post</span>
                    <span className="text-primary">1,234</span>
                </div>
            </div>

            <Separator />

            <div className="w-full py-3 px-3 hover:bg-gray-100 cursor-pointer transition-colors text-left">
                <span className="text-xs text-gray-500 block">Access exclusive tools & insights</span>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-600 rounded-sm"></div>
                    <span className="text-xs font-semibold underline decoration-1">Try Premium for free</span>
                </div>
            </div>
             <Separator />
             <div className="w-full py-3 px-3 hover:bg-gray-100 cursor-pointer transition-colors text-left flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="w-4 h-4 text-gray-500" width="16" height="16" focusable="false">
                    <path d="M12 1H4a1 1 0 00-1 1v13.643L8 13.6l5 2.043V2a1 1 0 00-1-1z"></path>
                 </svg>
                 <span className="text-xs font-semibold text-gray-700">My Items</span>
             </div>

        </CardContent>
    </Card>
  )
}
