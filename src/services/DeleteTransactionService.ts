import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const repository = getCustomRepository(TransactionsRepository);

    const transaction = await repository.findOne(id);

    if (!transaction) {
      throw new AppError('This transaction ID is not valid!', 404);
    }

    await repository.remove(transaction);
  }
}

export default DeleteTransactionService;
