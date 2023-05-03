import Layout from "@/components/Layout";
import NotAllowed from "@/components/NotAllowed";
import { useAppContext } from "@/contexts/app";
import useMetaMask from "@/hooks/useMetaMask";
import { UserType } from "@/types";
import { Box, Button, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";

function AccreditationLaunch() {
  const { userTypes, showNotification } = useAppContext();
  const router = useRouter();
  const metaMask = useMetaMask();

  const [name, setName] = useState("");
  const [nature, setNature] = useState("");
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState<Dayjs | null>(null);

  if (!userTypes.includes(UserType.ISSUER)) {
    return (
      <Layout title="Launch Accreditation">
        <NotAllowed />
      </Layout>
    );
  }

  const launchAccreditation = async () => {
    try {
      let duration = -1;
      if (expiryDate) {
        duration = expiryDate.diff(new Date(), "second");
      }

      await metaMask.accreditationEndpoint.launchAccreditation(
        name,
        new Date(),
        duration,
        nature,
        description
      );
      // TODO: redirect to accreditation page of that new accreditation after successfully create
    } catch (error: any) {
      console.error(error);
      showNotification({
        severity: "error",
        title: "Failed to Launch Accreditation",
        message: error.message,
      });
    }
  };

  return (
    <Layout title="Launch Accreditation">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField required label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField
          required
          label="Nature"
          value={nature}
          onChange={(e) => setNature(e.target.value)}
          placeholder='e.g. "Exam", "Award", "Diploma", etc.'
        />
        <TextField
          required
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
        />
        <DateTimePicker
          label="Expiry Date"
          value={expiryDate}
          onChange={(date) => setExpiryDate(date)}
        />
        <Button
          onClick={launchAccreditation}
          variant="contained"
          sx={{ mt: 1, alignSelf: "flex-start" }}
        >
          Launch Accreditation
        </Button>
      </Box>
    </Layout>
  );
}

export default AccreditationLaunch;
