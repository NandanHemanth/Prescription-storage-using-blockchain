import streamlit as st
import sqlite3
import webbrowser  

def create_table():
    conn = sqlite3.connect('doc.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS doc (id TEXT)''')
    conn.commit()
    conn.close()

def add_user(id):
    conn = sqlite3.connect('doc.db')
    c = conn.cursor()
    c.execute("INSERT INTO doc (id) VALUES (?)", (id))
    conn.commit()
    conn.close()

def check_user(id):
    conn = sqlite3.connect('doc.db')
    c = conn.cursor()
    c.execute("SELECT * FROM doc WHERE id=?", id)
    result = c.fetchone()
    conn.close()
    if result:
        return True
    return False

def main():
    st.title("Doctor Page")

    docID = st.text_input("DocID")
    docField = st.selectbox("Field:",("ENT","Orthopaedic","Gynecologist","Surgeon"))

    if st.button("Access"):
        if check_user(docID):
            webbrowser.open("http://localhost:3000", new = 1)

if __name__ == '__main__':
    main()



