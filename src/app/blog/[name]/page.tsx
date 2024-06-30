type Props = {
    params: { name: string };
};

export default function Page({params} : Props) {
    return (
        <>
            This is blog {params.name}
        </>
    )
}