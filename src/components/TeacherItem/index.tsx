import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/gustavo2892.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gustavo Freitas</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das melhorees tecnologias de química avançada.
        {'\n'}
        {'\n'}
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experências explosivas. Mais de 80.000 alunos já
        passaram por suas explosões
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora
          {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
