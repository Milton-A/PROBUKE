
import ProBuke from '../utils/images/ProBuke.png';

export const NavBar = () => (
    <nav className="flex justify-between items-center py-4 px-16 cursor-pointer">
        <img src={ProBuke} alt="logo" />
        <div className="flex items-center gap-8">
            <nav className="flex justify-center items-center text-base gap-2">
                <div className="flex justify-center items-center gap-2 py-2 px-4 text-[#b52dab] font-bold">
                    Página inicial
                </div>
                <div className="flex justify-center items-center gap-2 py-2 px-4">
                    <div className="faculdade text-gray-400 hover:text-blue-500">Faculdade</div>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_397_1426)">
                            <path d="M19.5 9L12 16.5L4.5 9" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_397_1426">
                                <rect width={24} height={24} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex justify-center items-center gap-2 py-2 px-4 sobre text-gray-400 hover:text-blue-500">
                    Sobre
                </div>
                <div className="flex justify-center items-center gap-2 py-2 px-4 text-gray-400 hover:text-blue-500">
                    Conctacto
                </div>
                <div className="flex justify-center items-center gap-2 py-2 px-4 faq text-gray-400 hover:text-blue-500">
                    FaQ
                </div>
            </nav>
            <div className="flex items-center gap-6">
                <div className="flex justify-center items-center gap-2.5 py-1 px-8 rounded-full border-[1px] border-[#0c8ce9] text-[#0c8ce9] font-semibold hover:text-zinc-50 hover:bg-blue-500">
                    Login
                </div>
            </div>
        </div>
    </nav>
);