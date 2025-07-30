package com.junitprograms;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.Test;

interface PaymentService {
    void processPayment();
}

class OrderService {
    private final PaymentService paymentService;
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
    public void placeOrder() {
        paymentService.processPayment();
    }
}
class OrderServiceTest {
    @Test
    void testPlaceOrderCallsPayment() {
        PaymentService paymentService = mock(PaymentService.class);
        OrderService orderService = new OrderService(paymentService);

        orderService.placeOrder();

        verify(paymentService, times(1)).processPayment();
    }
}