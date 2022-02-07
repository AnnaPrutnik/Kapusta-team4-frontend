import React from 'react';

import { MdKeyboardBackspace } from 'react-icons/md';

const BackHomeBtn = () => {
  const onGoHome = () => {};

  return (
    // <div className="btn-home">
    //   <Link className="btn-home_link" to="/comment">
    //     <MdKeyboardBackspace className="btn-home_icon" />
    //     <span className="btn-home_text">Вернуться на главную</span>
    //   </Link>
    // </div>
    <button type="submit" className="btn-home">
      <MdKeyboardBackspace className="btn-home_icon" onClick={onGoHome} />
      <span className="btn-home_text">Вернуться на главную</span>
    </button>
  );
};

export default BackHomeBtn;
