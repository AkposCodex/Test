<template>
    <div class="thank-you-container">
        <div class="thank-you-card">
            <h1>Thank You for Registering!</h1>
            <p>Your registration has been completed successfully.</p>
            <p>We're excited to have you on board. Check your email for a confirmation message.</p>
            <router-link to="/">Back to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThankYou'
}
</script>

<style scoped>
.thank-you-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.thank-you-card {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
}

.thank-you-card h1 {
    color: #333;
    margin-bottom: 20px;
}

.thank-you-card p {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.6;
}

.thank-you-card a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 30px;
    background: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
}

.thank-you-card a:hover {
    background: #764ba2;
}
</style>