export const POST_SCRIPTS = [
  {
    title: '响应码为 200',
    text: `pm.test("Status code is 200", function () {\n\tpm.response.to.have.status(200);\n});`,
  },
  {
    title: '正文匹配含有字符串string',
    text: `pm.test("Body matches string", function () {\n\tpm.expect(pm.response.text()).to.include("string_you_want_to_search");\n});`,
  },
  {
    title: 'Response Body JSON 值检查',
    text: `pm.test("Your test name", function () {\n\tvar jsonData = pm.response.json();\n\tpm.expect(jsonData.value).to.eql(100);\n});`,
  },
  {
    title: 'Response Body 字符串检查',
    text: `pm.test("Body is correct", function () {\n\tpm.response.to.have.body("response_body_string");\n});`,
  },
  {
    title: '修改Response Body',
    text: `pm.response.setBody({});`,
  },
  {
    title: 'Header 包含 Content-Type',
    text: `pm.test("Content-Type is present", function () {\n\tpm.response.to.have.header("Content-Type");\n});`,
  },
  {
    title: '响应时间小于 200ms',
    text: `pm.test("Response time is less than 200ms", function () {\n\tpm.expect(pm.response.responseTime).to.be.below(200);\n});`,
  },
  {
    title: 'Post请求响应状态码成功',
    text: `pm.test("Successful POST request", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([201,202]);\n});`,
  },
  {
    title: '使用 Tiny Validator 检查 JSON 数据',
    text: `var schema = {\n\t"items": {\n\t\t"type": "boolean"\n\t}\n};\n\nvar data1 = [true, false];\n\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function () {\n\tpm.expect(tv4.validate(data1, schema)).to.be.true;\n\tpm.expect(tv4.validate(data2, schema)).to.be.true;\n});`,
  },
];