

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div className="text-center ">
            <form onSubmit={handleSubmit}>
                <input className="p-2 m-4 border-2" type="text" name="name" id="" placeholder="Your name"/>
                <br />
                <input className="p-2 m-4 border-2" type="email" name="email" id="" placeholder="Your Email"/>
                <br />
                <input className="p-2 m-4 border-2 rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;