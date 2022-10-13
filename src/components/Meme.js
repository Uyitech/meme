import React from "react"
import memesData from "../memesData"


function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <section>
            <div className="form">
                <div class="row">

                    <div className="form-group col-md-6">
                        <div class="form-outline">
                            <input type="text" id="formControlLg" class="form-control" />
                            <label class="form-label" for="formControlLg" >Top Text</label>
                            <div class="form-notch">
                                <div class="form-notch-leading" ></div>
                                <div class="form-notch-middle" ></div>
                                <div class="form-notch-trailing"></div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group col-md-6">
                        <div class="form-outline">
                            <input type="text" id="form2" className="form-control" />
                            <label class="form-label" for="form2">Bottom Text</label>
                            <div class="form-notch">
                                <div class="form-notch-leading" ></div>
                                <div class="form-notch-middle" ></div>
                                <div class="form-notch-trailing"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <button className="form--button" onClick={getMemeImage}>
                        Get a new meme image 🖼
                    </button>
                </div>
            </div>

            <img src={meme.randomImage} alt="" className="meme--image" />
        </section>
    )
}

export default Meme