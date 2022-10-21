import React from "react"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = (allMemes[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <section>
            <div className="form">
                <div className="row">
                    <div className="form-group col-md-6">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="formControlLg"
                                className="form-control"
                                name="topText"
                                value={meme.topText}
                                onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="formControlLg" >Top Text</label>
                            <div className="form-notch">
                                <div className="form-notch-leading" ></div>
                                <div className="form-notch-middle" ></div>
                                <div className="form-notch-trailing"></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form2"
                                className="form-control"
                                name="bottomText"
                                value={meme.bottomText}
                                onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form2">Bottom Text</label>
                            <div className="form-notch">
                                <div className="form-notch-leading" ></div>
                                <div className="form-notch-middle" ></div>
                                <div className="form-notch-trailing"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <button className="form--button" onClick={getMemeImage}>
                        Get a new meme image 🖼
                    </button>
                </div>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}

export default Meme;