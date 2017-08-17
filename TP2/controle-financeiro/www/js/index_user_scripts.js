/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnEntrar */
    $(document).on("click", "#btnEntrar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pgsubInicial"); 
         return false;
    });
    
        /* button  #btnSair */
    $(document).on("click", "#btnSair", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btnComputadores */
    $(document).on("click", "#btnComputadores", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pgComputadores"); 
         return false;
    });
    
        /* button  #btnNotebooks */
    $(document).on("click", "#btnNotebooks", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pgNotebooks"); 
         return false;
    });
    
        /* button  #btnSmartphones */
    $(document).on("click", "#btnSmartphones", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pgSmartphones"); 
         return false;
    });
    
        /* button  #btnMenu */
    $(document).on("click", "#btnMenu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menu"));  
         return false;
    });
    
        /* button  #btnComputadoresMenu */
    
    
        /* button  #btnNotebookMenu */
    $(document).on("click", "#btnNotebookMenu", function(evt)
    {
        /*Fechar o Menu (SideBar)*/
        $("#btnMenu").click()     /*global activate_subpage */
         activate_subpage("#pgNotebooks"); 
         return false;
    });
    
        /* button  #btnSmartphonesMenu */
    $(document).on("click", "#btnSmartphonesMenu", function(evt)
    {
         /*Fechar o Menu (SideBar)*/
         $("#btnMenu").click()     /*global activate_subpage */
         /*global activate_subpage */
         activate_subpage("#pgSmartphones"); 
         return false;
    });
    
        /* button  #btnComputadoresMenu */
    
    
        /* button  #btnOutrosComponentes */
    $(document).on("click", "#btnOutrosComponentes", function(evt)
    {
         /*Fechar o Menu (SideBar)*/
         $("#btnMenu").click()     /*global activate_subpage */
         /*global activate_subpage */
         activate_subpage("#pgOutrosComponentes"); 
         return false;
    });
    
        /* button  #btnMostrarPopUp */
    $(document).on("click", "#btnMostrarPopUp", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#popup").modal("toggle");  
         return false;
    });
    
        /* button  #btnNotebooksMenu */
    $(document).on("click", "#btnNotebooksMenu", function(evt)
    {
         /*Fechar o Menu (SideBar)*/
         $("#btnMenu").click()     /*global activate_subpage */
         /*global activate_subpage */
         activate_subpage("#pgNotebooks"); 
         return false;
    });
    
        /* button  #btnInicio */
    
    
        /* button  #btnInicio */
    $(document).on("click", "#btnInicio", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pgsubInicial"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
