import {Component} from "@angular/core";

import {categories} from "../category";

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrls: ['product-category.component.css'],
})

export class ProductCategoryComponent {
    categories = [...categories]
    category_check = true
}
