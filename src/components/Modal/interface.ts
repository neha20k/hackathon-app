import { IHackathon } from "../../pages/Home/interface";

export interface IHackathonModal {
    show: boolean
    handleClose: () => void,
    hackathonList: IHackathon[],
    setHackathonList: React.Dispatch<React.SetStateAction<IHackathon[]>>;
    editId: string,
    title: string
}
