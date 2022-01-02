import getVacancies from "./src/features/search-vacancies/api/getVacancies";
import useRequest from "./src/hooks/useRequest";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {

  const {status, data: vacancies} = useRequest(getVacancies)

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.viewContainer}
        data={vacancies}
        renderItem={(vacancy: any) => (
          console.log(vacancy),
          <View style={styles.vacancyContainer}>
            <Text style={styles.item}>{vacancy.item.name}</Text>
          </View>
        )}
        keyExtractor={(vacancy: any) => vacancy.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  vacancyContainer: {
    flex: 1,
    backgroundColor: "gray",
    borderRadius: 8,
    justifyContent: "center",
    marginVertical: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
