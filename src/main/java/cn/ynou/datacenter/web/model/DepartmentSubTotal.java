package cn.ynou.datacenter.web.model;

import java.text.NumberFormat;

public class DepartmentSubTotal {
    String depName;
    Integer count;
    Double  sumOfMoney;

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Double getSumOfMoney() {
        return sumOfMoney;
    }

    public void setSumOfMoney(Double sumOfMoney) {
        this.sumOfMoney = sumOfMoney;
    }

    public String getSumOfMoneyString(){
        NumberFormat nf = NumberFormat.getInstance();
        nf.setGroupingUsed(true);
        return nf.format(sumOfMoney);
    }
}
