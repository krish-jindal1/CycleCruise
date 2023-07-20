import { Col , Row , Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addCycle } from '../redux/actions/cyclesActions'
function AddCycle() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)

    function onFinish(values){

         values.bookedTimeSlots=[]

         dispatch(addCycle(values))
         console.log(values)
    }

    return (
        <DefaultLayout>
               {loading && (<Spinner />)}
               <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                           <h3>Add New Cycle</h3>
                           <hr />
                           <Form.Item name='name' label='Cycle name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerDay' label='Rent per day' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='brake' label='Brake' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='brand' label='Brand' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='gear' label='No. of gears' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='condition' label='Condition' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>

                           <div className='text-right'>
                           <button className='btn1'>ADD CYCLE</button>
                           </div>

                       </Form>
                   </Col>
               </Row>

        </DefaultLayout>
    )
}

export default AddCycle
