ARG port=80

# Stage 1 - the build process
FROM node:12.16 as build-react
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# RUN yarn
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.19
COPY --from=build-react /usr/src/app/build /usr/share/nginx/html
EXPOSE $port
CMD ["nginx", "-g", "daemon off;"]
