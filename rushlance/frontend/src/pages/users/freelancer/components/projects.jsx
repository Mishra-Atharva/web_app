import { useState } from "react";
import { FaCheckCircle, FaHourglassHalf, FaRegEye, FaTrash, FaEnvelope, FaTimes, FaFlag } from "react-icons/fa";

function FreelancerProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Landing Page for Startup",
      client: "Acme Corp",
      clientEmail: "contact@acmecorp.com",
      status: "Active",
      dueDate: "2025-06-01",
      budget: "$1,200",
      thumbnail: "https://placehold.co/80x80?text=Landing",
      description: "Design and build a modern landing page for product launch.",
      milestones: [
        { name: "Wireframes", complete: true },
        { name: "UI Design", complete: false },
        { name: "Development", complete: false }
      ]
    },
    {
      id: 2,
      title: "E-commerce Redesign",
      client: "ShopSmart",
      clientEmail: "hello@shopsmart.com",
      status: "Completed",
      dueDate: "2025-04-15",
      budget: "$3,000",
      thumbnail: "https://placehold.co/80x80?text=Ecom",
      description: "Full redesign of ShopSmart's online store.",
      milestones: [
        { name: "Research", complete: true },
        { name: "Design", complete: true },
        { name: "Deployment", complete: true }
      ]
    }
  ]);

  // Modal state
  const [viewProject, setViewProject] = useState(null);

  // Status badge color
  const statusBadge = (status) => {
    if (status === "Active")
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"><FaHourglassHalf />Active</span>;
    if (status === "Completed")
      return <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs"><FaCheckCircle />Completed</span>;
    return <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">{status}</span>;
  };

  // Action handlers
  const handleMarkComplete = (projectId) => {
    setProjects(projects.map(p =>
      p.id === projectId ? { ...p, status: "Completed" } : p
    ));
  };

  const handleDelete = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  const handleMessage = (clientEmail) => {
    window.location.href = `mailto:${clientEmail}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500">You have no projects yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="flex flex-col sm:flex-row sm:items-center bg-gray-50 border rounded-lg p-4 hover:shadow transition">
              <img
                src={project.thumbnail}
                alt="Project thumbnail"
                className="w-20 h-20 rounded object-cover mr-4 mb-4 sm:mb-0"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-semibold text-lg">{project.title}</div>
                    <div className="text-gray-500 text-sm">Client: {project.client}</div>
                  </div>
                  <div className="mt-2 sm:mt-0">{statusBadge(project.status)}</div>
                </div>
                <div className="text-gray-600 mt-2">{project.description}</div>
                <div className="text-xs text-gray-400 mt-1">Due: {project.dueDate}</div>
              </div>
              <div className="flex flex-col gap-2 ml-0 sm:ml-6 mt-4 sm:mt-0">
                <button
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
                  title="View Project"
                  onClick={() => setViewProject(project)}
                >
                  <FaRegEye /> View
                </button>
                {project.status === "Active" && (
                  <button
                    className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
                    title="Mark as Complete"
                    onClick={() => handleMarkComplete(project.id)}
                  >
                    <FaCheckCircle /> Mark Complete
                  </button>
                )}
                <button
                  className="flex items-center gap-1 bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition text-sm"
                  title="Message Client"
                  onClick={() => handleMessage(project.clientEmail)}
                >
                  <FaEnvelope /> Message
                </button>
                <button
                  className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
                  title="Delete Project"
                  onClick={() => handleDelete(project.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for viewing project details */}
      {viewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setViewProject(null)}
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={viewProject.thumbnail}
                alt="Project thumbnail"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <div className="font-bold text-xl">{viewProject.title}</div>
                <div className="text-gray-500 text-sm">Client: {viewProject.client}</div>
                <div className="mt-1">{statusBadge(viewProject.status)}</div>
              </div>
            </div>
            <div className="mb-2 text-gray-700">{viewProject.description}</div>
            <div className="text-xs text-gray-400 mb-2">Due: {viewProject.dueDate}</div>
            <div className="mb-2 text-gray-700"><span className="font-semibold">Budget:</span> {viewProject.budget}</div>
            <div className="mb-2">
              <span className="font-semibold">Client Email:</span>{" "}
              <a
                href={`mailto:${viewProject.clientEmail}`}
                className="text-blue-600 hover:underline"
              >
                {viewProject.clientEmail}
              </a>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Milestones:</span>
              <ul className="ml-4 mt-1 list-disc">
                {viewProject.milestones.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {m.complete ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaFlag className="text-gray-400" />
                    )}
                    <span className={m.complete ? "text-green-700" : "text-gray-600"}>
                      {m.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="flex items-center gap-1 bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition text-sm"
                onClick={() => handleMessage(viewProject.clientEmail)}
              >
                <FaEnvelope /> Message Client
              </button>
              {viewProject.status === "Active" && (
                <button
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
                  onClick={() => {
                    handleMarkComplete(viewProject.id);
                    setViewProject({ ...viewProject, status: "Completed" });
                  }}
                >
                  <FaCheckCircle /> Mark Complete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreelancerProjects;
