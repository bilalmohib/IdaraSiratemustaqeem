import BooksCollection from "@/app/Components/Home/BooksCollection";
import Navbar from "@/app/Components/Navbar";
import Slider from "@/app/Components/Slider";
import TopNav from "@/app/Components/TopNav";
import Footer from "@/app/Components/Footer";

import {
  Box,
  Typography,
} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import styles from "../styles/Pages/Home.module.css";

const Home = () => {
  return (
    <Box component={"section"}>
      <Box component={"div"}>
        <TopNav />
      </Box>
      <Navbar />
      <Box component={"div"}
      sx={{ position: 'relative',
      marginTop: '90px' 
    }}
      >
        <Slider />
      </Box>
      <Box
        component={"div"}
        className="container"
      >
        <Grid2 container spacing={2}>
          <Grid2 xs={6} md={6} sm={12}>
            <Box>
              <Typography
                variant={"h3"}
                component={"h3"}
                className={styles.heading}
              >
                Welcome to Idara Sirat-e-Mustaqeem
              </Typography>
              <Typography
                variant={"h5"}
                component={"h5"}
                className={styles.subHeading}
              >
                Islamic center for excellence and learning in Islamic studies
              </Typography>
              <Typography
                variant={"body1"}
                component={"p"}
                className={styles.paragraph}
              >
                Idara Sirat-e-Mustaqeem is a non-profit organization that aims to provide a platform for the youth of Pakistan to learn and practice the teachings of Islam. We are a group of young people who are passionate about Islam and want to share our knowledge with others. We are a group of young people who are passionate about Islam and want to share Islamic knowledge with others.
              </Typography>
              <Typography
                variant={"body1"}
                component={"p"}
                sx={{ mt: 2 }}
                className={styles.paragraph}
              >
                “Feham-e-Deen Cources” ‘The Understanding of Religion’ also organized under the kind control of Dr. Muhammad Ashraf Asif Jalali especially in the holy month of Ramzan. The main event is held in Gujranwala where Dr. Muhammad Ashraf Asif Jalali himself delivers the lectures which are now available in audio cassettes, CDs, DVDs and printed books. At times more than 6000 topics are available which itself is a record. The Publication House of Tehreek-e-Sirat-e-Mustaqeem, Data Darbar Market, Lahore has played a vital role in the wide spread of the message of Dr. Muhammad Ashraf Asif Jalali. The books are available in Urdu, English, Arabic and Persian languages.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6} md={6} sm={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhIVFhIVFhYZGBYYFxYaGBgWFRgeHRsVGBcYHiggGB8lGxcXIjEiMSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy4lHyUtLS0tLS0tLS0vLSstLS0vLS0tLy0wLS0tKzUtLS0tLS0tLS0tNS81LS0wLTUtLS8vK//AABEIAN0A5AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADoQAAIBBAEDAwIDBwQCAQUBAAECEQADEiExBAUiE0FRMmEGcYEUFSNCUpGhM2LB8IKx0VNysuHxJP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMFBP/EACsRAAICAQQCAgAFBQEAAAAAAAABAhEhAxIxQSJRE2EjcZGhwQUVMlLhBP/aAAwDAQACEQMRAD8A+40pSgFKUoBSlKAUpSgFKUoDSa4dVfVFLnhQSY2YUSYHvoV4v8b966vpOpR7KZWmtY7V2UPlJ+kiDGP6VT9k7/1PVdf0zXbYXAXR4rcUENaYwciRyo3XN6qUtvZ6Gn/TtSWn8trbTfOcdHsug/FNq8vTm2CR1LMo48GRCzBt8+Ma+Zrbp+93ixVukcQ1tSFuWmK5swlwG8QFCt/5V836rud9bw6ux0rWraXWIQqSBda16bTiB/KvA9/euXb/AMRdVZu3LyWVyuznKXNyxbZBkxkQN6Bj2Fcvm9n3f2m03GuOG8p3xh+qPq/Vd4VOps9LiS14XCG1iBbEn8zMa/OpV7rkW6tkk5urMogwQkTuIHI96+ffhiw5btb4t4jrcpnS5kCZ37gb+RXq+/8AX3LXU9IFdfSuO1t7f87FlMOPspG/zrqpNq/y/g8/W/8ANGM1CLt07/NN/wAJFj2XuQ6myt9VKh8oB5hWI3H5VYH4r450n4o67prf7LbtwEZ1BNpy4Jcn5g7PxVx+Fu+9X1PXWvXUqoW6QArqsFeIOjBXR52azHWTpdnfV/pWpBS1LW1W1nNco+nUpSux5QpSlAKUpQClKUApSlAKUpQGBWi3VOgQT+da3rgUSfcqP1YgD/JrzNjrumsFbnoort4s62lVzk1yLcABmOVqI9+d0MSnGPLPV0qu6/uK27fqSsZINkgeTAHgHYBJiPb25qL+8jcwZC1u2bpQl0guApMrkRiCREwZoR6kbrsu6VX9T1uFxUJAUpcYkzAwx2W4Agnn4qv6XuNxbJLEXHCM4cgqrDLxgAExvmJMaBmpYepFOj0NK8+e4Mv8XFiWBIDZKFT1VUSkSCVORJEj8tC/FUsZqXBmlKUNmjJNRe3dEtm2ttS7BZguzO2zO2bZ5qbShbdUahKziPis0oQ0xqg6b8L2E6n9r82uQcc3Zwk845SRon3gTqvQUIqNJ8mo6k43tdXh/kAtMa2pVMilKUApSlAKUpQClKUApSlAKUpQEXrOmW6hRpgxsEqQQZBDDYIIBmuC9rtDHw2uMNJy8WyEtMnezPMmZqeTVDe7jce6iAMkXHDAqBmFkgKW5BUCSP6h8GKlYWkpO6JlvtPTK5cWLQuGTOC5HeyDE8nf51Mv2FdSjqGUiCCJBB+Qa812xeoW7cvP093JgxVMrMDQPp5C58rrUS5OpqYl/qPTULYuK6lQc2tmZEE/6pJAJBMmYHvxV20dHoJYTX7Eu12ayn+nbRBrIKoBbHYDHkgHcf8AEzMvdOGKk8KQY+SNifyO/wAwKhdf1lxQqi2S7qwGILqtzWIZoAA2TJgeNc7T3Usi2oZ75DEeqwMSx27oAsD2A3AA+SJtOa0Ulisk5Gt3CRKsUYSJBxYbAP3HNdT1KZFMlyAyKyJC/wBRHsPvUTpk9C0iYy8AEIPqeNn9TJLH53VUej6hxgyBLjtlcvIRhjsemJObkLA2APf2irR0jpxbeaR6G5fVYkgZEAfcngCumVeaU34VbiMbjXJEbULbuiBKnFJtyd/VMf7Ri11V26i27lslmuQwwJRcHUshYaK45Qx5iN+92l+H7PSq4IkbB962mqrruquhxbRD5BSGxJUbOUt9KwAOeZ1NadG3UG6uaxb9Mz5L9YMSQPkb+Ij3rNGNjq7RdUrArNQyKVohkVx6y8URmCliBMAST+QGz+VAsncGtBcB49uftXnOo6u9dF701dgVVVtwismeQLnMqZiGgkcgaIMa9Gt63ZRPQus/qKXIayDqGLauAHIrB2JLExGq3tOvxYy1fo9RNJrzPXt1LXUuCzcFtELYFk/1ATpgjHKUkAbEn2qTYe67Pei4qG2fTDQo4G2tkZhpBO/aNTU2kek6u0XtYyFUNjuF/BLnpzbbbZEZqGOlAH1MIgiOWEE7NL1jqls3HQqeodlIACgKuQ8CTpiEkZe8DVKHxu6bR6Ck1UdffvWlVbNlrp4nJDEEfVm6kyJ3J4rnbudSrsfTyVgGjNYUgkFFmCWIxjhdNviZRFC1dr9S7rE1TdZ1t9LPqGzlczAxWT4ZfUcZbieAeRIG4zbsXmu2muY+K3CzKWAltLbxnygEksQOBESRVobMW2XVKwKzWTApSlAYqJ1PWImIYwXbEaJkzEa42almqgdoi4HFxiMmbBoIGWyEIgjyM7y9uIFVV2aik+R03dhc6h7Crq2DkfvCER9vP+49veZb6oFczoEwJg7LQPpn3qD0/wCHrNucRcAIKketeIIII93+Dz7Vvb7FaC4fxSvjo3rxjEgiJfx2Bx7a4qvb0bl8b4vr/pKv9aioz8hdEKJMzGIA2SW1+dB1i+E6D/1aI0IBB4OwIqH+40kS7lIgpICnyLKTiAZUsY38EyRNbDsqyxZnZTEIW8V4mIAJkqDsn9KYJUPZJbr0DMrEKFAMkgAg/H+P7ionT94VmC6hnZVYMrBgoENKzydR9qL2K2VxuF7p/qdtmCCNLC6xX29vzrtf7QjAxkrlVUOD5KEOS45SBDb437zTxL+Hwcf3wBbFwgMXBa3bVkzZByRmygkDZ3A+T7yR3O16fq5qLcE5EgCAYnf31XAdhsyCczoAg3LmLaiWQNiSffW66Hs1kvmbYLDiZKjcyqnxBmTMe5+aeIfx/Z3Xq0Ks/wDKsg6P8vOqjWO5Z37lhV1bAzaROTgFQF5Iid/atbfYrSqyg3cWDAg3rxHnM6LROzupHbe2W7Cwg2QMm/mcgfUx9zTBPBJ1f0ThWl24FEmuV/qAvGzVfevSdkTE8+3z+Vc3I4SlRP6W+G177ru5qmrN64LyBTcZDIK3ExkEH/cCPkce9VMQmm6ZL6fuCPnGQCEgsykAwJJWfqAmJ+Qait3lPX9IMpUIS0SSrbIBjXCt9/E/as/uW2QuLuoEzi8hwwAZWLTo4jiD99mt73aLQQABVRX9RudnZYsZ95MkzW/E+hfH9m/Xd1t20zJnaqFG2LOPFYGwTI/TdZ6fudtyQCIVikkgA3ASCiz9REf93HBOx2ymFwm4OZMAyWyJke50PyUCj/h+wTliwOTOYuXACzGSSAwB/wCKviK06rNkq33C2ylwwgCWH8yj/cvIP2iaWOuRkW4ZQNGnGLCRMMp+kwK4Xuy22KgSiAENbSFVwTMNqed6In3mh7KhJlnNsrHp5eM445T9c46+qPtO6mCVCuWb2O72WBIceI8p4Q68XbhW2NEzXZeuSSuQGMckbkAyP7j+9R7/AGS064EMFDZQty4m4iPFh4xHjxrisv2SyRGHsR9TTvkkzszBkyZAPsKeIfx9WbWutBLElQoYqNyxYGDPxvgf/wAHKz3Jma0MAouq7bbyAWIgKCpmR/MP1rS12NQyublxmH1ZYfxGBkM8KII/24iNGRU+z0iqSw5gAcaVeFHwJk/rTAexcZJQrNKVk5ilKUApSlAKUpQClKUApSlAKg9y6z0Qr+m7gsFItozsAQYOKiYyxE8CZMAE1OqL1fVBBJiYJA+w5J+w96A84e+vbtS7MzXfUwdbYZbZGKgMUGIUEsZbmI2dHHX9T1eY/ht6WSAGUOSiZcqu5LYrvQDEwIqR3DvyWbVu6gNxr5cKSGG0UkyCJUeJA42VEiZqw6u9N3CDpQZ1GyRHMzr4iozM3SPM9DfveV1Ld2LjkhXVkAGCli1u4Q6s1wMonQGwB/No131UuWmsXI6mYY2XUlNAi6HH8PETCtGQ4B4q6udxtBXfLxtti5A+k6mfsMhJ/P4roOoQoLgYYFcp/wBsTl+UGsnGyj6nrL2L2jaeWxVdZxlbEI5T6RIbJz4gnniteo6e/wDxSVdlS4ptWldUDIgJhcSIGwsMY8Tririx1auBPiWLYq2mIUkTiYIkCYjVR27mhZkQF2VsCBA84nCSRvEFvyH3E1GkLHdLgQx01714lEm2ubAb+l3CqPk/IAkmtOoHUs9sXCLbXbbW/VIbEF83x9HPGVRYk7JM7ErU+x1AV0DFQ53jOzH1YzBaPyqV1verABBZWMhVUQxd2WQqKssTB3rQM8Vo6RY/DTr6RtotwJadkyuOru7Ayzkqx5J94MzoVc1Qdm6+5cYlwVtlUxVlxOX8x2cgOOYPPxu+qJlTszSlKpRSlKAUpSgFKUoBSlKAUpSgFaZiYnfx9vmvPnul17ihFdSoctaKhWuMobxU3I1kFGY8TPMVy/DXT3luXnvWrqm4zMCxskKpYsLfhcLGMiBr53uKu3FsHp5rNeet9Z1Bt3QOmvpcObKS9hgDHiqk3TsxrQWT7DdSUu3yttJwuEMzlwGMIwGIwIUFgw3sD4NGgXFYmvLdr7xfv2L6qv8A/pt22x8leXbPAFlAtkgqAQH0QQSOTZN1T2LdrK3cdm02INw5kTBIEKC2p0o+wijjWAWruAJJgfNUvXdq/aYum5cQgMFCkQUaNOCJIkBtEE8TBIqELN63as2rlprpthbf1WzkxibwLFQoVQRxl5GBqWlWus6rMobMEAEbm2cik4uAICgvowxIPjEEqByu/hhDg7PcZ0RFn1r9v6JggW7mjLHezvk1xfs9o3DdBvBmxmOo6iDiABIDwdAfns+5qb3bqLzh7KdNdjUXMrQtuBDFRFzMTtfpHvuN1H7et4u1tlHgFLQsKMgMbdsz5AQZJ+RoVHHBzm30VfU/hoN6xW4VNx1uIZcYOoIJLWnR7gOTaLQJEcV0sdjYAB79ww9zh2OVp4/hObpZo8RJBB1zsz6H9lf4/wAisfsj/H+RWTHkUl3sdk3DdHqKzc4XryLPzgjhRMknWySTs1yu/h+wX9SLiuSSSl+8klgoM4OP6B+sn3M3jdI/x/kf/NV3cDcR0VUkst2BKxkoBUtJGuR+taRckZux2i4uH1SwAH+vex0IkrnDGIkkGYEzFTLPakW16GAa3iVwYAiGcvH32fz1JJNRU6y6xm3afJclYFQql/kF4LAAaI0Sw9gY5m91PkWsO2ToAqNbBVQTLBi6kziBjP8AOORkBdjZbLgIAJB49virbpbkr9xz+teYurfvXbYVblu2Vf1BlbByGlnAsZM6IOoMmYmV27q3tFUu9PcRQChYtbYHHhtXC7ljP8s+QHNNhYHpaxNef/ed9SS9hxmWS2ioXIdfpZ3XQVgeTCrgRJkVHLXQLdpk6hrocXQxhp/isXtl0xtjwgKCZh1+CQo6HqaV57p361f4j21ctzbD/SAHIxJxXbFBwTiCSSRFZvd1vDJDYcOxuJbIVmGQVShcgFVUhiS0x4ETOqUC/mk1531+pS16K9P1DuUbG81zpjizFozOQ+nR0hERyZrt0K9Ql9UNv+CbZZ3yXH1GP0gfWzCOSAIbmRFKBe0pSoBSlKAVg1muN+0GVkPDAgxzBEUByPXW/U9LLzxLRB+kRuePcVX9p74L9l+oCHAfSNZEYgkHKADJj443WE7CCHS7duXVdVBLHG4SpBkvaKj+VdBRx7ya6D8P2cPTm9jkG/178gqZBBz1veq1gE+71KKQrMASCROhogcn7sNVw6fuFt8+VNsw2alYBOjJ0QQAeeCJrkex2CULKzlCSvqXLlyCY3DsZ+kR8e0TXL9zMJxvPHrLcAbyAAjJTO2nZBM4nGPpFRJAmL3G35yyqEYLJZQDKK0jfw4rS13BSC5KhMmVTM5YAkn4GlJHOgD7wOPSditJBOTss4s5BZZUKApAEQgCg8wNkkknmfw7axa3L+iVCizI9NAECeMDLagCCSOdbNXAO1zrbLshLqVKMwHuw+y8nSsePY1jpertMf4dxl0rQZAhxIgOPjdcbHaUDRcJe41pFe4fFnCNwcYhSSfHjZ5rbqex2GLEg5soXLJi3ijIDJJ8grNv9TNTxBtb72klXV0dWxZSJhiAVBZCVkqQYBmDuKkXutUt6at5xMDeoJ/4NQ26G0LYt3Wa7Dq5Zz5M6xDNgFHsBAAWNRFRuh6ZbI8SzHgM+MhRwoxUCANSZJ9yaja6MuSRd2LnjJMma59R1CkETz/ioJYnRNaBZ0Kzky5+jql/EELP3JqJ1fWhWRWyJckDEEgQNs0aUDQJ+SKlJwftH+f+j+1V1vtFsZZNccnLGWj0w8yi4QCNnmTxJ0KsUuzLdk6ywLYysxO/+/f/ANVy6HrPVErG2dQd7xYiQSAdgT/eov7jQ4i7cZjiVLvjkymNEBQgHiugu8d8tM9+2rjZt27zrgwh0NvKFRhBGJWCCRx+UECr49FUbOnT3rRIUXfIxpeTkJG/iD/mt7TAoLqpiJRlJMsykjZ+AQfmfkDitD+HOn8xi0XAAwDuJgQG0fqCgLPMCK6Xe2pbtOoa4Q0A5Xbrnn2LsSvPtFWo9HRKjI71ZBhmxObLBVhtSRuRqYkVnpu7o2eQKFAzFWxnBGZSxKkqNo2pp0vZLFsKEQjBswcnJygiSxMtydGRXS52y0WzKmYAjJgphiwlQYPkxOxTBSP1XdvTRS6n1HnFEBeDwMj4x5FV3AlgJ96kdV1ptW1d1kkoHAIhciAW3yASK5WezIGyZ7jkOWUM0BJOWACABlDb8sjxvQjp1nbfUdX9S4sCCqlcXgyucqTo7gEAyQZGqYBgdzQesXIVbLhCTPJVGHIHJcAAT+c6HLoO8LeuFUUsnkRcAIUhcf6wMtk/TkON71h+xrkCLl1RiAVVlAZgSRdY45F5ZjMwSZIJAIsbNhVACgCJj9TJ/ud0wDvSlKgFKUoBSlKAUrUmKrOs7zatpeeSxsKWdVBn38RrZMEQPeiVgtaVV9B3I3LSXSv1uVEEcZEBvIidCfn7Vte7oi3fRMyqZu2gttDIUsT8kEAfY/FWmCypXFbyk4hhkBJE7APyORVL33vT29WLYvNi04yxVgRjKruD5SZERRJt0CyvuQysBMll5jnjf/jXC/1LHWp94mKhdJ3GVFt2DsZKuI8sSPIqNLMkgb1G91Hu9yRLnpsw0uTe5BJ8BHtli+/9tZ2t4MSl0TSsbP6itiut6+Pn/p+a4/tolUEB8ZKyGZQBMsRxsxPzG659N1lp3wFwE4hjBBgEAgHcgkEGI9xxIpRiiW0AA+/+NczWVyOlGo+I/Wu9pbY4DN+StXdb/wAWn/so/wCamTSgRrXSlhttAn/HNTLXSqvtUfpb5CnwY+TcR/Udc12/avlHH/iT/wCqtG1FIkxUK/YU3FGI4YmNfAGx+dbN19obZ1UaHkcdnQHlHvUZ+421u3JYZW7YaP8AaJJI9qqRSZ+zkfS7D7HyH+d/5rjeZyVRgNsNg8hdnR44rme6Kmrvi+RWFDOJC58hf6SNwN116e+t1hcUykQp+SwkkT9o/wA1aYJ1Kqeq77Ythma4MVVGkbn1JxCgbJ0DEcMDUlupOYQAaUM8nagzAAEyZU+4GvepTBNpVOne0khgVgKx9yqP9LPGlkzGzoEmIaO97uaKlt2kG7GCayLFcseYmAdzAgmYE1aYLGlVidyHpm6QMYYoFOTMqiZ+ASPb8t1np+6pcf00ksJLRHiskBiZiGKkD538GFMFlSlKgFKUoBSlKAidb03qIUyZJghljJSpBBGQI0QOQRVd+4EZCl13cepmCHuI30keRRvLlieBJ4qw7h1npJnizAFQQis7QSASEQFmifYV5zrr/U3rN1bYdme7ClDaBshQrQZcSZlT9wTsQDqKfToFt+4rJCANehC2JHUX5E6IyDz7RHtv5Na9T+HOnuMrsHLrhDG47HwYsshyQxBJ2Qf8CI9m5dtrYQdLfKoWJCtZEaIC4i9BXzJAkgYDUxGbvceoW5cJtsLKC25GIe4VeAVVbZaccbjGASdATOrnpkJljsllHLqboLMWI9e+VLMZPiXjk8RFbdF2tbaG2Xd8hiWcjLACAgKAQACfvuSSaqbl/qQyNg46b1C7QB6jBmuPDAsPTRQEn3JOMc1ve6m9fazctL6XqIyq7sHAZgxE27blHhVLc84ieYjT7ZTbrOw2lbIZY+GCAwtvDHSYwYPppIJIMRwSDi92RLiYXhKvcy5Zd+2RUg8ajgjR1WnVXbxH7MFvZoyl7ie6ETKXroxY5GI2QFPEgnfuHUdRdH7MbGDOGOXqOFAS5rzteQJQAxrZiTG4lK+TO3NnWx+GLaOGV7mEsWt+pdwYtxC5wACTqCKmdr6NLRNvFAwLlSAAcLjZEA88xP5Cqq11fUofQOb+myFrxQrmpMsoZgEMgwIOoIaPfPQWrnrXOqvhVuEILaZ5MqBQLieJKgMwDCN8T8DTT7ZT1NKir1YO1Vz+Q/5NZ9Z//pn9WX/5rBTPRfSf/uf/API1Iqv6W44Bi3Pk38w/qOt13PUEc23/AEg/+jQEHvfb0uhWdmHpmZFy4mm0V8GGzoCZ/wA1pY7DaEMc84Wf4lwg4ksJVmIaC3JB4X4EV/c+5zfE22Nuwcj/AA3MhsBmkDydT6viJb7b30vdZ1TMXtoDCE20JxLlmJGY/kAVUEmD5trVap1yQ63Ox2xKFRcNzRZy7XCAZ8nYklRrXGgKWvw+QzRfuqs2zbIdmdSqlXk3Sy+QY8KD7zO6jPe6q21zqPRbEEZKXsyyKGEocvEDTkEz8e9TX6nqLlpVRTaunZZhbghYJwVbjhS3AJJxmYaINyuwcW7T0lxjaUEOVYh0Lyp8UJW7wHARF5kAREHczrex2rqlGNwBiS0XH8p0Q+/MRrEyAOBXPs3ZUsD1P4hulQDm+Ue+IiF5JEwNQOAANuz9yu3ZNyw6eTCZtELjooSt1izBg2woH9pMbfT4KdOr7NYuMzMGDMEkrcuIYtGVjBhEE+3MCeBWr9issAreowVshnevOQcSvLOTwx18weQDVa93qfUgWyty4wckKSvooXX0zdgqhgW2w5JuMB7suWu9b/FuLZYSwKWy1ksTKA+QJVVwDcyZ+eKtP2CwPYrRDoxZrTCBaJHpopjJVAAMGNgk6kCAYqXb6K2txrwWLjKqEyeEkgAcDnkDcD4FUNtOs8LjWiXVmaDdA0VRcGwOBk5t9JAA1s1Z9BdvXbrs4Nu3bOIt+BLEicmYE6xZIAIgzzqo0/YLilKVkClKUApSlAKxFZpQGIpFZpQGtRn6lJIJEquZ+wMiZ49j/mu9xJBB4II/vVX0vacQVe611SVPno+I4YrAZePGANbkkmqkipKss72OqyAL4qxghcpIBEiZjcAn9D8TUh+oVVyJERM/b5qs6vstgyXBluWzcMfqPMz/ADP+hI4qv6rt6uCmVwoeQzs8/B/iEiPeI+JrMYJydG3sxn9i4s93suFKuGD8aaDLBROtSTqed/BrNyLXmrBQf5TwfsPeqc9stkEwSSgUtkwMDgCIxIJnUb3Wen6JVGL5XDJ2z3GO5AgsxiAxH6k+9dNlEb0/bLUdRBLgRshhypIMGCODIjiuY72hLwPG2pJJkSw/lWRi3BHOjUOz2xVtlMr6/wBLeo5xh8lxW4WWRAExuPvUmz01kASzNByh2JGX9Ucckn89+wrOEWoK82duj7giqVuPbV8mJUNPJJ1wToH29q5dd3cem1xT4BSZE+XwAQDEnU7/ACrn+6umxZY+oyWFxs9mdPOS73o7381o3brAxAZoRgybzIYcnK4G2eJ9hxEmScX7/Qtad8slW77M3pKFRFUFty0MWAAHA2rSTxH9p1tUtiAQJ+Tsn/mvOdd0AcPhcuq7MWV8iDbkklVwglSWbRJ5+wjU9rUqRm48sw2UsraGQLA5EQBLToxxWtlk/D/2Lu13NXumyokQZb2kHaiR5c8iY94qzFebt2AgWJkTDH6tmSSfud/rVz0XVZCDyKzKO0w3FvxJlYArNKhDEUis0oDEVmlKAUpSgFKUoBSlKAUrBNVXW97tW0vvJb9nUs6qCW94Ua8iYIge+qAtqVWdu7n6lpLpX63ZRBEQGYBpJEiFn53xTuXd7Vk4syh4UgMcR5tissdCW17++qAsaoul7k926ijJAFJdGTEkiQYy2VDR5DRg7qw7f1LXAWIULJAKtMlSQx44ka+RvUxXdL6lmQEFlALAe2UxP9jVTLFpXg8xf6a/c6v1Gs3RbXxXdor45D1PrkAhp+dDU11d7tu802LhWAoYFChB2TBcRzHE6/Kpnb/xHaukLBW4WdQkqT/DKi4xKnHFS6yZ9wOSAZFzvNkLmxYKcoOLHILlJGIM/QYHPGt1rezo9W+UuKKjt3UXme4t1QlsGUInL4HvEaJ5J2OOK1buh9ZrXpuzLjLSpXF5Cvol/Y/y8jcc16F+lRhMRP6Hf2NV1kj1cFDSVuQWUAH03wYCTkYJBnHEhhvdX5F2jO6LlbijldFzEsVUHKAPYZPimRWfYqSBXIdPct2SGOV2HII0Sw0DDaUE+3AnmrE9K/uobk8+5/8A2KwRc/p/wCY+JPNNy9ozupcd2VHT9S7Z3MDChsbUHMsomDrcxyJG9TXTofUd2uhX9PAhFbFZ1yUbzDTPMaI96sybvtP+P+iuFy9cBW0oXJieSBAUSTA5Oxr781XqL6Nb1molbaa/c8WQ2cmPmcPG2pEgQzrnvkxPxqpfVdcVdbQsuZGmBthSPcmWDCNHg8+9dLDGAbgNrIxDjf0ZnIiQoADCSYlT9q7dG1tiMgyq2ODPiq3CxMBBMkwoMEcMKj1FYc03/iqK/pPVusHYyqpiAJ8nMZPrUewmeJEe910nQEEMTH2FadP1yi9csn01CG2FOZlmuAnEqVAB8ToMxI2Yrr3DuK2mtqeHLSfKQEQsSAqmdwNwN8zAOJSciSe52WNKrB3Etd9JVHJ2WA0hhyFG+TA4khvYSeb94U3bdm3ixcBmJMAWyNEGNsdQvxsxIqGS3pUTo+pNwZhSEMFSSJYH+aBwCII3O9gVws9cWdwyBLQYqjlxLsshoX2AIPvJg6igLKlQ+i6g3AX1iSQsGZAMST8kjj2+a4p3e0b7dNJ9VYledMuQbX0iARJiToTQFlSlKAUpSgFKUoCH3HpfVtm3myEwQ6Y5KykEMMgVMEDRBHyKrD+HEdCl5ncepmCHuW2+kr5FXhztidAEmYBqx7l1vpKHwdlyAbBHdgDMHBAWO4HGpk6BrzHcOo6q/wBMwtB7huXQQ9s2R6ItMjemZfykh1n4mY1IF3+4LDKkNehMsSOp6iRkACJD8QAPtuIkz1fsPTlldreboAEa4z3CsZQwLk+Qzby53zUGzeu21sIOk6gqibhrI2AVClfWiN5ckCB78SP2696hU2LgUuCp8DK+iGKDBjicwwyYqskQxkSBxX8Mot1Gts6WVSDZF28ELKFVGCB8RCqZEbMHmTXWx+HbaZgNcCO6PCu6GUUL5XEIe4CFGmJqCnXdZaL9RfsH0jA9K3cRnTx8rjZsqKsrAALE5gmNinfL/VuuC9O4S4oyINlmtgE5KR6igswI4JAj3mgLLquw2XCBQbbWkZLTId2w2PkqtKkjBYJB9/YmeV/sFkqoaTg6sxZm2VLMZCsqjIuxbUGdgiIdnvP6BupneNxyyByoYTAhyrFAAwYnECBwpPMFOhN8fs38W16YuLeuC2U9XMBckuMIZnHkXGRXYJDGQBK6Lsdon1UuXyofJA128wAiIUXiwAkkhlC6gAxzN7T2W105uG3lNwySzs7e5xzcliMmdoJ5dq26hXtpas2Wgkqge5lchUWSTLBnYhYktyZMxBgdkTqzcy6hcQMv5h5HJlUBVMAYAMTyS36KB6GsRWaUAqu/dg9f1y7nQi344B4xNweOWRTx+qI9p3VjXme59X1gLOtqLSOMcAHd0IYFmXkANicQrNBkSZWgLHr+x2LwYXELZEkyzHlcNAmAMSwjjybXkZ07j2ezcK3LzXP4YAkXrlsa4LBGVSZJ3HufyqP3Pr+oAwS2wa4zLaYKzRGEFyAwtSDd8mEDFZEnE72u3u9xVvqty2g9SW3/ABydYqfZFmDA2wjjQC7+HLJui6uaEkl8Lt5C0gAf6bgfyqPyUDgCu97sqMLgLPlctNayLEsEI0ARDa5mZmTMmax++J/aAlpienBnaku2M4qqEt/cAnUAzUNO43ZZ7dpsbzKyeojqyiFQlrcZqIWYIB8h8NiBIP4eSFKu1u6oQerbxDEJlIhwygN6lwnUy8zIBEZvwlYLuT/pso/hjRFwIbZui8P4k+ligGUAD71L6nrLy3yB0957WKhShs4liZJ8rikRob/T78Oje7ff+IhRbHUuP9XbgK0FktmI8rZCsT8kAgUB3P4fs4YZdREgz+1dTkCsjT+pkogkEAwfeudn8PILRtF2kPcdHBYtbZ/519QuCwk7MjZ1sznqD1LOblsqUDhFtmQBixFy7cYGW19KAcgSd+PLuY6pTaCzctrZutdKYoz3kCm2AJJGTZeI0fcwIYDZ/wAPoCHFy4IU5TduhHaZ9R7aOts7LFhjDTHAFWvR9KtpcVHuSTqWY8u0cknZNebsdZ1L2bTP01y5bTJmmEu3cWC229K9hGme4Q2MG2IGxVt0HX3brW3FkpZdSfIoWMgFWm27KAR+fI4oC4pSlAKUpQClKUApSlAKUpQClKUArhf6hUEuwUfJIA/zXaofV9Al1kZxJQyuzo/1CPf2/In5qoqq8kN++WvVFrk5FctYh8SSk/1R/wA/Brt0/dVfIhXCLnLsAF8DBiTJHJkCNVwbtIwALsrYImS4DyU+LjJT5STEyNnW62udmUhFzuALmGgqPUFwguH8fdhOo9+BqteJ1fxnZe4obRu+SDjyRg0ziPD6jJ4+dRXTpOrDW1diAY8p1DLpueIaRXC32kLcDh7mIAHplpUkEkMSwLkjI6yjjWq1udktkkiRkxZvckkzEtMLMnEakzzUwZezpkzqOrS3GZgEkAnjSljJ4AhTs1x6fuiuT7J4BXLLFwuuQwAM8EcxXIdhs5ZMrPssA9y46gnnFHYqvPxWvWdotvcR5ZTsHF3XIRwMWAnQ/QU8Qlp8WyxvXQoyIJA+Nn+1ceu60W7ZuRkBGgVGp5liBUO/2VXFxWe4UcKI9S7rGffP8j7TG5rTp+xIpORySbZRPLFPT2IXIr9QDaA4EzzTAShy2WFjr7bwFM5BiNESFieR/uH96lxVR2norSNca24fyMCQxtgxKZcxK8E6AAEAVb1HV4MySTwZpSlQyagRxW1KUApSlAKUpQClKUApSlAKUpQClKUApSlAYqi753NrYZFDK2IK3MZQSTMs0IDoAAnlh7TV9WtVOixkk7as8v1Vu+3UoxtXSlvESPTh2Ug+oBmMfcfkTzOp/T9TdyuD9nuiWOJLWysKoAP+poGJgD+be5q6isVdx0lq2kqXFFA1/qsAWssZucIy5hQ+QJ81HAC4yedyJFSbvVX9FbDBcSWDFS5IIhFAfGSMtlgBrmrelTd9E3r0jzfUd0u4rbIa1dLIMigxhwOCWKFsiRiGJ8TzqeSJfbq/Va1dwXxUTbI1kuf1ggMGk/kutV6g0FXd9GlqJJ0lkoP2rqDau49PcS4RcZMjbIDQcV/1D9vgflzUC6OrKkejdGYx06ORA2zKXQDIsdCIC/cCvX0op10I6qjxFHn+zWLlsqnp3PKWuXHFoSeFUYPqNQACI95q/FZpUbs5yludszSlKhkUpSgFKUoBSlKAUpSgP//Z"}
                alt={"islamic education"}
                className={styles.image}
              />
            </Box>
          </Grid2>
          <Grid2 xs={12} md={12} sm={12}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: "2.5rem",
                color: "#2726b5",
                paddingLeft: "0rem",
                justifyContent: "center",
                textAlign: "center",
                paddingBottom: "1rem",
              }}
            >
              Books
            </Typography>
            <BooksCollection />
          </Grid2>
        </Grid2>
      </Box>
      <Box className={styles.footer}>
        <Footer />
      </Box>
    </Box>
  )
}
export default Home;