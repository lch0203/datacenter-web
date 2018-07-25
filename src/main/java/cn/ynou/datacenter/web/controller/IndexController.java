package cn.ynou.datacenter.web.controller;


import cn.ynou.datacenter.web.model.DepartmentSubTotal;
import cn.ynou.datacenter.web.service.DepartSubTotalService;
import org.jasig.cas.client.authentication.AttributePrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
public class IndexController {

    @Autowired
    HttpServletRequest request;

    @Autowired
    DepartSubTotalService departSubTotalService;

    AttributePrincipal principal;
    Map attributes;

    @Value("${map.url.id2}")
    private String mapUrlId2;

    @GetMapping(value = "/")
    public String index(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        return "index";
    }

    /***
     * 办学体系
     * @param model
     * @return
     */
    @GetMapping(value = "/bxtx")
    public String bxtx(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("mapUrlId2",mapUrlId2);
        model.addAttribute("attributes", attributes);
        return "bxtx";
    }

    /***
     * 办学规模
     * @param model
     * @return
     */
    @GetMapping(value = "/bxgm")
    public String bxgm(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        return "bxgm";
    }

    /***
     * 村干部
     * @param model
     * @return
     */
    @GetMapping(value = "/cgb")
    public String cgb(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        return "cgb";
    }

    /***
     * 干部在线
     * @param model
     * @return
     */
    @GetMapping(value = "/gbzx")
    public String gbzx(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        return "gbzx";
    }

    /***
     * 固定资产报表
     * @param model
     * @return
     */
    @GetMapping(value = "/gdzcbb")
    public String gdzcbb(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        List<DepartmentSubTotal> list = departSubTotalService.findAll();
        model.addAttribute("DepartmentSubTotalList", list);
        Date currentTime = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = formatter.format(currentTime);
        model.addAttribute("date",dateString);
        return "gdzcbb";
    }

    /***
     *固定资产查询
     * @param model
     * @return
     */
    @GetMapping(value = "/gdzccx")
    public String gdzccx(Model model){
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        return "gdzccx";
    }

    @GetMapping(value = "/logout")
    public String logout() {
        return null;
    }

    /***
     * 2012年-2017年各类型在校生数、毕业生数统计
     * @param model
     * @return
     */
    @GetMapping(value = "/zxstj")
    public String zxstj(Model model) {
        principal = (AttributePrincipal) request.getUserPrincipal();
        attributes = principal.getAttributes();
        model.addAttribute("attributes", attributes);
        return "zxstj";
    }


}
