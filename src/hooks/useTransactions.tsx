import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

export interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

// interface TransactionInput {
//   title: string,
//   amount: number,
//   category: string,
//   type: string,
// }

// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>
type UpdateTransactionInput = TransactionInput & Pick<Transaction, 'id'>;

interface TransactionsProviderProps {
  children: ReactNode,
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
  updateTransaction: (transaction: UpdateTransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get("transactions")
    .then((response) => setTransaction(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response =  await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransaction((prevTransactions) => [
      ...prevTransactions,
      transaction,
    ]);
  }

  async function deleteTransaction(id: number) {
    await api.delete(`/transactions/${id}`);

    setTransaction((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  async function updateTransaction(transactionInput: UpdateTransactionInput) {
    const { id, ...rest } = transactionInput;
    const response = await api.put(`/transactions/${id}`, rest);
    const { transaction } = response.data;

    setTransaction((prevTransactions) =>
      prevTransactions.map((currentTransaction) =>
        currentTransaction.id === id ? transaction : currentTransaction
      )
    );
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction, deleteTransaction, updateTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}