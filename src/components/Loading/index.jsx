import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
    return (
        <div className="mb-5">
            <div className="row d-flex justify-content-center mb-5">
                <PacmanLoader color="#555" loading={true} size={50} />
            </div>
        </div>
    );
};

export { Loading };


