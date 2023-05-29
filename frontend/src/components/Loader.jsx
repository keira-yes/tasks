const Loader = () => {
    return (
        <div className="loader">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="52" height="12" viewBox="0 0 52 12" enableBackground="new 0 0 0 0">
                <circle fill="#AB54DB" stroke="none" cx="6" cy="6" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"/>
                </circle>
                <circle fill="#AB54DB" stroke="none" cx="26" cy="6" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"/>
                </circle>
                <circle fill="#AB54DB" stroke="none" cx="46" cy="6" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"/>
                </circle>
            </svg>
        </div>
    );
};

export default Loader;