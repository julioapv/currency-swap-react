let CurrencyInput = (props) => {
    const {
        options,
    } = props

    return (
        <div>
            <input type="number" placeholder="100 :)"/>
            <select>
                <option>Please choose your currency</option>
                {options.map((option) => 
                    <option key={option.index}>
                        {option.name}</option>
                    )}
            </select>
        </div>
    )
}

export { CurrencyInput }