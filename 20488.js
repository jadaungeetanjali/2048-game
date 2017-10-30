

var canvas=document.getElementById('mycanvas');
var ctx=canvas.getContext("2d");
var size=4;
var width=canvas.width/size-6;
var cells=[];
var fontsize;
var loss=false;
var score=0;
startgame();
function startgame()
{
	createcell();
	drawAllcell();
	requestAnimationFrame(update);
  

}
function cell(row, col)
{    this.value=0;
	this.x=col*width+(6*(col+1));
	this.y=row*width+(6*(row+1));
	//console.log(x);

}

function createcell()
{
	for(var i=0;i<4;i++)
	{
		cells[i]=[];
		for(var j=0;j<4;j++)
		{
			cells[i][j]=new cell(i,j);
		}
	}
}
function drawAllcell()
{
	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			drawCell(cells[i][j]);
			
		}
	}
}
function drawCell(cell)
{
	ctx.beginPath();
	
	//console.log(cell.value);
	switch(cell.value)
	{
		case 0: 
		ctx.fillStyle="#FFFFFF";
		break;
		case 2: 
		ctx.fillStyle="#FF0000";
		break;
		case 4: 
		ctx.fillStyle="#FF0033";
		break;
		case 8: 
		ctx.fillStyle="#DE00FF";
		break;
		case 16:
		 ctx.fillStyle="#FF0000";
		 break;
		case 32: 
		ctx.fillStyle="#6F00FF";
		break;
		case 64: 
		ctx.fillStyle="#003CFF";
		break;
		case 128: 
		ctx.fillStyle="#00EBFF";
		break;
		case 256: 
		ctx.fillStyle="#00FF8D";
		break;
		case 512: 
		ctx.fillStyle="#00FF22";
		break;
		case 1024: 
		ctx.fillStyle="#7CFF00";
		break;
		case 2048: 
		ctx.fillStyle="#FF7C00";
		break;
		default: 
		 ctx.fillStyle="#FF0000";
		 break;
	}
	ctx.fillRect(cell.x,cell.y,width,width);
	ctx.fill();
	if(cell.value)
	{ 
		
		fontsize=width/2;
		ctx.font=fontsize+"px Arial";
		ctx.fillStyle="white";
		ctx.textAlign="center";
		ctx.fillText(cell.value,cell.x+width/2,cell.y+width/2);
		}
	}

	
	
	



function update()
{
	
		var row=Math.floor(Math.random()*4)
		var col=Math.floor(Math.random()*4)
			if(cells[row][col].value==0)
			{
				cells[row][col].value=2*Math.ceil(Math.random()*2);
				drawAllcell();
			}
	
}
requestAnimationFrame(update);
addEventListener("keydown",function(event){


	if(!loss)
	{
	
if(event.keyCode==38)
	pushup();
else if(event.keyCode==40)
			pushdown();
else if(event.keyCode==39)
		pushright();

else if(event.keyCode==37)
			pushleft();
	}

})

function pushup()
	{

		for(j=0;j<4;j++)
		{
			for(i=1;i<4;i++)
			{   
				
				if(cells[i][j].value)
				{   
					row=i;
					while(row>0)
					{
						if(!cells[row-1][j].value)
						{
					cells[row-1][j].value=cells[row][j].value;
					cells[row][j].value=0;
					row--;
				        }
				    else if(cells[row-1][j].value==cells[row][j].value)
				    {
				  this.score=this.score+(cells[row][j].value);
                  cells[row-1][j].value=2*(cells[row][j].value);
                  cells[row][j].value=0;
                  break;
				    }
				else
					break;
				}
				}
				
				
				
			}
		}
		console.log(score);
		requestAnimationFrame(update);
	}

function pushdown()
	{var row1;

		for(j=0;j<4;j++)
		{
			for(i=2;i>=0;i--)
			{   
				
				if(cells[i][j].value)
				{   
					row=i;
					while(row+1<4)
					{
						if(!cells[row+1][j].value)
						{
					cells[row+1][j].value=cells[row][j].value;
	            
					cells[row][j].value=0;
					row++;
				        }
				    else if(cells[row+1][j].value==cells[row][j].value)
				    {
				  score=score+(cells[row][j].value);
                  cells[row+1][j].value=2*(cells[row][j].value);
                  cells[row][j].value=0;
                  break;
				   }
				else
					break;
				}
				}
				
				
				
			}
		}
		requestAnimationFrame(update);
	}	
	function pushright()
	{

		for(i=0;i<4;i++)
		{
			for(j=2;j>=0;j--)
			{   
				
				if(cells[i][j].value)
				{   
					col=j;
					while(col+1<4)
					{
						if(!cells[i][col+1].value)
						{
					cells[i][col+1].value=cells[i][col].value;
					
					cells[i][col].value=0;

					col++;
				        }
				    else if(cells[i][col+1].value==cells[i][col].value)
				    {
				    	
                  cells[i][col+1].value=2*(cells[i][col].value);
                  score=score+(cells[i][col+1].value);
                  cells[i][col].value=0;
                  break;
				    }
				else
					break;
				}
				}
				
				
				
			}
		}
		requestAnimationFrame(update);
	}					
			
function pushleft()
	{

		for(i=0;i<4;i++)
		{
			for(j=1;j<4;j++)
			{   
				
				if(cells[i][j].value)
				{   
					col=j;
					while(col>0)
					{
						if(!cells[i][col-1].value)
						{
					cells[i][col-1].value=cells[i][col].value;
					cells[i][col].value=0;
					col--;
				     }
				    else if(cells[i][col-1].value==cells[i][col].value)
				    {
				  score=score+cells[i][col].value;
                  cells[i][col-1].value=2*(cells[i][col].value);
                  cells[i][col].value=0;
                  break;
				    }
				else
					break;
				}
				}
				
				
				
			}
		}
		requestAnimationFrame(update);
	}					
			
console.log(score);

			
		
 