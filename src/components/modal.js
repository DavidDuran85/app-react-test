import React, { Component} from 'react';

const Modal = ({ children, closeModal, modalState, title }) => {
    if(!modalState) {
        return null;
      }
    else{
        console.log('componente modal')
        return(
            <div className="modal is-active">
              <div className="modal-background" onClick={closeModal} />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">{title}</p>
                  <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                  <div className="content">
                    {children}
                  </div>
                </section>
                <footer className="modal-card-foot">
                  <a className="button" onClick={closeModal}>Cerrar</a>
                  <a className="button is-success" onClick={closeModal}>Aceptar</a>
                </footer>
              </div>
            </div>
          );
    }
        
        
    
}

export default Modal;