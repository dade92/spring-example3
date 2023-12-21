package domain.alive;

public class DefaultAliveProvider implements AliveProvider {
    @Override
    public boolean retrieve() {
        return true;
    }
}
