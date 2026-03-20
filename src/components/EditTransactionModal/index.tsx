import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import closeImage from '../../assets/Icons4.svg';
import incomeImg from '../../assets/Icons.svg';
import outcomeImg from '../../assets/Icons2.svg';
import { useTransactions, Transaction } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from '../NewTransactionModal/styles';

interface EditTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  transactionToEdit: Transaction | null;
}

export function EditTransactionModal({
  isOpen,
  onRequestClose,
  transactionToEdit,
}: EditTransactionModalProps) {
  const { updateTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  useEffect(() => {
    if (!transactionToEdit) {
      return;
    }

    setTitle(transactionToEdit.title);
    setAmount(transactionToEdit.amount);
    setCategory(transactionToEdit.category);
    setType(transactionToEdit.type);
  }, [transactionToEdit, isOpen]);

  async function handleUpdateTransaction(event: FormEvent) {
    event.preventDefault();

    if (!transactionToEdit) {
      return;
    }

    await updateTransaction({
      id: transactionToEdit.id,
      title,
      amount,
      category,
      type,
    });

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImage} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleUpdateTransaction}>
        <h2>Editar transacao</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Salvar alteracoes</button>
      </Container>
    </Modal>
  );
}
