import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Select, Button, Card, CardHeader, CardBody } from '@shadcn/ui';

const FormField = ({ label, id, children }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    {children}
  </div>
);

const EntryForm = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <h1 className="text-3xl font-bold mb-8">SHIFT LOG ENTRY FORM</h1>
      
      {/* Existing Fields */}
      <Card className="w-[28rem] mb-12">
        <CardHeader>Select Details</CardHeader>
        <CardBody>
          <FormField label="Select District" id="district">
            <Select id="district" options={[{ value: 'district1', label: 'District 1' }, { value: 'district2', label: 'District 2' }]} />
          </FormField>
          <FormField label="Select Seam" id="seam">
            <Select id="seam" options={[{ value: 'seam1', label: 'Seam A' }, { value: 'seam2', label: 'Seam B' }]} />
          </FormField>
          <FormField label="Enter Number of P/R Loader" id="prLoader">
            <Input type="number" id="prLoader" />
          </FormField>
          <FormField label="Select Machine" id="machine">
            <Select id="machine" options={[{ value: 'SDL', label: 'SDL' }, { value: 'LHD', label: 'LHD' }]} />
          </FormField>
          <FormField label="Machine Name" id="machineName">
            <Input type="text" id="machineName" />
          </FormField>
        </CardBody>
      </Card>

      {/* Hours Section */}
      <Card className="w-[28rem] mb-12">
        <CardHeader>HOURS</CardHeader>
        <CardBody>
          <FormField label="WORKING (IN HOURS)" id="workingHours">
            <Input type="number" id="workingHours" />
          </FormField>
          <FormField label="BREAKDOWN (IN HOURS)" id="breakdownHours">
            <Input type="number" id="breakdownHours" />
          </FormField>
          <FormField label="IDLE (IN HOURS)" id="idleHours">
            <Input type="number" id="idleHours" />
          </FormField>
        </CardBody>
      </Card>

      {/* Short Firing Details */}
      <Card className="w-[28rem] mb-12">
        <CardHeader>SHORT FIRING DETAILS</CardHeader>
        <CardBody>
          <FormField label="Select Face" id="selectFace">
            <Select id="selectFace" options={[{ value: 'face1', label: 'Face 1' }, { value: 'face2', label: 'Face 2' }]} />
          </FormField>
          <FormField label="NUMBER OF HOLE BLASTED" id="holeBlasted">
            <Input type="number" id="holeBlasted" />
          </FormField>
          <FormField label="EXPLOSIVE BLASTED (IN KG)" id="explosiveBlasted">
            <Input type="number" id="explosiveBlasted" />
          </FormField>
        </CardBody>
      </Card>

      {/* Additional Details */}
      <Card className="w-[28rem] mb-12">
        <CardHeader>ADDITIONAL DETAILS</CardHeader>
        <CardBody>
          <FormField label="TUB/MINE CAR FACTOR (IN TON)" id="tubFactor">
            <Input type="number" id="tubFactor" />
          </FormField>
          <FormField label="TOTAL PRODUCTION (IN TON)" id="totalProduction">
            <Input type="number" id="totalProduction" />
          </FormField>
          <FormField label="NUMBER OF ROOF BOLTING" id="roofBolting">
            <Input type="number" id="roofBolting" />
          </FormField>
        </CardBody>
      </Card>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link to="/Logentries">
          <Button variant="outline">Submit</Button>
        </Link>
        <Button variant="outline">Add More Entries</Button>
      </div>
    </div>
  );
};

export default EntryForm;
