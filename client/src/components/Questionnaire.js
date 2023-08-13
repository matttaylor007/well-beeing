import { Link } from "react-router-dom";
import "./Questionnarie.css";

const Questionnaire = () => {
  return (
    <div className="box-container">
      <div className="box-question">
        <h2 className="title-question">Questionnaire</h2>
        <p className="explain-text">
          Help us give us an idea of what your mood is
        </p>
        <p className="values-text">During the last 2 weeks.. </p>

        <form className="questions-form">
          <div className="question">
            <label>
              Q1. About how often did you feel tired out for no good reason?
            </label>
            <div className="input-box">
              <div className="text-option">
                <p>1</p>
                <p>Not at all</p>
              </div>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                step="1"
                // onChange={(e) => handleAnswer(0, parseInt(e.target.value))}
              />
              <div className="text-option">
                <p>5</p>
                <p>All the time </p>
              </div>
            </div>
          </div>
          <div className="question">
            <label>
              Q2. About how often did you feel nervous that nothing could calm
              you dow?
            </label>
            <div className="input-box">
              <div className="text-option">
                <p>1</p>
                <p>Not at all</p>
              </div>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                step="1"
                // onChange={(e) => handleAnswer(0, parseInt(e.target.value))}
              />
              <div className="text-option">
                <p>5</p>
                <p>All the time </p>
              </div>
            </div>
          </div>
          <div className="question">
            <label>
              Q3. About how often did you feel so restless you could not sit
              still?
            </label>
            <div className="input-box">
              <div className="text-option">
                <p>1</p>
                <p>Not at all</p>
              </div>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                step="1"
                // onChange={(e) => handleAnswer(0, parseInt(e.target.value))}
              />
              <div className="text-option">
                <p>5</p>
                <p>All the time </p>
              </div>
            </div>
          </div>
          <div className="question">
            <label>
              Q4. During the past 2 weeks About how often did you feel that
              everything was an effort??
            </label>
            <div className="input-box">
              <div className="text-option">
                <p>1</p>
                <p>Not at all</p>
              </div>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                step="1"
                // onChange={(e) => handleAnswer(0, parseInt(e.target.value))}
              />
              <div className="text-option">
                <p>5</p>
                <p>All the time </p>
              </div>
            </div>
          </div>
          <div className="question">
            <label>Q5. About how often did you feel worthless???</label>
            <div className="input-box">
              <div className="text-option">
                <p>1</p>
                <p>Not at all</p>
              </div>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                step="1"
                // onChange={(e) => handleAnswer(0, parseInt(e.target.value))}
              />
              <div className="text-option">
                <p>5</p>
                <p>All the time </p>
              </div>
            </div>
          </div>
          <div className="question">
            <label>Q6. About how often did you feel worthless????</label>
            <div className="input-box">
              <div className="text-option">
                <p>1</p>
                <p>Not at all</p>
              </div>
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                step="1"
                // onChange={(e) => handleAnswer(0, parseInt(e.target.value))}
              />
              <div className="text-option">
                <p>5</p>
                <p>All the time </p>
              </div>
            </div>
          </div>

          {/* Repeat for other questions */}
          {/* ... */}
          <Link to="/resources">
            <button
              type="button"
              className="btn-submit"
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
