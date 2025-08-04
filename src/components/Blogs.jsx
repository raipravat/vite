import React, { useEffect, useState } from "react";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BLOG_URL = 'https://blog.prabhat.info.np';
    const POSTS_TO_SHOW = 3;
    const EXCERPT_LENGTH = 120;
    
    async function fetchBlogPosts() {
      try {
        const callbackName = 'handleBloggerResponse' + Date.now();
        
        return new Promise((resolve, reject) => {
          window[callbackName] = function(data) {
            resolve(data.feed.entry);
            delete window[callbackName];
          };
          
          const script = document.createElement('script');
          script.src = `${BLOG_URL}/feeds/posts/default?alt=json-in-script&callback=${callbackName}`;
          script.onerror = () => {
            reject(new Error('Failed to load blog posts'));
          };
          document.head.appendChild(script);
        });
      } catch (error) {
        throw error;
      }
    }
    
    function processPosts(posts) {
      if (!posts || posts.length === 0) {
        return [];
      }
      
      return posts.slice(0, POSTS_TO_SHOW).map(post => {
        const fullContent = post.content.$t;
        const imgMatch = fullContent.match(/<img[^>]+src="([^">]+)"/);
        
        return {
          title: post.title.$t,
          excerpt: stripHtml(fullContent).substring(0, EXCERPT_LENGTH) + '...',
          url: post.link.find(link => link.rel === 'alternate').href,
          date: new Date(post.published.$t).toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'short', 
            day: 'numeric'
          }),
          imageUrl: imgMatch ? imgMatch[1] : 'images/blog-placeholder.jpg'
        };
      });
    }
    
    function stripHtml(html) {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    
    fetchBlogPosts()
      .then(posts => {
        setPosts(processPosts(posts));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-title">
          <h2>Latest <span className="highlight">Blog Posts</span></h2>
          <p>Stay informed with our insurance tips and news</p>
        </div>
        
        <div className="posts-grid">
          {loading && <div className="loading">Loading posts...</div>}
          
          {error && (
            <div className="error" style={{textAlign: 'center', padding: '40px', color: '#e74c3c'}}>
              Could not load blog posts. 
              <a href="https://blog.prabhat.info.np" style={{color: '#3498db', marginLeft: '5px'}}>
                Visit blog directly
              </a>
            </div>
          )}
          
          {!loading && !error && posts.length === 0 && (
            <div style={{textAlign: 'center', padding: '40px'}}>No posts found.</div>
          )}
          
          {posts.map((post, index) => (
            <div className="blogs-card" key={index}>
              <div className="blogs-image">
                <img src={post.imageUrl} alt={post.title} loading="lazy" />
              </div>
              <div className="blogs-content">
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="blogs-footer">
                  <div className="blogs-tech">
                    <i className="far fa-calendar-alt"></i>
                    <span>{post.date}</span>
                  </div>
                  <a href={post.url} className="blogs-link" target="_blank" rel="noopener noreferrer">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;