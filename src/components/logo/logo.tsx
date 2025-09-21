


interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${className}`}>
            {/* <span className="text-white font-bold text-xl">C</span> */}

            <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        </div>
    )
}