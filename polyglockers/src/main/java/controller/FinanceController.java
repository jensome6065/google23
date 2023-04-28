package controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.polyglockers.polyglockers.glocks.Finance;
import com.polyglockers.polyglockers.repository.FinanceRepository;
import com.service.FinanceService;

@RestController
@RequestMapping("/api/finance")
public class FinanceController {
    private final FinanceService financeService;

    public FinanceController(FinanceService financeService) {
        this.financeService = financeService;
    }

    @PostMapping
    public ResponseEntity addExpense(@RequestBody Finance finance) {
        financeService.addExpense(finance);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity updateExpense(@RequestBody Finance finance) {
        financeService.updateExpense(finance);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Finance>> getAllExpense() {
        return ResponseEntity.ok(financeService.getAllExpenses());
    }

    @GetMapping("/{name}")
    public ResponseEntity<Finance> getExpenseByName(@PathVariable String name) {
        return ResponseEntity.ok(financeService.getExpenseByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteExpense(@PathVariable String id) {
        financeService.deleteExpense(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
