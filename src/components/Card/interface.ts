export interface IHackathonCard {
    id: string,
    title: string,
    desc: string,
    tags: string,
    date: string,
    votes: number,
    handleVotes: (id: string) => void,
    handleDelete: (id: string) => void,
    handleEdit: (id: string) => void
}