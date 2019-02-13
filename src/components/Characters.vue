<template>
    <div class="container">
         <div class="main-wrapper">
            <h3 class="heading-sub">Know your Characters</h3>
            <div class="grid-wrapper">
                <div class="card">
                    <div class="card__left">
                        <p class="name">john snow</p>
                    </div>
                    <div class="card-right">
                        <p class="house">Stark</p>
                        <div class="titles">
                            <p class="title">TITLES</p>
                            <p class="value">King in the north</p>
                            <p class="value">Ned's Bastard</p>
                        </div>
                        <div class="titles">
                            <p class="title">TITLES</p>
                            <p class="value">King in the north</p>
                            <p class="value">Ned's Bastard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.heading-sub {
    font-size: 2rem;
    font-weight: 300;
    color: #307878;
    margin: 5rem 0;
}
.heading-sub::after {
    content: "";
    display: block;
    width: 3rem;
    height: 3px;
    background-color: #307878;
    margin-top: 1rem;
}

.main-wrapper {
    padding: 4rem;
    background-color: whitesmoke;
}
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    padding: 6rem 12rem;
}


.card {
    display: flex;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.03);
    border-radius: 3px;
    min-width: 20rem;
}
.card__left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #183048;
    flex: 1;
    border-radius: 3px;
}
.card__right {
    display: flex;
    justify-content: start;
    align-items: center;
    flex: 1;
    padding: 0 2rem;
}
.name {
    font-size: 1.7rem;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
}
.house, .titles {
    padding: 2rem 4rem;
    background-color: whitesmoke;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;

}
.house {
    margin-bottom: 1rem;
    color: #307878;
}
.title::after {
    content: "";
    display: block;
    width: 3rem;
    height: 3px;
    background-color: #307878;
    margin-top: 1rem;
}
.value {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 200;
    color: #616161;
    text-transform: lowercase;
}
    
</style>