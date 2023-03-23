<template>
    <div class="card-menu">
      <img :src="imageSrc" alt="card image">
      <h2 class="title">{{ title }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .card-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .card-menu img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .card-menu .title {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  </style>
  