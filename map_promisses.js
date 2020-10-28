const items = ['a', 'b', 'c', 'd', 'e']

    ; (async function () {
        const promisseFunction = async (element) => {
            return new Promise((resolve, reject) => {
                return resolve(`${element} - promisse`)
            })
        }

        //const itemMapped = promisseFunction('x')
        //console.log(await itemMapped)

        const itemsMappedPromisses = items.map(promisseFunction)

        const itemsMapped = await Promise.all(itemsMappedPromisses); 

        console.log(itemsMapped)
    })();
