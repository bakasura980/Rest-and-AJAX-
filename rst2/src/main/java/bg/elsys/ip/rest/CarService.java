package bg.elsys.ip.rest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class CarService {
	private static CarService instance;

	public static CarService getInstance() {
		if (instance == null) {
			instance = new CarService();
		}
		return instance;
	}

	private List<Car> carlist = new ArrayList<>();

	public CarService() {
		carlist.add(new Car(1, "Opel", "Mnogo ekstri", "bl", "a", "a", "a", "a", "a"));
	}

	public List<Car> getCars() {
		return Collections.unmodifiableList(carlist);
	}

	public void addCar(Car car) {
		carlist.add(car);
	}

	public PagedResponse getCarsinPage(int page, List<Car> pageOfCars){
		
		int totalPages = (int) Math.ceil(((double) carlist.size()) / 3);
		PagedResponse response = new PagedResponse(pageOfCars, page, totalPages);

		return response;
	}
	
	public List<Car> filterCars(int page, String engine, String transmission, String state, String power, String color){
		if (engine != null) {
			if (transmission != null) {
				if (state != null) {
					if (power != null) {
						if (color != null) {
							return carlist.stream().filter((car) -> car.getEngine().equals(engine) &&
									car.getTransmission().equals(transmission) && car.getState().equals(state) &&
									car.getPower().equals(power) && car.getColor().equals(color))
									.limit(page*3).collect(Collectors.toList());
						}
						return carlist.stream().filter((car) -> car.getEngine().equals(engine) &&
								car.getTransmission().equals(transmission) && car.getState().equals(state) &&
								car.getPower().equals(power))
								.limit(page*3).collect(Collectors.toList());
					} 
					return carlist.stream().filter((car) -> car.getEngine().equals(engine) &&
							car.getTransmission().equals(transmission) && car.getState().equals(state))
							.limit(page*3).collect(Collectors.toList());
				}
				return carlist.stream().filter((car) -> car.getEngine().equals(engine) &&
						car.getTransmission().equals(transmission))
						.limit(page*3).collect(Collectors.toList());
			}
			return carlist.stream().filter((car) -> car.getEngine().equals(engine))
					.limit(page*3).collect(Collectors.toList());
		}else if(transmission != null){
			if (state != null) {
				if (power != null) {
					if (color != null) {
						return carlist.stream().filter((car) -> 
								car.getTransmission().equals(transmission) && car.getState().equals(state) &&
								car.getPower().equals(power) && car.getColor().equals(color))
								.limit(page*3).collect(Collectors.toList());
					}
					return carlist.stream().filter((car) -> 
							car.getTransmission().equals(transmission) && car.getState().equals(state) &&
							car.getPower().equals(power))
							.limit(page*3).collect(Collectors.toList());
				} 
				return carlist.stream().filter((car) -> 
						car.getTransmission().equals(transmission) && car.getState().equals(state))
						.limit(page*3).collect(Collectors.toList());
			}
			return carlist.stream().filter((car) -> 
					car.getTransmission().equals(transmission))
					.limit(page*3).collect(Collectors.toList());
		}else if(state != null){
			if (power != null) {
				if (color != null) {
					return carlist.stream().filter((car) -> 
							car.getState().equals(state) &&
							car.getPower().equals(power) && car.getColor().equals(color))
							.limit(page*3).collect(Collectors.toList());
				}
				return carlist.stream().filter((car) -> 
						 car.getState().equals(state) &&
						car.getPower().equals(power))
						.limit(page*3).collect(Collectors.toList());
			} 
			return carlist.stream().filter((car) -> 
					car.getState().equals(state))
					.limit(page*3).collect(Collectors.toList());
		}else if(power != null){
			if (color != null) {
				return carlist.stream().filter((car) -> 
						car.getPower().equals(power) && car.getColor().equals(color))
						.limit(page*3).collect(Collectors.toList());
			}
			return carlist.stream().filter((car) -> 
					car.getPower().equals(power))
					.limit(page*3).collect(Collectors.toList());
		}else if(color != null){
			return carlist.stream().filter((car) -> 
			car.getColor().equals(color))
			.limit(page*3).collect(Collectors.toList());
		}else
			return carlist.stream().filter(car -> engine == null || transmission == null || state == null || power == null || color == null)
				.limit(page*3).collect(Collectors.toList());
	}
	
	
	public PagedResponse getCarsInPagesFiltered(int page, String engine, String transmission, String state,
			String power, String color) {
		List<Car> pageOfCars = filterCars(page, engine, transmission, state, power, color);
		
		return getCarsinPage(page, pageOfCars);
	}

	public PagedResponse getAllDistinctCarModels(int page){
		List<Car> pageOfCars = carlist.stream().limit(page*3).collect(Collectors.toList());
		return getCarsinPage(page, pageOfCars);
		
	}
}
