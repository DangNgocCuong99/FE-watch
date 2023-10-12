import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";
import { useMenuTab } from "/@/layout/components/tabs/useHook";

export const useRedirect = () => {
    const { handleNavigation } = useMenuNavigation();
    const { handleCloseTab } = useMenuTab()

    const goListStatus = () => {
        handleCloseTab()
        handleNavigation("/status")
    }
    const goCreateStatus = () => {
        handleCloseTab()
        handleNavigation("/status/add")
    }
    const goDetailStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/status/view/${id}`)
    }
    const goUpdateStatus = (id: string) => {
        handleCloseTab()
        handleNavigation(`/status/edit/${id}`)
    }

    return {
        goListStatus,
        goCreateStatus,
        goDetailStatus,
        goUpdateStatus
    }
}