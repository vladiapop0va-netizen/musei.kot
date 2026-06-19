const pieces = document.querySelectorAll('.piece');
let activePiece = null;
let offset = { x: 0, y: 0 };

pieces.forEach(piece => {
    piece.addEventListener('mousedown', (e) => {
        activePiece = piece;
        offset.x = e.clientX - piece.offsetLeft;
        offset.y = e.clientY - piece.offsetTop;
        piece.style.zIndex = 1000;
    });
});

document.addEventListener('mousemove', (e) => {
    if (activePiece) {
        let newX = e.clientX - offset.x;
        let newY = e.clientY - offset.y;

        
        const board = document.getElementById('game-board');
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + activePiece.offsetWidth > board.offsetWidth) 
            newX = board.offsetWidth - activePiece.offsetWidth;
        if (newY + activePiece.offsetHeight > board.offsetHeight) 
            newY = board.offsetHeight - activePiece.offsetHeight;

        activePiece.style.left = newX + 'px';
        activePiece.style.top = newY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    if (activePiece) {
        activePiece.style.zIndex = 1;
        activePiece = null;
    }
});