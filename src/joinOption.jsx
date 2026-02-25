const aborted = () => {
    return alert('Right now This is in progress!')
}

export default function NewsLetter() {
    return (
        <>
              <div className="newsletter">
            <h2>Join the Crew</h2>
            <p>Get exclusive drops and deals on cars and clothes.</p>
            <form>
                <input type="email" placeholder="Enter our email address" />
                <button type="submit" className="btn" onClick={aborted}>Subscribe</button>
            </form>
        </div>
        </>
    )
}