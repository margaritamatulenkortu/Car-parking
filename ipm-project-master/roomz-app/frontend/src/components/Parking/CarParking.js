import React from 'react';


const CarParking = () => {
	return (
		<div className="container">
				<div className="py-5 text-center">
						<img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Feature_parking.svg/600px-Feature_parking.svg.png" alt="" width="72" height="72" />
						<h2>Parking system&#8203;</h2>
						<p className="lead">Register your car or change number fast and easy</p>
				</div>

				<div className="row">
						<div className="col-md-4 order-md-2 mb-4">
								<h4 className="d-flex justify-content-between align-items-center mb-3">
										<span className="text-muted">Your parking history</span>
										<span className="badge badge-secondary badge-pill">2</span>
								</h4>
								<ul className="list-group mb-3">
										<li className="list-group-item d-flex justify-content-between lh-condensed">
												<div>
														<h6 className="my-0">Mukusalas BC zone 1</h6>
														<small className="text-muted">21.06.2020.</small>
												</div>
												<span className="text-muted">FG3456</span>
										</li>
										<li className="list-group-item d-flex justify-content-between lh-condensed">
												<div>
														<h6 className="my-0">Mukusalas BC zone 2</h6>
														<small className="text-muted">26.06.2020.</small>
												</div>
												<span className="text-muted">HD3457</span>
										</li>
										<li className="list-group-item d-flex justify-content-between lh-condensed">
												<div>
														<h6 className="my-0">Mukusalas BC zone 1</h6>
														<small className="text-muted">27.06.2020.</small>
												</div>
												<span className="text-muted">FG3456</span>
										</li>
										<li className="list-group-item d-flex justify-content-between bg-light">
												<div className="text-success">
														<h6 className="my-0">Mukusalas BC zone 2</h6>
														<small>28.06.2020.</small>
												</div>
												<span className="text-success">FG3456</span>
										</li>
								</ul>

								<form className="card p-2">
										<div className="input-group">
												<input type="text" className="form-control" placeholder="Todays car number" />
												<div className="input-group-append">
														<button type="submit" className="btn btn-secondary">Add</button>
												</div>
										</div>
								</form>
						</div>
						<div className="col-md-8 order-md-1">
								<h4 className="mb-3">Add new car for period</h4>
								<form className="needs-validation" novalidate="">
										<div className="row">
												<div className="col-md-6 mb-3">
														<label for="firstName">From:</label>
														<input type="text" className="form-control" id="firstName" value="" required="" dd="" />
														<div className="invalid-feedback">
																Valid first name is required.
														</div>
												</div>
												<div className="col-md-6 mb-3">
														<label for="lastName">Till:</label>
														<input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
														<div className="invalid-feedback">
																Valid last name is required.
														</div>
												</div>
										</div>

										<div className="mb-3">
												<label for="username">Car number</label>
												<div className="input-group">

														<input type="text" className="form-control" id="username" placeholder="" required="" />
														<div className="invalid-feedback">
																Your username is required.
														</div>
												</div>
										</div>

										<div className="mb-3">
												<label for="email">Employee ID<span className="text-muted"></span></label>
												<input type="email" className="form-control" id="email" placeholder="" />
												<div className="invalid-feedback">
														Please enter a valid email address for shipping updates.
												</div>
										</div>
										<div className="row">
												<div className="col-md-5 mb-3">
														<label for="country">Change car</label>
														<select className="custom-select d-block w-100" id="country" required="">
																<option value="">Choose from your cars..</option>
																<option>FG3456</option>
														</select>
														<div className="invalid-feedback">
																Please select a valid country.
														</div>
												</div>
												<div className="col-md-4 mb-3">
														<label for="state">Date</label>
														<select className="custom-select d-block w-100" id="state" required="">
																<option value="">Choose...</option>
																<option>29.06.2020.</option>
														</select>
														<div className="invalid-feedback">
																Please provide a valid state.
														</div>
												</div>
												<div className="col-md-3 mb-3">
														<label for="zip"></label>
														<div className="invalid-feedback">
																Zip code required.
														</div>
												</div>
										</div>
										<hr className="mb-4" />
										<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="same-address" />
												<label className="custom-control-label" for="same-address">Save car</label>
										</div>
										<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="save-info" />
												<label className="custom-control-label" for="save-info">Agree with terms and conditions</label>
										</div>
		

										<h4 className="mb-3">Edit Cars</h4>

										<div className="d-block my-3">
												<div className="custom-control custom-radio">
														<input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
														<label className="custom-control-label" for="credit">Add new car</label>
												</div>
												<div className="custom-control custom-radio">
														<input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
														<label className="custom-control-label" for="debit">Remove car</label>
												</div>
												<div className="custom-control custom-radio">
														<input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
														<label className="custom-control-label" for="paypal">Check car</label>
												</div>
										</div>
										<div className="row">
												<div className="col-md-6 mb-3">
														<label for="cc-name">Employees ID</label>
														<input type="text" className="form-control" id="cc-name" placeholder="" required="" />
														<small className="text-muted">Only for Cognizant employees</small>
														<div className="invalid-feedback">
																Name on card is required
														</div>
												</div>
										</div>
										<div className="row">
												<div className="col-md-3 mb-3">
														<label for="cc-expiration">Car number</label>
														<input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
														<div className="invalid-feedback">
																Expiration date required
														</div>
												</div>
										</div>
								
										<button className="btn btn-primary btn-lg" type="submit">Submit</button>
								</form>
						</div>
				</div>

				<footer className="my-5 pt-5 text-muted text-center text-small">
						<p className="mb-1">© 2020 AppZilla</p>
				</footer>
			</div>
	)
}

export default CarParking;