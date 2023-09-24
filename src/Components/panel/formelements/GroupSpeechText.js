import React from "react";

function GroupSpeechText() {
    return (
        <>
            <div class="input-group input-group-merge speech-to-text">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Say it"
                    aria-describedby="text-to-speech-addon" />
                <span class="input-group-text" id="text-to-speech-addon">
                    <i class="bx bx-microphone cursor-pointer text-to-speech-toggle"></i>
                </span>
            </div>
            <hr />
            <div class="input-group input-group-merge speech-to-text">
                <textarea class="form-control" placeholder="Textarea! Say it" rows="2"></textarea>
                <span class="input-group-text">
                    <i class="bx bx-microphone cursor-pointer text-to-speech-toggle"></i>
                </span>
            </div>
        </>
    )
}
export default GroupSpeechText;