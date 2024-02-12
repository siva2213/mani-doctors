import React from "react";
import styled from "styled-components";
import { ReactComponent as Receipt } from "../../assets/Receipt.svg";
import Rectangle from "../../assets/Rectangle.png";
import Rectangle2 from "../../assets/Rectangle2.png";

const ParentContainer = styled.div`
  margin-top: 30px;
  background: ${(props) => props.theme.accordionOneBody};
`;
const ContentContainer = styled.div`
  padding-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
  padding-bottom: 30px;
`;

const Heading1 = styled.h2`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`;
const Heading2 = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
`;

const InvoiceCard = styled.div`
  background: ${(props) => props.theme.accordionOneBody};
  box-shadow: ${(props) => props.theme.pinkShadow};
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  overflow: hidden;
`;
const InvoiceCardContent = styled.div`
  margin: 0 23px;
  padding-top: 34px;
`;
const InvoiceReceiptIcon = styled.div``;
const InvoiceContent1 = styled.div`
  display: flex;
  gap: 29px;
  align-items: center;
`;
const InvoiceDateDiv = styled.div``;
const InvoiceData = styled.h2`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

const PlainLine = styled.div`
  border: 1px solid #d4a6c0;
  transform: rotate(0.35deg);
  margin-top: 29px;
  margin-bottom: 20px;
`;
const InvoiceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InvoiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
const ColumnHead = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  margin: 0;
`;
const CouponName = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const ColumnValue = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 14px;
  text-align: right;
  margin: 0;
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const ColumnTotal = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 14px;
  text-align: right;
  margin: 0;
`;
const TotalContainer = styled.div`
  height: 90px;
  width: 100%;
  margin-top: 15px;
  position: relative;
`;
const TotalHead = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;
const TotalValue = styled.h1`
  margin: 0;
  text-align: right;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
`;
const TotalContent = styled.div`
  position: absolute;
  top: 11px;
  left: 25px;
  right: 25px;
`;
const WhiteLine = styled.div`
  border: 1px solid #ffffff;
  background-color: #ffffff;
  transform: rotate(0.35deg);
  margin-top: 10px;
  margin-bottom: 10px;
`;
const TotalContainerBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props) => props.theme.invoiceTotalBg};
  transform: skewY(3.69deg);
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;
const TotalContainerInner = styled.div`
  width: 100%;
  height: 66px;
  box-shadow: ${(props) => props.theme.invoiceInBoxShadow};
`;

const Invoice = () => {
  return (
    <div>
      <ParentContainer>
        <ContentContainer>
          <Heading1>This Is Your</Heading1>
          <Heading2>Invoice</Heading2>
          <InvoiceCard>
            <InvoiceCardContent>
              <InvoiceContent1>
                <InvoiceReceiptIcon>
                  <Receipt />
                </InvoiceReceiptIcon>
                <InvoiceDateDiv>
                  <InvoiceData>Date : 19/11/2022</InvoiceData>
                  <InvoiceData>Appointment ID : DGB5H19Z37</InvoiceData>
                </InvoiceDateDiv>
              </InvoiceContent1>
              <PlainLine></PlainLine>
              <InvoiceRow>
                <InvoiceColumn>
                  <ColumnHead>Consultation Fee</ColumnHead>
                  <ColumnHead>Service Fee</ColumnHead>
                  <ColumnHead>Technology Fee</ColumnHead>
                  <ColumnHead>Test</ColumnHead>
                  <ColumnHead>Surgery</ColumnHead>
                  <ColumnHead>Medicine</ColumnHead>
                  <ColumnHead>
                    Coupon<CouponName>( Coupon100 )</CouponName>
                  </ColumnHead>
                </InvoiceColumn>
                <InvoiceColumn>
                  <ColumnValue>Rs. 1000</ColumnValue>
                  <ColumnValue>Rs. 100</ColumnValue>
                  <ColumnValue>Rs. 100</ColumnValue>
                  <ColumnValue>-</ColumnValue>
                  <ColumnValue>-</ColumnValue>
                  <ColumnValue>-</ColumnValue>
                  <ColumnTotal className='text-[#EE2B3B]'>Rs. -100</ColumnTotal>
                </InvoiceColumn>
              </InvoiceRow>
            </InvoiceCardContent>
            <TotalContainer>
              <TotalContainerBg>
                <TotalContainerInner />
              </TotalContainerBg>
              <TotalContent>
                <TotalHead>Total</TotalHead>
                <WhiteLine></WhiteLine>
                <TotalValue>Rs. 1100</TotalValue>
              </TotalContent>
            </TotalContainer>
          </InvoiceCard>
        </ContentContainer>
      </ParentContainer>
    </div>
  );
};

export default Invoice;
