function createCounter() {
    let count = 0

    return () => ++count
}

async function wait(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms))
}