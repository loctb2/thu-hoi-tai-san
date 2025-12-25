/* 1. Khung chứa chung: Cần position relative để căn chỉnh các phần tử con */
.scanner-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full màn hình */
    overflow: hidden;
    background: #000;
}

/* Video camera: Đảm bảo nó full màn hình */
.scanner-container video, 
.scanner-container canvas {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Đảm bảo video không bị méo */
}

/* 2. Lớp phủ (Overlay) */
.scan-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10; /* Nằm đè lên video */
}

/* 3. Chiếc hộp quét (Scan Box) */
.scan-box {
    width: 250px;   /* Kích thước khung quét */
    height: 250px;
    position: relative;
    
    /* Viền của khung quét (tùy chọn) */
    border: 2px solid rgba(255, 255, 255, 0.5); 
    border-radius: 10px;

    /* --- THỦ THUẬT LÀM TỐI NỀN XUNG QUANH --- */
    /* Tạo một cái bóng cực lớn bao quanh hộp để che tối video bên ngoài */
    box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5); 
}

/* 4. Tia laser quét (Scan Line) */
.scan-line {
    width: 100%;
    height: 2px;
    background: red; /* Màu đỏ như trong hình */
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 4px red; /* Tạo hiệu ứng phát sáng (glow) */
    
    /* Animation di chuyển lên xuống */
    animation: scanAnimation 2s infinite linear; 
}

/* Tạo thêm mấy chấm vàng ở giữa line cho giống hình (Tùy chọn) */
.scan-line::after {
    content: '';
    position: absolute;
    top: -2px; /* Căn chỉnh cho nằm giữa line */
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 6px;
    background: radial-gradient(circle, yellow 20%, transparent 30%); /* Tạo đốm vàng */
    background-size: 6px 6px; 
}

/* 5. Định nghĩa chuyển động (Keyframes) */
@keyframes scanAnimation {
    0% {
        top: 0;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        top: 100%; /* Chạy xuống đáy box */
        opacity: 0;
    }
}
