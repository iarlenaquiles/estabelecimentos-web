import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import PropTypes from  'prop-types';
import * as S from './styles';

function Estabelecimento({ estabelecimento, onDelete }) {
  return (
      <S.Estabelecimento>
        <S.Aside>
          <img src={estabelecimento.image_url} alt={estabelecimento.name} onError={(e)=>{e.target.onerror = null; e.target.src="https://api.adorable.io/avatars/100/abott@adorable.png"}} />

          <div>
            <strong>{estabelecimento.name}</strong>

            <p>{estabelecimento.description}</p>
          </div>
        </S.Aside>

        <S.Actions>
          <Link to={`/estabelecimento/edit/${estabelecimento._id}`}>
            <button type="button" className="editar">
              <MdEdit color="#fff" size={20} />
              Editar
            </button>
          </Link>

          <button
            type="button"
            className="cancelar"
            onClick={onDelete}
          >
            <MdDeleteForever color="#fff" size={20} />
            Deletar
          </button>
        </S.Actions>

      </S.Estabelecimento>
  )
}

export default Estabelecimento;

Estabelecimento.propTypes = {
  estabelecimento: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

