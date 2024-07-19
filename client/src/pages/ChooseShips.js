
import React,{useState, useEffect, useLayoutEffect} from 'react';
import { Link } from "react-router-dom";



const Table = () => {
	const [canDrag, setCanDrag] = useState(true);

	const [nextArr, setNextArr] = useState([]);

	const [fields, setFields] = useState([
		[
			{id:1, x:0, y:0, val:0, name:'none', count: 0},
			{id:2, x:0, y:1, val:0, name:'none', count: 0},
			{id:3, x:0, y:2, val:0, name:'none', count: 0},
			{id:4, x:0, y:3, val:0, name:'none', count: 0},
			{id:5, x:0, y:4, val:0, name:'none', count: 0},
			{id:6, x:0, y:5, val:0, name:'none', count: 0},
			{id:7, x:0, y:6, val:0, name:'none', count: 0},
			{id:8, x:0, y:7, val:0, name:'none', count: 0},
			{id:9, x:0, y:8, val:0, name:'none', count: 0},
			{id:10, x:0, y:9, val:0, name:'none',count: 0}
		],
		[
			{id:11, x:1, y:0, val:0, name:'none', count: 0},
			{id:12, x:1, y:1, val:0, name:'none', count: 0},
			{id:13, x:1, y:2, val:0, name:'none', count: 0},
			{id:14, x:1, y:3, val:0, name:'none', count: 0},
			{id:15, x:1, y:4, val:0, name:'none', count: 0},
			{id:16, x:1, y:5, val:0, name:'none', count: 0},
			{id:17, x:1, y:6, val:0, name:'none', count: 0},
			{id:18, x:1, y:7, val:0, name:'none', count: 0},
			{id:19, x:1, y:8, val:0, name:'none', count: 0},
			{id:20, x:1, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:21, x:2, y:0, val:0, name:'none', count: 0},
			{id:22, x:2, y:1, val:0, name:'none', count: 0},
			{id:23, x:2, y:2, val:0, name:'none', count: 0},
			{id:24, x:2, y:3, val:0, name:'none', count: 0},
			{id:25, x:2, y:4, val:0, name:'none', count: 0},
			{id:26, x:2, y:5, val:0, name:'none', count: 0},
			{id:27, x:2, y:6, val:0, name:'none', count: 0},
			{id:28, x:2, y:7, val:0, name:'none', count: 0},
			{id:29, x:2, y:8, val:0, name:'none', count: 0},
			{id:30, x:2, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:31, x:3, y:0, val:0, name:'none', count: 0},
			{id:32, x:3, y:1, val:0, name:'none', count: 0},
			{id:33, x:3, y:2, val:0, name:'none', count: 0},
			{id:34, x:3, y:3, val:0, name:'none', count: 0},
			{id:35, x:3, y:4, val:0, name:'none', count: 0},
			{id:36, x:3, y:5, val:0, name:'none', count: 0},
			{id:37, x:3, y:6, val:0, name:'none', count: 0},
			{id:38, x:3, y:7, val:0, name:'none', count: 0},
			{id:39, x:3, y:8, val:0, name:'none', count: 0},
			{id:40, x:3, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:41, x:4, y:0, val:0, name:'none', count: 0},
			{id:42, x:4, y:1, val:0, name:'none', count: 0},
			{id:43, x:4, y:2, val:0, name:'none', count: 0},
			{id:44, x:4, y:3, val:0, name:'none', count: 0},
			{id:45, x:4, y:4, val:0, name:'none', count: 0},
			{id:46, x:4, y:5, val:0, name:'none', count: 0},
			{id:47, x:4, y:6, val:0, name:'none', count: 0},
			{id:48, x:4, y:7, val:0, name:'none', count: 0},
			{id:49, x:4, y:8, val:0, name:'none', count: 0},
			{id:50, x:4, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:51, x:5, y:0, val:0, name:'none', count: 0},
			{id:52, x:5, y:1, val:0, name:'none', count: 0},
			{id:53, x:5, y:2, val:0, name:'none', count: 0},
			{id:54, x:5, y:3, val:0, name:'none', count: 0},
			{id:55, x:5, y:4, val:0, name:'none', count: 0},
			{id:56, x:5, y:5, val:0, name:'none', count: 0},
			{id:57, x:5, y:6, val:0, name:'none', count: 0},
			{id:58, x:5, y:7, val:0, name:'none', count: 0},
			{id:59, x:5, y:8, val:0, name:'none', count: 0},
			{id:60, x:5, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:61, x:6, y:0, val:0, name:'none', count: 0},
			{id:62, x:6, y:1, val:0, name:'none', count: 0},
			{id:63, x:6, y:2, val:0, name:'none', count: 0},
			{id:64, x:6, y:3, val:0, name:'none', count: 0},
			{id:65, x:6, y:4, val:0, name:'none', count: 0},
			{id:66, x:6, y:5, val:0, name:'none', count: 0},
			{id:67, x:6, y:6, val:0, name:'none', count: 0},
			{id:68, x:6, y:7, val:0, name:'none', count: 0},
			{id:69, x:6, y:8, val:0, name:'none', count: 0},
			{id:70, x:6, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:71, x:7, y:0, val:0, name:'none', count: 0},
			{id:72, x:7, y:1, val:0, name:'none', count: 0},
			{id:73, x:7, y:2, val:0, name:'none', count: 0},
			{id:74, x:7, y:3, val:0, name:'none', count: 0},
			{id:75, x:7, y:4, val:0, name:'none', count: 0},
			{id:76, x:7, y:5, val:0, name:'none', count: 0},
			{id:77, x:7, y:6, val:0, name:'none', count: 0},
			{id:78, x:7, y:7, val:0, name:'none', count: 0},
			{id:79, x:7, y:8, val:0, name:'none', count: 0},
			{id:80, x:7, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:81, x:8, y:0, val:0, name:'none', count: 0},
			{id:82, x:8, y:1, val:0, name:'none', count: 0},
			{id:83, x:8, y:2, val:0, name:'none', count: 0},
			{id:84, x:8, y:3, val:0, name:'none', count: 0},
			{id:85, x:8, y:4, val:0, name:'none', count: 0},
			{id:86, x:8, y:5, val:0, name:'none', count: 0},
			{id:87, x:8, y:6, val:0, name:'none', count: 0},
			{id:88, x:8, y:7, val:0, name:'none', count: 0},
			{id:89, x:8, y:8, val:0, name:'none', count: 0},
			{id:90, x:8, y:9, val:0, name:'none', count: 0}
		],
		[
			{id:91, x:9, y:0, val:0, name:'none', count: 0},
			{id:92, x:9, y:1, val:0, name:'none', count: 0},
			{id:93, x:9, y:2, val:0, name:'none', count: 0},
			{id:94, x:9, y:3, val:0, name:'none', count: 0},
			{id:95, x:9, y:4, val:0, name:'none', count: 0},
			{id:96, x:9, y:5, val:0, name:'none', count: 0},
			{id:97, x:9, y:6, val:0, name:'none', count: 0},
			{id:98, x:9, y:7, val:0, name:'none', count: 0},
			{id:99, x:9, y:8, val:0, name:'none', count: 0},
			{id:100,x:9, y:9, val:0, name:'none', count: 0}
		]
	]);

	const [currentShip, setCurrentShip] = useState(null);



	const [ships, setShips] = useState([
		{idShip:1, type:'Ship1', field:1},
		{idShip:2, type:'Ship1', field:1},
		{idShip:3, type:'Ship1', field:1},
		{idShip:4, type:'Ship1', field:1},
		{idShip:5, type:'Ship2', field:2},
		{idShip:6, type:'Ship2', field:2},
		{idShip:7, type:'Ship2', field:2},
		{idShip:8, type:'Ship3', field:3},
		{idShip:9, type:'Ship3', field:3},
		{idShip:10,type:'Ship4', field:4},
	]);


	function dragStartHandler1(e, ship){
      	setCurrentShip(ship);
      	console.log('here_5')
      	console.log(ship);
      	setShips(ships);
  	}

//------------------------------------------------------------------------------
	function dragOverHandler2(e, cell, currentShip){
      	e.preventDefault();
 
      		fields.map(arr => {
      			arr.map(obj => {
      				if(e.target.style.backgroundColor != 'lime'){
      					if(obj.id === cell.id && obj.name != 'red'){
				      		e.target.style.backgroundColor = 'blue';
	      				}
      				}
      				
      			})
      		})
      		
      		/*if(e.target.style.backgroundColor === 'white'){
      			e.target.style.backgroundColor = 'blue';
      		}*/
  	}


	function dragLeaveHandler2(e){
		e.preventDefault();
  		if(e.target.style.backgroundColor === 'blue'  ){
  			e.target.style.backgroundColor = 'white';
  			//console.log('here_2')
  			//console.log(e.target);
  		}
  	}

  	const [deleteShip, setDelShip] = useState(null);

  	const [newArr, setNewArr] = useState(null);

  	useEffect(()=>{
  		if(deleteShip != null){
  			console.log('helllo');
  			console.log(ships)
  			console.log(deleteShip)
  		}
  	},[deleteShip])


  	function dropCellHandler2(e, cell, currentShip){	
  		let keyEnter = false;
    	fields.map(arr => {
    		arr.map(obj => {
    			if(obj.id === cell.id && obj.val === 0 && obj.name === 'none'){
    				keyEnter = true;

    				
    				console.log('dropCellHandler')
  					
  					let currentIndex = ships.indexOf(currentShip);
  					console.log('currentIndex', currentIndex)
  					setDelShip(currentIndex);
  					console.log('deleteShip',deleteShip);
  					ships.splice(currentIndex, 1)
  					setNewArr(ships);
  					console.log(newArr)
  					console.log(ships);
  					console.log(keyEnter)
    			}else{
    				
    				return cell;
    			}
    		})
    	})

			fields.map(arr => {
      			arr.map(obj => {
				  		if(currentShip.type === 'Ship1'){
			      			let id1 = (cell.id) - 10;
			      			let id2 = (cell.id) - 11;
			      			let id3 = (cell.id) - 1;
			      			let id4 = (cell.id) + 9;
			      			let id5 = (cell.id) + 10;
			   				let id6 = (cell.id) + 11;
			   				let id7 = (cell.id) + 1;
			   				let id8 = (cell.id) - 9;

				  			if(cell.id % 10 === 0 || cell.id === 100){
			   					if(	obj.id === id1 || obj.id === id2 || obj.id === id3 || obj.id === id5 || obj.id === id4 ){
				   						//console.log(obj);
				     					if(obj.name != 'lime' && keyEnter === true){
				     						obj.name = 'red';
				     						obj.count +=1
				     						console.log(obj);
				     					}
				     			}
				  			}else if(cell.id % 10 === 1){
				  				if(	obj.id === id1 || obj.id === id5 || obj.id === id6 || obj.id === id8 || obj.id === id7){
				     					//console.log(obj);
				     					if(obj.name != 'lime' && keyEnter === true){
				     						obj.name = 'red';
				     						obj.count+=1;
				     					}
			      				}
				  			}else{
			      				if(	obj.id === id1 || obj.id === id2 || obj.id === id3 || obj.id === id4 || obj.id === id5 || obj.id === id6 || obj.id === id7 || obj.id === id8 ){
				     					if(obj.name != 'lime' && keyEnter === true){
				     						obj.name = 'red';
				     						obj.count+=1
				     					}
			      				}
				  			}

		      				if(obj.id === cell.id && obj.name != 'red'){
		      					cell.val = currentShip;
		      					obj.name = 'lime';
		      					console.log(obj)
		      				}
						}

						if(currentShip.type === 'Ship2'){
							let id1 = (cell.id) - 10;
			      			let id2 = (cell.id) - 11;
			      			let id3 = (cell.id) - 1;
			      			let id4 = (cell.id) + 9;
			      			let id5 = (cell.id) + 10;
			   				let id6 = (cell.id) + 11;
			  				let id7 = (cell.id) + 2;
			  				let id8 = (cell.id) - 9;
			  				let id9 = (cell.id) + 12;
		   					let id10= (cell.id) - 8;
							if(cell.id % 10 === 9){
			      				if(	obj.id === id1 || 
			      					obj.id === id2 || 
			      					obj.id === id3 || 
			      					obj.id === id4 ||
			      					obj.id === id5 ||
			     					obj.id === id6 ||
			     					obj.id === id8 ){
				      					obj.name = 'red';
				      					obj.count+=1;
			      				}

			      				if(obj.id === cell.id || obj.id ===cell.id+1){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      				}
							}else if(cell.id % 10 === 0){
			      				let id5 = (cell.id) + 19;
			      				let id6 = (cell.id) + 20;
			      				if(	obj.id === id1 || 
			      					obj.id === id2 || 
			      					obj.id === id3 || 
			      					obj.id === id4 ||
			      					obj.id === id5 ||
			      					obj.id === id6 ){
				     					console.log(obj);
				      						//obj.name = 'smth';
				      					obj.name = 'red';
				      					obj.count+=1;
			      				}

			      				if(obj.id === cell.id || obj.id ===cell.id+10){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      					console.log(cell);
			      				}
							}else if(cell.id % 10 === 1){
								let id2 = (cell.id) - 8;
								let id3 = (cell.id) + 12;
								let id4 = (cell.id) + 1;
				  				if(	obj.id === id1 || 
			      					obj.id === id5 || 
			      					obj.id === id6 ||
			      					obj.id === id8 ||
			      					obj.id === id7 ||
			      					obj.id === id2 ||
			      					obj.id === id3 ||
			      					obj.id === id4 ){
				     					if(obj.name != 'lime' && keyEnter === true){
				     						obj.name = 'red';
				     						obj.count+=1;
				     					}
			      				}
			      				if(obj.id === cell.id || obj.id ===cell.id+1){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      					console.log(cell);
			      				}
							}else{
			      				if(	obj.id === id1 || 
			      					obj.id === id2 || 
			      					obj.id === id3 || 
			      					obj.id === id4 ||
			      					obj.id === id5 ||
			     					obj.id === id6 ||
		    						obj.id === id7 ||
			     					obj.id === id8 ||
			     					obj.id === id9 ||
			     					obj.id === id10){
				     					//console.log(obj);
				      						//obj.name = 'smth';
				      					obj.name = 'red';
				      					obj.count+=1;
			      				}

			      				if(obj.id === cell.id || obj.id ===cell.id+1){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      					console.log(cell);	
			      				}
							}
						}


						if(currentShip.type === 'Ship3'){
			      			let id1 = (cell.id) - 10;
			      			let id2 = (cell.id) - 11;
			      			let id3 = (cell.id) - 1;
			      			let id4 = (cell.id) + 9;
			      			let id5 = (cell.id) + 10;
			   				let id6 = (cell.id) + 11;
			   				let id7 = (cell.id) + 3;
			   				let id8 = (cell.id) - 9;
			   				let id9 = (cell.id) + 12;
			   				let id10= (cell.id) - 8;
			   				let id11= (cell.id) - 7;
			   				let id12= (cell.id) + 13;
							if(cell.id % 10 === 9){
				  				let id5 = (cell.id) + 1;
				  				let id12 = (cell.id) + 21;
				  				let id7 = (cell.id) + 19;
				  				let id9 = (cell.id) + 29;
				  				let id10= (cell.id) + 30;
				  				let id11= (cell.id) + 31;
 				  				if(	obj.id === id1 || 
			      					obj.id === id5 || 
			      					obj.id === id6 ||
			      					obj.id === id8 ||
			      					obj.id === id7 ||
			      					obj.id === id2 ||
			      					obj.id === id3 ||
			      					obj.id === id4 ||
			      					obj.id === id9 ||
			      					obj.id === id10||
			      					obj.id === id11||
			      					obj.id === id12){
				     					console.log(obj);
				     					if(obj.name != 'lime' && keyEnter === true){
				     						console.log(keyEnter)
				     						obj.name = 'red';
				     						obj.count+=1;	     	
				     					}
				     			}
				     			if(obj.id === cell.id || obj.id ===cell.id+10 || obj.id===cell.id+20){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      				}
							}else if(cell.id % 10 === 8){
				  				let id5 = (cell.id) + 1;
				  				let id6 = (cell.id) + 21 ;
				  				let id7 = (cell.id) + 19;
				  				let id9 = (cell.id) + 29;
				  				let id10= (cell.id) + 30;
				  				let id11= (cell.id) + 31;
				  				let id12= (cell.id) + 11;
 				  				if(	obj.id === id1 || 
			      					obj.id === id5 || 
			      					obj.id === id6 ||
			      					obj.id === id8 ||
			      					obj.id === id7 ||
			      					obj.id === id2 ||
			      					obj.id === id3 ||
			      					obj.id === id4 ||
			      					obj.id === id9 ||
			      					obj.id === id10||
			      					obj.id === id11||
			      					obj.id === id12){
				     					console.log(obj);
				     					if(obj.name != 'lime' && keyEnter === true){
				     						obj.name = 'red';
				     						obj.count+=1;
				     					}
				     			}
				     			if(obj.id === cell.id || obj.id ===cell.id+10 || obj.id===cell.id+20){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      				}
							}else if(cell.id % 10 === 0){
				  				let id7 = (cell.id) + 19;
				  				let id9 = (cell.id) + 29;
				  				let id10= (cell.id) + 30;
 				  				if(	obj.id === id1 || 
			      					obj.id === id6 ||
			      					obj.id === id7 ||
			      					obj.id === id2 ||
			      					obj.id === id4 ||
			      					obj.id === id9 ||
			      					obj.id === id10 ){
				     					console.log(obj);
				     					if(obj.name != 'lime' && keyEnter === true){
				     						obj.name = 'red';
				     						obj.count+=1;
				     					}
				     			}
				     			if(obj.id === cell.id || obj.id ===cell.id+10 || obj.id===cell.id+20){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      				}
							}else if(cell.id % 10 === 1){
								let id4 = (cell.id) + 3;
				  				if(	obj.id === id1 || 
			      					obj.id === id5 || 
			      					obj.id === id6 ||
			      					obj.id === id11||
			      					obj.id === id12||
			      					obj.id === id10||
			      					obj.id === id9 ||
			      					obj.id === id4 ||
			      					obj.id === id8){
				     					console.log(obj);
				     					if(obj.name != 'lime' && keyEnter === true){
				     						console.log(keyEnter)
				     						obj.name = 'red';
				     						obj.count+=1;
				     						
				      						//obj.name = 'smth';
				     					}
			      				}
			      				if(obj.id === cell.id || obj.id ===cell.id+1 || obj.id===cell.id+2){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      					console.log(cell);
			      				}
							}else{
								let id8 = (cell.id) - 9;
			      				let id1 = (cell.id) - 10;
			      				let id2 = (cell.id) - 11;
			      				let id3 = (cell.id) - 1;
			      				let id4 = (cell.id) + 9;
			      				let id5 = (cell.id) + 10;
			   					let id6 = (cell.id) + 11;
			   					let id7 = (cell.id) + 3;
			   					let id9 = (cell.id) + 12;
			   					let id10= (cell.id) - 8;
			   					let id11= (cell.id) - 7;
			   					let id12= (cell.id) + 13;
			      				if(	obj.id === id1 || 
			      					obj.id === id2 || 
			      					obj.id === id3 || 
			      					obj.id === id4 ||
			      					obj.id === id5 ||
			     					obj.id === id6 ||
		    						obj.id === id7 ||
			     					obj.id === id8 ||
			     					obj.id === id9 ||
			     					obj.id === id10||
			     					obj.id === id11||
			     					obj.id === id12){
				      					obj.name = 'red';
				      					obj.count+=1;
			      				}

			      				if(obj.id === cell.id || obj.id ===cell.id+1 || obj.id ===cell.id+2){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      					console.log(cell);
			      				}
							}	
						}

						if(currentShip.type === 'Ship4'){
							if(cell.id % 10 === 9 || cell.id % 10 === 8 ){
								if(cell.id > 70){
			    					if(obj.id === cell.id){
			    						obj.name = 'white';
			    					}
		    						return cell;
		    					}
								let id1 = (cell.id) - 10;
				      			let id2 = (cell.id) - 11;
				      			let id3 = (cell.id) - 9;
				      			let id4 = (cell.id) + 9;
				      			let id5 = (cell.id) + 19;
				   				let id6 = (cell.id) + 11;
				   				let id7 = (cell.id) + 21;
				   				let id8 = (cell.id) + 29;
				   				let id9 = (cell.id) + 31;
				   				let id10= (cell.id) + 39;
				   				let id11= (cell.id) + 40;
				   				let id12= (cell.id) + 41;
				   				let id13= (cell.id) + 1;
				   				let id14= (cell.id) - 1;
				   					if(	obj.id === id1 || 
				      					obj.id === id2 || 
				      					obj.id === id3 || 
				      					obj.id === id4 ||
				      					obj.id === id5 ||
				     					obj.id === id6 ||
				     					obj.id === id7 ||
				     					obj.id === id8 ||
				     					obj.id === id9 ||
				     					obj.id === id10||
				     					obj.id === id11||
				     					obj.id === id12||
				     					obj.id === id13||
				     					obj.id === id14){
				     					//console.log(obj);
				     					if(obj.name != 'lime'){
				     						obj.name = 'red';
				     						obj.count+=1;
				      						//obj.name = 'smth';
				     					}
				      				}

				      				if(obj.id === cell.id || obj.id===cell.id+10 || obj.id===cell.id+20 || obj.id===cell.id+30){
				      					obj.val = currentShip;
				      					obj.name = 'lime';
				      				}
								
								
							}else{
			      				let id1 = (cell.id) - 10;
			      				let id2 = (cell.id) - 11;
			      				let id3 = (cell.id) - 1;
			      				let id4 = (cell.id) + 9;
			      				let id5 = (cell.id) + 10;
			   					let id6 = (cell.id) + 11;
			   					let id7 = (cell.id) + 3;
			   					let id8 = (cell.id) - 9;
			   					let id9 = (cell.id) + 12;
			   					let id10= (cell.id) - 8;
			   					let id11= (cell.id) - 7;
			   					let id12= (cell.id) - 6;
			   					let id13= (cell.id) + 13;
			   					let id14= (cell.id) + 14;
			   					let id15= (cell.id) + 4;
			      				if(	obj.id === id1 || 
			      					obj.id === id2 || 
			      					obj.id === id3 || 
			      					obj.id === id4 ||
			      					obj.id === id5 ||
			     					obj.id === id6 ||
			     					obj.id === id7 ||
			     					obj.id === id8 ||
			     					obj.id === id9 ||
			     					obj.id === id10||
			     					obj.id === id11||
			     					obj.id === id12||
			     					obj.id === id13||
			     					obj.id === id14||
			     					obj.id === id15){
			     					//console.log(obj);
			     					if(obj.name != 'lime'){
			     						obj.name = 'red';
			     						obj.count+=1;
			      						//obj.name = 'smth';
			     					}
			      				}

			      				if(obj.id === cell.id || obj.id===cell.id+1 || obj.id===cell.id+2 || obj.id===cell.id+3){
			      					obj.val = currentShip;
			      					obj.name = 'lime';
			      				}
							}
							
						}
					})
      		})
  	}
//----------------------------------------------------------------------

  	function dragEndHandler1(e, ship){

  	}

  	function dropShipHandler1(e){

  	}


  	function click(cell){
  		console.log(cell);
  		let ship = cell.val;
  		console.log(ship);
  		let arr2 = []

  		fields.map(arr => {
  			arr.map(obj => {
  				if(cell.val != 0){
  					if(obj.val.idShip === cell.val.idShip){
  						obj.name = 'yellow'
  						arr2.push(obj)
  					}else{
  						if(obj.val.idShip != cell.val.idShip && obj.val != 0){
  							obj.name = 'lime';
  						}
  					}
  				}
  			})
  		})
  		setNextArr(arr2);
  	}

  	useEffect(()=>{
  		console.log(nextArr);
  	}, [nextArr])

  	useEffect(()=>{
  		console.log(ships);
  	}, [ships])

  	function click2(){
  		console.log(nextArr);
  		let ship = nextArr[0].val;
  		console.log('shiiiiiiiiiiiiiiiiiiip', ship);

  		fields.map(arr => {
  			arr.map(obj => {
  				if(obj.val != 0	&& obj.val.idShip === ship.idShip){
  					obj.val = 0;
  					obj.name = 'white';
  					ships.push(ship);
  					console.log('shiiiiiiiiips', ships);
  				}
  				if(ship.type === 'Ship1'){
  					if(obj.id === nextArr[0].id-11 || obj.id === nextArr[0].id-10 || obj.id === nextArr[0].id-9 || obj.id === nextArr[0].id-1 || obj.id === nextArr[0].id+1 || obj.id === nextArr[0].id+9 || obj.id === nextArr[0].id+10 || obj.id === nextArr[0].id+11){
  						obj.count-=1;
  						if(obj.count === 0){
  							obj.name = 'white';
  						}
  					}
  				}
  			})
  		})
  	}




	return(
		<div className='blockShips'>
			<table className='table'>
				<tbody>
					{fields?.map((field, i) => (
						<tr key={i} className='tr'>
							{field?.map((cell, i) => 
								<td key={i}
									style={{backgroundColor: cell?.name}}
									onClick={(e)=> click(cell)}
									className='td'
									onDragLeave={(e) => dragLeaveHandler2(e)}
    								onDragOver={(e) => dragOverHandler2(e, cell, currentShip)}
	    							onDrop={(e) => dropCellHandler2(e, cell, currentShip)}
								>
									{cell.x}:{cell.y}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
			<div className='ships'>
				<p className='p'>Ships: drag and drop</p>
				<div className='ships2'>
					{ships.map(ship => 
						<p

							onDragEnd={(e) => dragEndHandler1(e, ship)}
							onDragStart={(e) => dragStartHandler1(e, ship)}
							onDrop={(e)=> dropShipHandler1(e)}
							draggable={true}
							key={ship.idShip}
						 	className={ship.type}
						>
							
						</p>
					)}
				</div>
			</div>
			<div className='buttons'>
				<button className='buttons1' onClick={(e) => click2()}>X</button>
				<button className='buttons2'><span>Next</span></button>
				<Link to="/profile"><button className='button-49' >Exit</button></Link>
			</div>
		</div>	
	)
}




const Ships = () => {
	return (
		<div>
			<Table />
		</div>
	)
}

export default Ships;