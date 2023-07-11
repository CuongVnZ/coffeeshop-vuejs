<script setup>
defineProps({

})
</script>

<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-12">
                <h1 class="text-center mb-4">BECOME A NEW USER</h1>
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
                            <fieldset>
                                <legend>Account information</legend>
                                <div class="mb-2">
                                    <label for="usernameInput">Username:</label>
                                    <input type="text" class="form-control" name="usernameInput" id="usernameInput" v-model="usernameInput">
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-2">
                                            <label for="passwordInput">Password:</label>
                                            <input type="password" class="form-control" name="passwordInput" id="passwordInput" v-model="passwordInput">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-2">
                                            <label for="confirmPasswordInput">Confirm Password:</label>
                                            <input type="password" class="form-control" name="confirmPasswordInput" id="confirmPasswordInput" v-model="confirmPasswordInput">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Shipping information</legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-2">
                                            <label for="firstNameInput">First Name:</label>
                                            <input type="text" class="form-control" name="firstNameInput" id="firstNameInput" v-model="firstNameInput">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-2">
                                            <label for="lastNameInput">Last Name:</label>
                                            <input type="text" class="form-control" name="lastNameInput" id="lastNameInput" v-model="lastNameInput">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-2">
                                    <label for="emailInput">Email Address:</label>
                                    <input type="email" class="form-control" name="emailInput" id="emailInput" v-model="emailInput">
                                </div>
                                <div class="mb-2">
                                    <label for="streetAddressInput">Street Address:</label>
                                    <input type="text" class="form-control" name="streetAddressInput" id="streetAddressInput" v-model="streetAddressInput">
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-2">
                                            <label for="suburbInput">Suburb:</label>
                                            <input type="text" class="form-control" name="suburbInput" id="suburbInput" v-model="suburbInput">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-2">
                                            <label for="postcodeInput">Postcode:</label>
                                            <input type="text" class="form-control" name="postcodeInput" id="postcodeInput" v-model="postcodeInput">
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-2">
                                    <label for="mobileNumberInput">Mobile Number:</label>
                                    <input type="tel" class="form-control" name="mobileNumberInput" id="mobileNumberInput" v-model="mobileNumberInput">
                                </div>
                            </fieldset>
                            <div class="my-5">
                                <label class="d-flex justify-content-between align-items-center font-weight-bold">
                                    Terms and Conditions
                                    <a href="#" @click.prevent="showTerms = !showTerms">
                                        <button class="btn btn-secondary" v-if="!showTerms">Show</button>
                                        <button class="btn btn-secondary" v-else>Hide</button>
                                    </a>
                                </label>
                                <div v-if="showTerms" class="alert alert-info my-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel lorem eget justo aliquet luctus. Duis placerat, mi et scelerisque euismod, massa orci eleifend justo, eget bibendum velit diam ac justo.
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary float-end text-light">Submit</button>
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
            firstNameInput: '',
            lastNameInput: '',
            usernameInput: '',
            passwordInput: '',
            confirmPasswordInput: '',
            emailInput: '',
            streetAddressInput: '',
            suburbInput: '',
            postcodeInput: '',
            mobileNumberInput: '',
            showTerms: false
        }
    },
    methods: {
        checkForm(e) {
            var result = true;
            this.errors = [];

            // Validate first name
            if (!this.firstNameInput.trim()) {
                result = false;
                this.errors.push("Please enter first name.");
            } else if (!/^[A-Za-z]+$/.test(this.firstNameInput.trim())) {
                result = false;
                this.errors.push("First name must contain letters only.");
            }

            // Validate last name
            if (!this.lastNameInput.trim()) {
                result = false;
                this.errors.push("Please enter last name.");
            } else if (!/^[A-Za-z]+$/.test(this.lastNameInput.trim())) {
                result = false;
                this.errors.push("Last name must contain letters only.");
            }

            // Validate username
            if (!this.usernameInput.trim() || this.usernameInput.trim().length < 3) {
                result = false;
                this.errors.push("Please enter a username with at least 3 characters.");
            }

            // Validate password
            if (!this.passwordInput.trim() || this.passwordInput.trim().length < 8) {
                result = false;
                this.errors.push("Please enter a password with at least 8 characters.");
            } else if (!/[!$%^&*]/.test(this.passwordInput.trim())) {
                result = false;
                this.errors.push("Password must contain at least one of the following special characters: $, %, ^, &, or *");
            }

            // Validate confirm password
            if (this.passwordInput !== this.confirmPasswordInput) {
                result = false;
                this.errors.push("Passwords do not match.");
            }

            // Validate email
            if (!this.emailInput.trim()) {
                result = false;
                this.errors.push("Please enter an email address.");
            } else if (!/\S+@\S+\.\S+/.test(this.emailInput.trim())) {
                result = false;
                this.errors.push("Please enter a valid email address.");
            }

            // Validate street address
            if (this.streetAddressInput.trim() && this.streetAddressInput.trim().length > 40) {
                result = false;
                this.errors.push("Street address must be at most 40 characters.");
            }

            // Validate suburb
            if (this.suburbInput.trim() && this.suburbInput.trim().length > 20) {
                result = false;
                this.errors.push("Suburb must be at most 20 characters.");
            }

            // Validate postcode
            if (!this.postcodeInput.trim() || !/^\d{4}$/.test(this.postcodeInput.trim())) {
                result = false;
                this.errors.push("Please enter a valid 4-digit postcode.");
            }

            // Validate mobile number
            if (!this.mobileNumberInput.trim() || !/^04\d{8}$/.test(this.mobileNumberInput.trim())) {
                result = false;
                this.errors.push("Please enter a valid 10-digit mobile number starting with 04.");
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
