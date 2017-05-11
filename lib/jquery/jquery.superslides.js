function ReSlide(parentWrap){
   
   // Struttura Slide
   this.overflow	= $('.overflow');
   this.panelWrap	= $('.panelWrap');
   this.panel 		= $('.panel');
   this.navClass	= $('.nav');
   this.navPrev 	= $('.prev');
   this.navNext 	= $('.next');

   // Altri settaggi base
   this.step			= 1;
   this.parentWrap	= $(parentWrap);
   this.panelLength	= this.panel.length;

   // Panel Setting
   this.panelSetting = function(){
      // Slide viewable
      this.viewable = this.overflow.outerWidth();

      // Dimensiono e posiziono gli elementi in base al viewable
      this.panelWrap.css({
         'width'		 : this.viewable*this.panelLength,
         'marginLeft' : -this.viewable*(this.step-1)
      });
      this.panel.css('width',this.viewable);
      // Di default il tasto PREV e inactive
      this.navPrev.addClass('inactive');
   }


   // Navigazione, aggancio del listener.
   this.navigationStep = function(){
      
      // http://community.sitepoint.com/t/jquery-click-event-calling-parent-class-method/16902
      var that = this;

      this.navClass.on('click', function(e){
         that.navNext.removeClass('inactive');
         that.navPrev.removeClass('inactive');
         
         var $e = '.' + e.target.className.split(" ")[1];
         switch($e) {
            case that.navNext.selector:
               if(that.step < that.panelLength) that.step++;
               break;
            case that.navPrev.selector:
               if(that.step > 1) that.step--;
               break;
         }
         
         // Pulsanti disattivati
         var modulo = (that.step % that.panelLength);
         switch(modulo) {
            case 1://devo disattivare il prev
               that.navPrev.addClass('inactive');
               break;
            case 0://devo disattivare il next
               that.navNext.addClass('inactive');
               break;
         }

         that.panelWrap.animate({
            marginLeft : -that.viewable*(that.step-1)
         });
      });
   }
   this.navigationStep();

} // END CLASS

// Inizializzo il costruttore e i metodi al ready e al resize
var slide = new ReSlide('#slideWrap_1');
slide.panelSetting();

// RESIZE
$(window).resize(function(){
   slide.panelSetting();
});