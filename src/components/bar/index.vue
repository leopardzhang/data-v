<template>
    <div class="bar temp" :style="{ left: left + 'px', top: top + 'px' }">
        <div ref="chart" :style="{ width: width + 'px', height: height + 'px' }"></div>
    </div>
</template>

<script src="./index.js"></script>

<style src="./index.scss" lang="scss" scoped></style>
