import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {actuatedNormalize} from '../../common/helper/Helper';
import {colors} from '../../common/colors';
import {images} from '../../common/images';
import {strings} from '../../common/strings';
import {fonts} from '../../common/fonts';
import {Picker} from '@react-native-picker/picker';

const Detail = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [selectedValue, setSelectedValue] = useState(10);

  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const onClickPrediction = () => {
    setShow(false);
    navigation.navigate('BottomTabNavigator');
  };

  return (
    <View style={styles.container}>
      <Modal transparent visible={show}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.under}>{strings.YourPrediction}</Text>
            <Text style={styles.tickets}>{strings.ENTRY_TICKETS}</Text>
            <View style={styles.FlatList}>
              <Picker
                selectedValue={selectedValue}
                selectionColor={colors.foamy_MilkopFive}
                itemStyle={{
                  fontSize: actuatedNormalize(24),
                  height: actuatedNormalize(230),
                  color: colors.black,
                  fontFamily: fonts.Montserrat_SemiBold,
                }}
                onValueChange={itemValue => setSelectedValue(itemValue)}>
                {data.map((item, index) => (
                  <Picker.Item
                    key={index}
                    label={item.toString()}
                    value={item}
                  />
                ))}
              </Picker>
            </View>
            <Text style={styles.win}>{strings.You_can_win}</Text>
            <View style={styles.Total}>
              <Text style={styles.rs}>{strings.$2000}</Text>
              <View style={styles.rowContain}>
                <Text style={styles.totalText}>{strings.Total}</Text>
                <Image style={styles.img} source={images.Rupee} />
                <Text style={styles.Five}>{strings.Number5}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={onClickPrediction}>
              <Text style={styles.btnText}>{strings.Submit_my_prediction}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
  },
  modalView: {
    backgroundColor: 'white',
    height: actuatedNormalize(470),
    paddingHorizontal: actuatedNormalize(16),
    borderTopLeftRadius: actuatedNormalize(20),
    borderTopRightRadius: actuatedNormalize(20),
  },
  modalMainView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  under: {
    marginTop: actuatedNormalize(44),
    color: colors.carbon,
    fontSize: actuatedNormalize(16),
    fontFamily: fonts.Montserrat_SemiBold,
  },
  tickets: {
    marginTop: actuatedNormalize(22),
    color: colors.grey,
    fontSize: actuatedNormalize(12),
    fontFamily: fonts.Montserrat_SemiBold,
  },
  FlatList: {
    height: actuatedNormalize(250),
  },
  flatListViewText: {
    fontSize: actuatedNormalize(24),
  },
  win: {
    color: colors.lightgrey,
    fontSize: actuatedNormalize(12),
    fontFamily: fonts.Montserrat_Medium,
  },
  rs: {
    color: colors.green,
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
  },
  Total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: actuatedNormalize(5),
  },
  rowContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    fontSize: actuatedNormalize(12),
    fontFamily: fonts.Montserrat_Medium,
    color: colors.grey,
  },
  img: {
    marginHorizontal: actuatedNormalize(5),
    width: actuatedNormalize(15),
    height: actuatedNormalize(15),
  },
  Five: {
    fontSize: actuatedNormalize(14),
    color: colors.carbon,
    fontFamily: fonts.Montserrat_SemiBold,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: actuatedNormalize(40),
    borderRadius: actuatedNormalize(50),
    marginTop: actuatedNormalize(28),
  },
  btnText: {
    color: colors.white,
    fontSize: actuatedNormalize(12),
  },
});
