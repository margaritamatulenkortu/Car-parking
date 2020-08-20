FROM store/softwareag/webmethods-microservicesruntime:10.5.0.3-alpine
COPY ./packages/ /opt/softwareag/IntegrationServer/replicate/inbound/
COPY ./config/ /opt/softwareag/IntegrationServer/config/
#automatically unpack all zipped packages
RUN for pck in $(ls -1 /opt/softwareag/IntegrationServer/replicate/inbound/*.zip); \
    do \
        target=${pck/replicate\/inbound/packages}; \ 
        target=${target%.zip}; \
        mkdir $target; \
        unzip $pck -d  $target; \
    done