package com.polyglockers.polyglockers.glocks;

import java.math.BigDecimal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("finance")
public class Finance {
    @Id
    private String id;
    @Field(name = "name")
    @Indexed(unique = true)
    private String expenseName;
    @Field(name = "category")
    private ExpenseCategory eCategory;
    @Field(name = "amount")
    private BigDecimal eAmount;

    public Finance (String id, String name, ExpenseCategory category, BigDecimal amount) {
        this.id = id;
        expenseName = name;
        eCategory = category;
        eAmount = amount;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    
    public String getExpenseName() {
        return expenseName;
    }
    public void setExpenseName(String name) {
        this.expenseName = name;
    }

    public ExpenseCategory getExpenseCategory() {
        return eCategory;
    }
    public void setExpenseCategory(ExpenseCategory cat) {
        this.eCategory = cat;
    }

    public BigDecimal getExpenseAmount() {
        return eAmount;
    }
    public void setExpenseAmount(BigDecimal amount) {
        this.eAmount = amount;
    }
}
