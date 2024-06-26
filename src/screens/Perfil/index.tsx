import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ArrowLeft, Gear, HeartBreak } from "phosphor-react-native";
import ProfileImage from "../../assets/profile-img.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";



export function Perfil({navigation}) {
    const [selectedOption, setselectedOption] = useState('posts');

    const { user } = useContext(UserContext);


    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <ArrowLeft size={32} weight="regular" color="#6A77EB"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Config")}>
                    <Gear
                        color="#444"
                        size={30}
                        weight="regular"
                    />
                </TouchableOpacity>
            </View>
            <View style={{alignItems: "center", gap: 16}}>
                <View style={styles.profileEditField}>
                    <TouchableOpacity style={styles.profileImage}>
                        <ProfileImage width={100} height={100}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileNumbers}>
                    <View style={{alignItems: "center", width: 100}}>
                        <Text style={styles.profileNumberText}>0</Text>
                        <Text style={styles.profileNumberInfo}>Doações</Text>
                    </View>
                    <View style={{alignItems: "center", width: 100}}>
                        <Text style={styles.profileNumberText}>0</Text>
                        <Text style={styles.profileNumberInfo}>Seguindo</Text>
                    </View>
                    <View style={{alignItems: "center", width: 100}}>
                        <Text style={styles.profileNumberText}>0</Text>
                        <Text style={styles.profileNumberInfo}>Seguidores</Text>
                    </View>
                </View>
                <View style={styles.profileName}>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.profileNameText}>{(user ? user.name : "Carregando...")}</Text>
                        <Text style={styles.profileType}>Doador</Text>
                    </View>
                    <TouchableOpacity style={styles.profileEditBtn} onPress={() => navigation.navigate("EditarPerfil")}>
                        <Text style={styles.profileEditBtnText}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.chooseAccount}>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedOption === 'posts' && styles.activeAccountTypeLink]} onPress={() => setselectedOption('posts')}>
                        <Text style={[styles.accountType, selectedOption === 'posts' && styles.activeAccountType]}>Publicações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedOption === 'donations' && styles.activeAccountTypeLink]} onPress={() => setselectedOption('donations')}>
                        <Text style={[styles.accountType, selectedOption === 'donations' && styles.activeAccountType]}>Suas doações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.accountTypeLink, selectedOption === 'likes' && styles.activeAccountTypeLink]} onPress={() => setselectedOption('likes')}>
                        <Text style={[styles.accountType, selectedOption === 'likes' && styles.activeAccountType]}>Suas curtidas</Text>
                    </TouchableOpacity>
            </View>
            {
                selectedOption == 'posts' ? (
                    <ScrollView contentContainerStyle={styles.profileInteractionsContainer}>
                        <View style={styles.profileInteractions}>
                            <HeartBreak size={48} weight="regular" color="#EB6AAF"/>
                            <Text style={styles.profileInteractionsText}>Você ainda não fez publicações</Text>
                        </View>
                    </ScrollView>
                ) : selectedOption == 'donations' ? (
                    <ScrollView contentContainerStyle={styles.profileInteractionsContainer}>
                        <View style={styles.profileInteractions}>
                            <HeartBreak size={48} weight="regular" color="#EB6AAF"/>
                            <Text style={styles.profileInteractionsText}>Você ainda não fez doações</Text>
                        </View>
                    </ScrollView>
                ) : (
                    <ScrollView contentContainerStyle={styles.profileInteractionsContainer}>
                        <View style={styles.profileInteractions}>
                            <HeartBreak size={48} weight="regular" color="#EB6AAF"/>
                            <Text style={styles.profileInteractionsText}>Ainda não há nada por aqui</Text>
                        </View>
                    </ScrollView>
                )
            }
        </ScrollView>
    );
}