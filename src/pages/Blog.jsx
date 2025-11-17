import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Logistics', 'Technology', 'Business', 'Tips & Guides', 'Company News']

const blogPosts = [
    {
        id: 1,
        title: 'How to Choose the Right Delivery Service for Your Business',
        excerpt: 'Learn about the key factors to consider when selecting a logistics partner for your business needs.',
        category: 'Business',
        author: 'Sarah Johnson',
        date: 'November 10, 2025',
        readTime: '5 min read',
        image: '/src/assets/cheerful-afro-woman-hugging-carton-parcel-receivi-2025-03-18-18-25-45-utc.jpg',
        tags: ['Logistics', 'Business Tips']
    },
    {
        id: 2,
        title: 'The Future of Last-Mile Delivery in Kenya',
        excerpt: 'Exploring emerging trends and technologies reshaping the delivery landscape in Kenya.',
        category: 'Logistics',
        author: 'Michael Odhiambo',
        date: 'November 8, 2025',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800',
        tags: ['Technology', 'Innovation']
    },
    {
        id: 3,
        title: '10 Tips for Packaging Your Parcels Safely',
        excerpt: 'Expert advice on how to properly package items to ensure they arrive in perfect condition.',
        category: 'Tips & Guides',
        author: 'Jane Wambui',
        date: 'November 5, 2025',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
        tags: ['Packaging', 'Safety']
    },
    {
        id: 4,
        title: 'OhCargo Expands to 5 New Counties',
        excerpt: 'We are excited to announce our expansion into Kisumu, Mombasa, Nakuru, Eldoret, and Thika.',
        category: 'Company News',
        author: 'OhCargo Team',
        date: 'November 1, 2025',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
        tags: ['Expansion', 'News']
    },
    {
        id: 5,
        title: 'How GPS Tracking Improves Delivery Transparency',
        excerpt: 'Discover how real-time tracking technology benefits both businesses and customers.',
        category: 'Technology',
        author: 'David Kimani',
        date: 'October 28, 2025',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        tags: ['GPS', 'Technology']
    },
    {
        id: 6,
        title: 'Sustainable Delivery: Our Commitment to the Environment',
        excerpt: 'Learn about OhCargo\'s initiatives to reduce carbon emissions and promote eco-friendly deliveries.',
        category: 'Company News',
        author: 'Emily Njeri',
        date: 'October 25, 2025',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
        tags: ['Sustainability', 'Environment']
    }
]

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Post */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Post</h2>
            <div className="w-20 h-1 bg-[#7D0E0E]"></div>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7D0E0E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {featuredPost.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#7D0E0E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-colors inline-flex items-center gap-2">
                    Read Full Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#7D0E0E] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#7D0E0E] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7D0E0E] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs text-gray-600 font-semibold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    <button className="text-[#7D0E0E] font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                      Read
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/80 mb-8">
            Subscribe to our newsletter and never miss the latest logistics insights and company updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#7D0E0E] focus:outline-none"
            />
            <button className="bg-[#7D0E0E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9D1E1E] transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
