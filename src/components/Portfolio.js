import React from 'react';

const styles = {
    projCard: {
        width: '30%',
    },
};

function Portfolio() {
    return (
        <div class="container">
            <div class="card my-5 rounded-3 bg-lightG text-center">
                <h3 class="m-4">Past Work</h3>
                <div class="card-body p-3">
                    <div id="Work">
                        <div class="row d-flex justify-content-evenly">
                            <div class="card bg-cham p-2" style={styles.projCard}>
                                <img src="/images/opticalPhoto.jpg" alt="Lenses in Production"/>
                                <div class="card-body">
                                    <h5>Optical Order Tracker</h5>
                                    <p class="card-text">An order management system designed to track orders and notify patients of their order status. For use in an optical setting</p>
                                </div>
                                <div class="card-footer d-flex justify-content-evenly bg-lightG">
                                    <a href="https://imagine-drive.herokuapp.com/" target="_blank" without rel="noreferrer" class="btn">Deployed Site</a>
                                    <a href="https://github.com/gmunoz94/project2" target="_blank" without rel="noreferrer" class="btn">Github Repo</a>
                                </div>
                            </div>
                            <div class="card p-2 bg-cham" style={styles.projCard}>
                                <img src="/images/passGen.png" alt="Lenses in Production"/>
                                <div class="card-body">
                                    <h5>Password Generator</h5>
                                    <p class="card-text">A random password generator that will take user input and output a password based on user defined properties.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-evenly bg-lightG">
                                    <a href="https://gmunoz94.github.io/passGenerator/" target="_blank" without rel="noreferrer" class="btn">Deployed Site</a>
                                    <a href="https://github.com/gmunoz94/passGenerator" target="_blank" without rel="noreferrer" class="btn">Github Repo</a>                                    </div>
                                </div>
                            <div class="card p-2 bg-cham" style={styles.projCard}>
                                <img src="/images/billsPC.png" alt="Lenses in Production"/>
                                <div class="card-body">
                                    <h5>Bill's PC</h5>
                                    <p class="card-text">Rudimentary web application to build a custom Pokemon. Complete with "Nickname" and moveset.</p>
                                </div>
                                <div class="card-footer d-flex justify-content-evenly bg-lightG">
                                    <a href="https://gmunoz94.github.io/pokeProj/" target="_blank" without rel="noreferrer" class="btn">Deployed Site</a>
                                    <a href="https://github.com/gmunoz94/pokeProj" target="_blank" without rel="noreferrer" class="btn">Github Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Portfolio;