import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#EB6AAF",
        alignItems: "center"
    },

    logoContainer: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },

    formContainer: {
        width: "100%",
        height: "80%",
        paddingVertical: 40,
        backgroundColor: "#FAFAFA",
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 24,
    },
    formContainerHeader: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    formTitle: {
        fontSize: 32,
        fontWeight: "600",
        color: "#EB6AAF",
    },

    chooseAccount: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16
    },
    accountType: {
        fontSize: 18,
        fontWeight: "600",
        color: "#EB6AAF",
        opacity: 0.5,
    },
    activeAccountType: {
        fontSize: 18,
        fontWeight: "600",
        color: "#6A77EB",
        opacity: 1,
    },

    accountTypeLink: {
        padding: 10
    },
    activeAccountTypeLink: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#6A77EB",
        borderRadius: 1,
    },

    inputsContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 16,
        marginTop: 8,
    },
    formsTopic: {
        fontSize: 16,
        fontWeight: "500",
        color: "#EB6AAF",
        position: "relative",
        right: 80,
    },
    formInput: {
        width: "80%",
        height: 50,
        backgroundColor: "#EEE",
        borderRadius: 25,
        paddingLeft: 20,
        color: "#1A1A1A",
    },
    formInput50: {
        width: "47%",
        height: 50,
        backgroundColor: "#EEE",
        borderRadius: 25,
        paddingLeft: 20,
        color: "#1A1A1A",
    },
    formInput50Container: {
        width: "80%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
});