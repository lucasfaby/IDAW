var en_deplacement= false;
var cas_g;
var cote=0;
var dispos = [];

function est_vide(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="";
}

function est_pion(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♟" ||cell.textContent =="♙";
}

function est_tour(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♜" ||cell.textContent =="♖";
}

function est_cav(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♞" ||cell.textContent =="♘";
}

function est_fou(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♝" ||cell.textContent =="♗";
}

function est_roi(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♔" ||cell.textContent =="♚";
}

function est_dame(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♛" ||cell.textContent =="♕";
}

function est_noir(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♜" ||cell.textContent =="♞"||cell.textContent =="♝" ||cell.textContent =="♛"||cell.textContent =="♚" ||cell.textContent =="♟";
}

function est_blanc(cas){
    cell = document.getElementById(cas);
    return cell.textContent =="♙" ||cell.textContent =="♖"||cell.textContent =="♘" ||cell.textContent =="♗"||cell.textContent =="♕" ||cell.textContent =="♔";
}

function cases_dispos(cas){
    cas = parseInt(cas);
    tab = [];
    lig =  Math.floor(cas/10);
    if (est_pion(cas)){        
        if (est_blanc(cas)){
            if(cas_ok(cas,cas-10)){tab.push(cas-10);} 
            console.log(lig);
            if(lig==7){
                if(cas_ok(cas,cas-20)){tab.push(cas-20);}
            }                 
        }
        else{
            if(cas_ok(cas,cas+10)){tab.push(cas+10);}
            if(lig==2){
                if(cas_ok(cas,cas+20)){tab.push(cas+20);}
            }
            
        }
    }

    if(est_cav(cas)){
        if(cas_ok(cas,cas+21)){tab.push(cas+21);} 
        if(cas_ok(cas,cas-21)){tab.push(cas-21);} 
        if(cas_ok(cas,cas+12)){tab.push(cas+12);} 
        if(cas_ok(cas,cas-12)){tab.push(cas-12);} 
        if(cas_ok(cas,cas-19)){tab.push(cas-19);} 
        if(cas_ok(cas,cas+19)){tab.push(cas+19);} 
        if(cas_ok(cas,cas+8)){tab.push(cas+8);} 
        if(cas_ok(cas,cas-8)){tab.push(cas-8);} 
    }

    if(est_fou(cas)||est_dame(cas)){
        i=1;
        while(cas_ok(cas,cas+11*i)){
            tab.push(cas+11*i);
            if(est_noir(cas)&&est_blanc(cas+11*i) || est_blanc(cas)&&est_noir(cas+11*i)){break;}
            i++;
        }
        i=1;
        while(cas_ok(cas,cas-11*i)){
            tab.push(cas-11*i);
            if(est_noir(cas)&&est_blanc(cas-11*i) || est_blanc(cas)&&est_noir(cas-11*i)){break;}
            i++;
        }
        i=1;
        while(cas_ok(cas,cas+9*i)){
            tab.push(cas+9*i);
            if(est_noir(cas)&&est_blanc(cas+9*i) || est_blanc(cas)&&est_noir(cas+9*i)){break;}
            i++;
        }
        i=1;
        while(cas_ok(cas,cas-9*i)){
            tab.push(cas-9*i);
            if(est_noir(cas)&&est_blanc(cas-9*i) || est_blanc(cas)&&est_noir(cas-9*i)){break;}
            i++;
        }
    }
    if(est_tour(cas)||est_dame(cas)){
        i=1;
        while(cas_ok(cas,cas+10*i)){
            tab.push(cas+10*i);
            if(est_noir(cas)&&est_blanc(cas+10*i) || est_blanc(cas)&&est_noir(cas+10*i)){break;}
            i++;
            
        }
        i=1;
        while(cas_ok(cas,cas-10*i)){
            tab.push(cas-10*i);
            if(est_noir(cas)&&est_blanc(cas-10*i) || est_blanc(cas)&&est_noir(cas-10*i)){break;}
            i++;
        }
        i=1;
        while(cas_ok(cas,cas+1*i)){
            tab.push(cas+1*i);
            if(est_noir(cas)&&est_blanc(cas+1*i) || est_blanc(cas)&&est_noir(cas+1*i)){break;}
            i++;
        }
        i=1;
        while(cas_ok(cas,cas-1*i)){
            tab.push(cas-1*i);
            if(est_noir(cas)&&est_blanc(cas-1*i) || est_blanc(cas)&&est_noir(cas-1*i)){break;}
            i++;
        }
    }
    if(est_roi(cas)){
        if(cas_ok(cas,cas-1)){tab.push(cas-1);} 
        if(cas_ok(cas,cas-10)){tab.push(cas-10);} 
        if(cas_ok(cas,cas-9)){tab.push(cas-9);} 
        if(cas_ok(cas,cas-11)){tab.push(cas-11);} 
        if(cas_ok(cas,cas+1)){tab.push(cas+1);} 
        if(cas_ok(cas,cas+10)){tab.push(cas+10);} 
        if(cas_ok(cas,cas+9)){tab.push(cas+9);} 
        if(cas_ok(cas,cas+11)){tab.push(cas+11);} 

    }


    for (i =0;i<tab.length;i++){
        cell = document.getElementById(tab[i]);
        cell.style.background = "blue";
    }
    dispos = tab;
}

function cas_ok(cas,casi){
    l =  Math.floor(casi/10);
    c = casi%10;
    if (est_noir(cas)){
        return c>=1 && c<=8 && l>=1 && l<=8 && (est_vide(casi)||est_blanc(casi));
    }
    else{
        return c>=1 && c<=8 && l>=1 && l<=8 && (est_vide(casi)||est_noir(casi));
    }
}

function move(cas1,cas2){
    document.getElementById(cas2).innerHTML = "<p>"+document.getElementById(cas1).textContent+"</p>";
    document.getElementById(cas1).innerHTML="<p></p>";
}

function game(cas){

    console.log(cas);

    if (en_deplacement==false){
        //choix de la pièce
        if ((cote==0 && est_blanc(cas))||(cote==1 && est_noir(cas))){
            cas_g=cas;
            cell = document.getElementById(cas);
            cell.style.background = "yellow";
            en_deplacement=true;
            cases_dispos(cas);
        }

        
    }
    else{
        //mouvement d'une piece

        if(dispos.includes(parseInt(cas))){
            move(cas_g,cas);
            cote = 1-cote;
        }

        for(var i=1;i<9;i++){
            for(var j=1;j<9;j++){
                cell = document.getElementById(10*i+j);
                cell.style.background = "";
            }
        }
        cell.style.background = "";
        cas_g=cas;
        en_deplacement=false;

    }

}


