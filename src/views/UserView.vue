<template>
  <div class="container">
    <div class="container-top">
      <div class="top-bar">
        <span>Home></span>
        <span>E-commerce></span>
        <span>Order></span>
      </div>
      <div class="main-user__info">
        <h1>New Order</h1>
        <div class="main-inp__parent">
          <h2>Main Info</h2>
          <div class="main-input__child">
            <div class="inp-left__user">
              <form action="#">
                <p>First Name</p>
                <input type="text" name="First Name" placeholder="First Name">
                <p>Order Date</p>
                <div class="border-calendar__user">
                  <input type="text" name="Order Date" placeholder="Order Date">
                  <img src="../assets/images/png/calendar.jpg" alt="">
                </div>
              </form>
            </div>
            <div class="inp-right__user">
              <form action="#">
                <p>Last Name</p>
                <input type="text" name="Last Name" placeholder="Last Name">
                <p>Delivery Date</p>
                <input type="text" name="MM / DD / YYYY" placeholder="MM / DD / YYYY">
                  <img src="../assets/images/png/calendar.jpg" alt="">

              </form>

            </div>
          </div>
          <div class="main-user__button">
            <p>Delivery Type</p>
            <input class="gap-input" type="text" placeholder="None > ">
            <p>Phone Number</p>
           <input type="text" name="Phone Numbe"  placeholder="Uzb\ > +99890">
            <p>Comment</p>
           <input type="text" name="Comment" placeholder="Comment" >
          </div>
        </div>
      </div>




    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style></style>
    