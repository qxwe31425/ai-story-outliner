import {useState} from 'react'

function ThemeInput({onSubmit}){
    const [theme, setTheme] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!theme.trim()) {
            setError('请输入故事主题')
            return
        }
        setError('')
        onSubmit(theme)
    }

    return <div className="theme-input-container">
        <h2>开始你的冒险！</h2>
        <p>请输入你想要的故事主题</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="例如：科幻、悬疑、爱情..."
                required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" className="generate-btn">生成故事</button>
        </form>
    </div>
}

export default ThemeInput
