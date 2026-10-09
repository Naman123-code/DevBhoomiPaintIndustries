export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-ss-wall-max-is-best-for-up-uttarakhand-climate",
    title: "Why S S Wall Max is the Best Wall Putty for UP and Uttarakhand Climate",
    excerpt: "Discover how S S Wall Max provides unmatched durability against the extreme weather conditions of Uttar Pradesh and Uttarakhand.",
    content: `
      <h2>The Challenge of Weather in UP and Uttarakhand</h2>
      <p>Uttar Pradesh (UP) and Uttarakhand face extreme weather variations. From the scorching summers in UP to the freezing winters and heavy monsoons in Uttarakhand, the walls of your home go through a lot.</p>
      
      <h2>Why S S Wall Max is the Solution</h2>
      <p><strong>Dev Bhoomi Paint Industries</strong> specifically engineered <strong>S S WALL MAX</strong> to withstand these distinct regional challenges. Our premium wall putty offers exceptional adhesion and water resistance.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li><strong>Weather Resistance:</strong> Formulated to prevent flaking and dampness, common issues during the UP monsoons.</li>
        <li><strong>Smooth Finish:</strong> Provides a pristine, bright white base that enhances the lifespan and vibrancy of premium paints.</li>
        <li><strong>Locally Manufactured:</strong> Produced with pride in Uttarakhand, ensuring fast availability across all districts of UP and Uttarakhand.</li>
      </ul>
      
      <p>When you choose S S Wall Max, you are investing in the long-term beauty and structural integrity of your property.</p>
    `,
    author: "Dev Bhoomi Paint Industries",
    date: "2026-10-01",
    tags: ["S S Wall Max", "Wall Putty", "Uttar Pradesh", "Uttarakhand", "Home Maintenance"]
  },
  {
    id: "2",
    slug: "choosing-right-white-cement-for-your-home",
    title: "Choosing the Right Decorative White Cement for Your Home",
    excerpt: "Learn why choosing premium decorative white cement from Dev Bhoomi Paint Industries makes a difference in your construction projects.",
    content: `
      <h2>The Importance of High-Quality White Cement</h2>
      <p>Decorative white cement is essential for achieving brilliant architectural finishes. However, not all white cements are created equal.</p>
      
      <h2>Dev Bhoomi's Commitment to Quality</h2>
      <p>At <strong>Dev Bhoomi Paint Industries</strong>, our decorative white cement is renowned across UP and Uttarakhand for its unparalleled whiteness and compressive strength. It is the perfect companion to our flagship product, <strong>S S WALL MAX</strong>.</p>
      
      <p>Whether you are working on intricate marble flooring, terrazzo surfaces, or preparing a wall for premium painting, our white cement guarantees a flawless, long-lasting result.</p>
    `,
    author: "Dev Bhoomi Paint Industries",
    date: "2026-09-15",
    tags: ["White Cement", "Construction", "Dev Bhoomi Paint"]
  }
];
