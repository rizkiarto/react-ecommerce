import React, { Component } from 'react';


export default function CartColumns() {
	return (
		<div>
			<div className="container-fluid text-center d-none d-lg-block">
				<div className="row">
					<div className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">products</p>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">product name</p>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">price</p>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">Quantity</p>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">Remove</p>
					</div>
					<div className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">Total</p>
					</div>
				</div>
			</div>
		</div>
		);
};