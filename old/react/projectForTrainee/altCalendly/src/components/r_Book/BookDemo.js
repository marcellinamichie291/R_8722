function BookDemo() {
    return(

        <div className="rCol-lg-4" id="r_Del3">
        <div className="r_boxCol">

          <button type="button" className="r_box1BtnDel btn btn-default btn-danger" id="r_box1Col1DeleteBtn" onClick="r_Delete3()">X</button>
          <div className="r_boxColHead">
            <img 
              className="r_boxColImg" 
              id="r_box1ColImg" 
              src={require('../../img/pik-conf2.png')} 
              alt="img/pik-conf2.png" 
            />
            <h3>Demo</h3>
          </div>

          <div className="r_boxColContent">

            <div className="rRow">
              <div className="rCol-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="r-colorBlue bi bi-smartwatch" viewBox="0 0 16 16">
                  <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
                  <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
                </svg>
              </div>
              <div className="rCol-10" id="r_box2Time">
                <p className="" id="r_box1ColTime">from 18 to 19</p>
              </div>
            </div>

            <div className="rRow">
              <div className="rCol-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="r-colorBlue bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </div>
              <div className="rCol-10" id="r_box2Location">
                <p className="" id="r_box1ColLocation">Zoom</p>
              </div>
            </div>

            <div className="rRow">
              <div className="rCol-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="r-colorBlue bi bi-question-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                </svg>
              </div>
              <div className="rCol-10" id="r_box2About">
                <p id="r_box1ColAbout">Presenr your achivment <br/> Meet with new people</p>
              </div>
            </div>
  
          </div>
          
          <a href="#r_block3" className="r_box1Btn" id="r_box1ColTimeBtn" onClick="r_Book()">
            BOOK 
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
              </svg>
            </i>
          </a>
        </div>
      </div>

    )
}

export default BookDemo;