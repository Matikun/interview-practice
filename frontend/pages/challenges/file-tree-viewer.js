import { useState } from "react";

const testData = {
  id: 1,
  name: "Root",
  children: [
    {
      id: 2,
      name: "Folder 1",
      children: [
        {
          id: 5,
          name: "File 1",
        },
        {
          id: 6,
          name: "File 2",
        },
      ],
    },
    {
      id: 3,
      name: "Folder 2",
      children: [
        {
          id: 7,
          name: "Subfolder",
          children: [
            {
              id: 8,
              name: "File 3",
            },
            {
              id: 9,
              name: "File 4",
            },
          ],
        },
        {
          id: 10,
          name: "File 5",
        },
      ],
    },
    {
      id: 4,
      name: "File 6",
    },
  ],
};
const dataArray = [
  testData,
  {
    id: 22,
    name: "File 5",
  },
];

const rootChecker = (data) => {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((node, index) => (
          <FileNode node={node} key={index + node.id + 100} />
        ))}
      </>
    );
  } else {
    return <FileNode node={data} />;
  }
};
const FileTree = ({ data }) => {
  return <div className="file-tree">{rootChecker(data)}</div>;
};

const FileNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const isFolder = node.children;
  return (
    <div>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        {isFolder && (
          <span className="folder-icon" onClick={handleToggle}>
            {isOpen ? "🔽" : "▶️"}📁
          </span>
        )}
        <div className={isFolder ? "folder" : "file"}>{node.name}</div>
      </div>

      <ul className="tree-node">
        {isOpen && isFolder && (
          <>
            {node.children.map((node) => (
              <li key={node.id}>
                <FileNode node={node} />
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default function FileTreeViewer() {
  return (
    <>
      <h1>File Tree Viewer</h1>
      <div>
        Build a file tree viewer.
        <br />
        <img src="https://i.ibb.co/ftvw6d1/Whats-App-Image-2023-10-12-at-18-30-38.jpg" />
        <br />
        <br />
        <ol>
          <li>It should allow arbitrary levels of depth</li>
          <li>You should be able to expand/collapse any part of the tree</li>
          <li>Basic aesthetics with pure CSS</li>
        </ol>
      </div>
      <FileTree data={dataArray} />
    </>
  );
}
