
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function PostCard({ post, onUpdatePost, setPosts, user }) {
  console.log(user)
  const [isPostLiked, setIsPostLiked] = useState(post.is_liked);
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [hasvoted,setHasvoted] = useState(false)
  
  const updateLike = (e) => {
    e.preventDefault()
   fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({is_liked: !post.is_liked}),
    })
      .then((r) => r.json())
      .then((updatedPost) => {
        setIsPostLiked((prevIsPostLiked) => !prevIsPostLiked);
        setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost.id === post.id ? { ...prevPost, is_liked: !isPostLiked } : prevPost
        )
      );
      });
    }

    const updateUpVote = () => {
  if (!hasvoted) {
    axios
      .patch(`/posts/${post.id}`, { upvotes: post.upvotes + 1 })
      .then(() => {
        setHasvoted(true);
        setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost.id === post.id ? { ...prevPost, upvotes: prevPost.upvotes + 1 } : prevPost
        )
      );
      setUpvotes((prevUpvotes) => prevUpvotes + 1);
    })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

const updateDownVote = () => {
  if (!hasvoted) {
    axios
      .patch(`/posts/${post.id}`, { downvotes: post.downvotes + 1 })
      .then(() => {
        setHasvoted(true);
        setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost.id === post.id ? { ...prevPost, downvotes: prevPost.downvotes + 1 } : prevPost
        )
      );
      setUpvotes((prevDownvotes) => prevDownvotes + 1);
    })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

const deletePost = () => {
    axios
      .delete(`/posts/${post.id}`)
      .then(() => {
        setPosts((prevPosts) =>
          prevPosts.filter((prevPost) => prevPost.id !== post.id)
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  return (
    <div className="w-170 px-8 mx-auto pt-6">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-2" style={{ marginLeft: '5px', width: '80%', minHeight: '200px' }}>
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.image_url} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ float: 'left' }}>{post.title}</h5>
            <div className="flex items-center" style={{ float: 'right' }}>
              <img className="w-8 h-8 rounded-full mr-2" src={post.user.avatar_url} alt="" />
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {post.user.username}
              </p>
            </div>
          </div>
          <div className="overflow-y-auto flex-grow">
            <p className="font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
             {user && user.id === post.user.id && (
              <button onClick={deletePost}  className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-red-500 bg-transparent border border-red-500 rounded-lg hover:bg-red-500 hover:text-white focus:ring-4 ">
                <svg width="5" height="5" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6904 0C20.2565 0 18.8866 0.510781 17.8715 1.42578L16.6798 2.5H2.81289C2.44538 2.49531 2.08051 2.55652 1.73947 2.68005C1.39843 2.80359 1.08803 2.98699 0.826304 3.2196C0.56458 3.45221 0.356753 3.72939 0.214901 4.03504C0.0730484 4.34068 0 4.66869 0 5C0 5.33131 0.0730484 5.65932 0.214901 5.96496C0.356753 6.27061 0.56458 6.54779 0.826304 6.7804C1.08803 7.01301 1.39843 7.19641 1.73947 7.31995C2.08051 7.44348 2.44538 7.50469 2.81289 7.5H47.1871C47.5546 7.50469 47.9195 7.44348 48.2605 7.31995C48.6016 7.19641 48.912 7.01301 49.1737 6.7804C49.4354 6.54779 49.6433 6.27061 49.7851 5.96496C49.927 5.65932 50 5.33131 50 5C50 4.66869 49.927 4.34068 49.7851 4.03504C49.6433 3.72939 49.4354 3.45221 49.1737 3.2196C48.912 2.98699 48.6016 2.80359 48.2605 2.68005C47.9195 2.55652 47.5546 2.49531 47.1871 2.5H33.3202L32.1285 1.42578C31.1162 0.510781 29.7435 0 28.3097 0H21.6904ZM3.82583 12.5L8.06174 45.6592C8.42783 48.1342 10.7919 50 13.5598 50H36.4348C39.2027 50 41.5694 48.1371 41.9383 45.6396L46.1742 12.5H3.82583Z" fill="#F87171"/>
                </svg>
              </button>
            )}
            <button onClick={updateUpVote} className="flex items-center justify-center w-10 h-10 mr-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none" preserveAspectRatio="none">
                <path d="M18.9727 0.162986C16.7344 -0.475685 14.3965 0.819236 13.7578 3.05752L13.4238 4.22939C13.207 4.99111 12.8145 5.69424 12.2813 6.28017L9.27539 9.58486C8.75391 10.1591 8.79492 11.0497 9.36914 11.5712C9.94336 12.0927 10.834 12.0517 11.3555 11.4774L14.3613 8.17275C15.1875 7.26455 15.791 6.18056 16.125 5.00283L16.459 3.83096C16.6699 3.08681 17.4492 2.65322 18.1992 2.86416C18.9492 3.0751 19.377 3.85439 19.166 4.60439L18.832 5.77627C18.498 6.94228 17.9707 8.04385 17.2734 9.02822C16.9687 9.45596 16.9336 10.0185 17.1738 10.4872C17.4141 10.956 17.8945 11.2489 18.4219 11.2489H26.25C26.7656 11.2489 27.1875 11.6708 27.1875 12.1864C27.1875 12.5849 26.9355 12.9306 26.5781 13.0653C26.1445 13.2294 25.8164 13.5927 25.7051 14.0438C25.5938 14.495 25.7109 14.9696 26.0156 15.3153C26.1621 15.4794 26.25 15.6962 26.25 15.9364C26.25 16.3935 25.9219 16.7743 25.4883 16.8563C25.0078 16.9501 24.6035 17.2841 24.4336 17.7411C24.2637 18.1981 24.3398 18.7196 24.6445 19.1063C24.7676 19.2645 24.8438 19.4638 24.8438 19.6864C24.8438 20.079 24.5977 20.4247 24.2461 20.5595C23.5723 20.8231 23.209 21.5497 23.4023 22.247C23.4258 22.3231 23.4375 22.411 23.4375 22.4989C23.4375 23.0145 23.0156 23.4364 22.5 23.4364H16.7871C16.0488 23.4364 15.3223 23.2196 14.707 22.8095L11.0918 20.4013C10.4473 19.9677 9.57422 20.1435 9.14062 20.7938C8.70703 21.4442 8.88281 22.3114 9.5332 22.745L13.1484 25.1532C14.2266 25.8739 15.4922 26.2548 16.7871 26.2548H22.5C24.5332 26.2548 26.1855 24.6376 26.25 22.622C27.1055 21.9364 27.6562 20.8817 27.6562 19.6923C27.6562 19.4286 27.627 19.1767 27.5801 18.9306C28.4824 18.245 29.0625 17.161 29.0625 15.9423C29.0625 15.5614 29.0039 15.1923 28.8984 14.8466C29.5781 14.161 30 13.2235 30 12.1864C30 10.1181 28.3242 8.43642 26.25 8.43642H20.8418C21.1172 7.82705 21.3516 7.19424 21.5332 6.54971L21.8672 5.37783C22.5059 3.13955 21.2109 0.801658 18.9727 0.162986ZM1.875 9.37392C0.837891 9.37392 0 10.2118 0 11.2489V24.3739C0 25.411 0.837891 26.2489 1.875 26.2489H5.625C6.66211 26.2489 7.5 25.411 7.5 24.3739V11.2489C7.5 10.2118 6.66211 9.37392 5.625 9.37392H1.875Z" fill="black"/>
              </svg>

              {post.upvotes}
            </button>
            <button onClick={updateDownVote} className="flex items-center justify-center w-10 h-10 mr-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none" preserveAspectRatio="none">
                <path d="M18.9727 29.8138C16.7344 30.5434 14.3965 29.0641 13.7578 26.5071L13.4238 25.1684C13.207 24.2982 12.8145 23.4949 12.2813 22.8256L9.27539 19.0503C8.75391 18.3943 8.79492 17.3769 9.36914 16.7811C9.94336 16.1854 10.834 16.2323 11.3555 16.8882L14.3613 20.6635C15.1875 21.701 15.791 22.9394 16.125 24.2848L16.459 25.6235C16.6699 26.4736 17.4492 26.969 18.1992 26.728C18.9492 26.487 19.377 25.5968 19.166 24.74L18.832 23.4012C18.498 22.0692 17.9707 20.8108 17.2734 19.6862C16.9687 19.1976 16.9336 18.555 17.1738 18.0195C17.4141 17.484 17.8945 17.1493 18.4219 17.1493H26.25C26.7656 17.1493 27.1875 16.6673 27.1875 16.0783C27.1875 15.6231 26.9355 15.2282 26.5781 15.0742C26.1445 14.8868 25.8164 14.4718 25.7051 13.9564C25.5938 13.441 25.7109 12.8988 26.0156 12.5039C26.1621 12.3164 26.25 12.0688 26.25 11.7943C26.25 11.2722 25.9219 10.8371 25.4883 10.7434C25.0078 10.6363 24.6035 10.2548 24.4336 9.72597C24.2637 9.19716 24.3398 8.60812 24.6445 8.16633C24.7676 7.9856 24.8438 7.75801 24.8438 7.50365C24.8438 7.05517 24.5977 6.66025 24.2461 6.50629C23.5723 6.20507 23.209 5.37505 23.4023 4.5785C23.4258 4.49148 23.4375 4.39108 23.4375 4.29067C23.4375 3.70162 23.0156 3.21968 22.5 3.21968H16.7871C16.0488 3.21968 15.3223 3.46734 14.707 3.9359L11.0918 6.68702C10.4473 7.18236 9.57422 6.98154 9.14062 6.23854C8.70703 5.49554 8.88281 4.50487 9.5332 4.00954L13.1484 1.25842C14.2266 0.435091 15.4922 0 16.7871 0H22.5C24.5332 0 26.1855 1.84747 26.25 4.1501C27.1055 4.93327 27.6562 6.13814 27.6562 7.49696C27.6562 7.79818 27.627 8.08601 27.5801 8.36714C28.4824 9.15031 29.0625 10.3886 29.0625 11.7809C29.0625 12.216 29.0039 12.6377 28.8984 13.0327C29.5781 13.8225 30 14.8935 30 16.0783C30 18.4412 28.3242 20.3623 26.25 20.3623H20.8418C21.1172 21.0584 21.3516 21.7813 21.5332 22.5177L21.8672 23.8564C22.5059 26.4134 21.2109 29.0842 18.9727 29.8138ZM1.875 23.5753C0.837891 23.5753 0 22.6181 0 21.4333V6.43935C0 5.25457 0.837891 4.29736 1.875 4.29736H5.625C6.66211 4.29736 7.5 5.25457 7.5 6.43935V21.4333C7.5 22.6181 6.66211 23.5753 5.625 23.5753H1.875Z" fill="black"/>
              </svg>
              {post.downvotes}
            </button>
            <button onClick={updateLike} className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
              {post.is_liked ? <svg width="30" height="30" viewBox="0 0 30 30" fill="#393939" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_302_33" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
          <rect width="29.4828" height="30" fill="#393939" />
        </mask>
            <g mask="url(#mask0_302_33)">
          <path d="M14.7414 26.25L12.9601 24.625C10.8922 22.7292 9.18265 21.0938 7.83136 19.7188C6.48006 18.3437 5.40517 17.1094 4.60668 16.0156C3.80819 14.9219 3.25027 13.9167 2.93292 13C2.61557 12.0833 2.45689 11.1458 2.45689 10.1875C2.45689 8.22917 3.10183 6.59375 4.3917 5.28125C5.68157 3.96875 7.28879 3.3125 9.21336 3.3125C10.278 3.3125 11.2915 3.54167 12.2538 4C13.2161 4.45833 14.0453 5.10417 14.7414 5.9375C15.4375 5.10417 16.2667 4.45833 17.229 4C18.1913 3.54167 19.2047 3.3125 20.2694 3.3125C22.194 3.3125 23.8012 3.96875 25.0911 5.28125C26.3809 6.59375 27.0259 8.22917 27.0259 10.1875C27.0259 11.1458 26.8672 12.0833 26.5498 13C26.2325 13.9167 25.6746 14.9219 24.8761 16.0156C24.0776 17.1094 23.0027 18.3437 21.6514 19.7188C20.3001 21.0938 18.5905 22.7292 16.5226 24.625L14.7414 26.25ZM14.7414 22.875C16.7069 21.0833 18.3244 19.5469 19.5937 18.2656C20.8631 16.9844 21.8664 15.8698 22.6034 14.9219C23.3405 13.974 23.8524 13.1302 24.139 12.3906C24.4256 11.651 24.569 10.9167 24.569 10.1875C24.569 8.9375 24.1595 7.89583 23.3405 7.0625C22.5215 6.22917 21.4978 5.8125 20.2694 5.8125C19.3071 5.8125 18.4165 6.08854 17.5975 6.64063C16.7786 7.19271 16.2155 7.89583 15.9084 8.75H13.5744C13.2672 7.89583 12.7042 7.19271 11.8852 6.64063C11.0663 6.08854 10.1756 5.8125 9.21336 5.8125C7.98491 5.8125 6.9612 6.22917 6.14224 7.0625C5.32327 7.89583 4.91379 8.9375 4.91379 10.1875C4.91379 10.9167 5.05711 11.651 5.34375 12.3906C5.63039 13.1302 6.14224 13.974 6.87931 14.9219C7.61638 15.8698 8.61961 16.9844 9.88901 18.2656C11.1584 19.5469 12.7759 21.0833 14.7414 22.875Z" fill="#1C1B1F"/>
          </g>
          </svg> : 
          (<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.32422 14.7453L11.1475 24.3776C11.5137 24.7773 11.9971 25 12.5 25C13.0029 25 13.4863 24.7773 13.8525 24.3776L22.6758 14.7453C24.1602 13.1295 25 10.8627 25 8.49317V8.16201C25 4.17091 22.5342 0.767907 19.1699 0.111288C16.9434 -0.322651 14.6777 0.528098 13.0859 2.38947L12.5 3.07464L11.9141 2.38947C10.3223 0.528098 8.05664 -0.322651 5.83008 0.111288C2.46582 0.767907 0 4.17091 0 8.16201V8.49317C0 10.8627 0.839844 13.1295 2.32422 14.7453Z" fill="#1D4ED8"/>
          </svg>)}
            </button>
          <Link to={`/posts/${post.id}`}>
            <button className="flex items-center justify-center w-10 h-10 mr-2 text-gray-700 bg-gray-200  rounded-full hover:bg-gray-300 focus:outline-none">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.6718 23.3282L24.3935 23.05H24H3C1.87467 23.05 0.95 22.1253 0.95 21V3C0.95 1.87467 1.87467 0.95 3 0.95H27C28.1253 0.95 29.05 1.87467 29.05 3V27.7065L24.6718 23.3282ZM17.45 18V14.45H21C22.3497 14.45 23.45 13.3497 23.45 12C23.45 10.6503 22.3497 9.55 21 9.55H17.45V6C17.45 4.65033 16.3497 3.55 15 3.55C13.6503 3.55 12.55 4.65033 12.55 6V9.55H9C7.65033 9.55 6.55 10.6503 6.55 12C6.55 13.3497 7.65033 14.45 9 14.45H12.55V18C12.55 19.3497 13.6503 20.45 15 20.45C16.3497 20.45 17.45 19.3497 17.45 18Z" stroke="black" stroke-width="1.9"/>
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
     
    
  );
}

export default PostCard;
