"use client";

import SelectCantons from "./components/atoms/SelectCantons";
import DateRangePickerComponent from "./components/atoms/DateRangePicker";
import ButtonComponent from "./components/atoms/Button";
import HolidayList from "./components/organisms/HolidayList";
import { Layout, Row, Col } from "antd";
import { useHolidaySearch } from "./contexts/HolidaySearchContext";
import LoadingOverlay from "./components/atoms/LoadingOverlay";

const Home = () => {
   const {
      cantons,
      loading,
      holidays,
      fetchHolidays,
      setSelectedCanton,
      setDateRange,
   } = useHolidaySearch();

   const { Header, Content } = Layout;

   const handleCantonChange = (isoCode: string) => {
      setSelectedCanton(isoCode);
   };

   const handleDateRangeChange = (range: [string | null, string | null]) => {
      setDateRange(range);
   };

   const handleSearch = () => {
      fetchHolidays();
   };

   return (
      <Layout style={{ minHeight: "100vh" }}>
         {loading && <LoadingOverlay />}

         <Header
            style={{
               background: "#f0f2f5",
               padding: "0 20px",
               zIndex: 1,
               height: "100%",
            }}
         >
            <Row gutter={[16, 8]}>
               <Col xs={24} sm={12} md={8}>
                  <SelectCantons
                     cantons={cantons}
                     onChange={handleCantonChange}
                  />
               </Col>
               <Col xs={24} sm={12} md={8}>
                  <DateRangePickerComponent onChange={handleDateRangeChange} />
               </Col>
               <Col xs={24} sm={24} md={8}>
                  <ButtonComponent
                     onClick={handleSearch}
                     label='Search Holidays'
                  />
               </Col>
            </Row>
         </Header>

         <Content style={{ padding: "20px" }}>
            <HolidayList holidays={holidays} />
         </Content>
      </Layout>
   );
};

export default Home;
