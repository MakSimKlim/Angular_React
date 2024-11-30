function Fibonachi(props) {
    let n = props.n;
    let fib = [0, 1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return (
        <h3>Fibonachi {n} is {fib.join(', ')};</h3>
    );
}

export default Fibonachi;
