// Data for the roadmap
const roadmapData = [
  {
    category: "Fundamentals",
    icon: "🌐",
    topics: [
      {
        title: "Computer Science Basics",
        description:
          "Understanding core principles of computing and algorithms.",
        resources: [
          {
            title: "CS50 Introduction to Computer Science",
            link: "https://cs50.harvard.edu/x/",
          },
        ],
      },
      {
        title: "Data Structures",
        description:
          "Learning about arrays, linked lists, trees, graphs, and hash tables.",
        resources: [
          {
            title: "Data Structures Easy to Advanced Course",
            link: "https://www.udemy.com/course/datastructurescncpp/",
          },
        ],
      },
      {
        title: "Algorithms",
        description: "Studying sorting, searching, and algorithm complexity.",
        resources: [
          {
            title: "Algorithms, Part I",
            link: "https://www.coursera.org/learn/algorithms-part1",
          },
        ],
      },
    ],
  },
  {
    category: "Mathematics",
    icon: "📐",
    topics: [
      {
        title: "Linear Algebra",
        description: "Vectors, matrices, and operations essential for ML.",
        resources: [
          {
            title: "Linear Algebra - Khan Academy",
            link: "https://www.khanacademy.org/math/linear-algebra",
          },
        ],
      },
      {
        title: "Calculus",
        description:
          "Differential and integral calculus for understanding optimization.",
        resources: [
          {
            title: "Calculus - MIT OpenCourseWare",
            link: "https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/",
          },
        ],
      },
      {
        title: "Probability & Statistics",
        description:
          "Probability theory and statistical methods for data analysis.",
        resources: [
          {
            title: "Introduction to Probability",
            link: "https://www.edx.org/course/introduction-to-probability",
          },
        ],
      },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    topics: [
      {
        title: "Python Programming",
        description: "Mastering Python for data manipulation and ML tasks.",
        resources: [
          {
            title: "Python for Everybody",
            link: "https://www.coursera.org/specializations/python",
          },
        ],
      },
      {
        title: "Version Control (Git)",
        description: "Using Git for code management and collaboration.",
        resources: [
          {
            title: "Git Tutorial for Beginners",
            link: "https://www.youtube.com/watch?v=USjZcfj8yxE",
          },
        ],
      },
      {
        title: "Software Engineering Principles",
        description:
          "Understanding best practices in coding and project structure.",
        resources: [
          {
            title: "Software Engineering Basics",
            link: "https://www.udacity.com/course/software-development-process--cs258",
          },
        ],
      },
    ],
  },
  {
    category: "Machine Learning",
    icon: "🤖",
    topics: [
      {
        title: "Supervised Learning",
        description: "Techniques like regression and classification.",
        resources: [
          {
            title: "Machine Learning - Andrew Ng",
            link: "https://www.coursera.org/learn/machine-learning",
          },
        ],
      },
      {
        title: "Unsupervised Learning",
        description: "Clustering and dimensionality reduction methods.",
        resources: [
          {
            title: "Unsupervised Learning in Python",
            link: "https://www.datacamp.com/courses/unsupervised-learning-in-python",
          },
        ],
      },
      {
        title: "Model Evaluation",
        description: "Metrics and methods to assess model performance.",
        resources: [
          {
            title: "Model Evaluation Metrics",
            link: "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc",
          },
        ],
      },
    ],
  },
  {
    category: "Deep Learning",
    icon: "🧠",
    topics: [
      {
        title: "Neural Networks",
        description: "Understanding perceptrons and multi-layer networks.",
        resources: [
          {
            title: "Neural Networks and Deep Learning",
            link: "https://www.coursera.org/learn/neural-networks-deep-learning",
          },
        ],
      },
      {
        title: "Convolutional Neural Networks",
        description: "Deep learning for image recognition.",
        resources: [
          {
            title: "Convolutional Neural Networks Course",
            link: "https://www.coursera.org/learn/convolutional-neural-networks",
          },
        ],
      },
      {
        title: "Recurrent Neural Networks",
        description: "Sequence modeling with RNNs and LSTMs.",
        resources: [
          {
            title: "Sequence Models",
            link: "https://www.coursera.org/learn/nlp-sequence-models",
          },
        ],
      },
    ],
  },
  {
    category: "Advanced Topics",
    icon: "🚀",
    topics: [
      {
        title: "Natural Language Processing",
        description: "Techniques for processing and understanding text data.",
        resources: [
          {
            title: "Natural Language Processing with Deep Learning",
            link: "https://cs224d.stanford.edu/",
          },
        ],
      },
      {
        title: "Reinforcement Learning",
        description: "Training agents using rewards and penalties.",
        resources: [
          {
            title: "Reinforcement Learning Course",
            link: "https://www.udacity.com/course/reinforcement-learning--ud600",
          },
        ],
      },
      {
        title: "Attention Mechanisms & Transformers",
        description: "Advanced architectures for sequence modeling.",
        resources: [
          {
            title: "Attention is All You Need Paper",
            link: "https://arxiv.org/abs/1706.03762",
          },
        ],
      },
    ],
  },
];

// Initialize the application after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  // Apply dark mode if previously enabled
  if (isDarkMode) {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save preference in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Build the roadmap dynamically
  const roadmapContainer = document.getElementById("roadmap");

  roadmapData.forEach((categoryData) => {
    // Create category element
    const categoryElem = document.createElement("div");
    categoryElem.classList.add("category");

    // Create category header
    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("category-header");
    categoryHeader.innerHTML = `<h3>${categoryData.icon} ${categoryData.category}</h3>`;

    // Append category header to category element
    categoryElem.appendChild(categoryHeader);

    // Create category content container
    const categoryContent = document.createElement("div");
    categoryContent.classList.add("category-content");
    categoryContent.setAttribute("aria-hidden", "true");

    // Loop through topics in the category
    categoryData.topics.forEach((topicData) => {
      // Create sub-topic element
      const subTopicElem = document.createElement("div");
      subTopicElem.classList.add("sub-topic");

      // Sub-topic title
      const titleElem = document.createElement("p");
      titleElem.textContent = topicData.title;

      // Description element
      const descriptionElem = document.createElement("div");
      descriptionElem.classList.add("description");
      descriptionElem.textContent = topicData.description;

      // Checkbox for progress tracking with label
      const label = document.createElement("label");
      label.classList.add("completed-label");
      label.innerHTML =
        '<input type="checkbox" class="complete-checkbox"> Completed';

      // Load progress from localStorage
      const progress = JSON.parse(localStorage.getItem("progress")) || {};
      const topicKey = `${categoryData.category}-${topicData.title}`;
      const checkBox = label.querySelector("input");

      // Set checkbox state based on saved progress
      if (progress[topicKey]) {
        checkBox.checked = true;
      }

      // Update progress in localStorage on checkbox change
      checkBox.addEventListener("change", () => {
        const progress = JSON.parse(localStorage.getItem("progress")) || {};
        progress[topicKey] = checkBox.checked;
        localStorage.setItem("progress", JSON.stringify(progress));
      });

      // Toggle description visibility on title click
      titleElem.addEventListener("click", () => {
        const isVisible = descriptionElem.style.display === "block";
        descriptionElem.style.display = isVisible ? "none" : "block";
      });

      // Append elements to sub-topic
      subTopicElem.appendChild(titleElem);
      subTopicElem.appendChild(descriptionElem);
      subTopicElem.appendChild(label);

      // Append sub-topic to category content
      categoryContent.appendChild(subTopicElem);
    });

    // Append category content to category element
    categoryElem.appendChild(categoryContent);

    // Expand/Collapse category content on header click
    categoryHeader.addEventListener("click", () => {
      const isOpen = categoryContent.classList.toggle("open");
      categoryContent.setAttribute("aria-hidden", !isOpen);
    });

    // Append category to roadmap container
    roadmapContainer.appendChild(categoryElem);
  });

  // Implement search functionality
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const categories = document.querySelectorAll(".category");

    categories.forEach((category) => {
      const subTopics = category.querySelectorAll(".sub-topic");
      let categoryHasMatch = false;

      subTopics.forEach((subTopic) => {
        const title = subTopic.querySelector("p").textContent.toLowerCase();
        if (title.includes(query)) {
          subTopic.style.display = "flex";
          categoryHasMatch = true;
        } else {
          subTopic.style.display = "none";
        }
      });

      // Show or hide categories based on search results
      if (categoryHasMatch) {
        category.style.display = "";
      } else {
        category.style.display = "none";
      }
    });
  });

  // Generate Suggested Learning Path
  const learningPathSection = document.getElementById("learning-path");
  const learningPathList = document.createElement("ol");

  roadmapData.forEach((categoryData) => {
    categoryData.topics.forEach((topicData) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${categoryData.category} - ${topicData.title}`;
      learningPathList.appendChild(listItem);
    });
  });

  learningPathSection.appendChild(learningPathList);

  // Generate Resources section
  const resourcesSection = document.getElementById("resources");

  roadmapData.forEach((categoryData) => {
    const categoryResources = document.createElement("div");
    categoryResources.innerHTML = `<h3>${categoryData.category} Resources</h3>`;

    categoryData.topics.forEach((topic) => {
      const topicResources = document.createElement("div");
      topicResources.innerHTML = `<h4>${topic.title}</h4>`;
      const resourceList = document.createElement("ul");

      topic.resources.forEach((resource) => {
        const resourceItem = document.createElement("li");
        resourceItem.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
        resourceList.appendChild(resourceItem);
      });

      topicResources.appendChild(resourceList);
      categoryResources.appendChild(topicResources);
    });

    resourcesSection.appendChild(categoryResources);
  });
});
