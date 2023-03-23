<template>
    <div class="card">
      <img :src="imageUrl" alt="card image" class="card-image">
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: String,
      title: String,
      description: String
    }
  }
  </script>
  
  <style>
  .card {
    width: 300px;
    height: 400px;
    background-color: #f1f1f1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 10px;
  }
  
  .card-title {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
  
  .card-description {
    margin: 10px 0;
    font-size: 14px;
  }
  </style>
  