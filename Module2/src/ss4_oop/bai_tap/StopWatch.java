package ss4_oop.bai_tap;

import java.util.Arrays;
import java.util.Date;

public class StopWatch {
    private long startTime;
    private long endTime = new Date().getTime();

    public StopWatch() {
        startTime = new Date().getTime();
    }

    public void Start() {
        startTime = new Date().getTime();
    }

    public void End() {
        endTime = new Date().getTime();
    }

    public long getElapsedTime() {
        return endTime - startTime;
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getEndTime() {
        return endTime;
    }

    public void setEndTime(long endTime) {
        this.endTime = endTime;
    }

    public static void main(String[] args) {
        StopWatch stopWatch = new StopWatch();
        long[] numbs = new long[10000];
        for (int i = 0; i < numbs.length; i++) {
            numbs[i] = (long) ((Math.random()*100) + 1);
        }
        stopWatch.End();
        System.out.printf("Time to creat Array 10000 element random : %d ms\n",stopWatch.getElapsedTime());
        stopWatch.Start();
        Arrays.stream(numbs).sorted().toArray();
        stopWatch.End();
        System.out.printf("Time to sort all element is %d ms\n", stopWatch.getElapsedTime());
    }
}
