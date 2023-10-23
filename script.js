// Defined the ContentItem class
class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (id === this.id) {
            if (name !== null) {
                this.name = name;
            }
            if (description !== null) {
                this.description = description;
            }
            if (category !== null) {
                this.category = category;
            }
        }
    }

    toString() {
        return `<div id="content-item-${this.id}">
            <h4>${this.name}</h4>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>`;
    }
}

// Created an array of content items
const contentItems = [
    new ContentItem(0, "Factory", "Safety Glass", "Safety Vest"),
    new ContentItem(1, "Shop", "Shirt", "Tshirt"),
    new ContentItem(2, "Winter accessories", "Gloves", "Jacket"),
    new ContentItem(3, "Phone accessories", "Charger", "Screen protector"),
    new ContentItem(4, "Home accessories", "Couch", "Chair"),
];

// Added content items to the page using jQuery
$(document).ready(function () {
    const $contentList = $("#content-item-list");
    
    contentItems.forEach((item) => {
        const $contentItem = $(item.toString());
        
        // Apply styling to each content item
        $contentItem.css({
            border: "3.5px solid #ddd0dd",
            width: "450px",
            padding: "20px",
            margin: "15px auto",
        });
        
        $contentList.append($contentItem);
        const themeTitle = "Market Place"; 
        $("#content h2").text(themeTitle);
    });
});