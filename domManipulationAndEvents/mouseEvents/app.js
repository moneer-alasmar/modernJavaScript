const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// // click event
// clearBtn.addEventListener('click', runEvent);

// // double click event
// clearBtn.addEventListener('dblclick', runEvent);

// // mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// // mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// // mouse enter
// clearBtn.addEventListener('mouseenter', runEvent);

// // mouse leave
// clearBtn.addEventListener('mouseleave', runEvent);

// // mouse over
// clearBtn.addEventListener('mouseover', runEvent);

// // mouse out
// clearBtn.addEventListener('mouseout', runEvent);

// mouse move
card.addEventListener('mousemove', runEvent);


// event handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `
      Mouse X: ${e.offsetX}, Mouse Y: ${e.offsetY}
    `;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    e.preventDefault();
}