<template>
    <div >
        <ul id="project-list">
            <li class="project-item" v-for="item in projects">
                <router-link v-bind:to="item.link">
                    <div>
                        <div class="project-name"> {{ item.name }} </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
        return {
            projects: [
                { 
                    id: 1, 
                    name: "NoteSaver", 
                    link: "/projects/notes" 
                },
                { 
                    id: 2, 
                    name: "Weather App", 
                    link: "/projects/weather-app" 
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    #project-list {
        list-style: none;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    .project-item {
        display: inline-block;
        width: calc(100% / 5);
        padding-top: calc(100% / 5);
        position: relative;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        .project-name {
            position: absolute;
            color: white;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
</style>
