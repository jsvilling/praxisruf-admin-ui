import * as React from 'react';
import {
    ArrayField,
    ArrayInput,
    ChipField,
    Create,
    Datagrid,
    Edit,
    List,
    ReferenceField,
    ReferenceInput,
    ReferenceArrayField,
    SelectInput,
    SimpleForm,
    SimpleFormIterator,
    SingleFieldList,
    TextField,
    TextInput,
    AutocompleteInput,
    FormDataConsumer,
    FunctionField
} from "react-admin";
import {RULE_TYPES} from "../constants";

export const ConfigurationList = props => (
    <List {...props} sort={{field: "name", order: "DESC"}}>
        <Datagrid rowClick="edit">
            <ReferenceField source="clientId" reference="clients"><TextField source="name"/></ReferenceField>
            <TextField source="name"/>

            <ArrayField label="Rule Parameters" source="ruleParameters">
                <Datagrid>
                    <TextField label="Rule Type" source="ruleType"></TextField>
                    <FunctionField label="Value" render={({ruleType, _}) =>
                        ruleType === "SENDER"
                        && <ReferenceField source="value" reference="clients"><TextField source="name"/></ReferenceField>
                        || <ReferenceField source="value" reference="notificationtypes"><TextField source="displayText"/></ReferenceField>
                    }>
                    </FunctionField>
                </Datagrid>
            </ArrayField>


            <ReferenceArrayField label="Notification Types" source="notificationTypes" reference="notificationtypes">
                <SingleFieldList>
                    <ChipField source="title"/>
                </SingleFieldList>
            </ReferenceArrayField>

            <ReferenceArrayField label="Call Types" source="callTypes" reference="calltypes">
                <SingleFieldList>
                    <ChipField source="displayText"/>
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
);

export const ConfigurationEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="clientId" reference="clients"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="name"/>
            <ArrayInput source="ruleParameters"><SimpleFormIterator>
                <AutocompleteInput label="Rule Type" source="ruleType" choices={RULE_TYPES}/>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "SENDER" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')}
                                            reference="clients" {...rest}><SelectInput
                                optionText="name"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "NOTIFICATION_TYPE" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')}
                                            reference="notificationtypes" {...rest}><SelectInput
                                optionText="title"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
            </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="notificationTypes">
                <SimpleFormIterator>
                    <ReferenceInput reference="notificationtypes"><SelectInput optionText="title"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="callTypes">
                <SimpleFormIterator>
                    <ReferenceInput reference="calltypes"><SelectInput optionText="displayText"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const ConfigurationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="clientId" reference="clients"><SelectInput optionText="name"/></ReferenceInput>
            <TextInput source="name"/>
            <ArrayInput source="ruleParameters"><SimpleFormIterator>
                <AutocompleteInput label="Rule Type" source="ruleType" choices={RULE_TYPES}/>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "SENDER" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')}
                                            reference="clients" {...rest}><SelectInput
                                optionText="name"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
                <FormDataConsumer>
                    {({
                          formData,
                          scopedFormData,
                          getSource,
                          ...rest
                      }) =>
                        scopedFormData && scopedFormData.ruleType === "NOTIFICATION_TYPE" &&
                        (
                            <ReferenceInput label="Value" source={getSource('value')}
                                            reference="notificationtypes" {...rest}><SelectInput
                                optionText="title"/></ReferenceInput>
                        )
                    }
                </FormDataConsumer>
            </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="notificationTypes">
                <SimpleFormIterator>
                    <ReferenceInput reference="notificationtypes"><SelectInput optionText="title"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="callTypes">
                <SimpleFormIterator>
                    <ReferenceInput reference="calltypes"><SelectInput optionText="displayText"/></ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
