import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
export default function Create() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomorhp, setNomorhp] = useState("");
  const postData = () => {
    axios
      .post("https://63a13550e3113e5a5c4f6c8c.mockapi.io/api/v1/crud/user", {
        nama,
        alamat,
        nomorhp,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <Form style={{ margin: 20 }}>
      <FormGroup>
        <Label for="nama">Nama</Label>
        <Input
          id="nama"
          name="nama"
          placeholder="Nama"
          type="name"
          onChange={(e) => setNama(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="alamat">Alamat</Label>
        <Input
          id="alamat"
          name="alamat"
          placeholder="Alamat"
          type="address"
          onChange={(e) => setAlamat(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="nomorhp">Nomor HP</Label>
        <Input
          id="nomorhp"
          name="nomorhp"
          placeholder="Nomor HP"
          type="number"
          onChange={(e) => setNomorhp(e.target.value)}
        />
      </FormGroup>

      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}
