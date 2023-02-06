import streamlit as st
import sqlite3
import webbrowser

def create_table():
    conn = sqlite3.connect('pharma.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS pharma (id TEXT)''')
    conn.commit()
    conn.close()

def add_user(id):
    conn = sqlite3.connect('pharma.db')
    c = conn.cursor()
    c.execute("INSERT INTO pharma (id) VALUES (?)", (id))
    conn.commit()
    conn.close()

def check_user(id):
    conn = sqlite3.connect('pharma.db')
    c = conn.cursor()
    c.execute("SELECT * FROM pharma WHERE id=?", id)
    result = c.fetchone()
    conn.close()
    if result:
        return True
    return False

def main():
    st.title("Pharmacist/Patient Page")

    pID = st.text_input("PharmacistID/PatientID")

    if st.button("Access"):
        if check_user(pID):
            webbrowser.open("http://localhost:3000", new = 1)


if __name__ == '__main__':
    main()

