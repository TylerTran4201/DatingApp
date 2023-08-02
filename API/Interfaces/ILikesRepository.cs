using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserId, int targetUserId);
        Task<AppUser> GetUserWithLike(int userId);
        Task<IEnumerable<LikeDTO>> GetUserLikes(string predicate, int userId);
    }
}