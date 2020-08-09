import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Main from '../Main'
import BooksTable from '../BooksTable'
import Modal from '../Modal'

const HomePage = () => (
    <>
        <Container>
            <Header />
            <Main>
                <BooksTable />
            </Main>
        </Container>
        <Modal />
    </>
)

export default HomePage