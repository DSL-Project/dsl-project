const Error = () => {
    return (
        <main className='error-main'>
            <section className='error-container'>
                <h1 className='error-heading'>404</h1>
                <h2 className='error-subheading'>not found</h2>
                <p className='error-description'>
                    The resource requested could not be found on this server!
                </p>
            </section>
        </main>
    );
};
export default Error;
