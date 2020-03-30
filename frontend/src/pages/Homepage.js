import React from "react";
import ReactCalendar from "../components/ReactCalendar";
import JumboCard from "../components/JumboCard";
import JumboCard2 from "../components/JumboCard2";
import ContactUs2 from '../components/ContactUs2';
import AgileLogos from '../components/AgileLogos';
import AboutUsPage from '../components/AboutUsPage';
import CourseInfo from '../components/CourseInfo';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";

import JumbotronPage from "../components/JumbotronPage";
import GetInspiredPage from "../components/GetInspiredPage";
export default class UpcomingCoursesPage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="ctr header">
					<h1 className="text-center">Our Services</h1>
				</div>
				<div>
				<JumbotronPage />
			    </div>
				

                <div>
				<AboutUsPage />
			    </div>

				<div className="ctr header">
					<h1 className="text-center">Our Partners</h1>
				</div>
                <div>
				<AgileLogos />
                <br/>
			    </div>

				<div className="ctr header">
					<h1 className="text-center">Get Inspired</h1>
				</div>
                <div>
				<GetInspiredPage />
                <br/>
			    </div>
                
                <div>
				<ContactUs2 />
			    </div>
			</div>
		);
	}
}
