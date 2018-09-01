Vue.component("Table",{
    props:{
        column:{
            type:Array
        },
        data:{
            type:Array
        }
    },
    template:
    `
    <div class="panel panel-default">
        <div class="panel-heading">表格</div>
        <table class="table">
            <tr>
                <th v-for="(iteam,index) in column">{{iteam}}</th>
            </tr>
            <tr v-for="iteam2 in data">
                <td>{{ iteam2.id }}</td>
                <td>{{ iteam2.fristname }}</td>
                <td>{{ iteam2.lastname }}</td>
                <td>{{ iteam2.username }}</td>       
            </tr>
        </table>
    </div>
    `
})