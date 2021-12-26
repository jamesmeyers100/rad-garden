# rad-garden
- Rad Garden is a gardening app that is still too early in development to accurately describe

## KEYCLOAK SETUP
- In depth installation: https://scalac.io/blog/user-authentication-keycloak-1/

1. In a terminal tab #1: $ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=<YOUR PASSWORD> -e DB_VENDOR=H2 jboss/keycloak
2. Navigate to localhost:8080 in browser
3. Login to keycloak as admin using password created in step 1.
4. Create new realm (name it 'ruby' to match realm in keycloak.json file in server directory or change to unique realm to match)
5. Create new user

## CLIENT SETUP
1. In terminal tab #2: $ npm start
2. In terminal tab #3: $ npm serve
3. navigate to localhost in browser to confirm everyting working and login to keycloak
