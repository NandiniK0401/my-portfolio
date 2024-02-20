import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, sourceCodeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={url} target="_blank" rel="noopener noreferrer"><i class="ri-links-line"></i>Link</a>
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" id="sourceCode">Source Code</a>
        </div>
      </div>
    </Col>
  )
}