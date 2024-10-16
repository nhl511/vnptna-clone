export const ENDPOINTS = {
  user: {
    login: "/api/v1/portal/user/processLogin",
    changePassword: "/api/v1/portal/user/changePass",
  },
  common: {
    captcha: "/api/v1/portal/common/captcha",
  },
  product: {
    getProducts: "/api/v1/portal/product/getProducts",
    getProductsByServiceCate: "/api/v1/portal/product/getProductsByServiceCate",
    getInfoProduct: "/api/v1/portal/product/getInfoProduct",
  },
  partner: {
    getBanner: "/api/v1/portal/partner/getBanner",
    portalService: "/api/v1/portal/partner/portal-service",
    getUnits: "/api/v1/portal/partner/getUnit",
    criteria: "/api/v1/portal/partner/criteria",
    listBranch: "/api/v1/portal/partner/listBranch",
  },
  menu: {
    getNewsByCateId: "/api/v1/portal/menu/getNewsByCateId",
    getNewsDetail: "/api/v1/portal/menu/getNewsDetail",
  },
};
