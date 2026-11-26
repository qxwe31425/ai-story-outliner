import { useState, useEffect } from 'react'

function StoryGame({story, onNewStory}) {
    const [currentNodeId, setCurrentNodeId] = useState(null);
    const [currentNode, setCurrentNode] = useState(null);
    const [options, setOptions] = useState([]);
    const [isEnding, setIsEnding] = useState(false);
    const [isWinningEnding, setIsWinningEnding] = useState(false);

    useEffect(() => {
        if(story && story.root_node){
            const rootNodeId = story.root_node.id;
            setCurrentNodeId(rootNodeId);
        }
    }, [story]);

    useEffect(() => {
        if(currentNodeId && story && story.all_nodes) {
            const node = story.all_nodes[currentNodeId];
            console.log(node);
            setCurrentNode(node);
            setIsEnding(node.is_ending);
            setIsWinningEnding(node.is_winning_ending);
            
            if(!node.is_ending && node.options && node.options.length > 0) {
                setOptions(node.options);
            } else {
                setOptions([]);
            }
        }
    }, [currentNodeId, story]);

    const chooseOption = (optionId) => {
        setCurrentNodeId(optionId);
    };

    const restartStory = () => {
        if(story && story.root_node) {
            const rootNodeId = story.root_node;
            setCurrentNodeId(rootNodeId);
        }
    };

    return <div className="story-game">
        <header className="story-header">
            <h2>{story?.title || '故事游戏'}</h2>
        </header>

        <div className="story-content">
            {currentNode && <div className="story-node">
                <p>{currentNode.content}</p>
                { isEnding ? 
                <div className="story-ending">
                    <h3>{isWinningEnding ? '恭喜你！' : '游戏结束'}</h3>
                    {isWinningEnding ? <p>你成功完成了这个故事！</p> : <p>游戏失败。</p>}
                </div> 
                : 
                <div className="story-options">
                    <h3>选择你的行动：</h3>
                    <div className="options-list">
                        {options.map((option, index) => {
                            return (
                                <button 
                                    key={index} 
                                    onClick={() => chooseOption(option.node_id)}
                                    className="option-btn">
                                    {option.text}
                                </button>
                            )
                        })}
                    </div>
                </div>
                }
            </div>}
        </div>

        <div className="story-controls">
            <button onClick={restartStory} className="restart-btn">重新开始</button>
        </div>

        {onNewStory && <button onClick={onNewStory} className="new-story-btn">
            新故事
        </button>}
    </div>
   
}

export default StoryGame
