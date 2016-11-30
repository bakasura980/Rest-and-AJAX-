package bg.elsys.ip.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Path("/cars")
@Api(value = "Api for querying cars")
public class CarResource {

	@GET
	@ApiOperation(value = "get  all cars")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Car> getCars(@QueryParam("page") int page,
			 @QueryParam("engine") String engine, @QueryParam("transmission") String transmission,
			 @QueryParam("state") String state, @QueryParam("power") String power, @QueryParam("color") String color) {

		CarService carService = CarService.getInstance();
		PagedResponse carsInPages = carService.getCarsInPagesFiltered(page, engine, transmission, state, power, color);
		//Have to change
		return carsInPages.getData();
	}
	
	@Path("/models")
	@GET
	@ApiOperation("get all distinct car models")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Car> getAllDistinctCarModels(@QueryParam("page") int page){
		return CarService.getInstance().getAllDistinctCarModels(page).getData();
	}

	@POST
	@ApiOperation(value = "create new car", response = Car.class)
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCar(Car car) {
		CarService.getInstance().addCar(car);

		return Response.ok(car).status(Status.CREATED).build();
	}
}
