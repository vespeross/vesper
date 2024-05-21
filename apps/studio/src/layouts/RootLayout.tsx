import { preferenceService } from "@/services/preference.service"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { data, error, isLoading } = preferenceService.checkFreshInstall()
    console.log(data?.freshInstall)
    return (
        <div>
            {children}

        </div>
    )
}
