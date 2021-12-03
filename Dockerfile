FROM node:10 AS builder
WORKDIR /sewing-control-fe
COPY  . .
RUN npm install 
RUN npm i @angular/cli@7.3.7 -g
RUN npm run build
# EXPOSE 3400
# CMD ["ng","serve"] 
FROM nginx:alpine 
WORKDIR /usr/share/nginx/html 
RUN rm -rf ./*
COPY --from=builder /sewing-control-fe/dist/architectui-angular-free .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
