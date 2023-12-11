import React, { Component } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space } from "antd";
import axios from "axios";
import { setStateAsync } from "../helpers/utils";

export default class FormUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isDisabled: false,
    };

    this.onFinish = this.onFinish.bind(this);
    this.postData = this.postData.bind(this);
  }

  async onFinish(values) {
    console.log("Received values of form here:", values);
    await setStateAsync(this, { data: values });
    this.postData();
  }

  postData() {
    console.log("data is here ", this.state.data.skills);
    axios
      .post("http://localhost:5000/formUpload", this.state.data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="">
        Enter the Requirements here
        <br />
        <br />
        <Form
          name="dynamic_form_nest_item"
          onFinish={this.onFinish}
          style={{
            maxWidth: 2000,
          }}
          autoComplete="off"
        >
          <Form.List name="skills">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key}>
                    <Form.Item
                      {...restField}
                      name={name}
                      rules={[
                        {
                          required: true,
                          message: "Missing Skill",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter More Skills Here"
                        style={{ width: 200 }}
                      />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                    style={{ width: 200, marginTop: 10 }}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item
            name={["total_exp"]}
            label="Experience"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber min={0} max={99} />
          </Form.Item>
          <Form.Item
            name={["degree"]}
            label="Qualification"
            style={{
              maxWidth: 350,
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-theme-dark hover:bg-theme-light"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
