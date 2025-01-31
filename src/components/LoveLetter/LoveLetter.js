import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './day2.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className=''>
      <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
        <div className="flap"></div>
        <div className="body"></div>
      </div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
        <h2>Gửi Như yêu của anh,</h2>
        <p>
          "Ngày hôm nay của em thế nào? Còn giận anh nhiều không? Em đã ổn hơn sau cuộc nhậu tối qua chưa? Khang có còn làm em phát 
          cáu vì sự điên khùng của thằng nhỏ không?..."
        </p>
        <p>
          Đó là những điều mà anh thắc mắc suốt ngày hôm nay nhưng không dám nhắn hỏi em trực tiếp, nên anh đành mượn lá thư này làm vật kết 
          nối giữa hai ta. Có lẽ việc này sẽ cho em sự riêng tư mà em đang cần, nhưng vẫn có thể giữ ấm tình yêu của tụi mình.
        </p>
        <p>
          "Em đẹp thật."
        </p>
        <p>
          Anh đã thốt ra 3 từ đó sau khi xem story và bài đăng của em. Anh vẫn chưa tin được rằng anh may mắn đến mức có một người con gái
          xinh như vậy, đã và đang ở cùng anh dưới một mái nhà và yêu anh. Em thật xinh trong lớp make-up, nhưng phiên bản xinh nhất
          của em luôn là lúc em ôm anh ngủ vào mỗi buổi sáng. Đó là động lực để anh có thể đi làm mỗi ngày.
        </p>
        <p>
          Ngày hôm nay của anh có rất nhiều bất ngờ. Buổi sáng nay khi anh vừa mở mắt, thằng An (đứa còn lại trong nhóm bạn dơ bẩn nhất BMT ngày đó - An, Nhân và Danh)
          đã đạp cửa xách anh ra khỏi nhà để cùng đi cafe với Nhân. Anh có dẫn theo thẳng em họ của mình tới quán để làm quen với tụi nó.
          Suốt buổi cafe là những câu chửi và khịa dành cho anh và cân nặng của anh (em đừng lo, chửi và body shaming nhau là cách mà tụi anh thể
          hiện tình cảm). Hội đồng dơ bẩn nhất BMT đã tuyên án anh "béo quá mức Pickle-ball" và hình phạt là bao bida cả bọn. Mấy thằng chó.
        </p>
        <p>
          Bất ngờ thứ hai xảy ra khi tụi anh đi đánh bida. Ngày hôm nay anh đã học được cách "Đánh đền điểm" trong bida. Và cũng không bất ngờ lắm,
          anh đứng bét điểm. Nhưng thằng em họ anh lại là người về nhất, thằng nhỏ có những đường bi tuyệt mĩ đến mức anh và Nhân đã phải quỳ xuống
          lạy nó ngay trong quán. Nó như là một viên ngọc thô trong giới bida, càng mài càng thô.
        </p>
        <p>
          Và khi anh về đến nhà, thứ làm anh bất ngờ là thấy sóng gió gia tộc, mẫu thuẫn gia đình trong chính nhà mình.
          Thầy Tuấn - người cầm cái - đã luộc mất của cô Huyền - người không bao giờ dằn dưới 17 - 90k tiền Xì dách. Và cô Huyền đã giận dỗi bỏ cơm tối.
          Em biết ngày hôm nay đến lượt ai phải đi xin lỗi và dỗ vợ rồi đấy.
        </p>
        <p>
          Ngày hôm nay của anh là thế, anh vẫn nhớ em nhiều, vẫn yêu em rất nhiều, và thương em ngày càng nhiều hơn nữa.
        </p>
        <p>
          Yêu em và hôn em,
        </p>
        <p>
        Người thua thầy Tuấn 50k tiền Xì dách, MHD
        </p>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
    
  );
};

export default LoveLetter;
