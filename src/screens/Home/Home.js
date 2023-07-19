import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {actuatedNormalize} from '../../common/helper/Helper';
import {images} from '../../common/images';
import {colors} from '../../common/colors';
import {strings} from '../../common/strings';
import {fonts} from '../../common/fonts';
import * as Progress from 'react-native-progress';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chartView}>
        <Text style={styles.Text}>{strings.Todays_Games}</Text>
        <ImageBackground
          resizeMode="cover"
          style={styles.Image}
          source={images.Background}>
          <View style={styles.imgView}>
            <Text style={styles.commonText}>{strings.UNDER_OR_OVER}</Text>
            <Image style={styles.img} source={images.Group} />
            <Text style={[styles.Starting_in, styles.extra]}>
              {strings.Starting_in}
            </Text>
            <Image style={styles.img} source={images.Clock} />
            <Text style={[styles.Time, styles.extra2]}>{strings.Time}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.bitText}>{strings.Bitcoin_Price}</Text>
            <Text style={styles.date}>{strings.$24}</Text>
          </View>
        </ImageBackground>

        <View style={styles.priView}>
          <View style={styles.priceView}>
            <View>
              <Text style={styles.priceText}>{strings.PRIZE_POOL}</Text>
              <Text style={styles.rs}>{strings.$12}</Text>
            </View>
            <View>
              <Text style={styles.priceText}>{strings.UNDER}</Text>
              <Text style={styles.rs}>{strings.Number325x}</Text>
            </View>
            <View>
              <Text style={styles.priceText}>{strings.OVER}</Text>
              <Text style={[styles.rs]}>{strings.Number125x}</Text>
            </View>
            <View>
              <Text style={styles.priceText}>{strings.ENTRY_FEES}</Text>
              <View style={styles.rupee}>
                <Text style={[styles.rs, styles.extra4]}>
                  {strings.Number5}
                </Text>
                <Image style={styles.imgRupee} source={images.Rupee} />
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.desc}>{strings.Whats_your}</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.underBtn}
            onPress={() => navigation.navigate('Detail')}>
            <Image style={styles.fillImg} source={images.Fill} />
            <Text style={styles.underText}>{strings.UNDER}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.overBtn}
            onPress={() => navigation.navigate('Detail')}>
            <Image style={styles.fillImg} source={images.Fill2} />
            <Text style={styles.underText}>{strings.OVER}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastView1}>
          <View style={styles.lastView}>
            <View style={styles.userImgView}>
              <Image style={styles.userImg} source={images.User} />
              <Text style={styles.playerText}>{strings.Players355}</Text>
            </View>
            <View style={styles.userImgView}>
              <Image style={styles.userImg} source={images.Vector2} />
              <Text style={[styles.playerText]}>{strings.View_chart}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginVertical: actuatedNormalize(10),
            }}>
            <Progress.Bar
              borderColor={colors.foamy_Milk}
              progress={0.78}
              color={colors.pink}
              borderRadius={actuatedNormalize(10)}
              height={actuatedNormalize(8)}
              backgroundColor={colors.tempo}
              width={actuatedNormalize(325)}
            />
          </View>

          <View style={styles.predicted}>
            <Text style={styles.predictedText}>
              {strings.predicted_under232}
            </Text>
            <Text style={styles.predictedText}>
              {strings.predicted_over123}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
  Text: {
    fontSize: actuatedNormalize(16),
    fontFamily: fonts.Montserrat_SemiBold,
    paddingBottom: actuatedNormalize(16),
  },
  chartView: {
    width: actuatedNormalize(362),
    height: actuatedNormalize(400),
    alignSelf: 'center',
    marginVertical: actuatedNormalize(16),
  },
  Image: {
    paddingBottom: actuatedNormalize(25),
    paddingTop: actuatedNormalize(8),
  },
  imgView: {
    padding: actuatedNormalize(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    marginLeft: actuatedNormalize(10),
    width: actuatedNormalize(13),
    height: actuatedNormalize(13),
  },
  commonText: {
    color: colors.secondary,
    fontFamily: fonts.Montserrat_SemiBold,
    fontSize: actuatedNormalize(12),
  },
  extra: {
    paddingLeft: actuatedNormalize(50),
  },
  bitText: {
    fontSize: actuatedNormalize(14),
    color: colors.secondary,
    fontFamily: fonts.Montserrat_Medium,
  },
  date: {
    marginTop: actuatedNormalize(5),
    color: colors.white,
    fontSize: actuatedNormalize(19),
    fontFamily: fonts.Montserrat_Medium,
  },
  textView: {
    marginTop: actuatedNormalize(5),
    paddingLeft: actuatedNormalize(15),
  },
  extra2: {
    paddingLeft: actuatedNormalize(10),
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: colors.lightgrey,
    fontSize: actuatedNormalize(12),
    fontFamily: fonts.Montserrat_Medium,
  },
  rupee: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  extra4: {
    marginLeft: actuatedNormalize(40),
  },
  rs: {
    marginTop: actuatedNormalize(5),
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
    color: colors.carbon,
  },
  imgRupee: {
    marginTop: actuatedNormalize(5),
    marginLeft: actuatedNormalize(5),
    width: actuatedNormalize(10),
    height: actuatedNormalize(10),
  },
  priView: {
    marginHorizontal: actuatedNormalize(16),
    marginTop: actuatedNormalize(20),
  },
  desc: {
    marginLeft: actuatedNormalize(16),
    marginTop: actuatedNormalize(22),
    color: colors.grey,
    fontFamily: fonts.Montserrat_SemiBold,
    fontSize: actuatedNormalize(14),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: actuatedNormalize(14),
  },
  underBtn: {
    width: actuatedNormalize(150),
    height: actuatedNormalize(40),
    backgroundColor: colors.scarletGum,
    borderRadius: actuatedNormalize(20),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  overBtn: {
    width: actuatedNormalize(150),
    height: actuatedNormalize(40),
    backgroundColor: colors.primary,
    borderRadius: actuatedNormalize(20),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fillImg: {
    width: actuatedNormalize(12),
    height: actuatedNormalize(12),
    marginRight: actuatedNormalize(10),
  },
  underText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
  },
  lastView: {
    flexDirection: 'row',
    backgroundColor: colors.whiteSolid,
    marginHorizontal: actuatedNormalize(15),
    marginTop: actuatedNormalize(20),
    justifyContent: 'space-between',
  },
  userImgView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: actuatedNormalize(13),
    height: actuatedNormalize(13),
    marginRight: actuatedNormalize(8),
  },
  playerText: {
    color: colors.grey,
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_SemiBold,
  },
  extra3: {
    marginLeft: actuatedNormalize(160),
  },
  predicted: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: actuatedNormalize(15),
    marginBottom: actuatedNormalize(15),
  },
  progressBar: {
    height: actuatedNormalize(10),
    backgroundColor: colors.pink,
    marginVertical: actuatedNormalize(12),
    marginHorizontal: actuatedNormalize(15),
    borderRadius: 20,
  },
  predictedText: {
    color: colors.lightgrey,
    fontSize: actuatedNormalize(14),
  },
  lastView1: {
    backgroundColor: colors.whiteSolid,
    marginTop: actuatedNormalize(20),
  },
  Starting_in: {
    color: colors.secondary,
    fontFamily: fonts.Montserrat_Medium,
    fontSize: actuatedNormalize(12),
  },
  Time: {
    color: colors.secondary,
    fontSize: actuatedNormalize(14),
    fontFamily: fonts.Montserrat_Medium,
  },
});
