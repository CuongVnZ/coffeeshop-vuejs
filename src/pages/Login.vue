<script setup>
</script>

<template>
    <div class="container min-vh-100">
        <div class="row my-5">
            <div class="col-12">
                <h1 class="text-center mb-4">LOGIN PAGE</h1>
            </div>
            <div class="col-md-6 offset-md-3 mb-3">
                <div v-if="errors.length" class="alert alert-danger" role="alert">
                    <ul>
                        <li v-for="e in errors">{{e}}</li>
                    </ul>
                </div>
                <div class="card">
                    <div class="card-body">
                        <!-- <h4 class="card-title mb-4">Please fill in the form</h4> -->
                        <form  method="post" @submit="checkForm" action="https://mercury.swin.edu.au/it000000/formtest.php">
                            <div class="mb-2">
                                <label for="usernameInput">Username:</label>
                                <input type="text" class="form-control" name="usernameInput" id="usernameInput" v-model="usernameInput">
                            </div>
                            <div class="mb-2">
                                <label for="passwordInput">Password:</label>
                                <input type="password" class="form-control" name="passwordInput" id="passwordInput" v-model="passwordInput">
                            </div>
                            <button type="submit" class="btn btn-outline-dark float-end">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            usernameInput: '',
            passwordInput: ''
        }
    },
    methods: {
        checkForm(e) {
            var result = true;
            this.errors = [];

            // Validate username
            if (!this.usernameInput.trim()) {
                result = false;
                this.errors.push("Please enter a username.");
            }

            // Validate password
            if (!this.passwordInput.trim()) {
                result = false;
                this.errors.push("Please enter a password.");
            }

            if (!result) {
                e.preventDefault(); // prevent form submission	
                // scroll to top
                window.scrollTo(0, 0);
            }
        }
    }
}
</script>

<style scoped>
</style>
