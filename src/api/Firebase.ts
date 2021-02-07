
import firebase from 'firebase';
import Firebase from "../config/keys";


export async function createUser(email: string, nome: string, senha: string) {

    let error = false;
    let UID;

    if (firebase.app.length > 0) {
        try {

            await Firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
                UID = Firebase.auth().currentUser?.uid;
            }).catch(() => {
                error = true;
            });
        } catch (error) {
            console.error('Erro em cadastrar login e senha');
        }

        if (error == false) {
            try {
                const database = Firebase.database().ref('User').child(`${UID}`);
                const user = { email, nome, senha };

                database.push(user).then(() => {
                    console.info('Sucesso');
                }).catch((error) => {
                    console.error('Erro');
                })

            } catch (error) {
                console.error(error)
            }
        }
    } else {
        console.error('Erro ao conectar o banco de dados');
    }
}


export async function signIn(email: string, senha: string) {

    let uid;
    let error = false;
    let data = {};

    await Firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
        uid = Firebase.auth().currentUser?.uid;
        error = false;
    }).catch((error) => {
        error = true;
        console.error('Erro ao tentar fazer login')
    });

    if (!error) {
        const UID = uid;

        const getUser = Firebase.database().ref('/User/' + uid);
        await getUser.once('child_added', (snapshot) => {
            try {
               const { email, nome } = snapshot.val();
               data = {
                   token : UID,
                   user : {
                    nomeUser : nome,
                    emailUser : email
                   }
               }
            } catch (error) {
                console.log(error)
            }

        });

    }

    return data;

}
