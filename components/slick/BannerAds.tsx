import React from "react"
import ContentLoader from "react-content-loader"

const BannerAds = () => (
  <ContentLoader height={600} width={1000} speed={2} primaryColor="#dfdcdc" secondaryColor="#ecebeb">
    <rect x="0" y="0" rx="3" ry="3" width="1000" height="600" />
  </ContentLoader>
)

BannerAds.metadata = {
  description: "Simple Banner Ads for Phones and Tablets",
  filename: "BannerAds",
}

export default BannerAds
