package bg.elsys.ip.rest;

import io.swagger.annotations.ApiModelProperty;

public class Car {
	@ApiModelProperty(required = true)
	private int id;
	private String model;
	private String description;
	private String image;
	private String engine;
	private String transmission;
	private String state;
	private String power;
	private String color;

	public Car() {
	}

	public Car(int id, String model, String description, String image, String engine, String transmission, String state, String power, String color) {
		super();
		this.setId(id);;
		this.setModel(model);;
		this.setDescription(description);
		this.setImage(image);
		this.setEngine(engine);
		this.setTransmission(transmission);
		this.setState(state);
		this.setPower(power);
		this.setColor(color);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getEngine() {
		return engine;
	}

	public void setEngine(String engine) {
		this.engine = engine;
	}

	public String getTransmission() {
		return transmission;
	}

	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPower() {
		return power;
	}

	public void setPower(String power) {
		this.power = power;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
}
