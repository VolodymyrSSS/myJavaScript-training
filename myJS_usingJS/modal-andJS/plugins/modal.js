$.modal = function (options) {
  const $modal = _createModal(options);
  const ANIMATION_SPEED = 200;
  let closing = false;

  function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Some Title</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div class="modal-footer">
            <button>OK</button>
            <button>Cansel</button>
          </div>
        </div>
      </div>
    `
    );
    document.body.appendChild(modal);
    return modal;
  }

  return {
    open() {
      !closing && $modal.classList.add('open');
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('close');
      setTimeout(() => {
        $modal.classList.remove('close');
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {},
  };
};
