//elementos da interface

import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { stylesHome } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  //estado, funcao que atualiza
  const [participantes, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participantes.includes(participantName)) {
      return Alert.alert(
        "Sinto muito!",
        "O participante já está na lista de presença"
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleRemoveParticipant(name: string) {

    
    Alert.alert("Confirmação", `Você deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.titulo}>Nome evento:</Text>
      <Text style={stylesHome.texto}> Maio,2024</Text>
      <View style={stylesHome.form}>
        <TextInput
          style={stylesHome.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="default"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={stylesHome.button}
          onPress={handleParticipantAdd}
        >
          <Text style={stylesHome.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participantes}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={stylesHome.textEmpty}>Não há pessoas no evento</Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          ></Participant>
        )}
      />
    </View>
  );
}
