var tabuleiro;
var board;
var aviso;
var jogador;
var lin, col;

function inicia()
{
 tabuleiro = new Array(3);
 board = document.getElementById('board');
 aviso = document.getElementById('aviso');
 jogador = 1;

 for(let i=0 ; i<3 ; i++)
  tabuleiro[i] = new Array(3);
 
 for(let i=0; i<3 ; i++)
  for(let j=0 ; j<3 ; j++)
   tabuleiro[i][j]=0;
 exibe();

}

function exibe()
{
 HTML = '<tr>';
 for(let i=0; i<3 ; i++){
  for(let j=0 ; j<3 ; j++) {
   if(tabuleiro[i][j]==0)
    HTML +='<td onclick="jogar('+i+','+j+')">  __  </td>';
   else 
    if(tabuleiro[i][j]==1)
     HTML +='<td class="markedX"> X </td>';
    else
     HTML +='<td class="markedO"> O </td>';
  }
  HTML += '</tr>';
 }
 board.innerHTML = HTML
}

function jogar(i, j)
{
 aviso.innerHTML='Vez do jogador: ' + ((jogador)%2 + 1);
 lin = i;
 col = j;

 if(tabuleiro[lin][col]==0)
  if(jogador % 2)
   tabuleiro[lin][col] = 1;
  else
   tabuleiro[lin][col] = -1;
 else{
  aviso.innerHTML='Campo já foi marcado!'
  jogador--;
 }

 jogador++;
 exibe();
 checa();
}

function checa()
{
 var soma;

 //Linhas
 for(let i=0 ; i<3 ; i++){
  soma=0;
  soma=tabuleiro[i][0]+tabuleiro[i][1]+tabuleiro[i][2];

  if(soma==3 || soma==-3) {
   aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Linha " + (i+1) + " preenchida!";
   document.getElementById('aviso').insertAdjacentHTML('afterend', '<button onclick="reiniciar()">Reiniciar Jogo</button>');
  }
 }

 //Colunas
 for(let i=0 ; i<3 ; i++){
  soma=0;
  soma=tabuleiro[0][i]+tabuleiro[1][i]+tabuleiro[2][i];

  if(soma==3 || soma==-3) {
   aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Coluna " + (i+1) + " preenchida!";
   document.getElementById('aviso').insertAdjacentHTML('afterend', '<button onclick="reiniciar()">Reiniciar Jogo</button>');
  }
 }

 //Diagonal
 soma=0;
 soma = tabuleiro[0][0]+tabuleiro[1][1]+tabuleiro[2][2];
 if(soma==3 || soma==-3) {
   aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Diagonal preenchida!";
   document.getElementById('aviso').insertAdjacentHTML('afterend', '<button onclick="reiniciar()">Reiniciar Jogo</button>');
 }

 //Diagonal
 soma=0;
 soma = tabuleiro[0][2]+tabuleiro[1][1]+tabuleiro[2][0];
 if(soma==3 || soma==-3) {
   aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Diagonal preenchida!";
   document.getElementById('aviso').insertAdjacentHTML('afterend', '<button onclick="reiniciar()">Reiniciar Jogo</button>');
 }
}

function reiniciar()
{
 for(let i=0; i<3 ; i++)
  for(let j=0 ; j<3 ; j++)
   tabuleiro[i][j]=0;

 jogador = 1;
 aviso.innerHTML='';
 exibe();
}
