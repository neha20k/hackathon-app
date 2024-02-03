import { IHackathon } from "../../pages/Home/interface";

export interface IHackathonForm {
    editId: string,
    hackathonList: IHackathon[],
    handleSubmit: () => void,
    formState: IHackathon,
    setFormState: React.Dispatch<React.SetStateAction<IHackathon>>
}