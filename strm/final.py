import streamlit as st
import sqlite3
from subprocess import run

def create_table():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)''')
    conn.commit()
    conn.close()

def add_user(username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("INSERT INTO users (username, password) VALUES (?,?)", (username, password))
    conn.commit()
    conn.close()

def check_user(username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    result = c.fetchone()
    conn.close()
    if result:
        return True
    return False

def main():
    st.title("Login Page")

    username = st.text_input("Username")
    password = st.text_input("Password", type='password')
    profession=st.selectbox("Profession:",("Doctor","Patient","Pharmacist"))

    if st.button("Submit"):
        if check_user(username, password):
            st.success("Login successful")
            if profession.lower()=='doctor':
                run("streamlit run final1.py")
            else:
                run("streamlit run final2.py")

        else:
            st.error("Incorrect username or password")

if __name__ == '__main__':
    create_table()
    main()



