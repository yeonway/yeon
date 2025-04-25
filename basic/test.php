$sql = "select * from test_list order by reg_date DESC";
$res = $db->query($sql);

while($rs=$db->fetch($res)) {
    echo $rs["content"]."<br/>";
}