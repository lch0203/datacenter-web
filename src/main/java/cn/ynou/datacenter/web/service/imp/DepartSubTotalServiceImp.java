package cn.ynou.datacenter.web.service.imp;

import cn.ynou.datacenter.web.model.DepartmentSubTotal;
import cn.ynou.datacenter.web.service.DepartSubTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.constraints.Null;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
@Transactional
public class DepartSubTotalServiceImp implements DepartSubTotalService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<DepartmentSubTotal> findAll() {
        String sql = "SELECT SSBM,count(*) AS AMOUNT,SUM(JZ) AS SUMTOTAL \n" +
                "FROM LY_VIEW_ZCXT_YQSBJBQK \n" +
                "WHERE SSBM NOT IN('房屋','土地') \n" +
                "GROUP BY SSBM \n" +
                "ORDER BY SUMTOTAL DESC";
        List<DepartmentSubTotal> list = jdbcTemplate.query(sql,
                new DepartmentSubTotalRowmapper(),
                null);
        if (list != null && list.size() > 0) {
            return list;
        } else {
            return null;
        }
    }

    class DepartmentSubTotalRowmapper implements RowMapper<DepartmentSubTotal> {
        @Override
        public DepartmentSubTotal mapRow(ResultSet resultSet, int i) throws SQLException {
            DepartmentSubTotal departmentSubTotal = new DepartmentSubTotal();
            departmentSubTotal.setDepName(resultSet.getString("SSBM"));
            departmentSubTotal.setCount(Integer.parseInt(resultSet.getString("AMOUNT")) );
            departmentSubTotal.setSumOfMoney(Double.parseDouble(resultSet.getString("SUMTOTAL")));
            return departmentSubTotal;
        }
    }
}
