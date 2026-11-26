function LoadingStatus({theme}){
    return <div className="loading-container">
        <h2>生成你的{theme}主题故事</h2>
        <div className="loading-animation">
            <div className="spinner"></div>
        </div>

        <p className="loading-info">
            正在生成故事，请稍等...</p>
    </div>
}

export default LoadingStatus; 