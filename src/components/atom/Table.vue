<template>
    <div>
        <div class="tableContainer">
            <table>
                <tr v-for="(tableItemn, index) in tableItems" :key="index">
                    <th>{{ tableItemn.header }}</th>
                    <td>{{ tableItemn.body }}</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
import 'normalize.css'

export default {
    props: {
        tableItems: Array
    }
}
</script>


<style lang="scss" scoped>
.tableContainer {
    display: flex;
    justify-content: center;
}

table th, td {
    text-align: left;
    padding:15px 50px;
}

</style>