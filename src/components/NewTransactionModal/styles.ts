import styled from "styled-components";

export const Container = styled.form`
  
  h2 {
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    
    &::placeholder {
      color: var(--text-body);
    }
    
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width:100%;
    padding: 0 0.15rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(.9)
    }
  }

`