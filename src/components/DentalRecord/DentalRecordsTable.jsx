import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col, Typography, Input, Tag } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { connect } from "react-redux";
import { getPATN } from "../../redux";

const { Search } = Input;

const { Title, Paragraph, Text } = Typography;

function DentalRecordsTable(props) {


   const [patients, setPatients] = useState();

   const patns = props.patients
   const myProp = props.getPATN

   useEffect(() => {
      const fetchData = async () => {

         await myProp();
         setPatients(patns);

         const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/patient/`,

         );
         setPatients(res.data);
      }
      fetchData();
   }, [myProp]);



   const updateInput = async (value) => {
      console.log(value);

      const filtered = props.patients.filter(a => {
         return a.name.includes(value);
      });

      console.log(filtered);
      setPatients(filtered);
   }



   console.log(patients);




   const columns = [
      {
         title: <Text strong>Name</Text>,
         dataIndex: 'name',
         defaultSortOrder: 'ascend',
         sorter: (a, b) => a.name.toLowerCase().substring(0, 2) < b.name.toLowerCase().substring(0, 2),
         render: (text, record) => {
            return record.name;
         }
      },
      {
         title: <Text strong>Last Visit</Text>,
         width: 200,
         dataIndex: 'last_visit',
         defaultSortOrder: 'ascend',
         sorter: (a, b) => moment(a.last_visit).format('x') - moment(b.last_visit).format('x'),
         render: (text, record) => {
            const display = !record.last_visit ? (<Tag color="geekblue">New Record</Tag>) : moment(record.last_visit).format('MMMM, DD YYYY');
            return display;
         }
      },
      {
         title: <Text strong>Address</Text>,
         dataIndex: 'address',
         render: (text, record) => {
            return record.address;
         }
      },
      {
         title: <Text strong>Code</Text>,
         dataIndex: 'code',
         render: (text, record) => {
            return <Paragraph copyable={true} >{record.id}</Paragraph>;
         }
      },
      {
         title: <Text strong>Actions</Text>,
         dataIndex: 'actions',
         render: (text, record) => {
            return (
               <Link to={`/dentalrecords/${record.id}`}>
                  <Button type="primary">View Dental Record</Button>
               </Link>
            );
         }
      }
   ];


   return (
      <>
         <Title level={4} style={{ margin: 0 }}>DENTAL RECORDS</Title>

         <Row align="middle" gutter={8}>
            <Col span={24}>
               <Search
                  style={{ width: '100%', margin: 10 }}
                  placeholder="search dental record by patient name"
                  enterButton
                  onChange={(e) => updateInput(e.target.value)}

               />
            </Col>
         </Row>

         <Table

            dataSource={patients}

            size="medium"
            columns={columns}
            scroll={{ x: 300 }}
            rowKey={(record) => record.id}

            pagination={
               {
                  position: 'both',
                  defaultCurrent: 1,
                  pageSize: 10,

               }
            }

         />
      </>
   );


}


const mapStateToProps = state => {
   return {

      patients: state.patient.patients,
      // loading: state.Abointment.loading
   };
};


export default connect(
   mapStateToProps,
   { getPATN }
)(DentalRecordsTable);


