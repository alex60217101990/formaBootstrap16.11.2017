/**
 * Created by Alex on 16.11.2017.
 */
//$("form").submit(function(){return false;})
let form=[];
let array_json=[];

$('form').submit((e)=>{
    //отмена действия по умолчанию для кнопки submit
    e.preventDefault();
    var $form = $(this);
   if($('#exampleInputName1').val().length>0){
        array_json.push('name');
        array_json.push($('#exampleInputName1').val());
    }else{
    input_tooltip($('#exampleInputName1'),'error11111111111111111111',2000);
    }
    if($('#exampleInputTelephone1').val().length>0){
       array_json.push('telephone');
       array_json.push($('#exampleInputTelephone1').val());
    }else{
        input_tooltip($('#exampleInputTelephone1'),'error2222222222222',2000);
    }

    if($('#exampleInputEmail1').val().length>0){
        array_json.push('email');
        array_json.push($('#exampleInputEmail1').val());
    }else{
        input_tooltip($('#exampleInputEmail1'),'error33333333333333333',2000);
    }
    if($('#exampleTextarea').val().length>0){
        array_json.push('information');
        array_json.push($('#exampleTextarea').val());
    }else{
        input_tooltip($('#exampleTextarea'),'error44444444444444444444',2000);
    }

    if(array_json.size==8){
     //   try {
            $.ajax({
                type: "POST",
                url: 'URL',
                data: /*$form.serialize()*/ $.toJSON(array_json),
                success: (response)=>{ //Данные отправлены успешно
                    result = jQuery.parseJSON(response);
                    console.log(result);
                },
                error:(response)=>{ // Данные не отправлены
                    console.log('error1');
                    document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
                }
            })
    //    }catch (ex){
      //      console.log('error');
       // }
    }

    return false;
});



function input_tooltip(el,message, time){
    el.tooltip({
        animation:true,
        trigger: 'manual',
        title: message,
        delay: { show: 500, hide: 200 }
    }).tooltip('show');
    setTimeout(()=>{
        el.tooltip('dispose');
},time);
}