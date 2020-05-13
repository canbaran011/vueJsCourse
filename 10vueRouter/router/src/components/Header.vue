<template>
    <div>
        <ul class="nav nav-pills">
            <router-link
            active-class="active"
            exact 
            to="/" 
            tag="li"> <!-- parenttaki eleman li oldugundan -->
            <a>Home</a>
            </router-link>
            <router-link
            active-class="active"
            exact 
            to="/user"
            tag="li">
            <a>User</a>        
            </router-link> 
            
        </ul>
    </div>
</template>