// component for later abstraction from Publications page
// NOT in use!!!
const PublicationCard = ({ publication }) => {
  return (
    <>
      <img src={publication.avatar.file.url} alt="author" />
      <div>{publication.name}</div>
      <div>{publication.description}</div>
    </>
  );
};
export default PublicationCard;
