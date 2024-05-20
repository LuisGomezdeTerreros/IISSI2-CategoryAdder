import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import { isLoggedIn, hasRole } from '../middlewares/AuthMiddleware.js'
import * as RestaurantCategoryValidation from '../controllers/validation/RestaurantCategoryValidation.js'
import * as RestaurantMiddleware from '../middlewares/RestaurantMiddleware.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'

const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    .post(
      isLoggedIn,
      hasRole('owner'),
      RestaurantMiddleware.categoryDosentExist,
      RestaurantCategoryValidation.create,
      handleValidation,
      RestaurantCategoryController.create
    )
}
export default loadFileRoutes
