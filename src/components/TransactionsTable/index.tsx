import { useState } from "react";
import { Container } from "./styles";
import { Transaction, useTransactions } from "../../hooks/useTransactions";
import { EditTransactionModal } from "../EditTransactionModal";

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();
  const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  function handleOpenEditTransactionModal(transaction: Transaction) {
    setSelectedTransaction(transaction);
    setIsEditTransactionModalOpen(true);
  }

  function handleCloseEditTransactionModal() {
    setIsEditTransactionModalOpen(false);
    setSelectedTransaction(null);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className="edit-button"
                      onClick={() => handleOpenEditTransactionModal(transaction)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => deleteTransaction(transaction.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
          ))}
        </tbody>
      </table>

      <EditTransactionModal
        isOpen={isEditTransactionModalOpen}
        onRequestClose={handleCloseEditTransactionModal}
        transactionToEdit={selectedTransaction}
      />
    </Container>
  );
}
