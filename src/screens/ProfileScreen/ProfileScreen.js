import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../common/images';
import {actuatedNormalize} from '../../common/helper/Helper';
import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';
import {strings} from '../../common/strings';

const ProfileScreen = () => {
  const [chanegeButtonColor, setChanegeButtonColor] = useState('Badges');
  const data = [
    {
      id: 1,
      Title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      image: images.menducky,
      extraText: '3X',
    },
    {
      id: 1,
      Title: 'Born Winner',
      description: 'Top 10% of highest spending players in a month',
      image: images.menducky,
    },
    {
      id: 1,
      Title: 'First Stripe Earned',
      description: 'Won 7 under-over games in a row',
      image: images.menducky,
    },
    {
      id: 1,
      Title: 'Trader of the Month',
      description: 'Top 10% of highest spending players in a month',
      image: images.menducky,
    },
    {
      id: 1,
      Title: 'Rising Star',
      description: 'Top 10% of highest spending players in a month',
      image: images.menducky,
    },
    {
      id: 1,
      Title: 'Jackpot',
      description: 'Top 10% of highest spending players in a month',
      image: images.menducky,
    },
    {
      id: 1,
      Title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      image: images.menducky,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardConteinar}>
        <Image style={styles.cardImage} source={item.image} />
        <View style={styles.cardTextConteinar}>
          <Text style={styles.cardTitleText}>
            {item.Title}
            <Text style={styles.extraText}>
              {item?.extraText != undefined && ' ' + item.extraText}
            </Text>
          </Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: colors.foamy_Milk}}>
      <View style={styles.headerView}>
        <View style={styles.headerChildView}>
          <TouchableOpacity>
            <Image
              style={styles.headerImage}
              resizeMode="contain"
              source={images.Logo}
            />
          </TouchableOpacity>
          <Text style={styles.headerName}>{strings.Profile}</Text>
          <TouchableOpacity>
            <Image
              style={styles.headerImage}
              resizeMode="contain"
              source={images.Comment}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainConteinar}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.ProfileIcon} source={images.profile} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editIconConteinar}
              activeOpacity={1}>
              <Image style={styles.editIcon} source={images.Edit} />
            </TouchableOpacity>
            <Text style={styles.userName}>{strings.Jina_Simons}</Text>
            <Text style={styles.ptsText}>{strings.Pts_600}</Text>
            <Text style={styles.bioText}>{strings.bio}</Text>
          </View>
          <View style={styles.logoutConteinar}>
            <TouchableOpacity>
              <Image style={styles.logoutIcon} source={images.Logout} />
            </TouchableOpacity>
            <Text style={styles.logoutText}>{strings.LOGOUT}</Text>
          </View>
          <View style={styles.boxConteinar}>
            <Image
              resizeMode="contain"
              style={styles.starImage}
              source={images.MoonStar}
            />
            <View style={styles.boxChildConteinar}>
              <View style={styles.UnderOrOverView}>
                <Text style={styles.UnderOrOverText}>
                  {strings.Under_or_Over}
                </Text>
                <View style={styles.errowContainar}>
                  <Image
                    style={styles.errowImage}
                    resizeMode="contain"
                    source={images.UpperErrow}
                  />
                  <Text style={styles.PensentegText}>{strings.Number81}</Text>
                </View>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.UnderOrOverText}>{strings.Top_5}</Text>
                <View style={styles.errowContainar}>
                  <Image
                    style={styles.errowImage}
                    resizeMode="contain"
                    source={images.DownErrow}
                  />
                  <Text style={styles.PensentegText}>{strings.Number51}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonsConteinar}>
          <TouchableOpacity
            onPress={() => setChanegeButtonColor('Games played')}
            style={[
              styles.buttonTextConteinar,
              {
                borderBottomColor:
                  'Games played' == chanegeButtonColor
                    ? colors.primary
                    : colors.white,
              },
            ]}>
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    'Games played' == chanegeButtonColor
                      ? colors.primary
                      : colors.grey,
                },
              ]}>
              {strings.Games_played}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChanegeButtonColor('Badges')}
            style={[
              styles.buttonTextConteinar,
              {
                borderBottomColor:
                  'Badges' == chanegeButtonColor
                    ? colors.primary
                    : colors.white,
              },
            ]}>
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    'Badges' == chanegeButtonColor
                      ? colors.primary
                      : colors.grey,
                },
              ]}>
              {strings.Badges}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginBottom: actuatedNormalize(110)}}
          data={data}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerView: {
    padding: actuatedNormalize(15),
    backgroundColor: colors.white,
  },
  headerChildView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: actuatedNormalize(15),
    alignItems: 'center',
    padding: actuatedNormalize(15),
    backgroundColor: colors.white,
  },
  headerImage: {
    width: actuatedNormalize(30),
    height: actuatedNormalize(30),
  },
  headerName: {
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_Medium,
    color: colors.grey,
  },
  editIcon: {
    width: actuatedNormalize(12),
    height: actuatedNormalize(12),
    alignSelf: 'center',
  },
  editIconConteinar: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: actuatedNormalize(24),
    width: actuatedNormalize(24),
    position: 'absolute',
    left: actuatedNormalize(200),
    top: actuatedNormalize(63),
    borderRadius: actuatedNormalize(20),
    borderWidth: 1.5,
    borderColor: colors.fullLightpink,
  },
  mainConteinar: {
    paddingHorizontal: actuatedNormalize(15),
    paddingBottom: actuatedNormalize(15),
    backgroundColor: colors.white,
  },
  ProfileIcon: {
    backgroundColor: '#b96f6f',
    height: actuatedNormalize(75),
    width: actuatedNormalize(75),
    alignSelf: 'center',
    marginTop: actuatedNormalize(10),
    borderRadius: actuatedNormalize(80),
  },
  userName: {
    marginTop: actuatedNormalize(10),
    fontFamily: fonts.Montserrat_Medium,
    color: colors.carbon,
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_Medium,
  },
  ptsText: {
    color: colors.grey,
    marginTop: actuatedNormalize(10),
    fontSize: actuatedNormalize(12),
    fontFamily: fonts.Montserrat_Medium,
  },
  bioText: {
    fontSize: actuatedNormalize(14),
    marginTop: actuatedNormalize(10),
    fontFamily: fonts.Montserrat_Medium,
    color: colors.grey,
    letterSpacing: 0.4,
  },
  logoutConteinar: {
    marginTop: actuatedNormalize(20),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoutIcon: {
    height: actuatedNormalize(20),
    width: actuatedNormalize(20),
    marginHorizontal: actuatedNormalize(10),
  },
  logoutText: {
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_Medium,
    color: colors.grey,
  },
  boxConteinar: {
    borderWidth: 1,
    height: actuatedNormalize(103),
    marginTop: actuatedNormalize(40),
    borderColor: colors.fullLightpink,
    paddingVertical: actuatedNormalize(17),
  },
  starImage: {
    width: actuatedNormalize(31),
    height: actuatedNormalize(27),
    alignSelf: 'center',
    position: 'absolute',
    top: actuatedNormalize(-14),
  },
  boxChildConteinar: {
    flexDirection: 'row',
  },
  UnderOrOverView: {
    width: '50%',
    marginLeft: actuatedNormalize(15),
  },
  UnderOrOverText: {
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
    color: colors.grey,
  },
  errowImage: {
    height: actuatedNormalize(30),
    width: actuatedNormalize(30),
  },
  errowContainar: {
    flexDirection: 'row',
    marginTop: actuatedNormalize(15),
    alignItems: 'center',
  },
  PensentegText: {
    fontSize: actuatedNormalize(24),
    color: colors.blacklight,
    fontFamily: fonts.Montserrat_Bold,
    marginLeft: actuatedNormalize(12),
  },
  buttonsConteinar: {
    marginTop: actuatedNormalize(5),
    height: actuatedNormalize(64),
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  buttonTextConteinar: {
    width: '50%',
    borderBottomWidth: 1,
    height: actuatedNormalize(64),
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
  },
  cardConteinar: {
    flexDirection: 'row',
    height: actuatedNormalize(105),
    backgroundColor: colors.white,
    marginTop: actuatedNormalize(16),
    marginHorizontal: actuatedNormalize(16),
  },
  cardImage: {
    marginHorizontal: actuatedNormalize(15),
    alignSelf: 'center',
    height: actuatedNormalize(60),
    width: actuatedNormalize(60),
  },
  cardTextConteinar: {
    height: actuatedNormalize(65),
    alignSelf: 'center',
  },
  cardTitleText: {
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
    color: colors.carbon,
  },
  cardDescription: {
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_Medium,
    color: colors.grey,
    width: actuatedNormalize(231),
    marginTop: actuatedNormalize(8),
  },
  extraText: {
    color: colors.cheese,
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
  },
});
