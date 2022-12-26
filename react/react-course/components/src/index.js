import React from "react";
import ReactDOM from "react-dom/client";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = function () {
    return (
        <div className="ui container comments">
            {/* <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                Are you sure you want to do this?
                </div>  
            </ApprovalCard> */}
            
            <ApprovalCard>
            <CommentDetail 
              author='Sam' 
              timeAgo='Today at 4:45PM' 
              content='Nice Blog Posts!'
              avatar={faker.image.fashion()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
              author='Jane' 
              timeAgo='Today at 6:50AM' 
              content='Looking awesome!'
              avatar={faker.image.people()} 
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
              author='Alex' 
              timeAgo='Today at 1:25PM' 
              content='Supub!' 
              avatar={faker.image.nature()}
            />
            </ApprovalCard>

        </div>

    )
}
root.render(<App />);