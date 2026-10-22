/* =====================================================================
   E-WASTE MANAGEMENT - ASSIGNMENT REPOSITORY
   Complete script.js
   ===================================================================== */

const assignments = [
  {
    id: 1,
    title: "Assignment Zero_Check AAP",
    description: "Introductory check assignment for the E-Waste Management course.",
    resources: [
      {
        type: "pdf",
        title: "Assignment Zero - EWEM",
        path: "assignments/assignment-01/Assignment0_EWEM (1).pdf"
      }
    ]
  },
  {
    id: 2,
    title: "Assisgnment_2_Elemental Blueprint_In Class Activity",
    description: "In-class activity: Elemental Blueprint.",
    resources: [
      {
        type: "pdf",
        title: "EWEM Assignment",
        path: "assignments/assignment-03/25102A2001_Siddhi_kharangate_EWEM_Assignment (1).pdf"
      },
      {
        type: "image",
        title: "In-class Activity Image",
        path: "assignments/assignment-03/IMG-20260727-WA0027 (1).jpg"
      }
    ]
  },
  {
    id: 3,
    title: "Assignment_1_State E Waste Tracker",
    description: "State-wise e-waste tracker assignment.",
    resources: [
      {
        type: "pdf",
        title: "Gujarat State E-Waste Tracker Report",
        path: "assignments/assignment-02/Assignment1_GujratStateEwasteTracker_Report.pdf"
      },
      {
        type: "file",
        title: "Gujarat 34-District E-Waste Tracker (Excel)",
        path: "assignments/assignment-02/Gujarat_34_District_EWaste_Tracker (1).xlsx"
      },
      {
        type: "link",
        title: "E-Waste Dashboard",
        url: "https://e-waste-dashboard.vercel.app/"
      }
    ]
  },
  {
    id: 4,
    title: "PPT Upload for State wise E Waste Tracker",
    description: "Presentation upload for the state-wise e-waste tracker.",
    resources: [
      {
        type: "pdf",
        title: "Gujarat State-wise Tracker Presentation",
        path: "assignments/assignment-04/25102A2001_Gujrat.pdf"
      }
    ]
  },
  {
    id: 5,
    title: "Changes in the E Waste Recover Process Document",
    description: "Document on changes in the e-waste recovery process.",
    resources: [
      {
        type: "pdf",
        title: "Electrochemical Selective Recovery - Process Changes",
        path: "assignments/assignment-05/TE_CMPN_A_Updated_Electrochemical_Selective_Recovery_Changes (1).pdf"
      }
    ]
  },
  {
    id: 6,
    title: "Indian Companies Following E waste Rules_5 case studies",
    description: "Five case studies of Indian companies following e-waste rules.",
    resources: [
      {
        type: "pdf",
        title: "Research Paper",
        path: "assignments/assignment-06/25102A001_ResearchPaper (1).pdf"
      },
      {
        type: "link",
        title: "E-Waste Dashboard Link",
        url: "https://ewaste-five-ochre.vercel.app/"
      }
    ]
  },
  {
    id: 7,
    title: "New Start up Ideas_E Waste Rules and Regulations Comparison",
    description: "Start-up ideas and a comparison of e-waste rules and regulations.",
    resources: [
      {
        type: "pdf",
        title: "E-Waste Presentation",
        path: "assignments/assignment-07/25102A2001_Siddhi_ewastePPT.pdf"
      },
      {
        type: "pdf",
        title: "E-Waste Rules Comparison - 5 Countries",
        path: "assignments/assignment-07/E_Waste_Rules_Comparison_5_Countries_With_Team.pdf"
      }
    ]
  },
  {
    id: 8,
    title: "E waste Campaign in College_Ideas submission Folder",
    description: "Ideas submission folder for an e-waste campaign in college.",
    resources: [
      {
        type: "image",
        title: "E-Waste Campaign Image",
        path: "assignments/assignment-08/IMG-20260908-WA0006.jpg"
      },
      {
        type: "file",
        title: "E-Waste Campaign Video",
        path: "assignments/assignment-08/VID-20260908-WA0010 (1).mp4"
      }
    ]
  },
  {
    id: 9,
    title: "LEED certification in India",
    description: "Assignment on LEED certification in India.",
    resources: [
      {
        type: "file",
        title: "10 Famous Green Buildings in India (Excel)",
        path: "assignments/assignment-09/10_Famous_Green_Buildings_India (1) (1).xlsx"
      },
      {
        type: "pdf",
        title: "Green Buildings in India - LEED Rating Classification",
        path: "assignments/assignment-09/Green_Buildings_India_LEED_Rating_Classification (1).pdf"
      },
      {
        type: "link",
        title: "E-Waste Green Building Tracker",
        url: "https://siddsgit.github.io/E-WasteGreenBuildingTracker/"
      }
    ]
  },
  {
    id: 10,
    title: "Case Studies Submission",
    description: "Case studies submission.",
    resources: [
      {
        type: "pdf",
        title: "E-Waste Case Study Presentation",
        path: "assignments/assignment-10/E-Waste_Case_Study_PPT (1).pdf"
      },
      {
        type: "pdf",
        title: "E-Waste Case Studies Report",
        path: "assignments/assignment-10/E_Waste_Case_Studies_Report (1).pdf"
      }
    ]
  },
  {
    id: 11,
    title: "IEEE Paper Submission_In class activity",
    description: "In-class activity: IEEE paper submission.",
    resources: [
      {
        type: "pdf",
        title: "Sustainable Computing Research Paper",
        path: "assignments/assignment-11/Sustainable_Computing_Research_Paper.pdf"
      }
    ]
  }
];

/* =====================================================================
   APP CODE - DO NOT EDIT BELOW THIS LINE
   ===================================================================== */

const ICONS = {
  pdf: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15h1.5a1.5 1.5 0 0 0 0-3H9v5"/></svg>',

  image: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>',

  ppt: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M8 13V7h3a2 2 0 0 1 0 4H8"/></svg>',

  doc: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/></svg>',

  link: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',

  file: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',

  arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

const TYPE_LABELS = {
  pdf: "PDF",
  image: "Image",
  ppt: "Presentation",
  doc: "Document",
  link: "Web link",
  file: "File"
};

const $ = (id) => document.getElementById(id);

const listView = $("listView");
const detailView = $("detailView");
const grid = $("grid");
const noResults = $("noResults");
const searchInput = $("searchInput");
const counter = $("counter");

/* Safely escape text before putting it into HTML */
function esc(text) {
  const d = document.createElement("div");
  d.textContent = text == null ? "" : String(text);
  return d.innerHTML;
}

/* Encode a relative path while preserving directory separators */
function encodePath(path) {
  return String(path)
    .split("/")
    .map(encodeURIComponent)
    .join("/");
}

/* Get the URL or local file path for a resource */
function hrefOf(resource) {
  if (resource.type === "link") {
    return resource.url || "";
  }

  return resource.path ? encodePath(resource.path) : "";
}

/* ============================ LIST VIEW ============================ */

function renderCards(query = "") {
  const q = query.trim().toLowerCase();

  const filtered = assignments.filter((assignment) => {
    return (
      !q ||
      assignment.title.toLowerCase().includes(q) ||
      assignment.description.toLowerCase().includes(q) ||
      String(assignment.id) === q
    );
  });

  grid.innerHTML = filtered
    .map((assignment, index) => {
      const resourceCount = assignment.resources.length;

      return `
        <article
          class="card"
          tabindex="0"
          role="button"
          data-id="${assignment.id}"
          style="animation-delay:${index * 40}ms"
          aria-label="Open assignment ${assignment.id}: ${esc(assignment.title)}"
        >
          <div class="card-top">
            <div class="card-num">${assignment.id}</div>

            <span class="card-count ${resourceCount ? "" : "empty"}">
              ${
                resourceCount
                  ? resourceCount +
                    (resourceCount === 1 ? " resource" : " resources")
                  : "No resources yet"
              }
            </span>
          </div>

          <h3>${esc(assignment.title)}</h3>

          <p>${esc(assignment.description)}</p>

          <span class="open-btn">
            Open Assignment ${ICONS.arrow}
          </span>
        </article>
      `;
    })
    .join("");

  noResults.hidden = filtered.length > 0;

  counter.textContent = q
    ? `${filtered.length} of ${assignments.length} Assignments`
    : `${assignments.length} Assignments`;
}

/* =========================== DETAILS VIEW ========================== */

function resourceHTML(resource, imageIndex) {
  const type = TYPE_LABELS[resource.type]
    ? resource.type
    : "file";

  const href = hrefOf(resource);
  const title = esc(resource.title || "Untitled resource");
  const label = TYPE_LABELS[type];

  /* Handle resources without a configured path or URL */
  if (!href) {
    return `
      <div class="res-item broken">
        <div class="res-icon ${type}">
          ${ICONS[type]}
        </div>

        <div class="res-info">
          <h4>${title}</h4>
          <span>${label}</span>
          <span class="res-note">
            This resource has no file path or link configured yet.
          </span>
        </div>
      </div>
    `;
  }

  /* Image resource with preview and lightbox support */
  if (type === "image") {
    return `
      <div class="res-item is-image" data-check="${esc(href)}">
        <div class="row">
          <div class="res-icon image">
            ${ICONS.image}
          </div>

          <div class="res-info">
            <h4>${title}</h4>
            <span>${label}</span>
          </div>

          <div class="res-actions">
            <button
              class="btn"
              type="button"
              data-zoom="${imageIndex}"
            >
              View full image
            </button>

            <a
              class="btn ghost"
              href="${esc(href)}"
              target="_blank"
              rel="noopener"
            >
              Open in new tab
            </a>
          </div>
        </div>

        <img
          class="img-preview"
          src="${esc(href)}"
          alt="${title}"
          loading="lazy"
          data-zoom="${imageIndex}"
        />
      </div>
    `;
  }

  /* External website resource */
  if (type === "link") {
    return `
      <div class="res-item">
        <div class="res-icon link">
          ${ICONS.link}
        </div>

        <div class="res-info">
          <h4>${title}</h4>
          <span>${label}</span>
        </div>

        <div class="res-actions">
          <a
            class="btn"
            href="${esc(href)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Link
          </a>
        </div>
      </div>
    `;
  }

  /* PDF, presentation, document and other file resources */
  const primaryLabel = type === "pdf" ? "Open PDF" : "Open";

  return `
    <div class="res-item" data-check="${esc(href)}">
      <div class="res-icon ${type}">
        ${ICONS[type]}
      </div>

      <div class="res-info">
        <h4>${title}</h4>
        <span>${label}</span>
        <span class="res-note" hidden></span>
      </div>

      <div class="res-actions">
        <a
          class="btn"
          href="${esc(href)}"
          target="_blank"
          rel="noopener"
        >
          ${primaryLabel}
        </a>

        ${
          type !== "pdf"
            ? `<a class="btn ghost" href="${esc(href)}" download>Download</a>`
            : ""
        }
      </div>
    </div>
  `;
}

/* Check whether local files exist when the site runs over HTTP/HTTPS */
function checkLocalFiles(container) {
  if (location.protocol === "file:") {
    return;
  }

  container.querySelectorAll(".res-item[data-check]").forEach((element) => {
    const url = element.getAttribute("data-check");

    if (/^https?:\/\//i.test(url)) {
      return;
    }

    fetch(url, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          markBroken(element);
        }
      })
      .catch(() => {
        markBroken(element);
      });
  });
}

/* Display a clear message when a resource file cannot be found */
function markBroken(element) {
  element.classList.add("broken");

  const note = element.querySelector(".res-note");

  if (note) {
    note.hidden = false;
    note.textContent =
      "File not found. Check the file name and that it is inside the assignments folder.";
  }

  element.querySelectorAll(".res-actions a").forEach((link) => {
    link.removeAttribute("href");
    link.style.opacity = "0.45";
    link.style.pointerEvents = "none";
  });

  const image = element.querySelector(".img-preview");

  if (image) {
    image.remove();
  }
}

let currentImages = [];

/* Open an assignment's resource details */
function showDetail(id) {
  const assignment = assignments.find((item) => item.id === id);

  if (!assignment) {
    return showList();
  }

  $("detailNumber").textContent =
    `Assignment ${assignment.id} of ${assignments.length}`;

  $("detailTitle").textContent = assignment.title;
  $("detailDesc").textContent = assignment.description;

  const resourceCount = assignment.resources.length;

  $("detailCount").textContent = resourceCount
    ? `${resourceCount} ${
        resourceCount === 1 ? "resource" : "resources"
      }`
    : "No resources added yet";

  currentImages = assignment.resources.filter(
    (resource) => resource.type === "image"
  );

  const resourceBox = $("resources");

  if (!resourceCount) {
    resourceBox.innerHTML = `
      <div class="missing">
        <strong>No resources have been added to this assignment yet.</strong>

        Add your files to
        <code>assignments/assignment-${String(assignment.id).padStart(2, "0")}/</code>
        and list them in the <code>assignments</code> array in
        <code>script.js</code>.
      </div>
    `;
  } else {
    let imageIndex = -1;

    resourceBox.innerHTML = assignment.resources
      .map((resource) => {
        const index =
          resource.type === "image" ? ++imageIndex : -1;

        return resourceHTML(resource, index);
      })
      .join("");

    checkLocalFiles(resourceBox);

    /* Handle images that fail to load */
    resourceBox.querySelectorAll(".img-preview").forEach((image) => {
      image.addEventListener("error", () => {
        markBroken(image.closest(".res-item"));
      });
    });
  }

  listView.hidden = true;
  detailView.hidden = false;

  window.scrollTo({ top: 0 });
}

/* Return to the assignment list */
function showList() {
  detailView.hidden = true;
  listView.hidden = false;
}

/* ============================ IMAGE LIGHTBOX ======================== */

/* Display an image in full view */
function openLightbox(index) {
  const resource = currentImages[index];

  if (!resource) {
    return;
  }

  $("lightboxImg").src = hrefOf(resource);
  $("lightboxImg").alt = resource.title || "";
  $("lightboxCaption").textContent = resource.title || "";
  $("lightbox").hidden = false;
}

/* Close the full image view */
function closeLightbox() {
  $("lightbox").hidden = true;
  $("lightboxImg").src = "";
}

/* =============================== ROUTING ============================ */

/* Support browser navigation using URL hashes */
function route() {
  const match = location.hash.match(/^#\/assignment\/(\d+)$/);

  if (match) {
    showDetail(parseInt(match[1], 10));
  } else {
    showList();
  }
}

/* ================================ EVENTS ============================= */

/* Open an assignment when its card is clicked */
grid.addEventListener("click", (event) => {
  const card = event.target.closest(".card");

  if (card) {
    location.hash = `#/assignment/${card.dataset.id}`;
  }
});

/* Support keyboard navigation for assignment cards */
grid.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest(".card");

    if (card) {
      event.preventDefault();
      location.hash = `#/assignment/${card.dataset.id}`;
    }
  }
});

/* Back button */
$("backBtn").addEventListener("click", () => {
  location.hash = "";
  showList();
});

/* Assignment search */
searchInput.addEventListener("input", (event) => {
  renderCards(event.target.value);
});

/* Open images using the lightbox */
$("resources").addEventListener("click", (event) => {
  const zoomButton = event.target.closest("[data-zoom]");

  if (zoomButton) {
    openLightbox(parseInt(zoomButton.dataset.zoom, 10));
  }
});

/* Close the lightbox when the background is clicked */
$("lightbox").addEventListener("click", (event) => {
  if (event.target.id !== "lightboxImg") {
    closeLightbox();
  }
});

/* Close the lightbox with the Escape key */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

/* Update the displayed view when the URL hash changes */
window.addEventListener("hashchange", route);

/* ================================ START ============================== */

renderCards();
route();