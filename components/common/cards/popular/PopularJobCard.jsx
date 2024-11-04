import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      {/* <View style={styles.logoContainer(selectedJob, item)}>
        {item.employer_logo ? (
          <Image
            source={{ uri: item.employer_logo }}
            resizeMode='contain'
            style={styles.logoImage}
          />
        ) : (
          <Text style={styles.placeholderLogo}>No Logo</Text>  // Placeholder if logo is missing
        )}
      </View> */}

      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{ uri: checkImageURL(item.employer_logo)

          ? item.employer_logo
          : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CWdiNmGXJfMicpY9eXHKV4sqzO5H.jpg'
         }} 
        resizMode="contain"
        style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
