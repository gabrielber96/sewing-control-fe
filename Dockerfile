FROM node:10.24.1-alpine
WORKDIR /sewing-control-p
COPY  . .
RUN npm install 
CMD ["ng serve"] 