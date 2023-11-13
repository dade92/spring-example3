package domain;

public class DefaultAliveProvider implements AliveProvider {
    @Override
    public boolean retrieve() {
        return true;
    }
}
