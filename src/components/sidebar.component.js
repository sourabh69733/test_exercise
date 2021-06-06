import React from 'react';

export default function SideBarComponent() {
  return (
    <div>
    <h3>Page 1 </h3>
      <aside class="bd-sidebar">
        <nav
          class="collapse bd-links"
          id="bd-docs-nav"
          aria-label="Docs navigation"
        >
          <ul class="list-unstyled mb-0 py-3 pt-md-1">
            <li class="mb-1">
              <button
                class="btn d-inline-flex align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#getting-started-collapse"
                aria-expanded="false"
              >
                Getting started
              </button>
              <div class="collapse" id="getting-started-collapse">
                <ul class="list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="/docs/5.0/getting-started/introduction/"
                      class="d-inline-flex align-items-center rounded"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="/docs/5.0/getting-started/download/"
                      class="d-inline-flex align-items-center rounded"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};