package bg.elsys.ip.rest;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;

public class CorsResponseFilter implements ContainerResponseFilter {

	@Override
	public void filter(ContainerRequestContext requestContext,   ContainerResponseContext responseContext)
	    throws IOException {
			requestContext.getHeaders().add("Access-Control-Allow-Origin","*");
			requestContext.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
			requestContext.getHeaders().add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			requestContext.getHeaders().add(" Content-Type", "application/json");
			
	        responseContext.getHeaders().add("Access-Control-Allow-Origin","*");
	        responseContext.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
	        responseContext.getHeaders().add("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
	        responseContext.getHeaders().add(" Content-Type", "application/json");
	       
	  }
}
