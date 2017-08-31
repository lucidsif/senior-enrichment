import React from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row, Thumbnail, Button} from 'react-bootstrap';
import UpdateFormModal from './UpdateFormModal';
// can get student info from state
// can i get student info from student thumbnail?
export function StudentPortrait(props) {
    const id = +props.match.params.id;
    const student = props.students.filter((student) => student.id === id)[0];
    let counter = 0;
    console.log('inside studportrait', student);
    return (
        <Grid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <h3>{student.name}</h3>
                    <Thumbnail src='https://plnami.blob.core.windows.net/media/2012/05/dumb0516_image1.jpg'
                               alt="242x200">
                        <p>
                            Email: {student.email}
                        </p>
                        <p>
                            Campus: {student.campus.name}
                        </p>
                            <p>
                                {/*<Button onClick={handleClick} className="btn-margin" bsStyle="danger">Delete</Button>*/}
                                {/*<Button onClick={handleRoute}>Visit</Button>*/}
                            </p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
)
}

function mapStateToProps(state) {
    return {
    students: state.students
}
}

const EnhancedStudentPortrait =  connect(mapStateToProps, null)(StudentPortrait);

export default EnhancedStudentPortrait;

