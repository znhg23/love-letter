import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './xinloi.mp3';

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
          Mình quen nhau đã gần 2 năm rồi. Đây là cái Tết thứ 2 mà tụi mình đón cùng nhau, và sắp tới cũng là Valentine 
          thứ 2 anh được ở bên cạnh em. Suốt 2 năm vừa rồi anh đã được cùng em trải qua vô vàn điều quý giá, và anh yêu từng
          phút giây được ở cạnh người anh yêu để trải nghiệm những điều tuyệt vời đó.
        </p>
        <p>
          Nhưng cũng đã không ít lần anh làm em phải khóc, phải tủi thân vì sự ngây ngô của mình - một đứa trẻ đang tập làm quen
          với cuộc sống xô bồ của người lớn. Điều kỳ lạ là sau mỗi lần như vậy, em đều bao dung tha thứ cho anh, và vẫn
          lựa chọn tiếp tục yêu anh, thương anh ngày càng nhiều hơn nữa. Anh thật may mắn khi đã có em ở bên, và anh thật sự yêu em
          vì điều này.
        </p>
        <p>
          Đến lần này, tụi mình lại giận nhau (hay đúng hơn là em giận anh) lại là vì sự khờ dại của anh. Anh đã nghĩ rằng đây là giới
          hạn của em rồi, và anh đã sợ rằng anh đã mất em rồi. Nhưng em vẫn vậy, em vẫn nói rằng em thương anh, và vẫn chờ đợi anh 
          thay đổi. Anh thật sự không xứng đáng với em mà.
        </p>
        <p>
          Anh đã sai ngay từ trước, từ rất lâu rồi khi đã để em phải cảm thấy bản thân mình không an toàn trong mối quan hệ.
          Và anh lại càng sai hơn khi đã làm em tổn thương bằng những hành động của mình. Anh đã sai rất nhiều rồi. Và anh 
          thực sự cảm thấy có lỗi với em, với tình thương của em, và với cả mối quan hệ của tụi mình. Anh xin lỗi em nhiều.
        </p>
        <p>
          Suốt những ngày qua anh luôn sợ một điều xảy ra: rằng anh sẽ mất em. Anh sợ sẽ mất đi người con gái đã cùng anh vui đùa
          những lúc cùng nhau nấu ăn, dọn nhà. Anh sợ mất đi người đã theo anh mọi nẻo đường trên con Wave ghẻ đến chiếc Motor mà
          anh hằng mơ ước. Anh sợ mất đi người đã luôn vực anh dậy, đánh bay mọi sự bất an trong lòng mỗi khi anh gặp vấn đề trong
          cuộc sống. Anh sợ mất đi người đã luôn luôn bao dung, yêu anh bất chấp những khiếm khuyết mà anh có. Anh sợ mất em.
        </p>
        <p>
          Anh biết rằng để em có thể tha thứ cho anh, để em có thể tin tưởng anh như trước, và không còn sự bất an trong lòng là rất khó.
          Anh không muốn thúc ép em phải làm những điều đó ngay tức khắc. Anh biết những điều này cần thời gian. Vậy nên em hãy cứ làm những
          gì mà em thấy thoải mái, để đứa trẻ trong em được chữa lành. 
        </p>
        <p>
          Còn anh, anh sẽ thay đổi từng ngày, từng chút từng chút một. Anh sẽ hiểu em hơn, tinh tế hơn, không còn làm em buồn, không
          còn làm em phải tủi thân vì bản thân anh nữa. Đây không phải là lời hứa, mà là một điều anh sẽ làm. Vì anh yêu em, và anh
          yêu mối quan hệ của tụi mình.
        </p>
        <p>
          Anh cũng không biết phải nói gì hơn nữa ngoài việc xin lỗi vì đã làm em buồn, cảm ơn em vì vẫn còn thương anh, và anh yêu em
          nhiều lắm.
        </p>
        <p>
          Yêu em và hôn em,
        </p>
        <p>
        Chúa đần của em, MHD
        </p>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
    
  );
};

export default LoveLetter;
