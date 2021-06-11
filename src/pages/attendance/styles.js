import styled from "styled-components";
import { shade, darken } from "polished";

import ArrowLeftIcon from "../../components/images/ArrowLeftIcon.svg";
import ArrowRightIcon from "../../components/images/ArrowRightIcon.svg";

export const Calendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;

  .DayPicker {
    border-radius: 10px;

    &-wrapper {
      padding-bottom: 0;
      background: #f0e9e1;
      border-radius: 10px;
      z-index: 0;
    }

    &-NavBar {
      position: relative;

      ::before {
        content: "";
        width: 100%;
        height: 50px;
        position: absolute;
        background: #3d7a94;
        border-radius: 10px 10px 0 0;
        z-index: -1;
      }
    }

    &-NavButton {
      color: #999591 !important;
      margin-top: 0;
      top: 0;

      &--prev {
        background: url(${ArrowLeftIcon}) no-repeat center;
        margin-right: 0;
        left: 12px;
        width: 50px;
        height: 50px;
      }

      &--next {
        background: url(${ArrowRightIcon}) no-repeat center;
        right: 12px;
        width: 50px;
        height: 50px;
      }
    }

    &-Month {
      border-collapse: separate;
      border-spacing: 8px;
      margin: 0;
      padding: 0 10px 10px;
    }

    &-Caption {
      line-height: 50px;
      color: #f4ede8;

      > div {
        text-align: center;
      }
    }

    &-Weekday {
      color: #666360;
      font-size: 16px;
    }

    &-Day {
      width: 40px;
      height: 40px;
      transition: all 0.2s ease;
      border-radius: 10px;

      &--today {
        font-weight: normal;
        color: #f00;
      }

      &--available:not(.DayPicker-Day--outside) {
        background: #f0c38d;
        border-radius: 10px;
      }

      &--disabled {
        color: #666360;
        background: transparent !important;
      }

      &--selected:not(.DayPicker-Day--disabled) {
        background: #bf7f30 !important;
        color: #232129 !important;
      }
    }

    &:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background: ${shade(0.2, "#bf7f30")};
    }
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    background: #f0c38d;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    font-size: 16px;

    svg {
      color: #3e3b47;
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  div {
    flex: 1;
    justify-content: left;
    background: #f0c38d;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    strong {
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Time = styled.div`
  .ant-radio-button-wrapper {
    background-color: #f0c38d;
  }

  .ant-radio-button-wrapper:hover {
    position: relative;
    background: ${darken(0.2, "#f0c38d")};
    color: #fff;
  }
  .ant-radio-button-wrapper-disabled {
    color: darkgray;
    background-color: lightgrey;
  }

  .ant-radio-button-wrapper-disabled:first-child,
  .ant-radio-button-wrapper-disabled:hover {
    color: darkgray;
    background-color: lightgray;
  }

  .ant-radio-group-solid {
    background-color: ${darken(0.2, "#f0c38d")};
    color: #fff;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: ${darken(0.2, "#f0c38d")};
    color: #fff;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    background-color: ${darken(0.2, "#f0c38d")};
  }
`;
