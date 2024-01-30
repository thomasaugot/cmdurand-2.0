const StaticForm = () => {
  return (
    <form className="bg-transparent relative w-[90vw] md:w-[40vw] p-0">
      <div className="mb-4">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Numéro de téléphone</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Email</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Message</label>
        <textarea
          id="message"
          name="message"
          className="mt-1 p-2 w-full border rounded-md"
          rows="6"
        ></textarea>
      </div>
      <button type="submit" className="flex mx-auto primary-button primary-button-bg">
        Envoyer
      </button>
    </form>
  );
};

export default StaticForm;
