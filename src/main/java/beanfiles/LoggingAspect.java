package beanfiles;

import org.aspectj.lang.ProceedingJoinPoint;

public class LoggingAspect {

    public void logBefore() {
        System.out.println("[LOG] Method execution starting...");
    }

    public void logAfterReturning() {
        System.out.println("[LOG] Method executed successfully.");
    }

    public void logAfterThrowing(Exception ex) {
        System.out.println("[LOG] Exception thrown: " + ex.getMessage());
    }

    public Object logAround(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        System.out.println("[LOG] Around: Executing " + pjp.getSignature().getName());
        Object result = pjp.proceed();
        long end = System.currentTimeMillis();
        System.out.println("[LOG] Around: Execution took " + (end - start) + " ms");
        return result;
    }
}
