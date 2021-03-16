var en_deplacement= false;
var lig_g;
var col_g;
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
    if (est_pion(cas)){
        if (est_blanc(cas)){
            if(cas_ok(cas-10)){tab.push(cas-10);}       
            if(cas_ok(cas-20)){tab.push(cas-20);}
        }
        else{
            if(cas_ok(cas+10)){tab.push(cas+10);}
            if(cas_ok(cas+20)){tab.push(cas+20);}
        }
    }
    for (i =0;i<tab.length;i++){
        cell = document.getElementById(tab[i]);
        cell.style.background = "blue";
    }
    dispos = tab;
}

function cas_ok(cas){
    col =  Math.floor(cas/10);
    lig = cas%10;
    return col>=1 && col<=8 && lig>=1 && lig<=8 && est_vide(cas);
}

function game(cas){

    col =  Math.floor(cas/10);
    lig = cas%10;
    if (en_deplacement==false){
        //choix de la pièce
        if ((cote==0 && est_blanc(cas))||(cote==1 && est_noir(cas))){
            lig_g = lig;
            col_g = col;
            cell = document.getElementById(cas);
            cell.style.background = "yellow";
            en_deplacement=true;
            cases_dispos(cas);
        }

        
    }
    else{
        //mouvement d'une piece
        
        for(var i=1;i<9;i++){
            for(var j=1;j<9;j++){
                cell = document.getElementById(10*i+j);
                cell.style.background = "";
            }
        }
        cell.style.background = "";
        lig_g = lig;
        col_g = col;
        en_deplacement=false;

    }

}


