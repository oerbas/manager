import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from "./common";

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Orhan"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-55-55"
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;