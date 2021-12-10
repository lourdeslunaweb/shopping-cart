import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
    return (
            <div className="row d-flex justify-content-center mb-5" style={{ marginTop: '4em', marginBottom: '4em' }}>
                <PacmanLoader color="#555" loading={true} size={50} />
            </div>
    );
};

export { Loading };


