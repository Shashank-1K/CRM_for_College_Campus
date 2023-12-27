import React, { useEffect, useRef } from "react"
import { Navigate } from "react-router-dom"
import "./Home.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Statistics from "../images/HomePage/Statistics.png"
import Donut from "../images/HomePage/Donut.png"
import Spring from "../images/HomePage/Spring.png"
import ContactSS from "../images/Screenshots/contacts.png"
import DealSS from "../images/Screenshots/DeptPage.png"
import DashboardSS from "../images/Screenshots/FacultyDetails.png"
import CalendarSS from "../images/Screenshots/AttendenceF.png"
import TaskSS from "../images/Screenshots/TimeTable.png"
import { IoIosArrowDown } from "react-icons/io"
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Stack,
  Center,
  useMediaQuery,
} from "@chakra-ui/react"

const IndexPage = props => {
  const [isLargeSize] = useMediaQuery("(min-width: 42em)")
  const homeInfo = useRef()
  const scrollToDiv = ref => window.scrollTo(0, ref.current.offsetTop - 10)

  useEffect(() => {
    // set features on odd lanes to be correct width
    for (const i of [1, 3]) {
      document.getElementById("features").childNodes[i].firstChild.style.width =
        "500px"
    }
  }, [])

  return (
    <div>
      <Box
        overflow="hidden"
        w="100vw"
        justifyContent="center"
      >
        <Center>
          <Stack direction={["column", "column", "row"]}>
            <Center>
              <VStack
                maxW={["100vw", "100vw", "35vw"]}
                p="50px"
                alignItems="left"
              >
                <Heading
                  pb="10px"
                  fontSize={["40px", "50px"]}
                >
                  VNRVJIET CRM
                </Heading>
                <Text fontSize="20px">
                Your CRM, your campus, your success.
                </Text>
                <br />
                <HStack gridGap={15}>
                <a href="/FacultyLogin"><button
                  className="btn btn-lg btn-danger text-light"
                  bgColor="#82001a">
                  Faculty
                  </button></a>
                  <a href="/login"><button
                    className="btn btn-lg btn-danger text-light"
                    bgColor="#82001a">
                    Student
                  </button></a>
                  <button
                    onClick={() => scrollToDiv(homeInfo)}
                    bgColor="#82001a"
                    className="btn btn-lg btn-danger text-light"
                    rightIcon={<IoIosArrowDown />}
                  >
                    Learn More
                  </button>
                </HStack>
              </VStack>
            </Center>

            <Box>
              <Box
                style={{
                  animation: "floatAnim 3s ease-in-out infinite",
                }}
              >
                <Image
                  style={{ transform: "rotate(10deg)" }}
                  w="500px"
                  src={Statistics}
                />
              </Box>
              <Box
                style={{
                  animation: "floatAnim2 2s ease-in-out infinite",
                }}
                float="left"
                marginTop="-150px"
              >
                <Image
                  style={{ transform: "rotate(10deg)" }}
                  h="80px"
                  src={Donut}
                />
              </Box>
              <Box
                style={{
                  animation: "floatAnim2 2.5s ease-in-out infinite",
                }}
                float="right"
                marginTop="-400px"
              >
                <Image
                  style={{ transform: "rotate(10deg)" }}
                  h="130px"
                  src={Spring}
                />
              </Box>
            </Box>
          </Stack>
        </Center>
        <div id="scroll">
          <svg
            style={{ marginBottom: "-2px" }}
            position="relative"
            width="100%"
            height="20vh"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 20 130 30"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="wave"
                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
              />
            </defs>
            <g className="waves">
              <use
                xlinkHref="#wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.6)"
              />
              <use
                xlinkHref="#wave"
                x="48"
                y="2"
                fill="rgba(255,255,255,0.4)"
              />
              <use
                xlinkHref="#wave"
                x="48"
                y="4"
                fill="rgba(255,255,255,0.2)"
              />
              <use xlinkHref="#wave" x="48" y="6" fill="white" />
            </g>
          </svg>
        </div>
      </Box>

      <Center ref={homeInfo}>
        <VStack pt="60px" maxW={["85vw", "80vw"]}>
          <Stack
            direction={["column", "row"]}
            gridGap={["0px", "70px"]}
            pb={!isLargeSize && "30px"}
          >
            <Center>
              <Box maxW="700px" textAlign={!isLargeSize && "center"}>
                <Text
                  fontFamily="Nunito-Bold"
                  color="#82001a"
                  pb={["10px", "20px"]}
                  pl="2px"
                >
                  FEATURES
                </Text>
                <Heading
                  pb="30px"
                  fontFamily="Raleway-Bold"
                  fontSize={["35px", "40px"]}
                >
                  About us
                </Heading>
                <Text pb={isLargeSize && "30px"} fontSize="20px">
                The problem we're addressing is that our college currently faces challenges in how we manageinformation and communication with students, teachers, alumni, and oth
                hard to provide the best support, plan effectively, and engage with our community in the best
                way possible
                </Text>
              </Box>
            </Center>
          </Stack>

          <Center>
            <VStack
              id="features"
              spacing={["60px", "100px"]}
              pt="30px"
              maxW={["85vw", "80vw"]}
            >
              {/* First Feature */}

              <Stack
                pb={!isLargeSize && "30px"}
                direction={["column", "row"]}
                gridGap={["0px", "70px"]}
              >
                <Center>
                  <Box pb={!isLargeSize && "30px"}>
                    <Image w={["300px", "500px"]} src={'https://img.freepik.com/premium-vector/3d-simple-user-icon-isolated_169241-7120.jpg?w=740'} />
                  </Box>
                </Center>
                <Center>
                  <Box maxW="500px" textAlign="center">
                    <Heading
                      pb="30px"
                      fontFamily="Raleway-Bold"
                      fontSize={["35px", "40px"]}
                    >
                      Student & Faculty Profiles
                    </Heading>
                    <Text fontSize="20px">
                  
                    The "Student and Faculty Profiles" feature in the College Campus CRM provides a centralized platform for managing student and faculty information.
                    </Text>
                  </Box>
                </Center>
              </Stack>

              {/* Second Feature */}

              <Stack
                pb={!isLargeSize && "30px"}
                direction={["column", "row"]}
                gridGap={["0px", "70px"]}
              >
                {!isLargeSize && (
                  <Center>
                    <Box pb="30px">
                      <Image w="300px" src={"../images/Screenshots/calendar.png"} />
                    </Box>
                  </Center>
                )}
                <Center>
                  <Box
                    pl={isLargeSize && "30px"}
                    maxW="500px"
                    textAlign="center"
                  >
                    <Heading
                      pb="30px"
                      fontFamily="Raleway-Bold"
                      fontSize={["35px", "40px"]}
                    >
                      Student Attendence
                    </Heading>
                    <Text fontSize="20px">
                    Faculty members can log in, select the department and section, and easily take and save attendance. The system also allows for quick generation of PDF attendance reports with date and time details. Streamlining the process for efficient attendance management.
                    </Text>
                  </Box>
                </Center>
                {isLargeSize && (
                  <Center>
                    <Box>
                      <Image w="500px" src={CalendarSS} />
                    </Box>
                  </Center>
                )}
              </Stack>

              {/* Third Feature */}

              <Stack
                pb={!isLargeSize && "30px"}
                direction={["column", "row"]}
                gridGap={["0px", "70px"]}
              >
                <Center>
                  <Box pb={!isLargeSize && "30px"}>
                    <Image w={["300px", "500px"]} src={DealSS} />
                  </Box>
                </Center>
                <Center>
                  <Box maxW="500px" textAlign="center">
                    <Heading
                      pb="30px"
                      fontFamily="Raleway-Bold"
                      fontSize={["35px", "40px"]}
                    >
                      Department Page
                    </Heading>
                    <Text fontSize="20px">
                      
The "Department Page" feature in the College Campus CRM gives each academic department its own space. It includes faculty info, course details, announcements, and events. This helps improve communication and management within departments, connecting seamlessly with other CRM modules for an organized campus experience.
                    </Text>
                  </Box>
                </Center>
              </Stack>

              {/* Fourth Feature */}

              <Stack
                pb={!isLargeSize && "30px"}
                direction={["column", "row"]}
                gridGap={["0px", "70px"]}
              >
                {!isLargeSize && (
                  <Center>
                    <Box pb="30px">
                      <Image w="300px" src={TaskSS} />
                    </Box>
                  </Center>
                )}
                <Center>
                  <Box
                    pl={isLargeSize && "30px"}
                    maxW="500px"
                    textAlign="center"
                  >
                    <Heading
                      pb="30px"
                      fontFamily="Raleway-Bold"
                      fontSize={["35px", "40px"]}
                    >
                      TimeTable & Other Circulars
                    </Heading>
                    <Text fontSize="20px">
                    Students can conveniently access the college Time Table and the latest Circulars through the platform. The system allows students to download and view notices/circulars, providing easy access to important information for their academic schedules and college updates.
                    </Text>
                  </Box>
                </Center>
                {isLargeSize && (
                  <Center>
                    <Box>
                      <Image w="500px" src={TaskSS} />
                    </Box>
                  </Center>
                )}
              </Stack>

              {/* Fifth feature */}

              <Stack direction={["column", "row"]} gridGap={["0px", "70px"]}>
                <Center>
                  <Box pb={!isLargeSize && "30px"}>
                    <Image w={["300px", "500px"]} src={DashboardSS} />
                  </Box>
                </Center>
                <Center>
                  <Box maxW="500px" textAlign="center">
                    <Heading
                      pb="30px"
                      fontFamily="Raleway-Bold"
                      fontSize={["35px", "40px"]}
                    >
                      Faculty Details Access for Students
                    </Heading>
                    <Text fontSize="20px">
                    Students can easily access faculty details from all departments, including academic backgrounds. The platform provides direct communication links via email and LinkedIn, facilitating seamless interaction between students and faculty members.                      
                    </Text>
                  </Box>
                </Center>
              </Stack>
              <Center pb="25px">
                <VStack>
                  <Text
                    onClick={() => Navigate("/about")}
                    pb="10px"
                    color="gray"
                    _hover={{
                      transform: "scale(1.08)",
                      cursor: "pointer",
                    }}
                  >
                    About Us
                  </Text>
                  <Text color="gray">© 2023 CRM for College Campus</Text>
                </VStack>
              </Center>
            </VStack>a
          </Center>
        </VStack>
      </Center>
    </div>
  )
}

export default IndexPage
