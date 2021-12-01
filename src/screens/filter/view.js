import React, { useState } from 'react';
import { View, ScrollView, Switch } from 'react-native';
import CustomText from '../../components/customText';
import TagsContent from '../../components/tagsContent';
import { ACTIV, INACTIV, PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
import styles from './styles';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { WINDOW_WIDTH } from '../../styles/mixins';
import Expand from '../../components/expand';
import CheckBoxList from '../../components/checkBoxList';
import Slider from '../../components/slider';

const FilterView = ({ navigation }) => {

  const [buyingFormatData, setBuyingFormatData] = useState([{ title: 'Auction', isActive: false }, { title: 'Direct sale', isActive: false }])
  const [isBuyingFormat, setIsBuyingFormat] = useState(false)

  const [conditionData, setConditionData] = useState([{ title: 'New', isActive: false }, { title: 'Used', isActive: false }])
  const [isCondition, setIsCondition] = useState(false)

  const [brandData, setBrandData] = useState([{ title: 'Acer', quantity: '20', isActive: false }, { title: 'Apple', quantity: '28', isActive: false }])
  const [isBrand, setIsBrand] = useState(false)

  const [materialData, setMaterialData] = useState([{ title: 'Leather', quantity: '20', isActive: false }, { title: 'Wood', quantity: '28', isActive: false }])
  const [isMaterial, setIsMaterial] = useState(false)

  const [sizeData, setSizeData] = useState([{ title: '41', isActive: false }, { title: '44', isActive: false }, { title: '42', isActive: false }, { title: 'XS', isActive: false }, { title: 'M', isActive: false }, { title: 'XXL', isActive: false }])
  const [isSize, setIsSize] = useState(false)

  const [minPrice, setMinPrice] = useState(100)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [isPrice, setIsPrice] = useState(false)

  const [minQuantity, setMinQuantity] = useState(10)
  const [maxQuantity, setMaxQuantity] = useState(100)
  const [isQuantity, setIsQuantity] = useState(false)

  const [sellerRate, setSellerRate] = useState(5)
  const [IsSellerRate, setIsSellerRate] = useState(false)

  const [isWarranty, setIsWarranty] = useState(false)
  const [isdiscounts, setIsDiscount] = useState(false)

  const sliderLenth = WINDOW_WIDTH - 32

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>

      <Expand
        isOpen={isBuyingFormat}
        changeIsOpen={() => {
          setIsBuyingFormat(!isBuyingFormat)
        }}
        headerTitle='Buying format'
        expoandContent={<TagsContent
          data={buyingFormatData}
          onPress={(index) => {
            let current = [...buyingFormatData]
            current[index].isActive = !buyingFormatData[index].isActive
            setBuyingFormatData(current)
          }}
        />}
      />

      <View style={styles.line} />

      <Expand
        isOpen={isCondition}
        changeIsOpen={() => {
          setIsCondition(!isCondition)
        }}
        headerTitle='Condition'
        expoandContent={<TagsContent
          data={conditionData}
          onPress={(index) => {
            let current = [...conditionData]
            current[index].isActive = !conditionData[index].isActive
            setConditionData(current)
          }}
        />}
      />

      <View style={styles.line} />

      <Expand
        isOpen={isPrice}
        changeIsOpen={() => {
          setIsPrice(!isPrice)
        }}
        headerTitle='Price'
        expoandContent={
          <Slider
            sliderLenth={sliderLenth}
            min={100}
            max={5000}
            onValuesChange={(value) => {
              setMinPrice(value[0])
              setMaxPrice(value[1])
            }}
            minResult={minPrice}
            maxResult={maxPrice}
          />
        }
      />

      <View style={styles.line} />

      <Expand
        isOpen={isQuantity}
        changeIsOpen={() => {
          setIsQuantity(!isQuantity)
        }}
        headerTitle='Quantity'
        expoandContent={
          <Slider
            sliderLenth={sliderLenth}
            min={10}
            max={100}
            onValuesChange={(value) => {
              setMinQuantity(value[0])
              setMaxQuantity(value[1])
            }}
            minResult={minQuantity}
            maxResult={maxQuantity}
          />
        }
      />

      <View style={styles.line} />

      <Expand
        isOpen={IsSellerRate}
        changeIsOpen={() => {
          setIsSellerRate(!IsSellerRate)
        }}
        headerTitle='Seller rate'
        expoandContent={<>
          <View style={styles.onMarkerContainer}>

            <MultiSlider
              isMarkersSeparated={true}
              unselectedStyle={[styles.selection, { backgroundColor: SECONDARY }]}
              selectedStyle={[styles.selection, { backgroundColor: WHITE }]}
              sliderLength={sliderLenth - 70}
              markerStyle={styles.marker}
              values={[5]}
              max={5}
              enabledOne={true}
              enabledTwo={true}
              onValuesChange={(value) => {
                setSellerRate(value[0])
              }}
            />
            <View
              style={styles.lableContainer}
            >
              <CustomText
                text={sellerRate}
                color="white"
                fontFamily="semiBold"
              />
            </View>
          </View>
        </>}
      />

      <View style={styles.line} />

      <Expand
        isOpen={isBrand}
        changeIsOpen={() => {
          setIsBrand(!isBrand)
        }}
        headerTitle='Brand'
        expoandContent={
          <CheckBoxList
            brandData={brandData}
            onValueChange={(newValue, index) => {
              let currentBrand = [...brandData]
              currentBrand[index].isActive = newValue
              setBrandData(currentBrand)
            }}
          />
        }
      />

      <View style={styles.line} />

      <Expand
        isOpen={isMaterial}
        changeIsOpen={() => {
          setIsMaterial(!isMaterial)
        }}
        headerTitle='Material'
        expoandContent={
          <CheckBoxList
            brandData={materialData}
            onValueChange={(newValue, index) => {
              let currentMaterial = [...materialData]
              currentMaterial[index].isActive = newValue
              setMaterialData(currentMaterial)
            }}
          />
        }
      />

      <View style={styles.line} />

      <Expand
        isOpen={isSize}
        changeIsOpen={() => {
          setIsSize(!isSize)
        }}
        headerTitle='Size'
        expoandContent={<TagsContent
          data={sizeData}
          onPress={(index) => {
            let current = [...sizeData]
            current[index].isActive = !sizeData[index].isActive
            setSizeData(current)
          }}
        />}
      />

      <View style={styles.line} />

      <View style={styles.switchContainer}>
        <CustomText
          text='Products with warranty'
          size={18}
        />
        <Switch
          trackColor={{ false: INACTIV, true: ACTIV }}
          thumbColor={isWarranty ? WHITE : PRIMARY}
          ios_backgroundColor={INACTIV}
          onValueChange={() => setIsWarranty(!isWarranty)}
          value={isWarranty}
        />
      </View>

      <View style={styles.line} />

      <View style={styles.switchContainer}>
        <CustomText
          text='Posts with discounts'
          size={18}
        />
        <Switch
          trackColor={{ false: INACTIV, true: ACTIV }}
          thumbColor={isdiscounts ? WHITE : PRIMARY}
          ios_backgroundColor={INACTIV}
          onValueChange={() => setIsDiscount(!isdiscounts)}
          value={isdiscounts}
        />
      </View>

    </ScrollView>
  );
};

export default FilterView;
