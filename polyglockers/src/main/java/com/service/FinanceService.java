package com.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.polyglockers.polyglockers.glocks.Finance;
import com.polyglockers.polyglockers.repository.FinanceRepository;

@Service
public class FinanceService {

    private final FinanceRepository financeRepository;

    public FinanceService(FinanceRepository financeRepository) {
        this.financeRepository = financeRepository;
    }

    public void addExpense(Finance finance) {
        financeRepository.insert(finance);
    }

    public void updateExpense(Finance finance) {
        Finance savedFinance = financeRepository.findById(finance.getId())
                .orElseThrow(() ->  new RuntimeException(
                    String.format("Cannot find finance by id %s", finance.getId())));
        savedFinance.setExpenseName(finance.getExpenseName());
        savedFinance.setExpenseCategory(finance.getExpenseCategory());
        savedFinance.setExpenseAmount(finance.getExpenseAmount());

        financeRepository.save(finance);
    }

    public List<Finance> getAllExpenses() {
        return financeRepository.findAll();
    }

    public Finance getExpenseByName(String name) {
        return financeRepository.findByName(name).orElseThrow(() -> new RuntimeException(
            String.format("Cannot Find Expense By Name %s", name)));
    }

    public void deleteExpense(String id) {
        financeRepository.deleteById(id);
    }
}
