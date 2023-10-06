namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository userRepository {get;}
        IMessageRespository messageRespository {get;}
        ILikesRepository likesRepository {get;}
        Task<bool> Complete();
        bool HasChanges();
    }
}