$(document).ready(function(){




    $(document).on("keypress", ".lineEnd", function(e){
        var key = (e.keyCode || e.which);
        if(key == 13 || key == 3) {
            $(this).each(function() {
                $("<span />", { text: this.value, "class":"view" }).insertAfter(this);
                $(this).hide();
                if(this.value === "exit"){
                    console.log("exit")
                }
                else if(this.value === "help"){

                    $(`<div>
                        type 'resume' for a text based resume to be shown
                         
                        </div>
                        <div class="cursor"><span style="color: chartreuse;padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: #232323; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else{
                    $(`
                        <div class="cursor"><span style="color: chartreuse;padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: #232323; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;

                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }





            });
        }
    })


    const app = Vue.createApp({
        data() {
            return {
                text: ''
            }
        },
        methods: {
            writeText() {
                this.text = 'Hello World!'
            },

        }
    })
    app.mount('#app')



    $("input").select().focus().blur(function() {
        setTimeout(function() { $("input").focus(); }, 0);
    });

})