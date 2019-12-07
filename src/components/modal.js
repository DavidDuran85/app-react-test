import React, { Component} from 'react';

const Modal = ({children, className, onClose, buttonsFooter, title}) => {
        return(
            <div className={`modal ${className}`}>
              <div className="modal-background" onClick={onClose}/>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">{title}</p>
                  <button className="delete" onClick={onClose}/>
                </header>
                <section className="modal-card-body">
                  {children}
                </section>
                <footer className="modal-card-foot">
                  {buttonsFooter}
                 
                </footer>
              </div>
            </div>
          );
}

export default Modal;