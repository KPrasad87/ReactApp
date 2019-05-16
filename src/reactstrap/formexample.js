import React from 'react'
import {Form,FormGroup,Label,Input,FormText,Button,Row,Col,FormFeedback} from 'reactstrap'

class formexample extends React.Component
{
    render()
    {
        return(
            <div>form example
            <Form>
                <FormGroup>
                    <Label for ="email">Email</Label>
                    <Input type="email" name="emailname" placeholder="enter email" id="emailid"/>
                </FormGroup>
                <FormGroup>
                    <Label for ="password">Password</Label>
                    <Input type="password" name="passwordname" placeholder="enter password" id="passwordid"/>
                </FormGroup>
                <FormGroup>
                    <Label for ="textarea">textarea</Label>
                    <Input type="textarea" name="textareaname" placeholder="enter textarea" id="textareaid"/>
                </FormGroup>
                <FormGroup>
                    <Label for ="select">select one list</Label>
                    <Input type="select" name="selectname"  id="selectid">
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>four</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for ="select">select one list</Label>
                    <Input type="select" name="selectname"  id="selectid" multiple>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>four</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="file example">File</Label>
                <Input type="file"> Hello choose new file  </Input>
                <FormText color="primary">
                Please choose the file
                </FormText>
                </FormGroup>

                    <legend>radio buttons</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"/>{' '}
                            radio1
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"/>{' '}
                            radio2
                        </Label>
                    </FormGroup>
                    
             <FormGroup check>
             <Label>
            <Input type="checkbox" name="check1">Hello check box</Input>
            Hello checkbox
            </Label>
             </FormGroup>
             <FormGroup check>
             <Label>
            <Input type="checkbox" name="check1">Hello check box 1</Input>
            Hello checkbox 2
            </Label>
             </FormGroup>


<Button>Submit</Button>
                </Form>

            <Form >
                <Row form>
                    <Col md={10}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
                        <Label>Hello form</Label>
                        <Input type="password"/>
                    </FormGroup>
                    </Col>
                    <Col md={10}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label>Hello form</Label>
                        <Input type="text"/>
                    </FormGroup>
                    </Col>
                </Row>
            </Form>

            <Form inline>
            <FormGroup>
                <Label>Hello inline</Label>
                <Input type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label>Hello form inlie 2</Label>
                    <Input type="text"/>
                    </FormGroup>
                    <Button>submit</Button></Form>

                    <Form>
                        <FormGroup>
                            <Label>Hello validations</Label>
                            <Input type="text"/>
                            <FormText>Hello no validations</FormText>
                            <FormFeedback>you should enter text</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Hello validations</Label>
                            <Input type="text" invalid/>
                            <FormText>Hello no validations</FormText>
                            <FormFeedback>you should enter text</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Hello validations</Label>
                            <Input type="text" valid/>
                            <FormText>Hello no validations</FormText>
                            <FormFeedback>you should enter text</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Hello validations</Label>
                            <Input type="text" invalid/>
                            <FormText>Hello no validations</FormText>
                            <FormFeedback tooltip >you should enter  invalid tooltip</FormFeedback>
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup row >
                            <Input type="number"/>
                            <Input type="url"/>
                            <Input type="datatime"/>
                            <Input type="date"/>
                            <Input type="time"/>
                            <Input type="color"/>
                        </FormGroup>
                    </Form>

                    <Form>
                        <FormGroup check inline>
                        <Label size="lg" >
                        <Input type="checkbox" bsSize="lg"/>Hello checkbox1
                        </Label>
                        </FormGroup>
                        <FormGroup check inline>
                        <Label >
                        <Input type="checkbox" bsSize="sm"/>Hello checkbox1
                        </Label>
                        </FormGroup>
                    </Form>
            </div>

        );
    }
}
export default formexample;