

export default function App({ data }) {
    const last3 = data.slice(-3);
    return (
        <>
            <p>{last3[0]}</p>
            <p>{last3[1]}</p>
            <p>{last3[2]}</p>
        </>
    )
}
