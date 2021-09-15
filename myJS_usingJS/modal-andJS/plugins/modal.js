$.modal = function (options) {
  const $modal = _createModal(options);
  const ANIMATION_SPEED = 200;
  let closing = false;
  let destroyed = false;

  const modal = {
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed');
      }
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
    // destroy() {}, -> you can put this method here or use Object.assign
  };

  const listener = (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  };

  $modal.addEventListener('click', listener);

  function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="modal-overlay" data-close="true">
          <div class="modal-window" style="width: ${
            options.width || DEFAULT_WIDTH
          }">
            <div class="modal-header">
              <span class="modal-title">${
                options.title || 'Here is TITLES'
              }</span>
              ${
                options.closable
                  ? `<span class="modal-close" data-close="true">&times;</span>`
                  : ''
              }
            </div>
            <div class="modal-body" data-content>
              ${options.content || ''}
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

  return Object.assign(modal, {
    // to remove whole modal, clean and save memory
    destroy() {
      destroyed = true;
      // to remove elements from DOM-tree
      $modal.parentNode.removeChild($modal);
      // to remove eventListener
      $modal.removeEventListener('click', listener);
    },
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html;
    },
  });
};
