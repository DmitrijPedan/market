FROM node:12.13.1

# Add host user and group into container
USER node

# Working directory
WORKDIR /www

# Acting as service and gracefully shutdown
CMD ["node", "-e", "setInterval(() => {}, 60000); process.on('SIGTERM', () => { process.exit(0); });"]