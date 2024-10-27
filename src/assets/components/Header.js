import React from 'react'

export default function Header() {
  return (
    <div>
        <section>
            <div>
                logo
            </div>
            <div>
                <nav>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">cart</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
  )
}
