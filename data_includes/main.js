// ================================================================================ //
//// SFB C03 WP1 WP2 Post Eye-Tracking Experiment Background Questionnaire////
// ================================================================================ //


//// SEQUENCE =========================
PennController.ResetPrefix(null);
PennController.Sequence("demographics",
                       "send", "final")
    
PennController.DebugOff()

var progressBarText = "Fortschritt";    


//// DEMOGRAPHICS ==============================================================
PennController("demographics",
                   newText("demo", "<b>Personenbezogene Daten</b> <p>Wir brauchen einige Angaben zu Deiner Person. Diese werden anonymisiert gespeichert und eine spätere Zuordnung zu Dir wird nicht möglich sein. Bitte nimm Dir beim Ausfüllen der Felder Zeit. <br> <\p>")              // <b>Hinweis: </b> Wenn Du fertig bist, warte bitte auf den/die Versuchsleiter*in, bevor Du auf 'Weiter' klickst.
        .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
        //.settings.italic()

               ,
               newCanvas("democanvas", 1000,120)
               .settings.add(0,0, getText("demo"))
               //.settings.center()
               .print()
               ,
               newText("VP_ID", "<b>Zuerst wird der/die Versuchsleiter*in Deine VP-ID eingeben: </b>")
               .settings.css("font-size", "18px")
               ,
               newTextInput("VP_ID", "")
               .settings.log()
               .lines(0)
               .size(200, 40)
               .print()
               ,
               newCanvas("VP_ID_canv", 1000, 75)
               .settings.add(0, 40, getText("VP_ID"))
               .settings.add(680,30, getTextInput("VP_ID"))
               //.settings.center()
               .print()   
               
               ,        
               newDropDown("age", "Bitte eine Option ausw&auml;hlen")
               .settings.add("18" , "19" , "20", "21" , "22" , "23", "24" , "25" , "26", "27" , "28" , "29", "30" , "über 31")
               .settings.log()
               
               ,
               newText("agetext", "1. Alter:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newCanvas("agecanvas", 1000, 40)
               .settings.add(0,0,getText("agetext"))
               .settings.add(450,2, getDropDown("age"))
               //.settings.center()
               .print()
               ,
               newText("sex", "2. Geschlecht:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("sex", "Bitte eine Option ausw&auml;hlen")
               .settings.add("Weiblich", "M&auml;nnlich", "Divers")
               .settings.log()
               ,
               newCanvas("sexcanvas", 1000, 40)
               .settings.add(0, 0, getText("sex"))
               .settings.add(450,3, getDropDown("sex"))
               //.settings.center()
               .print()
               ,
               newText("german", "3. Ist Deutsch Deine Muttersprache?")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("german", "Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja", "Nein")
               .settings.log()
               ,
               newCanvas("germancanvas", 1000, 40)
               .settings.add(0, 0, getText("german"))
               .settings.add(450,3, getDropDown("german"))
               //.settings.center()
               .print()
               ,
               newText("bilingual", "<b>4. Bist Du bilingual aufgewachsen (hast Du vor Deinem 6. Lebensjahr eine andere Sprache als Deutsch gelernt)?</b><br><small>(Falls Du Ja ausgewählt hast, schreibe bitte auf, mit welcher (welchen) anderen Sprache(n) Du aufgewachsen bist)</small><br><br>")
               .settings.css("font-size", "18px")
               
               , 
               newTextInput("bilingualinput", "")
               .settings.size(150,40)
               .settings.log()
               .settings.hidden()
               ,
               newText("bilingual_input", "")
               .settings.after(getTextInput("bilingualinput"))
               ,
               newDropDown("bilingual",  "<br>" +"Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja", "Nein")
               .settings.log()
               .settings.after(getText("bilingual_input"))
               .settings.callback(
                   getDropDown("bilingual")
                   .test.selected("Ja")
                   .success(getTextInput("bilingualinput").settings.visible(
                    
                   )) )
               ,
               newCanvas("bilingual", 1000, 40)
               .settings.add(0, 0, getText("bilingual"))
               .settings.add(870,3, getDropDown("bilingual"))
               //.settings.center()
               .print()
               ,
               newCanvas("filler", 1, 20)
               
               .print()
               ,
               newText("abschluss", "5. <b>Was ist Dein h&ouml;chster Bildungsabschluss:</b><br><small>(Falls Du 'Sonstige' ausgewählt hast, schreibe bitte auf, welches Dein h&ouml;chster Bildungsabschluss ist)</small><br><br>")
               .settings.css("font-size", "18px")
               
               , 
               newTextInput("abschlussinput", "")
               .settings.size(150,40)
               .settings.log()
               .settings.hidden()
               ,
               newText("abschluss_input", "")
               .settings.after(getTextInput("abschlussinput"))
               ,
               newDropDown("abschluss", "Bitte eine Option ausw&auml;hlen")
               .settings.add("kein Abschluss","Schulabschluss","Abitur oder gleichwertiger Abschluss","Bachelor","Master", "Promotion", "Ausbildung", "Sonstige")     // MAYBE ADD QUESTIONS ABOUT DIALECT AND DOMINANT HAND
               //.settings.size(191,20)
               .settings.log()
               .settings.after(getTextInput("abschlussinput")) //
               .settings.callback(
                   getDropDown("abschluss")
                   .test.selected("Sonstige")
                   .success(getTextInput("abschlussinput").settings.visible(
                   
                   )) )
               ,
               newCanvas("abschlusscanvas", 1000, 40)
               .settings.add(0, 0, getText("abschluss"))
               .settings.add(870,3, getDropDown("abschluss"))
               //.settings.center()
               .print()
               ,
               
               newCanvas("filler", 1, 20)
               .print()
              //location of error ,
              ,
               newText("Leiter","<b>6.</b> Stell Dir vor, <b>die untenstehende Leiter</b> repr&auml;sentiert den relativen Sozialstatus der Menschen in Deutschland. "
                       +"An der Spitze der Leiter stehen Menschen mit relativ hohem Status – diejenigen, die das meiste Geld, die beste Bildung und die angesehensten Arbeitspl&auml;tze haben. Ganz unten sind Menschen mit relativ niedrigem Status – beispielsweise als arbeitslos Gemeldete. Relativ weit unten zu verorten w&auml;ren auch diejenigen, die nur wenig Geld verdienen, einen niedrigen Bildungstand haben, und / oder Berufe aus&uuml;ben, die die Gesellschaft als eher wenig respektabel ansieht."
                       +"<br> Wo w&uuml;rdest Du Dich auf dieser Leiter einordnen? W&auml;hle bitte die Sprosse, die Deinem empfundenen Sozialstatus am ehesten entspricht.")
               .settings.css("font-size", "18px")
               ,
               newDropDown("leiter", "Bitte eine Option ausw&auml;hlen")
               .settings.add("A", "B", "C","D", "E", "F","G", "H", "I","J")
               .settings.log()
               ,
               newImage("leiter", "https://amor.cms.hu-berlin.de/~patarroa/Leiter.jpeg")
               .settings.size(200,300)
               ,
               newCanvas("leitercanvas", 1000,20)
               .settings.add(0, 10, getText("Leiter"))
               //.settings.center()
               .print()
               ,
               newCanvas("leitercanvas2", 1000,350)
               .settings.add(350,150, getImage("leiter"))
               .settings.add(650,300, getDropDown("leiter"))
               //.settings.center()
               .print()
               ,
               newText("degeboren", "7. Bist Du in Deutschland geboren?")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("degeboren", "Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja", "Nein")
               .settings.log()
               //.settings.size(200,40)
               ,
               newCanvas("degeboren", 1000,190)
               .settings.add(0, 170, getText("degeboren"))
               .settings.add(400,170,getDropDown("degeboren"))
               //.settings.center()
               .print()
               ,
               newText("native", "<b>8. Wie wurde bei Dir zuhause gesprochen?</b><br><small>(Falls Du A, D, F oder G ausgewählt hast, schreibe bitte auf, mit welchen Dialekten Du aufgewachsen bist)</small>")
               .settings.css("font-size","18px")
         
               ,
               newTextInput("native_dialekt", "")
               .settings.size(200,30)
               .settings.log()
               .settings.hidden()
               ,
               newText("native_dialekt_input", "")
               .settings.after(getTextInput("native_dialekt"))
               ,
               newDropDown("language", "Bitte eine Option ausw&auml;hlen")
               .settings.add("A. Dialekt", "B. Umgangssprache", "C. Gepflegtes Hochdeutsch", "D. Alle", "E. B und C", "F. A und C", "G. A und B")
               //.settings.size(200,40)
               .settings.log()
               .settings.after(getText("native_dialekt_input"))
               .settings.callback(
                   getDropDown("language")
                   .test.selected("A. Dialekt")
                   .success(getTextInput("native_dialekt").settings.visible())
                   //    .failure(getTextInput("dialekt").settings.hidden())
                   
                   .test.selected("B. Umgangssprache")
                   .success(getTextInput("native_dialekt").settings.hidden())
                   
                   .test.selected("C. Gepflegtes Hochdeutsch")
                   .success(getTextInput("native_dialekt").settings.hidden())
               
                   .test.selected("D. Alle")
                   .success(getTextInput("native_dialekt").settings.visible())
                   //      .failure(getTextInput("dialekt").settings.hidden())
                   
                   .test.selected("E. B und C")
                   .success(getTextInput("native_dialekt").settings.hidden())
                   
                   .test.selected("F. A und C")
                   .success(getTextInput("native_dialekt").settings.visible())
                   // .failure(getTextInput("dialekt").settings.hidden())
                   
                   .test.selected("G. A und B")
                   .success( getTextInput("native_dialekt").settings.visible())
                   //  .failure(getTextInput("dialekt").settings.hidden())
                   )
        
               ,
               newCanvas("languagecanvas", 1000,75)
              .settings.add(0, 40, getText("native"))
              .settings.add(680,40, getDropDown("language"))
              //.settings.center()
              .print()
               
               ,
               newText("current", "<b>9. Wie sprichst Du aktuell haupts&auml;chlich?</b><br><small>(Falls Du A, D, F oder G ausgewählt hast, schreibe bitte auf, welche Dialekte Du verwendest)</small>")
               .settings.css("font-size", "18px")

               ,
               newTextInput("current_dialekt", "")
               .settings.log()
               .settings.size(200,30)
               .settings.hidden()
               ,
               newText("current_dialekt_input", "")
               .settings.after(getTextInput("current_dialekt"))
               ,
               newDropDown("current_dial", "Bitte eine Option ausw&auml;hlen")
               .settings.add("A. Dialekt", "B. Umgangssprache", "C. Gepflegtes Hochdeutsch", "D. Alle", "E. B und C", "F. A und C", "G. A und B")
               .settings.log()
               //.settings.size(200,40)
               .settings.after(getText("current_dialekt_input"))
               .settings.callback(
                   
                   getDropDown("current_dial")
                   .test.selected("A. Dialekt")
                   .success(getTextInput("current_dialekt").settings.visible())
                  
                  
                   .test.selected("B. Umgangssprache")
                   .success(getTextInput("current_dialekt").settings.hidden())
                   
                   .test.selected("C. Gepflegtes Hochdeutsch")
                   .success(getTextInput("current_dialekt").settings.hidden())
              
                   .test.selected("D. Alle")
                   .success(getTextInput("current_dialekt").settings.visible())
                 
                   
                   .test.selected("E. B und C")
                   .success(getTextInput("current_dialekt").settings.hidden())
                   
                   .test.selected("F. A und C")
                   .success(getTextInput("current_dialekt").settings.visible())
                  
                   
                   .test.selected("G. A und B")
                   .success( getTextInput("current_dialekt").settings.visible())
                   

               )
               ,
               newCanvas("current_dialekt_canvas", 1000, 75)
               .settings.add(0, 40, getText("current"))
               .settings.add(680,40, getDropDown("current_dial"))
               //.settings.center()
               .print()   
               ,
               newText("dialectcomp", "<b>10. Wenn Du einen Dialekt sprichst, wie gut kannst Du ihn sprechen/verstehen?</b><br><small>(Skala von 0 - 'gar nicht' bis 100 'ausgezeichnet')</small>")
               .settings.css("font-size", "18px")
               ,
               newTextInput("dial_comp", "")
               .log()
               .size(200, 40)
               .print()
               ,
               newCanvas("dial_comp_canv", 1000, 75)
               .settings.add(0, 40, getText("dialectcomp"))
               .settings.add(680,30, getTextInput("dial_comp"))
               //.settings.center()
               .print()   
               ,
               newText("hochsprcomp", "<b>11. Wie gut sprichst und verstehst Du Hochdeutsch?</b><br><small>(Skala von 0 - 'gar nicht' bis 100 'ausgezeichnet')</small>")
               .settings.css("font-size", "18px")
               ,
               newTextInput("hoch_comp", "")
               .settings.log()
               .lines(0)
               .size(200, 40)
               .print()
               ,
               newCanvas("hoch_comp_canv", 1000, 75)
               .settings.add(0, 40, getText("hochsprcomp"))
               .settings.add(680,30, getTextInput("hoch_comp"))
               //.settings.center()
               .print()   
               ,        
               newCanvas("filler2", 1, 40)
               .print()
               ,
               // spacebar press to ensure that participants do not press on 'weiter'
               newKey(" ")
               .wait()
               ,
               
    newButton("continue", "Weiter")
               .settings.css("font-family", "calibri").settings.css("font-size", "12px")
               //.settings.center()
               .settings.log()
               .print()
               .wait(
            newFunction('dummy', ()=>true).test.is(true)
            .and(
             getTextInput("VP_ID").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorvpid","Bitte gib Deine VP ID an.")
                   .settings.color("red")
                   .print())
            )
            .and( getDropDown("age").test.selected()
                    .failure( newText('errorage', "Bitte gib Dein Alter an.").color("red").print() )
            // sex
            ).and( getDropDown("sex").test.selected()
                    .failure( newText('errorsex', "Bitte gib Dein Geschlecht an.").color("red").print() )
            // german
            ).and( getDropDown("german").test.selected()
                    .failure( newText('errorgerman', "Bitte gib Informationen &uuml;ber Deine Muttersprache an.").color("red").print() )
            // bilingual
            ) .and( getDropDown("bilingual").test.selected()
                    .failure( newText('errorbilingual', "Bitte gib an, ob Du bilingual oder monolingual aufgewachsen bist.").color("red").print() )
            // language
            ).and( getDropDown("language").test.selected()
                    .failure( newText('langerror', "Bitte antworte auf die Frage bez&uuml;glich Deines sprachlichen Hintergrunds.").color("red").print() )
            // current dialect
            ).and( getDropDown("current_dial").test.selected()
                    .failure( newText('dialecterr', "Bitte antworte auf die Frage bez&uuml;glich der von Dir aktuell verwendeten Sprache.").color("red").print() )
            // abschluss
            ).and( getDropDown("abschluss").test.selected()
                   .failure( newText('abschlusserr', "Bitte antworte auf die Frage bez&uuml;glich Deines Abschlusses.").color("red").print() )
            ).and(getDropDown("leiter").test.selected()
                   .failure( newText('leitererr', "Bitte gib eine Variante auf der Leiter an.").color("red").print() )
            ).and(getDropDown("degeboren").test.selected()
                    .failure( newText('degeborenerr', "Bitte gib an, wo Du geboren wurdest.").color("red").print() )
            ).and(
              getTextInput("native_dialekt").test.printed()
               .success(getTextInput("native_dialekt")
                        .test.text(/^.*/) // testing if at 0 or more words were written in the input box
                         .failure(
                             newText("dialekterr","Bitte gib Informationen &uuml;ber die Sprachform mit der Du aufgewachsen bist an.")
                             .settings.color("red")
                             .print() )
                ) //end success
            ).and(
             getTextInput("current_dialekt").test.printed()
              .success(getTextInput("current_dialekt")
              .test.text(/^.*/)  // testing if at 0 or more words were written in the input box
              .failure(
                   newText("dialekterr1","Bitte gib Informationen &uuml;ber Deinen aktuellen Sprachgebrauch an.")
                   .settings.color("red")
                   .print())
            ) //success
            ).and(
             getTextInput("hoch_comp").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("dialekterr2","Bitte gib Informationen &uuml;ber Deine Hochsprach-Kompetenz an.")
                   .settings.color("red")
                   .print())
            ).and(
            getTextInput("dial_comp").test.text(/^.+/) // testing if at least one digit was written in the input box
                   .failure(
                   newText("dialekterr3","Bitte gib Informationen &uuml;ber Deine Dialekt-Kompetenz an.")
                   .settings.color("red")
                   .print())
            ) )
               ,
               getDropDown("age").wait("first")
               ,
               getDropDown("sex").wait("first")
               ,
               getDropDown("language").wait("first")
               ,
               getDropDown("current_dial").wait("first")
               ,
               getDropDown("leiter").wait("first")
               ,
               getDropDown("abschluss").wait("first")
               ,
               getDropDown("degeboren").wait("first")
               ,
               getButton("continue")
               .remove()
               ,
               newText("<p>")
               .print()                               
)

.setOption("countsForProgressBar", false)   // no need to see the progress bar in the intro phase
.setOption("hideProgressBar", true);


// Send results =======================================
PennController.SendResults("send")


// FINAL ==============================================
    
    PennController("final",
        newText("<p>Vielen Dank f&uuml;r Deine Teilnahme! Die Studie ist hiermit beendet. </p>")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,
        newText ("<p>Du kannst das Fenster jetzt schließen.")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,
        newButton("void")
            .wait()
    
        
   )