// ==UserScript==
// @name         DTI - Clara Pricer
// @author       friendly-trenchcoat
// @description  Displays clara values for NC items on Dress to Impress (values are subjective)
// @match        http://impress.openneo.net/*
// @grant        none
// ==/UserScript==

var itemName, itemWorth, regex;
function getWorth(name, element){
    regex = new RegExp(name + " [^~]*~([0-9,\-]*)");
    itemWorth = items.match(regex)[1];
    element.after("<span class='clara'>" + itemWorth.bold() + "<br></span>");
}
function custom(){
    setTimeout(function() {  // let content load
        $(".clara").each(function(k,v) { $(v).remove(); });  // get rid of old prices
        $("img[src*='/items/']").each(function(k,v) {  // for each item
            if ($(v).parent().find(".nc-icon").length) {  // if it's nc
                itemName = $(v).parent().text().match(/ (.*)  i /)[1];
                getWorth(itemName, $(v));
            }
        });
    }, 600); // milliseconds
}
function main() {
    // Customize
    if(document.URL.indexOf("net/wardrobe") != -1) {
        custom();
        window.onhashchange = custom;  // whenever the page changes, refresh the prices
    }
    // User Profile & Outfit Page
    if(document.URL.indexOf("net/user") != -1 || document.URL.indexOf("net/outfit") != -1) {
        $("img[src*='/items/']").each(function(k,v) {
            if ($(v).parent().find(".nc-icon").length) {
                itemName = $(v).parent().find(".name").text();
                getWorth(itemName, $(v));
            }
        });
    }
    // Item Page
    if(document.URL.indexOf("net/items") != -1) {
        if ($("img[src*='/items/']").parent().find(".nc-icon").length) {
            itemName = $("#item-name").text();
            getWorth(itemName, $("#item-name"));
        }
    }
}
var items = "A \
 \
A Heros Welcome Background ~1-2 \
A Rainbow of Petpets Tree ~2-3  \
A Rolling Fog buyable ~1 \
A Very Un-Valentines Gift Wrap NT \
AAA Daily Dare Gift Wrap NT \
AAA Thought Bubble ~1-2 \
AAAs Hover Chair ~2-3 \
AAAs Room Background ~1-2 \
Abandoned Romantic Setting Background ℗ ~5-7  \
Abigail Daily Dare Gift Wrap NT \
Abigail Thought Bubble ~1-2 \
Abigails Chair ~2-3 \
Abigails Custom Drawn Dreamy Hanso Diary buyable through NC Archives Fortune Cookie ~1-2 \
Abigails Room Background ~1-2 \
Abnormal Fashions Mystery Capsule buyable ~1 \
Abominable Snowball Bopper ~1-2 \
Abominable Snowball Winter Sleeper ~1-2 \
Aboogala Web Wrap ~1-2 \
Abstract Art ~10-14 \
Abundant Heart Dress ~1-2 \
Accessories Shop Dress ~50-60 \
Accessories Shop Wig and Hat ~10-15 \
Achyfi Thought Bubble ~13 \
Acorn Hat ~1-2 \
Adee Wig buyable through NC Archives Fortune Cookie ~1-2 \
Adorable Florg Foreground ~1-2 \
Adorable Freckles buyable ~1 \
Adorable Pandaphant Purse ~1-2 \
Adorable Pink Heart Wig ~3 \
Adorable Short Sleeved Shirt with Hearts ~1-2 \
Adorable Wonderland Shoes and Tights ~1-2 \
Adorable Yellow Mallard Float Ring ~1-2 \
Advent Calendar Background ~1-2 \
Advent Calendar JubJub Power Bounce Token 1-pack ~2-3 \
Advent Calendar Studio Background ~1-2 \
Adventure Helmet ~2 \
Adventure in Pastel Boots ~1-2 \
Adventure in Pastel Fitted Top ~1-2 \
Adventure in Pastel Hat and Wig ~1-2 \
Adventure in Pastel Mystery Capsule ~2-3 \
Adventure Map Wings ~1-2 \
Adventure Shirt ~2 \
Adventure Trousers ~2 \
Adventurers Sword and Shield \
Adventuring Lulu Standee ~1-2 \
Adventurous Parasailor ~1-2 \
Aethias Collectors Shield ~2 \
Affluent Banker Shirt and Jacket ~2 \
Air Faerie Bubble Necklace buyable ~1 \
Aisheenas Collectors Wig ~2 \
Albot Helmet with Goggles ~1-2 \
Alien Abduction Background ~1-2 \
Altador Altador Cup Jersey ~1-2 \
Altador Altador Cup Locker Room Background ~1-2 \
Altador Altador Cup Team Spirit Banners ~1-2 \
Altador Castle Wall Foreground ~1-2 \
Altador Colosseum Background buyable through NC Archives Fortune Cookie ~1-2 \
Altador Courier Bag ~3 \
Altador Covered Courtyard ~30 \
Altador Cup Banner Skirt ~1-2 \
Altador Cup Binoculars Staff ~1-2 \
Altador Cup Champions Mystery Capsule ~3 \
Altador Cup Cheerleader Baton ~1-2 \
Altador Cup Cheerleader Bench Background ~1-2 \
Altador Cup Cheerleader Dress ~2 \
Altador Cup Cheerleader Laurel Wig ~1-2  \
Altador Cup Clothesline ~1-2 \
Altador Cup Confetti Shower buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Darigan Locker Room Background ~1-2 \
Altador Cup Display Case ~1-2 \
Altador Cup Dressing Room Background ~1-2 \
Altador Cup Face Paint ~1-2 \
Altador Cup Fan Shirt Dress ~1-2 \
Altador Cup Flag Cape ~1-2 \
Altador Cup Flag Garland ~1-2 \
Altador Cup Floor ~1-2 \
Altador Cup Garland ~1-2 \
Altador Cup Gear Clothesline ~1-2 \
Altador Cup Goalie Net Background ~1-2 \
Altador Cup Horn buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup IV Mystery Capsule ~6-8+ \
Altador Cup Masters Blazer buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Memorabilia Shadow Box ~4 \
Altador Cup NC Challenge 1-Game Ticket Pack \
Altador Cup NC Challenge 10-Game Ticket Pack \
Altador Cup NC Challenge 34-Game Ticket Pack \
Altador Cup NC Challenge 5-Game Ticket Pack \
Altador Cup NC Challenge Prize Pack \
Altador Cup NC VIP Announcers Studio Pass \
Altador Cup NC VIP Blimp Pass ~6-8 \
Altador Cup NC VIP Celebrity Box Pass ~6-8 \
Altador Cup NC VIP Locker Room Pass \
Altador Cup NC VIP Lounge Pass ~6-8 \
Altador Cup NC VIP Royal Box Pass \
Altador Cup NC VIP Winners Circle Pass ~6-8 \
Altador Cup NC VIP Yooyu Pen Pass \
Altador Cup Pedestal ~1-2 \
Altador Cup Pillars Foreground ~1-2 \
Altador Cup Press Jacket ~1-2 \
Altador Cup Rain Boots ~1-2 \
Altador Cup Referee Shirt ~1-2 \
Altador Cup School Jumper ~1-2 \
Altador Cup Scroll Gift Box Mystery Capsule ~2-3 \
Altador Cup Signature Hoodie buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Sling Gift Box Mystery Capsule ~2-3 \
Altador Cup Souvenir Balloons ~1-2 \
Altador Cup Stadium Wave Background buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Sunglasses buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Support Gown ~1-2 \
Altador Cup Tiara ~1-2 \
Altador Cup Towel Cape ~1-2 \
Altador Cup Training Gym Background buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Treasure Map ~1-2 \
Altador Cup Trophy Crown and Wig ~1-2 \
Altador Cup Trophy Garland ~1-2 \
Altador Cup Trophy Hat ~1-2 \
Altador Cup V Benchwarmer Badge \
Altador Cup V Golden Hair Bow buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup V MVP Cleats ~1-2 \
Altador Cup V MVP Jersey ~1-2 \
Altador Cup V MVP Medal ~1-2 \
Altador Cup V MVP Skirt ~1-2 \
Altador Cup V Mystery Capsule ~6-8 \
Altador Cup V NC Challenge Game Ticket \
Altador Cup V Neck Towel ~1-2 \
Altador Cup V Souvenir Toga buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup V Starter Badge [Depends on trader] ~50-100 \
Altador Cup V Substitute Badge [Depends on trader] ~45-55+ \
Altador Cup V Team Captain Badge ~15-20 \
Altador Cup V Uniform Shorts buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup VII Mystery Capsule ~3-4 \
Altador Cup VIP Lounge Background ~1-2 \
Altador Cup VIP Pass Lanyard ~1-2 \
Altador Cup Warm-up Tote buyable through NC Archives Fortune Cookie ~1-2 \
Altador Cup Winner Sash ~1-2 \
Altador Festival Gown ~1-2 \
Altador Frame ~1-2 \
Altador Helmet of Knowledge ~1-2 \
Altador Indoor Pool ~25-30 \
Altador Referee Whistle ~1-2 \
Altador Room in a Bag buyable ~5 \
Altador Scroll Desk buyable ~1 \
Altador Shores Background ~4 \
Altador Stage Foreground Item ~1-2 \
Altador Sun Lamp buyable ~1 \
Altador Team Braided Wig ~1-2 \
Altador Team Crazy Wig ~1-2 \
Altador Team Cuffs ~1-2 \
Altador Team Face Makeup ~1-2 \
Altador Team Foam Finger ~5 \
Altador Team Glitter Face Paint ~1-2 \
Altador Team Hat \
Altador Team Jester Hat ~5 \
Altador Team Mask ~1-2 \
Altador Team Pom Pom ~1-2 \
Altador Team Road to the Cup Background ~1-2 \
Altador Team Scarf ~10 \
Altador Team Sport Shirt \
Altador Team Trousers and Cleats ~1-2 \
Altador Team Vuvuzela ~5 \
Altadorian Column Staff ~1-2 \
Altadorian Doll House buyable through NC Archives Fortune Cookie ~1-2 \
Altadorian Fence buyable ~1 \
Altadorian Fence 10-Bundle buyable ~1 \
Altadorian Grand Piano ~2 \
Altadorian Grandfather Clock ~1-2 \
Altadorian Mountain Top Ruins Background ~1-2 \
Altadorian Tunic ~1-2 \
Altadorian Warrior Background ~2 \
Altadorian Warrior Helmet ~1-2  \
Altadorian Warrior Plate Greaves ~1-2 \
Altadorian Warrior Plate Shirt ~2 \
Altadorian Wig with Gold Ribbon buyable through NC Archives Fortune Cookie ~2-3 \
Amidst the Coral Foreground ~1-2 \
Amira Wedding Wig and Veil ℗ ~4-5 \
Among Flowers Background buyable through NC Archives Fortune Cookie ~1-2 \
Among Hearts Background ~1-2 \
Among Tropical Flowers Background ℗ ~1-2 \
Amongst the Clouds Background ~5-6 \
Amusement Park Background ~1-2 \
Ancient Altador Uniform Jersey ~1-2 \
Ancient Altador Uniform Trousers ~1-2 \
Ancient Festival Background ~1-2 \
Ancient Geb Pyramids Background ~1-2 \
Ancient Geraptiku Spear buyable through Patapult ~1-2 \
Ancient Golden Sceptre ~4 \
Ancient Mountain Rubble Background ℗ ~2 \
Ancient Palm Waistcoat ~1-2 \
Ancient Shenkuu Staff buyable ~1 \
Ancient Tattered Shirt ~1-2 \
Ancient Wrap ~3 \
Angry Ferocious Negg ~3 \
Angry Mob Background ~4 \
Animated Footprints NT  \
Announcing Time Background ~1-2 \
Annual Harvest Festival Background ~2 \
Anshu Quest for Knowledge Mystery Capsule ~5-6 \
Antique Chic Christmas Foreground ℗ ~4-6 \
Antique Filigree Wings ~1-2 \
Antique Key Wings ~1-2 \
Antique Locket Charm and Key ~1-2 \
Appetising Caramel Apple ℗ ~2-4 \
Apple Adventure Orchard Background ~1-2 \
Apple Harvest Mystery Capsule ~2-3 \
Apple Orchard Background buyable ~1  \
Apple Orchard Foreground ~1-2 \
Apple Sceptre ~2 \
Approaching Battle Background ~1-2 \
Approaching Battle Mystery Capsule ~2-3 \
April Showers Mystery Capsule ~4-5 \
Aquatic Cape ~1-2 \
Aquatic Staff ~1-2 \
Arcade Gaming Background ~4 \
Arch of Lost Hearts Background ~1-2 \
Arch of Summer Garland buyable through 9th Birthday Night Wish Candle  \
Arch of Winter Garland ~1-2 \
Archway to the Winners Circle Background ~2 \
Are you Looking at Me Portrait buyable through NC Archives Fortune Cookie ~1-2 \
Argyle Mystery Capsule ~4-6 \
Arid Rock Planet Background ~1-2 \
Arkmite Pool Foreground ~1-2 \
Armoury Background buyable ~1 \
Arrow Circlet and Wig buyable through Tribal Mystery Capsule ~1-2 \
Arrows of Happiness ~1-2 \
Artist Frock ~1-2 \
Artwork Display Garland buyable through NC Archives Fortune Cookie ~1-2 \
Asparagus Foreground ~1-2 \
Asparagus Head Wreath ~1-2 \
Assorted Contacts Mystery Capsule #1 ~2-3 \
Assorted Contacts Mystery Capsule #2 ~2-3 \
Assorted Fruits Shower ~1-2 \
Assorted Potion Shelf ~1-2 \
Assorted Potted Plant Foreground buyable ~1 \
Asteroid Meteor Shower ~1-2 \
Astronomical Staff ~1-2 \
Astronomical Umbrella ~1-2 \
Asylum Corridor Background ~1-2 \
Atlas of The Ancients NC Challenge Quest Ticket \
Attack of the Revenge Background ~150-175 \
Auburn Wig with Floral Fascinator ~1-2 \
Autumn Acorn Mystery Capsule ~2-4 \
Autumn Baby Dress ~1-2 \
Autumn Back Porch Background ~40-50 \
Autumn Bouquet ~1-2 \
Autumn Bridge Background ~1-2 \
Autumn Chain Link Infinity Scarf ~1-2 \
Autumn Faerie Cape ~1-2 \
Autumn Faerie Dress ~3 \
Autumn Festival Dress ~1-2 \
Autumn Flowers and Pumpkins Garland ~1-2 \
Autumn Foliage Trousers ~1-2 \
Autumn Forest Clearing Background ℗ ~2-3 \
Autumn Forest Gift Box Mystery Capsule ~1-2 \
Autumn Gourd Cart ~4 \
Autumn Handheld Lantern buyable ~1 \
Autumn Harvest Wreath ~1-2 \
Autumn Head Wreath ~1-2 \
Autumn in Meridell Background ~2-3 \
Autumn Ivy Trellis ~1-2 \
Autumn Jack O Lantern Staff ~1-2 \
Autumn Lace Boots ~1-2 \
Autumn Leaf and Nut Garland ~3-4 \
Autumn Leaf Braided Wig ~1-2 \
Autumn Leaf Caplet ~1-2 \
Autumn Leaf Contacts ~1-2 \
Autumn Leaf Face Paint ~1-2 \
Autumn Leaf Garland ~3-4 \
Autumn Leaf Gift Box Mystery Capsule ~2-4 \
Autumn Leaf Hair Bow ~1-2 \
Autumn Leaf Jacket ~1-2 \
Autumn Leaf Lamp Post ~1-2 \
Autumn Leaf Mask ~1-2 \
Autumn Leaf Necklace ~2-3 \
Autumn Leaf Shower ~3 \
Autumn Leaf Skirt ~4+ \
Autumn Leaf String Lights ~3 \
Autumn Leaf Tutu ~1-2 \
Autumn Leaf Wings ~2 \
Autumn Leaves and Berries Foreground ~1-2 \
Autumn Leaves Background ~3-4 \
Autumn Market Background ~1-2 \
Autumn Mystery Capsule [rare collectible : Depends on trader] ~200-350+ \
Autumn on the Farm Background ~1-2 \
Autumn Pastels Mystery Capsule ~2 \
Autumn Pennant String Lights ~1-2 \
Autumn Picnic Setting buyable ~1 \
Autumn Polka Dot Gift Box Mystery Capsule ~2-3 \
Autumn Pumpkin Display Foreground ~2 \
Autumn Stream Bridge Background buyable through Patapult ~1-2 \
Autumn Sunflower Tights and Tutu ~1-2 \
Autumn Sunflowers Wheelbarrow ~1-2 \
Autumn Tiara ~1-2 \
Autumn Tree Gift Box Mystery Capsule ~2 \
Autumn Umbrella ~4 \
Autumn View Gazebo Background ~1-2 \
Autumn Wheelbarrow Trinket ~1-2 \
Autumn Windmill Background ℗ ~4-6 \
Autumn Windswept Wig ~1-2 \
Autumn Witch Wig ~1-2 \
Autumn Woodland Short Staff ~1-2 \
Autumn Wool Coat ~1-2 \
Autumnal Harvest Market Background ~1-2 \
Award Winning Hair ~1-2 \
B \
 \
Babaa Hat ~1-2 \
Babaa Pyjama Slippers ~3-4 \
Baby Aisha Key Quest Token buyable ~1-2 \
Baby Anchor Trousers buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Bandana Bib buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Birthday Dress buyable ~1 \
Baby Bob Wig ~1-2 \
Baby Bruce Key Quest Token buyable ~1-2 \
Baby Bubble Wand ~1-2 \
Baby Building Blocks Foreground ~1-2 \
Baby Bun with Heart Headband ~3-5 \
Baby Button Boots ~1-2 \
Baby Candy Corn Hat ~1-2 \
Baby Christmas Dress ~2-4 \
Baby Cloud Wings ~2-3 \
Baby Clover Wig ~2-3 \
Baby Cupcake Hat ~1-2 \
Baby Easter Gram NT  \
Baby Elf Hat ~1-2 \
Baby Floor Gym ~1-2 \
Baby Floral Shirt buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Flower Sunglasses buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Gelert Key Quest Token buyable ~1-2 \
Baby Giant Moach ~1-2  \
Baby Halloween Tutu and Tights ~2-4  \
Baby Holiday Ruffle Dress ℗ ~2-3 \
Baby in a Present Box ~2-4 \
Baby in a Pumpkin ℗ ~2-4 \
Baby in an Easter Basket Background ~1-2 \
Baby Judge Hog Costume ~2-3  \
Baby Kadoatie Carriage buyable through Baby Bruce Key Quest Token ~1-2 \
Baby Lady Blurg Umbrella ~1-2 \
Baby Mop Wig ~1-2 \
Baby Moustache Dummy ~1-2 \
Baby Mustache and Monocle buyable ~1 \
Baby Mystery Capsule ~2-3 \
Baby Newsboy Hat buyable ~1 \
Baby Oversized Toy ~1-2 \
Baby Overstuffed Warf Plushie ~2 \
Baby Pajamas buyable ~1 \
Baby Pigtail Wig buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Pink Contacts buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Pink Ona Rattle ~1-2 \
Baby Plaid Sleeper with Bow Tie buyable ~1 \
Baby Polka Dot Dress ~2-3 \
Baby Puffy Autumn Leaf Vest buyable ~1 \
Baby Pull Along Train ~1-2 \
Baby Raindorf Hoodie Robe ~1-2 \
Baby Rattle of Cuteness buyable ~1 \
Baby Rosy Cheeks ~2 \
Baby Ruffle Pants buyable ~1 \
Baby Scalloped Trousers ~3-4 \
Baby Sequined Peach Dress ~1-2 \
Baby Shamrock Tutu buyable ~1 \
Baby Snowbunny Plushie ~1-2 \
Baby Sparkly Shoes ~1-2 \
Baby Spring Jumper ~1-2 \
Baby Spring Wig ~1-2 \
Baby Star Wand ~1-2 \
Baby Summer Flower Wig ~2 \
Baby Summer Hat ~1-2 \
Baby Summer Swimsuit ℗ ~5-7 \
Baby Summer Wings ~5-7 \
Baby Top Hat buyable ~1 \
Baby Toy Keys ~1-2 \
Baby Toy Wagon ~1-2 \
Baby Tuxedo ~1-2 \
Baby Tuxedo Sleeper ~1-2 \
Baby Valentine Blankie ~1-2 \
Baby Valentine Bow and Arrow ~1-2 \
Baby Valentine Feloreena Handheld Plushie ~1-2 \
Baby Valentine Heart Shoes ℗ ~2-3 \
Baby Valentine Jumper and Shirt ~1 \
Baby Valentine Wings ~1-2 \
Baby Wading Pool ℗ ~7-10  \
Baby Wig with Snowbunny Ears ~1-2 \
Baby Winter Hat ~1-2 \
Baby Winter Sweater ~1-2 \
Baby Wooden Teether buyable through Nursery Time NC Fortune Cookie ~1-2 \
Baby Zomutt Contacts ~3-4 \
Baby Zomutt Costume ~1-2 \
Baby Zomutt Costume Face Paint ~2 \
Baby Zomutt Costume Hat ~1-2  \
Back to School Gift Box Mystery Capsule ~2-3 \
Back to School Y14 Gift Box Mystery Capsule ~2-3 \
Back to School Y15 Gift Box Mystery Capsule ~2-3 \
Backpack Packing Centre 1-Pack ~1 \
Backpack Packing Centre 10-Pack ~3 \
Backpack Packing Centre 20-Pack ~4-5 \
Backpack Packing Centre 30-Pack ~5 \
Backstage Ballroom Background ~2-3 \
Backyard Birthday Party Background ~2 \
Backyard Summer Background ~1-2 \
Bacon for Plumpy ~1-2 \
Bag of Beach Essentials ~1-2 \
Bag of Mystery Capsules ~3-4 \
Bakery Display Case ~12-15 \
Balloon Carried Basket ~1-2 \
Balloon Centrepiece Garland ~1-2 \
Balloon Face Paint ~1-2 \
Balloon Gift Wrap NT \
Balloon Sculpture Hat ~1-2 \
Balloon Shower ~1-2 \
Balloon Skirt ~1-2 \
Balloon Sword ~1-2 \
Balls of Yarn buyable ~1 \
Balmy Summer Picnic Background ℗ ~3-5 \
Balthazars Bag of Bottled Faeries ~350-400 \
Bamboo Grove Background buyable through Shenanigifts ~1-2 \
Bamboo Leaf Wrapped Fence Foreground ~1-2 \
Bamboo Mystery Island Lamp \
Bamboo Mystery Island Wallpaper \
Bamboo Water Fountain Trinket ~1-2 \
Bandit Mask buyable through NC Archives Fortune Cookie ~2 \
Banker Hat and Wig ~1-2 \
Barbat Headband ~1-2 \
Barbat-in-the-Box ~1-2 \
Barbecue Apron ~2 \
Barber Shop Pole ~10 \
Barrel of TNT ~10-15 \
Barrister Wig ~2-3 \
Basic Beanie and Blond Wig buyable ~1 \
Basic Beanie and Cherry Wig buyable ~1 \
Basic Beanie and Chestnut Wig ~1-2 \
Basic Beanie and Mint Green Wig ~1-2 \
Basic Beanie and Puce Wig buyable ~1 \
Basic Beanie and Raven Wig buyable ~1 \
Basic Beanie and Tangerine Wig buyable ~1 \
Basic Beanie and White Wig ~1-2 \
Basic Black Bob Wig ~1-2 \
Basic Black Cardigan buyable ~1 \
Basic Black Collared Shirt buyable ~1 \
Basic Black Gloves buyable ~1 \
Basic Black Lace-Up Shoes buyable ~1 \
Basic Black Trousers buyable ~1 \
Basic Blue Cardigan buyable ~1 \
Basic Blue Collared Shirt buyable ~1 \
Basic Blue Gloves buyable ~1 \
Basic Blue Lace-Up Shoes buyable ~1 \
Basic Blue Trousers buyable ~1 \
Basic Brown Lace-Up Shoes buyable ~1 \
Basic Green Cardigan buyable ~1 \
Basic Green Collared Shirt buyable ~1 \
Basic Green Gloves buyable ~1 \
Basic Green Trousers buyable ~1 \
Basic Grey Cardigan ~1-2 \
Basic Grey Pants ~1-2 \
Basic Khaki Gloves ~1-2 \
Basic Khaki Lace-Up Shoes ~1-2 \
Basic Lavender Cardigan ~1-2 \
Basic Lavender Collared Shirt ~1-2 \
Basic Lavender Pants ~1-2 \
Basic Long Auburn Wig buyable ~1 \
Basic Long Azure Wig buyable ~1 \
Basic Long Blonde Wig buyable ~1 \
Basic Long Cherry Wig ~1-2 \
Basic Long Emerald Wig buyable ~1 \
Basic Long Puce Wig ~1-2 \
Basic Long Raven Wig buyable ~1 \
Basic Long White Wig ~1-2 \
Basic Mint Green Cardigan ~1-2 \
Basic Mint Green Collared Shirt ~1-2 \
Basic Mint Green Pants ~1-2 \
Basic Orange Collared Shirt buyable ~1 \
Basic Orange Gloves ~1-2 \
Basic Orange Lace-Up Shoes ~1-2 \
Basic Orange Trousers buyable ~1 \
Basic Pink Cardigan buyable ~1 \
Basic Pink Collared Shirt buyable ~1 \
Basic Pink Gloves buyable ~1 \
Basic Pink Lace-Up Shoes buyable ~1 \
Basic Pink Trousers buyable ~1 \
Basic Purple Gloves ~1-2 \
Basic Purple Lace-Up Shoes ~1-2 \
Basic Red Gloves buyable ~1 \
Basic Short Azure Wig buyable ~1 \
Basic Short Blond Wig buyable ~1 \
Basic Short Cherry Wig ~1-2 \
Basic Short Chestnut Wig ~1-2 \
Basic Short Emerald Wig buyable ~1 \
Basic Short Puce Wig ~1-2 \
Basic Short Raven Wig buyable ~1 \
Basic Short White Wig ~1-2 \
Basic White Collared Shirt ~1-2 \
Basic White Lace-Up Shoes buyable ~1 \
Basic Yellow Cardigan buyable ~1 \
Basics Bundle: Colourful Clothing ~1-2 \
Basics Bundle: Everyday Adornments ~1-2 \
Basics Bundle: Wigging Out ~1-2 \
Basket of Apples buyable ~1 \
Basket of Highlighters buyable ~1 \
Basket of Holiday Biscuits ~1-2 \
Basket of Neggs ~4 \
Basket of Tulips ~1-2 \
Basket of Valentine Cup Cakes ~3-4 \
Basketweave Flower Foreground ~1-2 \
Bat Shower ~1-2 \
Battle Scar Marking buyable ~1 \
Battle Thought Bubble ~1-2 \
Battledome Gear Mystery Capsule ~2 \
Battlefield Legends Armour buyable through NC Archives Fortune Cookie ~1-2 \
Batty Beauty Mark ~1-2 \
Beach Ball Garland ~1-2 \
Beach Fountain Foreground ~1-2 \
Beach Hair with Sunglasses Wig ~1-2 \
Beach Lanterns Garland ~1-2 \
Beach Palm Hammock ~1-2 \
Beach Picnic Background buyable through Tribal Mystery Capsule ~1-2 \
Beach Resort Background ~1-2 \
Beach Sandals ~2 \
Beach Shell Fire Pit Foreground ~1-2 \
Beach Tank Top ~1-2 \
Beach Umbrella Trinket ~1-2 \
Beached Sailboat ~1-2 \
Beaded Branched Wings buyable through 9th Birthday Fantasy Wish Candle ~1-2 \
Beaded Curtain ~1-2 \
Beaded Damask Cuffs ~1-2 \
Beaded Floral Headwreath buyable through NC Archives Fortune Cookie ~1-2 \
Beaded Orange Chiffon Dress buyable through NC Archives Fortune Cookie ~2-3 \
Beaded Paper Background ~2 \
Beaded Pin Skirt ~1-2 \
Beaded Shell Earrings ~1-2 \
Beaded Shell Necklace ~1-2 \
Beaded Shoulder Armour buyable through Patapult ~1-2 \
Beaded Vase of Flowers ~1-2 \
Beautiful Beaded Purse ~1-2 \
Beautiful Bubble Maker ~1-2 \
Beautiful Clam Shell Purse ~1-2 \
Beautiful Shenkuu Mountain Background buyable ~1 \
Beautiful Shenkuu Vase ~1-2 \
Beautiful Vacation Background ~3-5 \
Beautiful Valentine Fireworks ~1-2 \
Beautiful Wintery Street Background ~3 \
Beautifully Decorated Flower Arch ~1-2 \
Bed of Burning Coal Embers ~1-2 \
Bed of Shamrock Foreground ~1-2 \
Beekadoodle Feeder ~1-2 \
Beekadoodle Flower Garland ~2-3 \
Bejewelled Negg Mystery Capsule ~3-4 \
Belt of Fire ~1-2 \
Belted Leaf Dress ~1-2 \
Belted Party Dress ~1-2 \
Berry Nice Holiday Wings ~1-2 \
Berry Red Velvet Gown ~1-2 \
Bespectacled Mootix Handheld Plushie buyable ~1 \
Best of Dreams Mystery Capsule ~1-2 \
Between Two Worlds Background ~1-2 \
Beware of the Squid Sign ~3-4 \
Big Bag of Coal ~3 \
Big Black Lace Pirate Hat ~2-3 \
Big Bow Scarf buyable ~1 \
Big Brass Ornament Trinket ~1-2 \
Big Candle Pillars ~1-2 \
Big Doll Eyes Contacts ~3-5 \
Big Fuzzy Boots with Leggings ~1-2 \
Big Fuzzy Hat NT buyable ~1 \
Big Heart Wig ~1-2 \
Big Top NC Fortune Cookie ~2 \
Bigsby Shadingtons Hat ~1-2 \
Bigsby Shadingtons Wonderclaw Widget 1-pack buyable ~1 \
Bigsby Shadingtons Wonderclaw Widget 10-pack buyable ~4-5 \
Bigsby Shadingtons Wonderclaw Widget 5-pack buyable ~2-3 \
Billowing Smoke ~1-2 \
Bird Nest Hat ~25-35 \
Birdhouse Garland ~1-2 \
Birthday Ball Chandelier Garland ℗ ~1-2 \
Birthday Balloon Mask ~1-2 \
Birthday Balloon Tree ~1-2 \
Birthday Bounce House Background ~2 \
Birthday Bow Wig ~1-2 \
Birthday Cake Hat ~1-2 \
Birthday Cake Topper Foreground ~2 \
Birthday Candle Pillars ~1-2 \
Birthday Celebration Background ~2 \
Birthday Celebration Wallpaper ~2-4 \
Birthday Confetti Effect ℗ ~1-2 \
Birthday Confetti Magic Elixir ~1-2 \
Birthday Confetti Popper ℗ ~2 \
Birthday Confetti Shoes ~1-2 \
Birthday Crown Wig ~1-2 \
Birthday Cupcake Apron ~1-2 \
Birthday Cupcake Dress ~1-2 \
Birthday Cupcake Handheld Plushie ~1-2 \
Birthday Cupcake Tree ~8-12 \
Birthday Gala Tent Background ~1-2 \
Birthday Glitter Pennant Garland ~1-2 \
Birthday Invitation Frame ~1-2 \
Birthday Polka Dot Dress ~2 \
Birthday Princess Dress buyable through NC Mall 9th Birthday Mystery Capsule ~1-2 \
Birthday Ribbon Shoes ~1-2 \
Birthday Ribbon Wreath Wig ~1-2 \
Birthday Streamer Curtains ~6-8 \
Birthday Tiara and Wig ℗ ~1-2 \
Birthday Tutu and Tights ~1-2 \
Birthday Welcome Background ℗ \
Bitten Snowbunny Ears Headband ~1-2 \
Bitter Striped Tights and Boots ~1-2 \
Black and Blue Crochet Shirt \
Black and Blue Wig ~1-2 \
Black and Orange Sweater Vest ~1-2 \
Black and Red Lace Up Top ~1-2 \
Black and Red Promenade Dress ~1-2 \
Black and Red Stripe Stockings and Shoes buyable ~1 \
Black and Red Stripe Stockings and Witch Shoes ~1-2 \
Black and White Bracers ~1-2 \
Black and White Castle Background ~2 \
Black and White Curtains ~1-2 \
Black and White Damask Apron ~1-2 \
Black and White Fancy Dress ~1-2 \
Black and White Flower Staff ~1-2 \
Black and White Hall Background ~1-2 \
Black and White Heart Shirt ~1-2 \
Black and White Infinity Scarf ~1-2 \
Black and White Lace Dress ~1-2 \
Black and White Lace Skirt ~1-2 \
Black and White Makeup buyable through Wonderclaw ~1-2 \
Black and White New Years Dress ~1-2 \
Black and White Pandaphant Tutu ~1-2 \
Black and White Sitting Room Background ~1-2 \
Black and White Top Hat and Wig ~1-2 \
Black and White Tree ~1-2 \
Black and White Tulle Wings ~1-2 \
Black and White Wingtip Shoes ~1-2 \
Black Beaded Shirt ~1-2 \
Black Candle and Pumpkins Foreground ℗ ~2-3  \
Black Fedora ~1-2 \
Black Flowering Vines Foreground ~1-2 \
Black Flowery Eyeball Bouquet ~1-2 \
Black Halloween Caplet ~1-2 \
Black Hat Brunette Wig buyable ~1 \
Black Heart Garland ~1-2 \
Black Lace Facepaint ~1-2 \
Black Lace Up Dress ~1-2 \
Black Neovian Chandelier ~4 \
Black of Night Wig ~1-2 \
Black Rose Dress ~1-2 \
Black Rose Garland ~1-2 \
Black Ruffled Dress ~2-3 \
Black Ruffled Scarf ~1-2 \
Black Satin Bow Tie buyable ~1 \
Black Snowflake Leggings ~1-2 \
Black Utility Trousers buyable ~1 \
Blast Off Space Rocket buyable through NC Archives Fortune Cookie ~1-2 \
Blimp String Lights ~1-2 \
Blinking Holiday Light Shoes ~1-2 \
Blinking Holiday Nose Light ~1-2 \
Blobikins Handheld Plushie ~1-2 \
Blonde Bangs Wig ℗ \
Blonde Fishtail Side Braid ~10-15 \
Blonde Quiff Wig buyable through Patapult ~1-2 \
Blonde Tropical Flower Wig ~2 \
Bloomin Neggs Planting Kit #1 - Zigzag \
Bloomin Neggs Planting Kit #2 - Argyle \
Bloomin Neggs Planting Kit #3 - Striped \
Bloomin Neggs Planting Kit #4 - Polka Dot \
Blooming Flower Hearts ~1-2 \
Blooming Flowers Key Quest Collectors Case Theme buyable ~1 \
Blooming Garden ℗ ~3-4 \
Blooming Hearts Plant ~1-2 \
Blooming Red Dress ~1-2 \
Blooming Spring Frame ~1-2 \
Blooming Vine Scarf ~1-2 \
Blossoming Flower Hat ~1-2 \
Blue Acara Key Quest Token buyable ~1 \
Blue and Green Splash Facepaint ~1-2 \
Blue and Orange Color Block Skirt buyable ~1 \
Blue and Yellow Decorative Fence Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Blue and Yellow Fountain Trinket ~1-2 \
Blue and Yellow Negg Garland buyable through NC Archives Fortune Cookie ~1-2 \
Blue Argyle Sweater Vest and Shirt ~1-2 \
Blue Beanie Bob Wig buyable ~1 \
Blue Candy Striped Gift Wrap NT \
Blue Cirrus Handheld Plushie buyable through Cloud Kougra Key Quest Token ~1-2 \
Blue Crystal String Lights ~1-2 \
Blue Cuffed Shorts buyable through Patapult ~1-2 \
Blue Daily Dare Mystery Capsule ~8-10 \
Blue Elephante Key Quest Token buyable ~1 \
Blue Festive Balloons Goodie Bag ~1-2 \
Blue Field Background ~2 \
Blue Hat Blonde Wig buyable ~1 \
Blue Holiday Cracker Gram NT \
Blue Jelly Tiara ~1-2 \
Blue Kadoatie Hoodie ~1-2 \
Blue Koi Key Quest Token buyable ~1 \
Blue Mystery Capsule ~2 \
Blue Ombre Button Shirt ~1-2 \
Blue Paint Bucket \
Blue Painted Feet ~1-2 \
Blue Paisley Scarf buyable through Blue Elephante Key Quest Token ~1 \
Blue Perilous Catacomb Magical Scroll \
Blue Polka Dot Dress ~3-5 \
Blue Polka Dot Skirt buyable ~1 \
Blue Polka Dot Wallpaper ~2-4 \
Blue Roll-Up Trousers ~1-2 \
Blue Snowflake Pyjama Trousers ~1-2 \
Blue Snowflake Skirt ~1-2 \
Blue Spiked Gloves ~1-2 \
Blue Stone Archway Frame buyable through Tribal Mystery Capsule ~1-2 \
Blue Stripe Wallpaper ~2-4 \
Blue Striped Mystery Capsule [rare collectible : Depends on trader] ~350+ \
Blue Summer Trousers ~1-2 \
Blue Tribal Skis ~1-2 \
Blue Velvet Dress buyable through NC Archives Fortune Cookie ~3 \
Blue Warlock Battle Wings ~2 \
Blue Warlock Wig ~1-2 \
Blues Riff Music Track ~1-2 \
Blumaroll Dice 1-Pack \
Blumaroll Dice 10-Pack \
Blumaroll Dice 5-Pack \
Blumaroll Travelling Case #1 \
Blumaroll Travelling Case #2 \
Blumaroll Travelling Case #3 \
Blumaroll Travelling Case #4 \
Blumaroll Travelling Case #5 ~3  \
Blumaroll Travelling Case #6 ~3-5  \
Boat Day Background ~1-2 \
Bobbing for Apples Trinket ~1-2 \
Bobbling Meowclops Bobblehead ~1-2 \
Bobbling Ornament Headband ~1-2 \
Bodice Armour Dress ~1-2 \
Bog Shanty Background buyable ~1 \
Bogshot Background ~20-25 \
Bohemian Dots Gift Box Mystery Capsule buyable through July 31, 2016 ~1 \
Bone and Leaf Wings ~1-2 \
Bone Cave Frame buyable through Wonderclaw ~1-2 \
Bone Chest Paint buyable through Wonderclaw ~1-2 \
Bone Finger Necklace buyable through Wonderclaw ~1-2 \
Bone Necklace buyable ~1 \
Bone Piercings ~2 \
Bone Tiara and Wig ~2-3 \
Bone Tights buyable through Wonderclaw ~1-2 \
Bone Walking Staff buyable through Wonderclaw ~1-2 \
Boned Bustle Shirt buyable through Wonderclaw ~1-2 \
Bonfire Night Background ~1-2 \
Bonsai Garden Background buyable ~1 \
Boo-ffant Wig buyable through NC Archives Fortune Cookie ~2-3 \
Bookish Shirt and Waistcoat ~1-2 \
Bottle of Glue buyable ~1 \
Bottled Beach Finds Foreground ~1-2 \
Bottled Faerie Background buyable ~1 \
Bottled Faerie Thought Bubble ~1-2 \
Bottles of Glitter buyable ~1 \
Bottoms Up Mystery Capsule ~2 \
Bouncing Ball Pit ~7-8 \
Bouncing Beach Ball ~1-2 \
Bouncing Button Mystery Capsule ~3-4 \
Bouncing Meep Foreground ~1-2 \
Bouncing Negg Mystery Capsule ~5-6 \
Bouncing Springabee Headband ~1-2 \
Bouncing Tennis Ball buyable ~1 \
Bouncing Warf Trinket buyable through NC Archives Fortune Cookie ~1-2 \
Bouncing Yooyu Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Bouncy Yooyu Ball ~1-2 \
Bountiful Banana Split buyable ~1 \
Bountiful Bow Mystery Capsule ~4-6 \
Bountiful Hearts Goodie Bag ~1-2 \
Bounty Hunter Wings ~1-2 \
Bouquet of Candy ~1-2 \
Bouquet of Flowers Parasol ~1-2 \
Bouquet of Roses and Pearls ~1-2 \
Bouquet Purse ~1-2 \
Bow and Balloon Shower ~1-2 \
Bow Bun Wig buyable through Shenanigifts ~1-2 \
Bowling Shirt ~1-2 \
Box of Chocolates Hat ~1-2 \
Braided Brown Wig ~2 \
Braided Candy Warrior Wig ~1-2 \
Braided Champions Helm buyable through Valiant Champion Mystery Capsule ~1-2 \
Braided Flower Wig ~2-3 \
Braided Holiday Wig ~2 \
Braided Island Wig ~2 \
Braided Metal Umbrella with Silk Flowers ~1-2 \
Braided Pink Warrior Wig ~1-2 \
Braided Red Helm ~1-2 \
Braided Wig with Skull Accessory ~1-2 \
Brain Cutter Hat ~1-2 \
Brain Necklace ~1-2 \
Brain Sucking Plant Hat ~1-2 \
Branch and Star Garland ~1-2 \
Branch of Singing Weewoos Garland ~8 \
Branching Hearts Bouquet ~1-2 \
Branching Hearts Foreground ~1-2 \
Breath of Fire ~1-2 \
Breezy Autumn Path Background ~1-2  \
Bridge to Nowhere Background ~3-4 \
Bright Bangle Scarf ~1-2 \
Bright Beach Sarong ~1-2 \
Bright Blue Ribbon-Lined Tutu ~1-2 \
Bright Bumbluz Wig ~1-2 \
Bright Flower Cutout Background ~2 \
Bright Flowers Skirt ~1-2 \
Bright Green Sunglasses ~1-2 \
Bright New Year Mystery Capsule ~30-33 \
Bright Pink Bob Wig ~2 \
Bright Pink Ombre Wig ~1-2 \
Bright Polka Dot Cardigan ~1-2 \
Bright Rainbow Dress ~1-2 \
Bright Shamrock Scarf ~1-2 \
Bright Skies Umbrella ~1-2 \
Bright Snowflake Apron ~1-2 \
Bright Speckled Parasol buyable through Speckled Bruce Key Quest Token ~1 \
Bright Star and Light Arch ~1-2 \
Bright Sun Dress ~1-2 \
Bright Sun Patterned Wings buyable ~1 \
Bright Tulip Caplet ~1-2 \
Bright Yarn and Bells Garland ~1-2 \
Brightly Coloured Blue Wig buyable through Blue Koi Key Quest Token ~1 \
Brightly Coloured Spring Caplet ~1-2 \
Brightly Coloured Spring Umbrella ~1-2 \
Brightly Jewelled Necklace buyable through Wonderclaw ~1-2 \
Brightvale Altador Cup Jersey buyable ~1 \
Brightvale Altador Cup Locker Room Background buyable ~1 \
Brightvale Altador Cup Team Spirit Banners buyable ~1 \
Brightvale Castle Celebration ~1-2 \
Brightvale Castle Dress ~1-2 \
Brightvale Door ~2-4 \
Brightvale Fence buyable ~1 \
Brightvale Fence 10-Bundle buyable ~1 \
Brightvale Frame ~11-12 \
Brightvale Mystery Capsule ~5-6 \
Brightvale Room in a Bag buyable ~5 \
Brightvale Star Rug buyable ~1 \
Brightvale Team Braided Wig ~1-2 \
Brightvale Team Crazy Wig ~1-2 \
Brightvale Team Cuffs ~1-2 \
Brightvale Team Face Makeup ~1-2 \
Brightvale Team Foam Finger ~2 \
Brightvale Team Glitter Face Paint ~1-2 \
Brightvale Team Hat ~1-2 \
Brightvale Team Jester Hat ~2 \
Brightvale Team Mask ~1-2 \
Brightvale Team Pom Pom ~1-2 \
Brightvale Team Road to the Cup Background ~1-2 \
Brightvale Team Scarf ~3 \
Brightvale Team Sport Shirt ~1-2 \
Brightvale Team Trousers and Cleats ~1-2 \
Brightvale Team Vuvuzela ~2 \
Brightvale Tower ~25-30 \
Brilliant Altador Bed buyable ~1-2 \
Brilliant Altador Rug ~1-2 \
Brilliant Altador Sun Sandals buyable through NC Archives Fortune Cookie ~1-2 \
Brilliant Blue Faerie Wings ~1-2 \
Brilliant Candle Display buyable ~1 \
Brilliant Carnival Headdress buyable ~1 \
Brilliant Fireworks Shower ~1-2 \
Brilliant Gateway Background ~1-2  \
Brilliant Green Faerie Wings ~1-2 \
Brilliant Green Layered Skirt ~1-2 \
Brilliant Holiday Light Gift Wrap NT \
Brilliant Mace of Altador ~1-2 \
Brilliant Ombre Sweetheart Gram NT \
Brilliant Purple Faerie Wings ~1-2 \
Brilliant Red Birthday Gift Wrap NT \
Brilliant Red Faerie Wings ~1-2 \
Brilliant Red Wig with a Clover Headband ~2-4 \
Brilliant Shine Wings ~1-2 \
Brilliant Snowflake Tattoo ~1-2 \
Brilliant Sun Balloon ~1-2 \
Brilliant Sun Staff ~3 \
Brilliant Sword in Stone ~1-2 \
Brilliant Yellow Faerie Wings ~2-4 \
Bringer of Night Collectors Staff ~2-3 \
Broadcaster Jacket buyable through NC Archives Fortune Cookie ~2 \
Broiling Fire Foreground ~1-2 \
Broken Heart Plushie ~1-2 \
Broken Heart Shower ~2 \
Broken Heart Thought Bubble ~1-2 \
Broken Heart Tiara and Wig ~1-2 \
Broken Heart Wings ~1-2 \
Bronze Clockwork Wings ~1-2 \
Bronze Hourglass NT  \
Brown and Tan Striped Trousers ~1-2 \
Brown Corduroy Jacket ~1-2 \
Brown Corduroy Trousers ~2 \
Brown Fleece Lined Boots ~1-2 \
Brown Hat Raven Wig buyable ~1 \
Brown Tapered Wig buyable through Patapult ~1-2 \
Brown Tropical Wig ~2 \
Brown Uni Key Quest Token buyable ~1 \
Brynns Collectors Wig and Helmet ~1-2 \
Brynns Tattered Tunic ~1-2 \
Bubble Gum Wig buyable ~1 \
Bubble Vine Garland ~1-2 \
Bubbling Beaker ~3-4 \
Bubbling Cauldron ~1-2 \
Bubbling Clam Shell Foreground ~1-2 \
Bubbling Experiment Mystery Capsule ~2-3 \
Bucket Of Fish ~8-10 \
Bucket of Pinwheels ~1-2 \
Bullseye Contacts ~1-2 \
Bullseye Earrings buyable through NC Archives Fortune Cookie ~1-2 \
Bumble Beam Earrings buyable through NC Archives Fortune Cookie ~1-2 \
Bumbluz Light Wand ~1-2 \
Bunch of Straw buyable ~1 \
Bunch of Sunflowers ~1-2 \
Bunch of Tulle buyable ~1 \
Bundle of Books ~1-2 \
Bundled Up Winter Scarf ~1-2 \
Bunny String Lights ~1-2 \
Burgundy Hood ~2-3  \
Burgundy Striped Pullover buyable ~1 \
Burgundy Velvet Jacket and Shirt ~1-2 \
Burst of Stars Armour ~1-2 \
Butterfly Arm Tattoo ~1-2 \
Butterfly Crown Wig buyable through 9th Birthday Fantasy Wish Candle ~1-2 \
Butterfly Dress ℗ ~35-45 \
Butterfly Face Paint buyable through NC Archives Fortune Cookie ~2-3 \
Butterfly Feeder Trinket ~1-2 \
Butterfly Gift Box Mystery Capsule ~1-2 \
Butterfly Shower buyable ~1 \
Butterfly Sun Glasses ~1-2 \
Butterfly Wand buyable through NC Archives Fortune Cookie ~1-2 \
Button Flowers Foreground ~2 \
Button Town Background ~2-3 \
Buzzer Keeper Helmet ~1-2 \
C \
 \
Cackling Edna Head ~1-2 \
Caged Crokabek Staff ~1-2 \
Caged Skeleton Pawkeet ~1-2 \
Cake on the Face ~2 \
Cake Pop Bouquet ~1-2 \
Cake Topper Background ~1-2 \
Camouflage Helmet buyable through Camouflage Wocky Key Quest Token ~1-2 \
Camouflage Kougra Key Quest Token buyable ~1-2 \
Camouflage Poogle Key Quest Token buyable ~1-2 \
Camouflage Tutu and Tights buyable through Camouflage Kougra Key Quest Token ~1-2 \
Camouflage Wocky Key Quest Token buyable ~1-2 \
Camouflaged Tent buyable through Camouflage Poogle Key Quest Token ~1-2 \
Camp Wannamakeagame Cap and Wig ~1-2 \
Camp Wannamakeagame Mailbox 1-Pack \
Camp Wannamakeagame Mailbox 10-Pack \
Camp Wannamakeagame Mailbox 22-Pack \
Camp Wannamakeagame Mailbox 5-Pack \
Camp Wannamakeagame Uniform ~1-2 \
Camping Background ~2-3 \
Camping Backpack ~1-2 \
Can of Paint ~3-4 \
Candelabra Wings ~1-2 \
Candle Branch Staff ~1-2 \
Candlelit Beach Background ℗ ~2-3 \
Candlelit Opera Stage Foreground ~1-2 \
Candy & Hearts Sweetheart Gram NT \
Candy Buffet Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Candy Cane Candle Trinket ~1-2 \
Candy Cane Gift Wrap NT \
Candy Cane Glasses ~1-2 \
Candy Cane Hair Bow buyable ~1 \
Candy Cane Hat buyable through NC Archives Fortune Cookie ~1-2 \
Candy Cane Lane Frame ~1-2 \
Candy Cane Lights ~3-4 \
Candy Cane Path Background ~1-2 \
Candy Cane Pattern Thermal ~1-2 \
Candy Cane Pitchfork ~1-2 \
Candy Cane Pyjama Trousers ~1-2 \
Candy Cane Shield ~1-2 \
Candy Cane Skirt ~1-2 \
Candy Cane Snowflake Wand ~1-2 \
Candy Cane Staff ~1-2 \
Candy Cane Stockings with Red Shoes ~1-2 \
Candy Cane String Lights buyable through NC Archives Fortune Cookie ~3-4 \
Candy Cane Striped Dress ℗ ~2-4 \
Candy Cane Striped Ice Treasure Chest NT \
Candy Cane Sword buyable through NC Archives Fortune Cookie ~1-2 \
Candy Cane Tights and Tutu ~1-2 \
Candy Cane Wings buyable through NC Archives Fortune Cookie ~2-3 \
Candy Corn and Pumpkin Garland ~1-2 \
Candy Corn Bow Tie ~1-2 \
Candy Corn Chair ~2 \
Candy Corn Crown ~1-2 \
Candy Corn Cupcake ~1-2 \
Candy Corn Garland ~1-2 \
Candy Corn Potted Tree ~1-2 \
Candy Corn Scarf ~1-2 \
Candy Corn Shirt ~1-2 \
Candy Corn Smiley Snack ~1-2 \
Candy Corn String Lights ~1-2 \
Candy Corn Table ~2-3 \
Candy Cupcake Light ~1-2 \
Candy Dot Curtains ~1-2 \
Candy Face Paint ~1-2 \
Candy Floss String Lights ~1-2 \
Candy Floss Swirl Wig buyable through Patapult ~1-2 \
Candy Floss Wings ~1-2 \
Candy Garden Background ~1-2 \
Candy Gate ~2-4 \
Candy Negg Garland ~1-2 \
Candy Nest and Neggs ~1-2 \
Candy Poinsettia Wand ~1-2 \
Candy Pop Staff buyable through NC Archives Fortune Cookie ~3-4 \
Candy Rope Wings ~1-2 \
Candy Shenkuu Tunic ~1-2 \
Candy Stripe Dress ~4-6 \
Candy Vampire Goodie Bag ~1-2 \
Candy Warrior Crossbow ~1-2 \
Candy Warrior Dress ~1-2 \
Candy Warrior Lederhosen ~1-2 \
Canoe Ride Background ~1-2 \
Cape of the Arcane ~1-2 \
Captain K Helmet ~1-2 \
Captain Threelegs Mystery Capsule ~6-8 \
Captain Threelegs Quarters Background ~1-2 \
Captain Threelegs Room Key \
Captain Tuans Collectors Telescope ~1-2 \
Captain Valentine Jacket ~1-2 \
Captivating Balloon Garland ~1-2 \
Captivating Blue Star Light Arch ~1-2 \
Captivating Magic Box Background ~1-2 \
Caramel Apple Hat ~1-2 \
Cardboard Fort Playhouse ~2 \
Carefully Gift Wrapped Wings ~1-2 \
Carmariller Flower ~2 \
Carnival Background ~1-2 \
Carnival Fan ~1-2 \
Carnival Gloves ~4-5 \
Carnival Hat ~1-2 \
Carnival Jacket and Shirt ~1-2 \
Carnival Mask ~1-2 \
Carnival of Terror Clown Pants with Suspenders buyable through NC Archives Fortune Cookie ~1-2 \
Carnival Propeller Beanie ~1-2 \
Carnival Ruffle Collar ~1-2 \
Carnival Shoes ~1-2 \
Carnival Trousers ~1-2 \
Carnival Wings buyable ~1 \
Caroler Cane ~1-2 \
Caroler Jacket ~2 \
Caroler Shirt and Tie ~2 \
Caroler Top Hat ~1-2 \
Caroler Trousers ~1-2 \
Caroller Capelet buyable through Shenanigifts ~1-2 \
Caroller Doorstep Background buyable through Shenanigifts ~1-2 \
Carolling Coat and Scarf buyable through Shenanigifts ~1-2 \
Carolling Songbook Foreground buyable through Shenanigifts ~1-2 \
Carolling Trousers and Boots buyable through Shenanigifts ~1-2 \
Carousel Background ~1-2 \
Carousel Dress ~1-2 \
Carrot Crown Wig ~1-2 \
Carrot Garland ~1-2 \
Carved Bone Sword ~1-2 \
Carved Bronze Paisley Candle Garland ~1-2 \
Carved Damask Frame ~1-2 \
Carved Farnswap Pull Along ~1-2 \
Carved Flower Bracers ~1-2 \
Carved Meowclops Pull Along ~1-2 \
Carved Metal Pine Cone Sword ~1-2 \
Carved Sand Castle Shield ~1-2 \
Carved Wooden Roses Foreground buyable ~1 \
Carved Wooden Skirt ~1-2 \
Carved Wooden Vanity Table ~1-2 \
Cascade of Hearts Shower ~2 \
Cascading Cloud Waterfall ~1-2 \
Cascading Flower Shelf buyable ~1 \
Castle Battle Ruins Background ~1-2 \
Castle Nox Corridor of Chance Key 1-Pack \
Castle Nox Corridor of Chance Key 10-Pack \
Castle Nox Corridor of Chance Key 20-Pack \
Casual Altadorian Dress ~2 \
Casual Greatcoat ~1-2 \
Casual Shirt and Trousers ~1-2 \
Catacombs Treasure Room Background ~2 \
Cauldron of Brew ~1-2 \
Cauldron of Candy ~1-2 \
Caution: Symols Foreground ~1-2 \
Cave Chia Cave Collectors Background ~3-4 \
Caylis Collectors Wig ℗ ~1-2 \
Ceiling Tea Party Background ~1-2 \
Celebratory Drenching buyable through NC Archives Fortune Cookie ~1-2 \
Cemetery at Night Background ~1-2 \
Cemetery Steps Background ~2-3 \
Ceremonial Shenkuu Warrior Armour ~1-2 \
Ceremonial Shenkuu Warrior Helmet ~1-2 \
Ceremonial Shenkuu Warrior Heraldic Banner ~4-5 \
Ceremonial Shenkuu Warrior Shinai ~3-4 \
Chadleys Collectors Contacts ~1-2 \
Chainmail Meridell Bed buyable ~1-2 \
Chainmail Shoulder Armour ~1-2 \
Chalk Paints buyable ~1 \
Chalk-Dyed Chiffon Shirt ~1-2  \
Chalk-Dyed Curls Wig ~2 \
Chalkboard Background ~1-2 \
Chamber of Mirrors Background ~1-2 \
Champions Dragoyle Shield buyable through Valiant Champion Mystery Capsule ~1-2 \
Champions Fur Bracers buyable through Valiant Champion Mystery Capsule ~1-2 \
Champions of Meridell Mystery Capsule ~2-4 \
Chandelier Wings ~1-2 \
Changing Leaves Shower ~1-2 \
Changing Moon Contacts ~1-2 \
Chariot Chase Chariot buyable through NC Archives Fortune Cookie ~2-3 \
Chariot Kite ~1-2 \
Charming Acorn House Garland ~1-2 \
Charming Autumn Pastel View Background ~2-4 \
Charming Baby Frame ~1-2 \
Charming Baby Nursery Background buyable through Nursery Time NC Fortune Cookie ~1-2 \
Charming Bakery Display Background ~1-2 \
Charming Bathing Suit ~1-2 \
Charming Battle Duck Hoodie ~1-2 \
Charming Corn Husk Dress ~2-3 \
Charming Halloween String Lights ~15-20 \
Charming Kiko Lake Wallpaper \
Charming Kitchen Background ~1-2 \
Charming Patchwork Clover ~1-2 \
Charming Pink Bouquet ~1-2 \
Charming Red Heart Gift Wrap NT \
Charming Rose Skirt ~1-2 \
Charming Rose Sweatshirt ~2 \
Charming Snowglobe Background ~6 \
Charming Summer Garden Background ~2 \
Charming Witch Dress ~1-2 \
Charming Wonderland Wig ~1-2 \
Charming Wooden China Cabinet ~10-12 \
Charming Wooden Rocking Uni ~4-6 \
Checkered Floor ~1-2 \
Checkered Garden Path ~1-2 \
Checkered Ribbon Wig ~1-2 \
Checkered Shirt with Floral Tie ~1-2 \
Checkered Shorts buyable ~1 \
Checkered Wings ~1-2 \
Cheerful Circles Gift Box Mystery Capsule ~1-2 \
Cheerful Daffodil Staff ~1-2 \
Cheerful Day Background ℗ ~3-5  \
Cheerful Lighted Tree ℗ ~2-3 \
Cheerful Negg Umbrella ~1-2 \
Cheerful Outdoor Pool Background ~5-7 \
Cheerful Red Wig and Hat buyable ~1 \
Cheerful Watermelon Headband ~1-2 \
Cheerful Watermelon Skirt ~1-2 \
Cheerful Watermelon Top ~1-2 \
Cheering Sound Track ~1-2 \
Cheery Bonfire ~1-2 \
Cheery Holiday Bow Wings ~1-2 \
Cheery Holiday Dress buyable through NC Archives Fortune Cookie ~2-3 \
Cheery Holiday Frame ~1-2 \
Cheery Holiday Garland ~1-2 \
Cheery or Dreary Mystery Capsule ~6 \
Cheery Polka Dot Dress ~2-3 \
Cheery Shelf of Flowers buyable through Patapult ~1-2 \
Cheery Snowflake Mittens ~1-2 \
Cheery Spring Meadow Background ~1-2 \
Cheery Spring Skirt ~1-2 \
Chef Juliens Tasting Spoon 1-Pack \
Chef Juliens Tasting Spoon 7-Pack \
Cherry Blossom Bouquet buyable through Shenanigifts ~1-2 \
Cherry Blossom Branch buyable ~1 \
Cherry Blossom Face Paint ~2 \
Cherry Blossom Garland ~25-30 \
Cherry Blossom Gloves ~1-2 \
Cherry Blossom Season Background ~2-3 \
Cherry Blossom Shower ~3-4 \
Cherry Blossom Silk Dress buyable ~1 \
Cherry Blossom Skirt ~1-2 \
Cherry Blossom Tree ~20-25 \
Cherry Blossom Wings ~1-2 \
Cherry Hat ~1-2 \
Cherry Shower ~1-2 \
Cherub Wings ~3-5 \
Cherub Wrap ~2-3 \
Chess Set Background ~1-2 \
Chest of Plunder buyable ~1 \
Chia Clown Eye Patch buyable through NC Archives Fortune Cookie ~1-2 \
Chia Goalie Gloves buyable through NC Archives Fortune Cookie ~1-2 \
Chiffon Fabric buyable ~1 \
Chilling Hallway Background ~1-2 \
Chirping Music Track ~1-2 \
Chiselled Wooden Wig ~1-2 \
Chocolate Bridge NT \
Chocolate Carousel ~1-2 \
Chocolate Cybunny Thought Bubble ~20 \
Chocolate Dipped Waffle Cone Wings ~1-2 \
Chocolate Dream Background ~2 \
Chocolate Fountain NT \
Chocolate Fountain Lane Background buyable ~1 \
Chocolate Ink Bottle NT \
Chocolate Shoes and Tights ~1-2 \
Chocolate Silk Pie Wig ~1-2 \
Chocolate Snowbunny Handheld Plushie ~1-2 \
Chocolate Strawberry Wand ~1-2 \
Chocolate Top Hat ~1-2 \
Chocolate Wings buyable through NC Archives Fortune Cookie ~2-3 \
Chocolate Wonderland Background NT \
Chocolates Thought Bubble ~1-2  \
Chopping Block buyable through NC Archives Fortune Cookie ~1-2 \
Christmas Angel Dress ~1-2 \
Christmas Carriage buyable through Shenanigifts ~1-2 \
Christmas Eve Tent Background ~2 \
Christmas Music Parlour Background buyable through Shenanigifts ~2 \
Christmas Ona Handheld Plushie ~1-2 \
Christmas Porch Background ~2-4 \
Christmas Rock Handheld Plushie ~1-2 \
Christmas Treats Garland ~1-2 \
Christmas Tree Capelet ~1-2 \
Christmas tree lot background ~1-2 \
Chronomobile Background ~1-2 \
Chunky Seashell Necklace ~1-2 \
Churning Red Clouds ~5-6 \
Cinnamon Bun Wings ~1-2 \
Cinnamon Stick Staff ~1-2 \
Circle of Balloons ~1-2 \
Circuit Board Skirt and Tights ~1-2 \
Circuit Board Wings ~1-2 \
Circus Contacts ~1-2 \
City of Maraqua Background ~1-2 \
Clapping Chalk Board Erasers ~1-2 \
Classic Beauty Mark buyable ~1 \
Classic Black Bob Wig ~2-3 \
Classic Magical Negg NT \
Classic Neovian Dress ~2 \
Classic Neovian Outfit ~2-3  \
Classic Street Lamp ~1-2 \
Classic Wooden Radio Player ~1-2 \
Classic Wooden Rolling Pin ~1-2 \
Classical Pillar Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Clawed Glove ~1-2 \
Clear Forest Sky Background ~4-6 \
Cliffside Tree ~1-2 \
Cloak of the Night Sky ~8-10  \
Clock Makers Workshop buyable ~1 \
Clockwork Eyepatch Facepaint buyable ~1 \
Clockwork Wings ~1-2 \
Clothesline Garland ~1-2 \
Cloud Cardigan ~1-2 \
Cloud Castle Background ℗ ~2-3 \
Cloud Covered Summer Dress ~2 \
Cloud Facepaint ~1-2 \
Cloud Flotsam Key Quest Token buyable ~1-2 \
Cloud Flower Bouquet ~1-2 \
Cloud Galoshes ~1-2 \
Cloud Gate Foreground ~1-2 \
Cloud Kougra Key Quest Token buyable ~1-2 \
Cloud Meerca Key Quest Token buyable ~1-2 \
Cloud Moehog Key Quest Token buyable ~1-2 \
Cloud Mystery Capsule [rare collectible : Depends on trader] ~200+ \
Cloud Pyjamas ~1-2 \
Cloud Romper ~1-2 \
Cloud Shower ~1-2 \
Cloud Staff buyable through NC Archives Fortune Cookie ~3-4 \
Cloud String Lights ~2-4 \
Cloud Tutu and Tights ~1-2 \
Cloud Umbrella ~1-2 \
Cloud Uni Key Quest Token buyable ~1-2 \
Cloud Wand ~1-2 \
Cloudy Day Mystery Capsule ~11-15 \
Clover Alabriss Shoe Foreground ~1-2 \
Clover Shooting Cannon ~1-2 \
Coal Contacts ~1-2 \
Coal Stove ~4-6 \
Cobrall Charmer Basket ~15-20 \
Cobrall Constrictor buyable through NC Archives Fortune Cookie ~1-2 \
Cobrall Wig ~1-2 \
Cobweb Banner ~2 \
Cocoa Shop Background buyable ~1 \
Coffin Clutch ~1-2 \
Coffin of Spooks ~5-6 \
Cogs Togs Collectors Wig ~1-2 \
Cold Winter Night Background ~3-4 \
Collared Autumn Shirt ~1-2 \
Collared Holiday Snowman Shirt ~1-2 \
Collectors Dream Closet Background ~1-2 \
Color Block Dress ~1-2  \
Colorful Beach Umbrella ~1-2 \
Colorful Feather Bouquet buyable through Tribal Mystery Capsule ~1-2 \
Colorful Paper Lantern Garland ~2-3 \
Colosseum Clubhouse Background ~1-2 \
Colosseum Tunnel Background ~1-2 \
Colour Burst Gift Box Mystery Capsule ~2 \
Colour Changing Contacts buyable through NC Archives Fortune Cookie ~2-3 \
Colour Changing Leaf Wings ~1-2 \
Colour Gradient Wig ~1-2 \
Colour Splat Contacts ~1-2 \
Colour Splat Jacket ~1-2 \
Colour Splat Mystery Capsule ~2-3 \
Colour Streak Wig ~1-2 \
Coloured Craft Tree ~1-2 \
Colourful Beach Wrap ~1-2 \
Colourful Birthday Ribbon Wings ~1-2 \
Colourful Birthday Shirt ~1-2 \
Colourful Blossom Gown buyable ~1 \
Colourful Boat Shoes ~1-2 \
Colourful Bouncy Ball Shower ~1-2 \
Colourful Campfire Background ~1-2 \
Colourful Candies Garland ~1-2 \
Colourful Candy Heart Bouquet ~1-2 \
Colourful Candy Topiaries buyable through NC Archives Fortune Cookie ~1-2 \
Colourful Candy Wings ~1-2 \
Colourful Carnival Hat with Mask ~1-2 \
Colourful Confetti Wig ~1-2 \
Colourful Coral Trident ~1-2 \
Colourful Crayon Fence ~1-2 \
Colourful Crayon Frame ~1-2 \
Colourful Crayon Wig ~2 \
Colourful Daisy Foreground ~1-2 \
Colourful Daisy String Lights ~1-2 \
Colourful Dandelion Foreground ~1-2 \
Colourful Desert Wings buyable ~1 \
Colourful Draphly Hat ~1-2 \
Colourful Fabric Bolts buyable ~1 \
Colourful Fall Face Paint ~3 \
Colourful Feather Wings ~1-2 \
Colourful Feathers buyable ~1 \
Colourful Five Button Shirt ~1-2 \
Colourful Fletching Shirt ~1-2 \
Colourful Flower Bucket Garland ~1-2 \
Colourful Flower Dress ~1-2 \
Colourful Flower Farm Background ~1-2 \
Colourful Glass Mushroom Foreground buyable ~1 \
Colourful Glass Suncatcher buyable through Patapult ~1-2 \
Colourful Glow Face Paint ~1-2 \
Colourful Ice Staff ~1-2 \
Colourful Ink Bottles buyable ~1 \
Colourful Kaleidoscope Background ~1-2 \
Colourful Kite ~1-2 \
Colourful Kite Garland ~1-2 \
Colourful Kite on a String ~1-2 \
Colourful Mitten Shower ~1-2 \
Colourful Mootix Scarf ~1-2 \
Colourful Mushroom Foreground ~1-2 \
Colourful Mushroom Garland ~1-2 \
Colourful Negg Hair Bow ~1-2 \
Colourful Negg Hoodie ~1-2 \
Colourful Negg Pillars ~1-2 \
Colourful Ornament Shower ~1-2 \
Colourful Painted Negg Crown ~1-2 \
Colourful Painted Negg Wings ~1-2 \
Colourful Pinwheel Foreground ~1-2 \
Colourful Pinwheel Garland ~1-2 \
Colourful Pinwheel String Lights ~1-2 \
Colourful Pirate Wig ~1-2 \
Colourful Playroom Background ~1-2 \
Colourful Polka Dot Town Background ~1-2 \
Colourful Pom-poms ~1-2 \
Colourful Ribbon Wand ~1-2 \
Colourful Staircase Background ~3-4 \
Colourful Stepdance Dress ~2-3 \
Colourful Tribal Print Garland buyable through Tribal Mystery Capsule ~1-2 \
Colourful Yarn Sweater ~1-2 \
Colouring Crayon Background ~1-2 \
Coltzans Ceremonial Armour ~1-2 \
Coltzans Collectors Staff ~1-2 \
Coltzans Ghost ~1-2 \
Coltzans Shrine Background ~1-2 \
Comfortable Tennis Shoes ~1-2 \
Comfy Boat Shoes ~1-2 \
Comfy Purple Culottes ~1-2 \
Commander Garoos Collectors Shoulder Armour ~1-2 \
Commander Valkas Collectors Armoured Shirt ~1-2 \
Commemorative Altador Cup IV NC Challenge Shirt ~1-2 \
Commemorative Battle For Meridell Garland ~1-2 \
Commemorative Birthday Cupcake Costume ~4 \
Commemorative Colourful Paper Lantern String Lights ~4-5 \
Commemorative Fishing Pole with Old Boot ~1-2 \
Commemorative Floating Air Faerie Doll ~1-2 \
Commemorative Hall of Heroes Background ~1-2 \
Commemorative In the Spotlight Garland ℗ ~2-3 \
Commemorative Jordie Plushie ~2 \
Commemorative Neopets Games Room Background ~1-2 \
Commemorative Neopets Plush Tag ~1-2 \
Commemorative Omelette Hat ~1-2 \
Commemorative Roo Island Jester Staff ~1-2 \
Commemorative Sliced Negg Wings ~1-2 \
Commemorative Techo Says Background ~1-2 \
Commemorative Unidentified P3 Infestation Background ~1-2 \
Compass Hiking Staff ~1-2 \
Concert Hall Background ~1-2 \
Conductors Stand Foreground ~1-2 \
Conductors Tuxedo ~1-2 \
Cone of Gadgets ~1-2 \
Confetti Horn Wings ~1-2 \
Confetti Shower buyable ~1 \
Confused Arrow Sign ~1-2 \
Constellation Map ~4 \
Constellation Markings buyable through 9th Birthday Night Wish Candle  \
Constellation Sword ~2 \
Constellation Wings ~1-2 \
Construction Paper Chain Garland ~1-2 \
Contacts of the Cosmos ~1-2 \
Continuous Flame Gloves ~1-2 \
Cooking Apron ~2 \
Copper Blonde Wig with Headband buyable ~1 \
Copper Wire buyable ~1 \
Coral Wings ~2 \
Cornucopia Gift Box Mystery Capsule ℗ ~4-6 \
Corridor 317B Background ~17-20 \
Cosmic Cloud Face Paint ~1-2 \
Cosmic Holiday Tree ~1-2 \
Cosmic Ray Wig ~1-2 \
Cosmic Sky Shirt ~1-2 \
Cosy Apple Skirt ~1-2 \
Cosy Autumn Front Porch Background ℗ ~3-4 \
Cosy Autumn Tree Background ~1-2 \
Cosy Cooking Clogs ~1-2 \
Cosy Cottage Holiday Background ~1-2 \
Cosy Cottage Interior Background ~1-2 \
Cosy Fireplace with Stockings ~15-18 \
Cosy Flower Headband Wig buyable ~1 \
Cosy Hand Muff and Gloves buyable through Shenanigifts ~1-2 \
Cosy Heart Bakery Background ~1-2 \
Cosy Kitchen Background ~1-2 \
Cosy Kitchen Shelf Garland ~2 \
Cosy Ski Jumper buyable through NC Archives Fortune Cookie ~1-2 \
Cotton and Straw Dreamland Background ~1-2 \
Cotton Candy Sceptre ~2 \
Cotton Candy Swirl Ponytail Wig ~1-2 \
Cotton Candy Tree buyable through Pink Korbat Key Quest Token ~1 \
Cotton Candy Umbrella ℗ ~1-2 \
Cotton Swab Flowers ~1-2 \
Court Dancer Collectors Wig ℗ ~35-40 \
Court Dancers Collectors Eye Shadow and Contacts ~1-2 \
Courtyard Ambush Background ~4-6 \
Courtyard Ambush Map NT \
Cozy Summer Beach Shack ~1-2 \
Crackling Ice Effect ~1-2 \
Crackling Ice Magic Elixir ~1-2 \
Crash-Landed Meteorite ~1-2 \
Crawling Spyders Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Crayon Flower Foreground ~1-2 \
Crayon Forest Background ~2-3 \
Crayon Path Background ~2 \
Crayon Wrapper Dress ~1-2 \
Crazed Spellcaster Contacts ~2 \
Crazy Altador Cup Foam Hat ~1-2 \
Crazy Candy Cane Bouquet ~1-2 \
Crazy Enlarged Eye ~1-2 \
Crazy Fire Wig ~1-2 \
Crazy Snowboarder Hat buyable through NC Archives Fortune Cookie ~1-2 \
Crazy Techo Fanatic Glasses ~1-2 \
Crazy Techo Fanatic Hat ~1-2 \
Cream Eyelet Shirt ~1-2 \
Creeping Branches Frame ~3 \
Creeping Purple Fog ~1-2 \
Creepy Clown Shield ~1-2  \
Creepy Geraptiku Mask ~1-2 \
Creepy Glowing Jack-O-Lantern Garland ~1-2 \
Creepy Halloween Skull Mystery Capsule ~8-10 \
Creepy Meepit Hat ~3-4 \
Creepy Petpetpet Necklace ~1-2 \
Creepy Skull Bracelet ~1-2 \
Creepy Spyder Coffin Goodie Bag ~1-2 \
Creepy Terror Mountain Wallpaper ~2-4 \
Creepy Trap Door ~1-2 \
Cresting Wave Wings ~1-2 \
Crimson Grove Background ~1-2 \
Crochet Sandals ~1-2 \
Crochet Winter Hat ~15-20 \
Crocheted Ear Muffs and Wig ~1-2 \
Crokabek Garland ~3 \
Crokabek Nest Background ~1-2 \
Crossbone Mask ~1-2 \
Crown of Flowers Spring Wig ~3-4 \
Crown of Shells Wig ~2 \
Crown of Splendour ~1-2 \
Crunching Foot Step Music Track ~1-2 \
Crunchy Watermelon Garland ~1-2 \
Crystal Flower Light Garland ~1-2 \
Crystal Fountain Ball NT \
Crystal Heart and Flower Garland ~1-2 \
Crystal Star String Lights ~1-2 \
Crystal Wreath Wig ~2-3 \
Crystalline Belt ~1-2 \
Crystalline Flower Bouquet ~1-2 \
Crystalline Flower Wings ~1-2 \
Crystalline Shades ~2 \
Cuffed Ripped Trousers buyable ~1 \
Cumulus Wings ~1-2 \
Cupcake Boxing Gloves ~1-2 \
Cupcake Clip Wig ~1-2 \
Cupcake Crown ~1-2 \
Cupcake Curtains ~10-15 \
Cupcake Earrings ~1-2 \
Cupcake Flower Foreground ~1-2 \
Cupcake Glasses ~1-2 \
Cupcake Headband ~1-2 \
Cupcake Pyjamas ~1-2 \
Cupcake Shower ~2-4 \
Cupcake Skirt NT buyable ~1 \
Cupcake String Lights ~2-3 \
Cupcake Wand ~2 \
Cupid Garland ~3 \
Cupid Meerca Balloon ~1-2 \
Cupid Shoyru Key Quest Token ~12 \
Curled Ribbon Skirt ~2 \
Curled Updo Wig ~10-15 \
Curly Black Wig ~1-2 \
Curly Blonde Cherub Wig ~2-3 \
Curly Brown Wig ~1-2 \
Curly Dark Wig ~1-2 \
Curly Hair with Fabric Flower Headband buyable ~1 \
Curly Pink Wig ~1-2 \
Curly Rainbow Wig ~2 \
Curly Red Wig ~1-2 \
Curly Valentine Wig ℗ ~6-8 \
Curly White Wig ~1-2 \
Curly White Wig With Bow ~5-6  \
Curse of Maraqua Mystery Capsule ~3-4 \
Curse of Strength Effect ~1-2 \
Cursed Flowers Foreground ~1-2 \
Cursed Swirl Contacts ~1-2 \
Curtain of Barbats ~1-2  \
Cute Kougra Eye Glasses ~1-2 \
Cute Lavender Fluffy Sweater ~3-4 \
Cute Space Dress ~1-2 \
Cute Yellow Spring Blouse ~1-2 \
Cybunny Pyjamas ~1-2  \
Cybunny Scout Collectors Trousers and Boots ~1-2 \
Cybunny Spring Ride \
Cyodrake Lunar Festival Cloak ~1-2 \
Cyodrake Temple Garden ~15 \
D \
 \
Daffodil and Carrot Garden Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Daffodil Shower ~1-2 \
Daily Dare Boardwalk Background ~1-2 \
Daily Dare Game Switch Ticket \
Daily Dare NC Challenge 1-Game Ticket Pack \
Daily Dare NC Challenge 10-Game Ticket Pack \
Daily Dare NC Challenge 32-Game Ticket Pack \
Daily Dare NC Challenge 5-Game Ticket Pack \
Daily Dare NC Challenge Game Controller Belt ~1-2 \
Daily Dare NC Challenge Gamers Garland ~1-2 \
Daily Dare NC Challenge Gamers Hat ~1-2 \
Daily Dare NC Challenge Gamers Pack \
Daily Dare NC Challenge Gamers Scarf ~1-2 \
Daily Dare NC Challenge Prize Pack \
Daily Dare NC Challenge Y13 Gold Medal ~1-2 \
Daily Dare NC Retro Challenge Tuesdays Retro Challenge Game Ticket \
Daily Dare Spinning Carnival Game Foreground ~1-2 \
Daily Dare Top Hat ~1-2 \
Dainty Blue and Purple Face Paint buyable ~1 \
Dainty Dark Pirate Skirt ~1-2 \
Dainty Faerie Wing Skirt ~2-3 \
Dainty Heart Socks and Shoes ~1-2 \
Daisy Circlet Wig ~1-2 \
Daisy Headband Wig ~1-2 \
Damask Circlet Wig ~1-2 \
Damask Fringe Scarf ~1-2 \
Damask Gift Box Mystery Capsule ~1-2 \
Damask Headband Wig ~1-2 \
Damask Lamp Garland ~4-6 \
Damask Leaf Wings ~1-2 \
Damask Print Shoes ~1-2 \
Damask Ribbons Garland ~1-2 \
Damask Rose Bodice ~1-2 \
Damask Throne Room Background ~1-2 \
Dancing Butterflies ~1-2 \
Dancing Fire Foreground ~1-2 \
Dancing Hula Girl Usuki ~1-2 \
Dancing Snow Fir Toy ~1-2 \
Dapper Deathly Union Cane ℗ ~3 \
Dapper Deathly Union Graveyard Background ~3 \
Dapper Deathly Union Shirt and Jacket ~1-2 \
Dapper Deathly Union Top Hat ~1-2 \
Dapper Deathly Union Trousers ~1-2 \
Dapper Striped Socks and Shoes buyable through Patapult ~1-2 \
Dappled Rainbow Ice Lolly ~1-2 \
Darblat Ice Slide ~1-2 \
Darigan Altador Cup Jersey buyable ~1 \
Darigan Citadel Altador Cup Team Spirit Banners buyable ~1 \
Darigan Citadel Desk buyable ~1 \
Darigan Citadel Fence \
Darigan Citadel Fortress Bed buyable ~1-2 \
Darigan Citadel Lamp buyable ~1 \
Darigan Citadel Lava Pit ~15-25 \
Darigan Citadel Room in a Bag buyable ~5 \
Darigan Citadel Sofa buyable ~1 \
Darigan Citadel Spike Floor Tiles \
Darigan Citadel Team Braided Wig ~1-2 \
Darigan Citadel Team Cuffs ~1-2 \
Darigan Citadel Team Glitter Face Paint ~1-2 \
Darigan Citadel Team Jester Hat ~1-2 \
Darigan Citadel Team Mask ~1-2 \
Darigan Citadel Team Pom Pom ~1-2 \
Darigan Citadel Team Road to the Cup Background ~1-2 \
Darigan Citadel Team Scarf ~2-3 \
Darigan Citadel Team Vuvuzela ~1-2 \
Darigan Dodgeball Plastic Mace buyable through NC Archives Fortune Cookie ~2-3 \
Darigan Team Crazy Wig ~1-2 \
Darigan Team Face Makeup ~1-2 \
Darigan Team Foam Finger ~1-2 \
Darigan Team Hat ~1-2 \
Darigan Team Sport Shirt ~1-2 \
Darigan Team Trousers and Cleats ~1-2 \
Darigan Wings ℗ ~2-3 \
Daring Sea Captain Coat ~1-2 \
Daring Sea Captain Hat ~1-2 \
Daring Sea Captain Ship Background ~1-2 \
Daring Sea Captain Shoes ~3-4 \
Daring Sea Captain Spyglass ~1-2 \
Daring Sea Captain Trousers ~1-2 \
Dark and Eerie Smoke buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Battle Armour ~1-2 \
Dark Blue Contacts ~1-2 \
Dark Burning Forest Background buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Chocolate Candy Wig ~4 \
Dark Crystal Ball Trinket ~1-2 \
Dark Enchanted Cape ~2-3 \
Dark Enchanted Forest Background ~2-3 \
Dark Faerie Magic Cloud Garland ~2 \
Dark Faerie Magic Effect buyable ~1 \
Dark Faerie Magic Elixir buyable ~1 \
Dark Faerie Magic Orbs ~3-4 \
Dark Faerie Magic Staff ~1-2 \
Dark Faerie Magic Wig ~1-2 \
Dark Faerie Magic Wings ~1-2 \
Dark Faerie Shadow ~1-2 \
Dark Faerie Sister Wig buyable through NC Archives Fortune Cookie ~1-2 \
Dark Faerie Smoke Dress ~1-2 \
Dark Floating Skull buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Glitter Make Up buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Glowing Lilies buyable ~1 \
Dark Glowing Lily Tree ~1-2 \
Dark Hearts Skirt ~1-2 \
Dark Jewelled Heart Staff ~1-2 \
Dark Lace Dress ~15-20 \
Dark Magic Dress ℗ ~5-7 \
Dark Minion Staff ~2 \
Dark Multicolour Suspender Ensemble buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Mystical Book Foreground buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Mystical Cape buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Mystical Gown buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Mystical Shirt buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Dark Nova Handheld Plushie ~1-2 \
Dark Ombre Trousers ~1-2 \
Dark Ornate Mask ~1-2 \
Dark Princess Fan ~3 \
Dark Princess Gown ~1-2 \
Dark Princess Shoes ~1-2 \
Dark Princess Tiara ~1-2 \
Dark Princess Wings ~1-2 \
Dark Prism Bouquet buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prism Contacts buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prism Forest Background buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prism Gloves buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prism Mask buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prism Mohawk buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prism Mystery Capsule buyable ~1 \
Dark Prism Side Tree buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prismatic Flowers Foreground buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Prismatic Flowers Garland buyable through Dark Prism Mystery Capsule ~1-2 \
Dark Shenkuu Alley Background ~2-3 \
Dark Shenkuu Jacket buyable through Shenanigifts ~1-2 \
Dark Shimmery Lantern String Lights buyable ~1 \
Dark Sorcerer Mystery Capsule buyable ~1 \
Dark Spring Fedora ~1-2 \
Dark Thieving Jacket ~3 \
Dark Tropical Wig ~2 \
Dark Valentine Heart Wig ~1-2 \
Dark Valentine Sword ~12-15 \
Dark Vine Makeup ~1-2 \
Dark Wavy Hair Wig ~1-2 \
Dark Wig and Fedora buyable ~1 \
Dark Winter Hooded Cape ~1-2 \
Dark Winter Wig and Beanie ~2-3 \
Dark Wisp Makeup buyable ~1 \
Dark Witchs Broom ~1-2 \
Darkest Faerie Collectors Dark Magic Hands ~1-2 \
Darkest Faerie Dress buyable ~1 \
Darkest Faerie Tights and Boots ~1-2 \
Darkness Attacks buyable through NC Archives Fortune Cookie ~4-6 \
Darling Autumn Dress ~3-4 \
Darling Dress ~1-2 \
Dartail Ice Fishing Hole ~1-2 \
Dashing Bathing Suit ~1-2 \
Dashing Gothic Jacket buyable ~1 \
Day at the Tracks Background ~1-2 \
Day of the Dead Skull Purse ~1-2 \
Dazzling Candy Corn Field Background buyable through NC Archives Fortune Cookie ~2 \
Dazzling Cave Lights ~2-4 \
Dazzling Faerie Rainbow buyable through Faerie Aisha Key Quest Token ~1-2 \
Dazzling Feather Earrings ~1-2 \
Dazzling Floral Necklace ~20-25 \
Dazzling Green Clover Stole ~1-2 \
Dazzling Heart Sceptre ~1-2  \
Dazzling Holiday Ornaments ~1-2 \
Dazzling Ice Cream Castle ~1-2 \
Dazzling Light Show Hat ~1-2 \
Dazzling Midnight Wig ~2-4 \
Dazzling Rainbow Tent ~1-2 \
Dazzling Rainbow Wig buyable through Rainbow Wocky Key Quest Token ~1-2 \
Dazzling Silk Skirt ~1-2 \
Dazzling Snowflake Wings ~1-2 \
Dazzling Star Sword buyable ~1 \
Dazzling Winter Snowflake Mask ~1-2 \
Dazzling Yellow Leaves buyable through Yellow Kougra Key Quest Token ~1 \
Dazzling Yooyu Trousers ~1-2  \
Deadly Beauty Dress ~2 \
Deadly Beauty Face Paint ~3-4 \
Deadly Beauty Rose ~1-2 \
Deadly Beauty Wig ~2 \
Deadly Poison Bottle ~1-2 \
Deathly Union Dress ~2-3 \
Deathly Union Fence ~4-5 \
Deathly Union Graveyard Background ~1-2 \
Deathly Union Roses ~1-2 \
Deathly Union Wig ~2 \
Deathly Valentines Garland ~1-2 \
Debonair Mustache buyable ~1 \
Decorated Autumn Rake ~1-2 \
Decorated Witch Hat and Wig ~2 \
Decorative Autumn Double Street Lamp ~1-2 \
Decorative Bouquet of Marigolds ~1-2 \
Decorative Bow Facepaint ~1-2 \
Decorative Bowl of Fruit Background ~1-2 \
Decorative Branch Archway ~1-2 \
Decorative Flower Shoulder Armour ~1-2 \
Decorative Glass Jar Foreground buyable ~1 \
Decorative Green Vases ~1-2 \
Decorative Lace Cuffs ~1-2 \
Decorative Lamp Post ~1-2 \
Decorative Mini-Umbrella Garland ~1-2 \
Decorative Negg Tree ~1-2 \
Decorative Neopian Shield \
Decorative Porcelain Vase ~1-2 \
Decorative Snow Shovel ~1-2 \
Decoy Tower NT \
Decoy Tower Trinket ~1-2 \
Deep Red Hair with Feathers ~1 \
Defender of Neopia Cape ~1-2 \
Defender of Neopia Cowl ~1-2 \
Defender of Neopia Utility Belt ~2-3 \
Defenders of Neopia Headquarters Background ~1-2 \
Delectable Pink Cake Gift Wrap NT \
Delicate Autumn Jacket ~1-2 \
Delicate Autumn Wings ~2-3 \
Delicate Blue Dress buyable ~1 \
Delicate Bouquet of Flowers buyable ~1 \
Delicate Chandelier Garland ~1-2 \
Delicate Chocolate Fan ~2 \
Delicate Cobweb Wings buyable ~1 \
Delicate Desert Pottery buyable through NC Archives Fortune Cookie ~1-2 \
Delicate Dyed Cotton Wings ~2-3 \
Delicate Floral Wig ~1-2 \
Delicate Flower Laurel ~3 \
Delicate Flower Tattoo ~1-2 \
Delicate Grey Dress ~1-2 \
Delicate Heart Wings ~2-3 \
Delicate Lace Garland ~1-2 \
Delicate Lace Parasol buyable ~1 \
Delicate Leaf String Lights buyable ~1 \
Delicate Pastel Sofa ~4-5 \
Delicate Pearl Headband Wig buyable through Shenanigifts ~1-2 \
Delicate Pink Valentine Parasol ℗ ~5-8 \
Delicate Sandcastle ~1-2 \
Delicate Silver Mask ~1-2 \
Delicate Valentine Heart Background ~1-2 \
Delicate White Lace Wings buyable ~1 \
Delicate Wispy Cape ~1-2 \
Delicious Cake Dress ~3 \
Delightable NC Fortune Cookie ~2 \
Delightful Doglefox Purse ~1-2 \
Delightful Flower Throne Background ~1-2 \
Delightful Flowering Vines ~1-2 \
Delightful Heart Lute NT buyable ~1 \
Delina Handheld Plushie buyable ~1 \
Delina the Crafting Faerie Floating Doll buyable ~1 \
Delinas Collectors Wig ~2 \
Deluxe Altador Cup Hoodie ~1-2 \
Deluxe Lost Desert Tent buyable ~1 \
Derby Hat ~1-2 \
Desert Mummy Tutu and Tights ~1-2 \
Desert Night Background ~2 \
Desert Tea Cup Garden ~1-2 \
Desert Warrior Markings ~3-4 \
Deserted Fairgrounds Background ~20 \
Deserted Tomb Entrance Collectors Background ~10-12 \
Deserted Town Background ~1-2 \
Designer Eye Patch ~7 \
Designer Trick-or-Treat Bag ~2-4 \
Dessert Chef Apron ~1-2 \
Dessert Party Background ~2 \
Destruct-O-Match Background ~1-2 \
Destruct-O-Match Cave Drawings Background buyable through NC Archives Fortune Cookie ~1-2 \
Detailed Scalloped Skirt ~1-2 \
Detective Desk Trinket ~1-2 \
Detective Trench Coat buyable ~1 \
Devils Food Cake ~1-2 \
Dew Drop Garland ~2-3 \
Dewy Snowdrop Flower Foreground buyable through Patapult ~1-2 \
Diamond Circlet Wig ~1-2 \
Diamond Flower Tiara ~1-2 \
Diamond Heart Tights and Shoes ~2 \
Diamond Satin Baby Valentine Shoes ~1-2 \
Dice Fence Foreground ~5-7 \
Dice String Lights ~1-2 \
Dirt Krawk Island Floor Tiles ~2-4 \
Dirt Patch of the Undead ~1-2 \
Disco Ball Shower ~1-2 \
Disco Ball Staff buyable through Disco Elephante Key Quest Token ~1-2 \
Disco Ball String Lights buyable through Disco Chomby Key Quest Token ~1-2 \
Disco Chomby Key Quest Token buyable ~1-2 \
Disco Elephante Key Quest Token buyable ~1-2 \
Disco Floor Tiles buyable through Disco Kiko Key Quest Token ~1-2 \
Disco Kiko Key Quest Token buyable ~1-2 \
Discovery of Darigan Day Background ℗ ~2-3 \
Discovery of Faerieland Day Background ℗ ~2 \
Discovery of Krawk Island Day Background ℗ ~2 \
Discovery of Tyrannia Mystery Capsule ~2-4 \
Discovery of Wobbleshire Mystery Capsule ~3-4 \
Disembodied Cackling Jhudora NT buyable ~1 \
Disheartening Sweetheart Gram NT \
Disheveled Brown Wig ~1-2 \
Displeased Tiki Idol Necklace ~1-2 \
Disquieting Stare Frame ~1-2 \
Distant City Lights Background ~1-2 \
Disturbing Handheld Mirror ~1-2 \
Disturbing Study Background ~1-2 \
DJ Skellington Shirt ~2 \
Docked Pirate Ship ~1-2 \
Docks of Altador Background buyable ~1 \
Dont Press Button ~2 \
Door to Your Heart Background ~1-2 \
Doraks Boat buyable through NC Archives Fortune Cookie ~3 \
Double Edged Meridell Spear ~1-2 \
Doughnut Float Ring ~1-2 \
Doughnut Wings ~1-2 \
Doughnutfruit Tutu & Tights ~1-2 \
Down With NC Flag buyable ~25 \
Downhill Snowball Background buyable through NC Archives Fortune Cookie ~2-3 \
Dr. Sloth Toy Soldier ~3 \
Dr. Sloths Staff NT buyable ~1 \
Dramatic Forest Gates Background buyable through Patapult ~1-2 \
Dramatic Winter Cape ~1-2 \
Dream Catcher Garland ~7-8 \
Dream Catcher Wings ~1-2 \
Dream Cloud Pirate Parasol ~1-2 \
Dream Darigan Armour ~1-2 \
Dream Dark Faerie Wings ℗ ~1-2 \
Dream Deserted Fairground Background ~1-2 \
Dream Heroes and Villains Mystery Capsule ~1-2 \
Dream Lands Mystery Capsule ~1-2 \
Dream Pirate Tricorne Hat ~1-2 \
Dream Potion Bottle ~1-2 \
Dream Star Cloud Wig ~1-2 \
Dream Tree Tent ~1-2 \
Dream Wonderclaw Mystery Capsule ~1-2 \
Dreaming Turmaculus Foreground ~1-2 \
Dreamy Hanso Cardboard Cutout ~1-2 \
Dreamy Hearts Shower ~1-2 \
Dreary Grey Bouquet ℗ ~10-15  \
Dreary Holiday Garland ℗ ~2 \
Dreary Spring Window Foreground ~1-2 \
Dress of Cards ~1-2 \
Dress Shirt with Holiday Vest ~1-2 \
Drifting Hearts Valentine Mystery Capsule ~4-5 \
Drink Umbrella Shower ~1-2 \
Dripping Brucicle Bouquet ~1-2 \
Dripping Ice Cream Cone ~2 \
Dripping Paint Brush ~1-2 \
Dropping New Years Glitter Ball ~1-2 \
Dual Negg Duel Headband and Wig ~2 \
Dual Personality Makeup buyable through NC Archives Fortune Cookie ~2-3 \
Dual Tone Necklace ~1-2 \
Dual Wield Daggers ~2-3 \
Dubloon Disaster Mine Earrings ~1-2 \
Dueling Decks Background ~5-6 \
Dueling Decks Hand of Cards buyable through NC Archives Fortune Cookie ~1-2 \
Dug-up Bones Wheelbarrow ~1-2 \
Dusk to Dawn Background buyable through NC Archives Fortune Cookie ~2 \
Dusky Feathered Mantle ~1-2 \
Dusky Forest Path Background ~1-2 \
Dusty Adventurer Hat and Wig ~1-2 \
Dusty Pink Lace Shirt buyable ~1 \
Dusty Pink Lamps Garland ~3-5 \
Dusty Sand Dune Foreground ~2-3 \
Dye Bottles buyable ~1 \
Dyed Red Shirt buyable ~1 \
Dyed Tree Sap Staff ~1-2 \
Dyeworks Black: Appetising Caramel Apple ℗ ~5-10 \
Dyeworks Black: Braided Holiday Wig ~2  \
Dyeworks Black: Broken Heart Tiara and Wig ~1-2 \
Dyeworks Black: Dazzling Midnight Wig ~2-3 \
Dyeworks Black: Deathly Union Dress ~1-2 \
Dyeworks Black: Dream Catcher Garland ~1-2 \
Dyeworks Black: Field of Flowers ~1-2 \
Dyeworks Black: Games Master Challenge 2010 Lulu Shirt ~1-2 \
Dyeworks Black: Games Master Challenge NC Challenge 2010 Lulu Wig ~3-5 \
Dyeworks Black: Jumping Babaa Garland ~1-2 \
Dyeworks Black: Philosophers Wig buyable through Dyeworks ~1-2 \
Dyeworks Black: Polka Dot Holiday Dress ~10-15 \
Dyeworks Black: Rich Golden Eye Makeup ~2-3 \
Dyeworks Black: Silver Star Bracers buyable through Dyeworks ~1-2 \
Dyeworks Black: Sparkling Faerie Wings buyable through Dyeworks ~1-2 \
Dyeworks Black: Sparkling Red Holiday Dress ~1-2 \
Dyeworks Blue: Baby Spring Jumper ~1-2 \
Dyeworks Blue: Baby Tuxedo buyable through Dyeworks ~1-2 \
Dyeworks Blue: Baby Valentine Wings ~1-2 \
Dyeworks Blue: Baby Winter Sweater ~4-5 \
Dyeworks Blue: Black Ruffled Dress buyable through Dyeworks ~1-2 \
Dyeworks Blue: Butterfly Shower buyable through Dyeworks ~1-2 \
Dyeworks Blue: Dark Battle Armour buyable through Dyeworks ~1-2 \
Dyeworks Blue: Dark Enchanted Cape buyable through Dyeworks ~1-2 \
Dyeworks Blue: Delicate White Lace Wings ~1-2 \
Dyeworks Blue: Elaborate Ninja Dress ℗ ~1-2 \
Dyeworks Blue: Elegant Holiday Tree Dress ~1-2 \
Dyeworks Blue: Elegant Mutant Cape buyable through Dyeworks ~1-2 \
Dyeworks Blue: Enchanting Hearts Front Porch Background ~3 \
Dyeworks Blue: Faerie Dust Shower buyable through Dyeworks ~1-2 \
Dyeworks Blue: Field of Flowers ~1-2 \
Dyeworks Blue: Floral Ink Facepaint ~1-2 \
Dyeworks Blue: Games Master Challenge NC Challenge 2010 Lulu Wig ~2-3 \
Dyeworks Blue: Glass Rose Staff buyable through Dyeworks ~1-2 \
Dyeworks Blue: Golden Curtain Balloon Garland ℗ ~2+  \
Dyeworks Blue: Golden Scattered Light Garland ~1-2  \
Dyeworks Blue: Isca Wig buyable through Dyeworks ~1-2 \
Dyeworks Blue: Lavender Tulle Dress ~2 \
Dyeworks Blue: Lighted Gothic Tree ~1-2 \
Dyeworks Blue: Lovely Layered Lilac Dress ~2-3  \
Dyeworks Blue: Lovely Rose Cardigan ℗ ~2+  \
Dyeworks Blue: Magical Golden Markings buyable through Dyeworks ~1-2 \
Dyeworks Blue: Maraquan Summer Cloak ~3-4 \
Dyeworks Blue: Multicolour Wig buyable through Dyeworks ~1-2 \
Dyeworks Blue: Mutant Stylish Jet Black Wig ~1-2 \
Dyeworks Blue: New Year Celebration Wig ℗ ~5-10 \
Dyeworks Blue: Pop-Up Gothic Holiday Card Background ~1-2 \
Dyeworks Blue: Pretty Little Daisy ℗ ~1-2 \
Dyeworks Blue: Radiant Flower Skirt ℗ ~1-2 \
Dyeworks Blue: Rainy Day Umbrella ~1-2 \
Dyeworks Blue: Shimmery Rose Top buyable through Dyeworks ~1-2 \
Dyeworks Blue: Silver Star Bracers buyable through Dyeworks ~1-2 \
Dyeworks Blue: Singing Meepit Trio ℗ ~1-2 \
Dyeworks Blue: Sparkling Red Holiday Dress ~1-2  \
Dyeworks Blue: Stars and Glitter Facepaint ~1-2 \
Dyeworks Blue: Tree of Hearts ~1-2 \
Dyeworks Blue: Valentine Window Foreground ~1-2 \
Dyeworks Brown: Bone Tiara and Wig ~1-2 \
Dyeworks Brown: Butterfly Dress buyable through Dyeworks ~1-2 \
Dyeworks Brown: Jail of Hearts Foreground ~1-2 \
Dyeworks Brown: Mint and Aqua Flower Wig ~1-2 \
Dyeworks Brown: Philosophers Wig buyable through Dyeworks ~1-2 \
Dyeworks Brown: Purple Plaid Shirt and Waistcoat buyable through Dyeworks ~1-2 \
Dyeworks Brown: Radiant Wig and Crown ~1-2 \
Dyeworks Brown: Side Swept Blond Wig ~1-2 \
Dyeworks Dark Nova: Shooting Novas buyable through Dyeworks ~1-2 \
Dyeworks Gold: Bandit Mask ℗ ~10-15+  \
Dyeworks Gold: Jumping Babaa Garland ~1-2 \
Dyeworks Gold: Pirate Knots Shirt  \
Dyeworks Gold: Winter Poinsettia Staff ~1-2  \
Dyeworks Green: Abundant Heart Dress ~1-2 \
Dyeworks Green: Appetising Caramel Apple ~5-8 \
Dyeworks Green: Baby Holiday Ruffle Dress ~2-3 \
Dyeworks Green: Beautiful Valentine Fireworks ~2-3 \
Dyeworks Green: Blue Polka Dot Dress ~1-2 \
Dyeworks Green: Butterfly Dress buyable through Dyeworks ~1-2 \
Dyeworks Green: Butterfly Shower buyable through Dyeworks ~1-2 \
Dyeworks Green: Dainty Faerie Wing Skirt buyable through Dyeworks ~1-2 \
Dyeworks Green: Dark Winter Wig and Beanie ~1-2 \
Dyeworks Green: Dazzling Midnight Wig ~3 \
Dyeworks Green: Dream Catcher Garland ~1-2 \
Dyeworks Green: Dreary Holiday Garland ~1-2 \
Dyeworks Green: Elaborate Ninja Dress ~1-2 \
Dyeworks Green: Elegant Mutant Cape buyable through Dyeworks ~1-2 \
Dyeworks Green: Golden Curtain Balloon Garland ~2 \
Dyeworks Green: Hand Carved Candle Dress ~1-2 \
Dyeworks Green: Jewelled Pink Spyderweb Garland ~1-2 \
Dyeworks Green: Lavender Faerietale Dress ~1-2 \
Dyeworks Green: Lavender Tulle Dress ~2-3 \
Dyeworks Green: Lovely Rose Cardigan ~2 \
Dyeworks Green: Multicolour Wig buyable through Dyeworks ~1-2 \
Dyeworks Green: Mutant Blue Glowing Contacts ℗ ~1-2 \
Dyeworks Green: Mutant Stylish Jet Black Wig ~1-2 \
Dyeworks Green: Oversized Baby Santa Hat ~1-2  \
Dyeworks Green: Pop-Up Gothic Holiday Card Background ~1-2 \
Dyeworks Green: Purple Plaid Shirt and Waistcoat buyable through Dyeworks ~1-2 \
Dyeworks Green: Radiant Wig and Crown ~1-2 \
Dyeworks Green: Rainy Day Umbrella ~1-2 \
Dyeworks Green: Shimmery Seashell Dress ~1-2 \
Dyeworks Green: Sparkling Faerie Wings buyable through Dyeworks ~1-2 \
Dyeworks Green: Sparkling Red Holiday Dress ~1-2  \
Dyeworks Green: Stars and Glitter Facepaint ~3 \
Dyeworks Green: Winter Poinsettia Staff ~1-2  \
Dyeworks Grey: Amongst the Clouds Background ~6-8 \
Dyeworks Grey: Baby Valentine Wings ℗ ~2 \
Dyeworks Grey: Butterfly Dress buyable through Dyeworks ~1-2 \
Dyeworks Grey: Dainty Faerie Wing Skirt buyable through Dyeworks ~1-2 \
Dyeworks Grey: Dark Battle Armour buyable through Dyeworks ~1-2 \
Dyeworks Grey: Faerie Dust Shower buyable through Dyeworks ~1-2 \
Dyeworks Grey: Jail of Hearts Foreground ℗ \
Dyeworks Grey: Lighted Gothic Tree ~1-2 \
Dyeworks Grey: Magical Golden Markings buyable through Dyeworks ~1-2 \
Dyeworks Grey: Valentine Window Foreground ~1-2 \
Dyeworks Holiday Hue Brew Potion ~1 \
Dyeworks Hue Brew Potion buyable ~1 \
Dyeworks Mint Chocolate: Shooting Novas buyable through Dyeworks ~1-2 \
Dyeworks Orange: A Rolling Fog ~2-3 \
Dyeworks Orange: Amongst the Clouds Background ℗ ~3-5 \
Dyeworks Orange: Baby Holiday Ruffle Dress ~2-3 \
Dyeworks Orange: Baby Spring Jumper ~1-2 \
Dyeworks Orange: Beautiful Valentine Fireworks ~2-3 \
Dyeworks Orange: Dainty Faerie Wing Skirt buyable through Dyeworks ~1-2 \
Dyeworks Orange: Dark Battle Armour buyable through Dyeworks ~1-2 \
Dyeworks Orange: Delicate White Lace Wings ~1-2 \
Dyeworks Orange: Dream Catcher Garland ~1-2 \
Dyeworks Orange: Elaborate Ninja Dress ~1-2 \
Dyeworks Orange: Games Master Challenge 2010 Lulu Shirt ~1-2 \
Dyeworks Orange: Isca Wig buyable through Dyeworks ~1-2 \
Dyeworks Orange: Jewelled Pink Spyderweb Garland ~1-2 \
Dyeworks Orange: Multicolour Wig buyable through Dyeworks ~1-2 \
Dyeworks Orange: Mutant Gothic Embroidered Shirt ~1-2 \
Dyeworks Orange: New Year Celebration Wig ~8-10 \
Dyeworks Orange: Pretty Little Daisy ~3 \
Dyeworks Orange: Purple Plaid Shirt and Waistcoat buyable through Dyeworks ~1-2 \
Dyeworks Orange: Shimmery Rose Top buyable through Dyeworks ~1-2 \
Dyeworks Orange: Shimmery Seashell Dress ~2 \
Dyeworks Orange: Tree of Hearts ~1-2 \
Dyeworks Orange: Valentine Window Foreground ~1-2 \
Dyeworks Orange: Winter Rose Foreground ~1-2  \
Dyeworks Pink: A Rolling Fog ℗ ~2-3 \
Dyeworks Pink: Appetising Caramel Apple ℗ ~10-15  \
Dyeworks Pink: Baby Holiday Ruffle Dress ~6-8 \
Dyeworks Pink: Baby Tuxedo buyable through Dyeworks ~1-2 \
Dyeworks Pink: Bandit Mask ~1-2 \
Dyeworks Pink: Black Ruffled Dress buyable through Dyeworks ~1-2 \
Dyeworks Pink: Curly Valentine Wig ~2 \
Dyeworks Pink: Dark Battle Armour buyable through Dyeworks ~1-2 \
Dyeworks Pink: Dark Enchanted Cape buyable through Dyeworks ~1-2 \
Dyeworks Pink: Dazzling Midnight Wig ~3-4 \
Dyeworks Pink: Deadly Beauty Rose ~2-3 \
Dyeworks Pink: Deathly Union Dress ~2-3 \
Dyeworks Pink: Delicate White Lace Wings ~4 \
Dyeworks Pink: Dreary Holiday Garland ~2-3 \
Dyeworks Pink: Elegant Mutant Cape buyable through Dyeworks ~1-2 \
Dyeworks Pink: Flower Wings ~1-2 \
Dyeworks Pink: Games Master Challenge NC Challenge 2010 Lulu Wig ~2-3 \
Dyeworks Pink: Glass Rose Staff buyable through Dyeworks ~1-2 \
Dyeworks Pink: Golden Curtain Balloon Garland ~2 \
Dyeworks Pink: Hand Carved Candle Dress ℗ ~2-4 \
Dyeworks Pink: Isca Wig buyable through Dyeworks ~1-2 \
Dyeworks Pink: Jumping Babaa Garland ~2 \
Dyeworks Pink: Lavender Faerietale Dress ~1-2 \
Dyeworks Pink: Lovely Layered Lilac Dress ~2-4 \
Dyeworks Pink: Magical Golden Markings buyable through Dyeworks ~1-2 \
Dyeworks Pink: Multicolour Wig buyable through Dyeworks ~1-2 \
Dyeworks Pink: Mutant Blue Glowing Contacts ~5 \
Dyeworks Pink: Oversized Baby Santa Hat ~1-2  \
Dyeworks Pink: Peaceful Tree Garland buyable through Dyeworks ~1-2 \
Dyeworks Pink: Philosophers Wig buyable through Dyeworks ~1-2 \
Dyeworks Pink: Polka Dot Holiday Dress ~10-15  \
Dyeworks Pink: Purple Plaid Shirt and Waistcoat buyable through Dyeworks ~1-2 \
Dyeworks Pink: Rainy Day Umbrella ~1-2 \
Dyeworks Pink: Rich Golden Eye Makeup ~2-4 \
Dyeworks Pink: Shimmery Rose Top buyable through Dyeworks ~1-2 \
Dyeworks Pink: Silver Star Bracers buyable through Dyeworks ~1-2 \
Dyeworks Pink: Sparkling Faerie Wings buyable through Dyeworks ~1-2 \
Dyeworks Pink: Tree of Hearts ~1-2 \
Dyeworks Purple: A Rolling Fog ℗ ~2-3 \
Dyeworks Purple: Abundant Heart Dress ~1-2 \
Dyeworks Purple: Amongst the Clouds Background ~6-9 \
Dyeworks Purple: Baby Valentine Wings ~1-2 \
Dyeworks Purple: Baby Winter Sweater ~4-6 \
Dyeworks Purple: Beautiful Valentine Fireworks ℗ ~3-4 \
Dyeworks Purple: Black Ruffled Dress buyable through Dyeworks ~1-2 \
Dyeworks Purple: Broken Heart Tiara and Wig ℗ ~2 \
Dyeworks Purple: Butterfly Shower buyable through Dyeworks ~1-2 \
Dyeworks Purple: Cherry Blossom Garland ~1-2 \
Dyeworks Purple: Dark Enchanted Cape buyable through Dyeworks ~1-2 \
Dyeworks Purple: Dark Winter Wig and Beanie ~1-2 \
Dyeworks Purple: Deadly Beauty Rose ~2-3 \
Dyeworks Purple: Elegant Mutant Cape buyable through Dyeworks ~1-2 \
Dyeworks Purple: Enchanting Hearts Front Porch Background ℗ ~1-2 \
Dyeworks Purple: Faerie Dust Shower buyable through Dyeworks ~1-2 \
Dyeworks Purple: Floral Ink Facepaint ~1-2 \
Dyeworks Purple: Flower Wings ~1-2 \
Dyeworks Purple: Games Master Challenge 2010 Lulu Shirt ~1-2 \
Dyeworks Purple: Glass Rose Staff buyable through Dyeworks ~1-2 \
Dyeworks Purple: Golden Scattered Light Garland ~1-2 \
Dyeworks Purple: Hand Carved Candle Dress ℗ ~2 \
Dyeworks Purple: Isca Wig buyable through Dyeworks ~1-2 \
Dyeworks Purple: Jail of Hearts Foreground ~1-2 \
Dyeworks Purple: Jewelled Pink Spyderweb Garland ℗ ~1-2 \
Dyeworks Purple: Maraquan Summer Cloak ℗ ~2-3 \
Dyeworks Purple: Mutant Gothic Embroidered Shirt ~1-2 \
Dyeworks Purple: New Year Celebration Wig ℗ ~5-10 \
Dyeworks Purple: Oversized Baby Santa Hat  \
Dyeworks Purple: Peaceful Tree Garland buyable through Dyeworks ~1-2 \
Dyeworks Purple: Pirate Knots Shirt  \
Dyeworks Purple: Pretty Little Daisy ~1-2 \
Dyeworks Purple: Radiant Flower Skirt ~1-2 \
Dyeworks Purple: Side Swept Blond Wig ~1-2 \
Dyeworks Purple: Singing Meepit Trio ~1-2 \
Dyeworks Purple: Sparkling Faerie Wings buyable through Dyeworks ~1-2 \
Dyeworks Purple: Stars and Glitter Facepaint ~3 \
Dyeworks Purple: Winter Rose Foreground ~1-2 \
Dyeworks Red: Baby Spring Jumper ~1-2 \
Dyeworks Red: Baby Winter Sweater ~5-7 \
Dyeworks Red: Bandit Mask ~1-2 \
Dyeworks Red: Black Ruffled Dress buyable through Dyeworks ~1-2 \
Dyeworks Red: Bone Tiara and Wig ~1-2 \
Dyeworks Red: Braided Holiday Wig ~2  \
Dyeworks Red: Broken Heart Tiara and Wig ~1-2 \
Dyeworks Red: Curly Valentine Wig ~1-2 \
Dyeworks Red: Dark Winter Wig and Beanie ~1-2 \
Dyeworks Red: Deathly Union Dress ~1-2 \
Dyeworks Red: Elegant Holiday Tree Dress ~1-2 \
Dyeworks Red: Enchanting Hearts Front Porch Background ~2-3 \
Dyeworks Red: Lavender Tulle Dress ~1-2 \
Dyeworks Red: Lighted Gothic Tree ~1-2 \
Dyeworks Red: Maraquan Summer Cloak ~1-2 \
Dyeworks Red: Mint and Aqua Flower Wig ~1-2 \
Dyeworks Red: Mutant Blue Glowing Contacts ~3 \
Dyeworks Red: Mutant Gothic Embroidered Shirt ~1-2 \
Dyeworks Red: Mutant Stylish Jet Black Wig ~1-2 \
Dyeworks Red: Pirate Knots Shirt ~8-10  \
Dyeworks Red: Polka Dot Holiday Dress ~3-5 \
Dyeworks Red: Radiant Wig and Crown ~1-2 \
Dyeworks Red: Shimmery Seashell Dress ~1-2 \
Dyeworks Red: Side Swept Blond Wig ~1-2 \
Dyeworks Silver: Golden Scattered Light Garland ~2 \
Dyeworks Silver: Rich Golden Eye Makeup ~2-3 \
Dyeworks Silver: Winter Poinsettia Staff ~1-2  \
Dyeworks Ultranova: Shooting Novas buyable through Dyeworks ~1-2 \
Dyeworks White: Abundant Heart Dress ~2 \
Dyeworks White: Cherry Blossom Garland ~5-7 \
Dyeworks White: Blue Polka Dot Dress ~1-2 \
Dyeworks White: Deadly Beauty Rose ~2-3 \
Dyeworks White: Radiant Flower Skirt ~1-2 \
Dyeworks White: Winter Rose Foreground ~2-4  \
Dyeworks Winter Hue Brew Potion ~1  \
Dyeworks Yellow: Baby Tuxedo buyable through Dyeworks ~1-2 \
Dyeworks Yellow: Blue Polka Dot Dress ~1-2 \
Dyeworks Yellow: Bone Tiara and Wig ~1-2 \
Dyeworks Yellow: Braided Holiday Wig ~2-3  \
Dyeworks Yellow: Cherry Blossom Garland ~2 \
Dyeworks Yellow: Curly Valentine Wig ~2-3 \
Dyeworks Yellow: Dreary Holiday Garland ℗ ~2-3 \
Dyeworks Yellow: Elegant Holiday Tree Dress ~1-2 \
Dyeworks Yellow: Field of Flowers ~1-2 \
Dyeworks Yellow: Floral Ink Facepaint ~1-2 \
Dyeworks Yellow: Flower Wings ~1-2 \
Dyeworks Yellow: Glass Rose Staff buyable through Dyeworks ~1-2 \
Dyeworks Yellow: Lavender Faerietale Dress ~2-3  \
Dyeworks Yellow: Lovely Layered Lilac Dress ~2-3 \
Dyeworks Yellow: Lovely Rose Cardigan ~2 \
Dyeworks Yellow: Mint and Aqua Flower Wig ~3-4 \
Dyeworks Yellow: Peaceful Tree Garland buyable through Dyeworks ~1-2 \
Dyeworks Yellow: Pop-Up Gothic Holiday Card Background ~1-2 \
Dyeworks Yellow: Singing Meepit Trio ~2 \
Dystopian Space Station Background ~1-2 \
E \
 \
Earth Faerie Dress ~1-2 \
Earth Faerie Leaf Shoes ~1-2 \
Earthy Magical Negg NT \
Earthy Magnifying Glass ~1-2 \
Earthy Negg Vine Foreground ~1-2  \
Easter Lights Mystery Capsule ~1-2 \
Easter Negg Basket ~3 \
Easter Negg Creme Puff ~1-2  \
Easter Negg Frame ~1-2 \
Easter Negg Glasses ~1-2 \
Easter Negg Mystery Capsule ~12-15 \
Easter Negg Smiley Snack [rare collectible : Depends on trader] ~450-600+ \
Easter Negg String Lights ~1-2 \
Easter Negg Thought Bubble ~5 \
Easter Tulip Bouquet \
Ebony Forest Wig ~1-2 \
Edmund Wig ~1-2 \
Edolies Decorated House Background ~3-4 \
Eerie Autumn Background ~1-2 \
Eerie Candle Foreground ℗ ~2-3 \
Eerie Crystal Balls ~1-2 \
Eerie Purple Forest Collectors Background ℗ ~5-6+ \
Eerie Skull Gate Foreground ~1-2 \
Eerie Underwater Grotto Background ~2 \
Eerie Winter Snow Background ℗ ~2-3 \
Eerie Winter Snow Mystery Capsule ~3 \
Egg Splat Shower buyable through NC Archives Fortune Cookie ~1-2 \
Elaborate Hair Gears ~1-2 \
Elaborate Ninja Dress ~2 \
Elaborate Shell Wings ~1-2 \
Electric Blue Flower Garland ~1-2 \
Electric Blue Tights and Boots ~1-2 \
Electric Blue Trousers ~1-2 \
Electric Blue Wig buyable through Electric Gelert Key Quest Token ~1-2 \
Electric Charge Wings buyable through Electric Lupe Key Quest Token ~1-2 \
Electric Gelert Key Quest Token buyable ~1-2 \
Electric Lupe Key Quest Token buyable ~1-2 \
Electric Storm Background ℗ ~2-4 \
Electric Swirl Staff ~2-3 \
Electric Underwater Staff ~1-2 \
Electromagnetic Shield ~1-2 \
Elegant Armoured Cuffs ~1-2 \
Elegant Ball Mask ~1-2 \
Elegant Ballerina Dress buyable ~1 \
Elegant Ballerina Facepaint buyable ~1 \
Elegant Ballerina Shoes and Tights buyable ~1 \
Elegant Ballerina Wand buyable ~4 \
Elegant Ballerina Wig buyable ~1 \
Elegant Ballet Stage Background buyable ~1 \
Elegant Ballroom Background ~25-30  \
Elegant Bejewelled Mystery Capsule ~3 \
Elegant Birthday Ball Wig ~1-2 \
Elegant Birthday Blouse ℗ ~2-3 \
Elegant Black Feather Hat ~1-2 \
Elegant Blue Purse buyable through Blue Acara Key Quest Token ~1 \
Elegant Brightvale Window ~2-4 \
Elegant Christmas Tree ~25-30 \
Elegant Cobrall Dress ~1-2 \
Elegant Damask Dress ~1-2 \
Elegant Detailed Cloak ~1-2 \
Elegant Feather Dress ~2 \
Elegant Feather Gloves ~1-2 \
Elegant Flower Parasol ~1-2 \
Elegant Gemstone Wand ~1-2 \
Elegant Gold Necklace buyable ~1 \
Elegant Green Dress ~2-3 \
Elegant Holiday Hair Clip ~1-2 \
Elegant Holiday Tree Dress ~2-3 \
Elegant Holiday Wreath ~5-6 \
Elegant Knight Armour ~1-2 \
Elegant Maraqua Desk buyable ~1 \
Elegant Maraquan Sofa buyable ~1 \
Elegant Mutant Cape buyable ~1 \
Elegant Neopia Central Sofa buyable ~1 \
Elegant Ombre Skirt buyable through Patapult ~1-2 \
Elegant Pine Cone Staff ~1-2 \
Elegant Spyder Hat NT buyable ~1 \
Elegant Valentine Chandelier ~1-2 \
Elegant Veespa Dress ~3 \
Elegant Wooden Spoon Staff ~1-2 \
Elegrant Bone Shrug buyable through Wonderclaw ~1-2 \
Elite NC Mall Third Birthday Goodie Bag NT \
Eliv Thade Castle Background ~3-5 \
Eliv Thade Cloak ~2 \
Eliv Thade Key Quest Token ~8-10 \
Eliv Thade Make-Up Kit ~3-4 \
Ellsworths Collectors Suit ~1-2 \
Embellished Party Shoes buyable ~1 \
Ember Wig ~2-3  \
Embossed Gold Floor Tiles ~2-4 \
Embossed Yooyu Shield ~1-2 \
Embroidered Bone Shirt buyable through Wonderclaw ~1-2 \
Embroidered Gold Filigree Skirt ~1-2 \
Embroidered Heart Sweater ~1-2 \
Embroidered Layer Sweater buyable through Shenanigifts ~1-2 \
Embroidered Midnight Dress ~2-4 \
Embroidered Negg Garland ~1-2 \
Embroidered Red Ruffle Shirt buyable ~1 \
Emerald Brick Gate Foreground ~1-2 \
Emerald Green Dress with Shrug ~1-2 \
Emerald Green Trousers buyable through Wonderclaw ~1-2 \
Emerald Lace Blouse ~1-2 \
Emerald Taffeta Gown with Jewels buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Emergency Parachute ~1-2 \
Emo Hair Wig ~1-2 \
Empty Frames Garland ~1-2 \
Enamel Flower Staff ~1-2 \
Enamoured Sweetheart Gram NT \
Encased in Ice ~1-2 \
Enchanted Amulet ~1-2 \
Enchanted Apple Branch Garland buyable ~1 \
Enchanted Cottage Background ~1-2 \
Enchanted Forest Setting Background ~2-4  \
Enchanted Ice Rose ~1-2 \
Enchanted Oasis Background buyable ~1 \
Enchanted Snowbunny Top Hat ~1-2 \
Enchanted Tale Background buyable ~1 \
Enchanted Tale Dress buyable ~1 \
Enchanted Tale Mirror buyable ~3-4 \
Enchanted Tale Staff ℗ ~5 \
Enchanted Tale Wig buyable ~1 \
Enchanted Tower buyable ~1 \
Enchanted Valentines Mystery Capsule ~20-25+ \
Enchanted Woods Background buyable ~1 \
Enchanting Boat Ride Background buyable ~1 \
Enchanting Faerie Tale Skirt ~1-2 \
Enchanting Flower Arbor ~1-2 \
Enchanting Glass Jars of Flowers ~1-2 \
Enchanting Hearts Front Porch Background ~1-2 \
Enchanting Terrace Background buyable ~1 \
End of Battle Background ~1-2 \
End of the Rainbow Mystery Capsule ~3-5 \
Entrance to Fyoras Castle Background ~2-3 \
Escaped From the Lab Background buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Etched Marble Floor Tiles ~2-4 \
Ethereal Chain Scarf ~1-2 \
Ethereal Spirit Cane ~3-5  \
Ethereal Spirit Hat ~1-2 \
Ethereal Spirit Shirt and Jacket ~1-2 \
Ethereal Spirit Trousers ~1-2 \
Ethereal Tiara ~1-2 \
Evening Garden Party Background ~1-2 \
Eventide Dress ~7-8 \
Eventide Gift Box Mystery Capsule ~12-15 \
Eventide Mountains Background ~25-30 \
Eventide Palm Tree Face Paint ~1-2 \
Eventide Shirt ~2-3 \
Evergreen and Holly Wings ~3 \
Evergreen Holiday Scarf buyable through NC Archives Fortune Cookie ~1-2 \
Everlasting Celebratory Sparkler buyable ~1 \
Evil Coconut Mask ~1-2 \
Evil Fuzzle Mask ~1-2 \
Evil Fuzzles Shower ~1-2 \
Evil Jack-O-Lantern ~1-2 \
Evil Winged Glasses ~1-2 \
Excessive Pocket Watch Collection Garland ~1-2 \
Experimental Monster Chain Necklace ~6  \
Experimental Monster Gloves ~1-2 \
Experimental Monster Headpiece ~1-2 \
Experimental Monster Make Up ~1-2 \
Experimental Monster Outfit ~1-2 \
Exploding Bag of Wheat Flour ~3-4 \
Exploding Coconut ~10-18 \
Exploding Pillow Foreground ~1-2 \
Exploring Maraqua Background ~2-4 \
Exquisite Birthday Ball Background ~1-2 \
Exquisite Chandelier Garland ~1-2 \
Exquisite Damask Curtains ~1-2 \
Exquisite Wintery Ball Background ~2-3 \
Extra Large Decorated Tree Staff buyable through NC Archives Fortune Cookie ~1-2 \
Extra Large Jousting Lance buyable through NC Archives Fortune Cookie ~1-2 \
Extra Plaid Scarf ~1-2 \
Extra Shiny Red Wig ~8-10 \
Extra Soft Crochet Boots buyable through Baby Gelert Key Quest Token ~1-2 \
Extra Special Gaming Blankie buyable through NC Archives Fortune Cookie ~1-2 \
Extravagant Birthday Stage ~1-2 \
Extreme Herder II Background buyable through NC Archives Fortune Cookie ~2-3 \
Extreme Herder Petpet String Lights ~4-5 \
Extreme Potato Counter Collectors Mohawk ~2 \
Eye Flower Contacts ~1-2 \
Eyeball Flower Staff ~1-2 \
Eyes of the Cursed Pharaoh ~2-4 \
F \
 \
Fabled Silvery Lake Background ~15-20 \
Fabric Chandelier ~1-2 \
Fabric Clothesline Garland ~1-2 \
Fabric Flowers Dress ~1-2  \
Fabric Flowers Foreground ~1-2 \
Fabric Pumpkins Garland ~1-2 \
Fabric Waistcoat and Shirt ~1-2 \
Fabric Yo-Yo Necklace ~1-2 \
Face Full of Sweat Droplets ~1-2 \
Faellie Birthday Bag Surprise NT \
Faellie Flower Garland ~1-2 \
Faellie Slippers ~1-2 \
Faerie Acara Key Quest Token buyable ~1-2 \
Faerie Aisha Key Quest Token buyable ~1-2 \
Faerie Bubble Earrings ~1-2 \
Faerie Bubble Foreground ~1-2 \
Faerie Bubble Tiara buyable through NC Archives Fortune Cookie ~1-2 \
Faerie Bubbles Cannon buyable through NC Archives Fortune Cookie ~1-2 \
Faerie Cave Background ~1-2 \
Faerie Circle Background buyable ~1 \
Faerie Cloud Background NT \
Faerie Cloud Racer Collectors Background ~2-3 \
Faerie Cloud Racer Garland buyable through NC Archives Fortune Cookie ~2 \
Faerie Court Jester Shoes ~1-2 \
Faerie Doll Mystery Capsule ~1-2 \
Faerie Dust Shower buyable ~1 \
Faerie Element Battledome Claw buyable ~1 \
Faerie Head Wreath ℗ ~2-3 \
Faerie Ink Bottle NT \
Faerie Ixi Key Quest Token buyable ~1-2 \
Faerie Lace Shirt ~1-2 \
Faerie Lenny Bouquet ~1-2 \
Faerie Lenny Dress buyable ~1 \
Faerie Make-up buyable through NC Archives Fortune Cookie ~3 \
Faerie Mystery Capsule ~2 \
Faerie Palace Background ℗ ~2 \
Faerie Quest Fortune Cookie buyable ~1 \
Faerie Smiley Snack ~2-3 \
Faerie Themed Album Skin NT \
Faerie Topiaries ~1-2 \
Faerie Wings Basket Handheld ~1-2 \
Faerie Wings Contacts ~1-2 \
Faerie Yooyu Headband buyable through NC Archives Fortune Cookie ~1-2 \
Faeriefied Sloth Handheld Plushie ~1-2 \
Faerieland Adventure Wings ~2-4 \
Faerieland Altador Cup Jersey ~1-2 \
Faerieland Altador Cup Locker Room Background ~1-2 \
Faerieland Altador Cup Team Spirit Banners ~1-2 \
Faerieland Anteroom ~25 \
Faerieland Cloud Lamp buyable ~1 \
Faerieland Door ~2-4 \
Faerieland Entrance Gates ~1-2 \
Faerieland Fence buyable ~1 \
Faerieland Fence 10-Bundle buyable ~1 \
Faerieland Furniture Collectors Cloud Dress ~6-8  \
Faerieland Library Background ~1-2 \
Faerieland Library Collectors Background ~2 \
Faerieland Mystery Capsule ~7-10 \
Faerieland Room in a Bag buyable ~5 \
Faerieland Team Braided Wig ~1-2 \
Faerieland Team Crazy Wig ~1-2 \
Faerieland Team Cuffs ~1-2 \
Faerieland Team Face Makeup ~1-2 \
Faerieland Team Foam Finger ~1-2 \
Faerieland Team Glitter Face Paint ~1-2 \
Faerieland Team Hat ~1-2 \
Faerieland Team Jester Hat ~1-2 \
Faerieland Team Mask ~1-2 \
Faerieland Team Pom Pom ~1-2 \
Faerieland Team Road to the Cup Background ~1-2 \
Faerieland Team Scarf ~2-3 \
Faerieland Team Sport Shirt ~1-2 \
Faerieland Team Trousers and Cleats ~1-2 \
Faerieland Team Vuvuzela ~1-2 \
Faerieland Tower ~25-30 \
Faerieland Window ~2-4 \
Faeries Ruin Mystery Capsule ~2-3 \
Fair Vendors Background ~1-2 \
Fall Apple Gift Box Mystery Capsule ~1-2 \
Fall Feathers Gift Box Mystery Capsule ~1-2 \
Fall Floral Skirt ~1-2 \
Fall Gift Box Mystery Capsule ~4-8 \
Fall Leaf Belt ~2 \
Fall Leaf Garland ~1-2 \
Fall Mountaintop Background buyable ~1 \
Fall Nuts Gift Wrap NT \
Fall Planter ~2 \
Fall Pumpkin Patch Mystery Capsule ~6-10 \
Fall Scarecrow Mystery Capsule ~4-6 \
Fall School Shirt ~1-2 \
Fall School Skirt ~1-2 \
Fall Wreath ~2 \
Fallen Heroes Tombstones Foreground ~1-2 \
Fallen Lilacs and Hearts Foreground ~1-2 \
Falling Autumn Leaves Mystery Capsule ~2-3 \
Falling Autumn Leaves Shower ~1-2 \
Falling Ice Block Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Falling Leaves Gift Wrap NT \
Falling Petpetpet Shower ~1-2 \
Falling Snow Contacts ~1-2 \
Falling Snow Gift Box Mystery Capsule ~1-2 \
Fanatics Museum Collectors Corner Flashback Pass \
Fanatics Museum Make Some Noise Pass \
Fanatics Museum Scholars Retreat Pass \
Fanatics Museum Winning Look Pass \
Fanatics Museum Yooyu Gardens Pass \
Fanciful Faerieland Wallpaper \
Fanciful Heart Crown Wig ~1-2 \
Fanciful Seaweed Dress ~1-2 \
Fanciful Seaweed Headband ~1-2 \
Fancy Altadorian Wallpaper \
Fancy Autumn Leaf Wings ~1-2 \
Fancy Balloon Shield ~1-2 \
Fancy Blouse ~1-2 \
Fancy Blue Trousers ~1-2 \
Fancy Cake Server ~1-2 \
Fancy Chef Dress ~1-2 \
Fancy Collared Shirt ~1-2 \
Fancy Copen Goggles ~1-2 \
Fancy Crystal Belt ~1-2 \
Fancy Cupcake Inspired Table ℗ \
Fancy Diamond Drop Earrings ~1-2 \
Fancy Diamond Necklace ~1-2 \
Fancy Floral Shirt and Cardigan ~1-2 \
Fancy Floral Tea Wig ℗ ~12-15 \
Fancy Flower Bow Tie buyable ~1 \
Fancy Flower Topiary NT buyable ~1 \
Fancy Fruit Hat ~1-2 \
Fancy Gemstone Tiara ~1-2 \
Fancy Gold Striped Trousers ~1-2 \
Fancy Gold Wallpaper ~2-4 \
Fancy Green Hat ~1-2 \
Fancy Gypsy Skirt ~1-2 \
Fancy Holiday Shirt ~1-2 \
Fancy Ice Cream Cone Garland ~1-2 \
Fancy Lab Coat buyable through NC Archives Fortune Cookie ~1-2 \
Fancy Negg Gate Foreground ~1-2 \
Fancy Negg Staff ~1-2 \
Fancy Negg Trinket ~1-2 \
Fancy New Years Feather Mask ~1-2 \
Fancy Painted Negg Garland buyable through NC Archives Fortune Cookie ~1-2 \
Fancy Patchwork Mask ~1-2 \
Fancy Plush Bathrobe buyable through NC Archives Fortune Cookie ~1-2 \
Fancy Purple Cape ~5 \
Fancy Purple Facepaint ~3 \
Fancy Purple Hair Bow ~1-2 \
Fancy Purple Tights with Jewelled Flats buyable ~1 \
Fancy Red and Black Top ~1-2 \
Fancy Red and Blue Wig ~1-2 \
Fancy Red Costume Wig buyable ~1 \
Fancy Rose Tiara ~1-2 \
Fancy Ruffled Neovian Skirt ~1-2 \
Fancy Ruffled Skirt ~1-2 \
Fancy Sailor Dress buyable ~1 \
Fancy Silver Mask ~2-3 \
Fancy Snowboarding Helmet ~1-2 \
Fancy Sparkles Shower ~10-12 \
Fancy Striped Button Down Shirt buyable ~1 \
Fancy Sun Hat ~1-2 \
Fancy Vest ~1-2 \
Fancy Virtupets Desk buyable ~1 \
Fancy Witch Hat ~1-2 \
Fancy Wrought Iron Lamp ~1-2 \
Fanning Servant Statues ~1-2 \
Fantastic Bloom Mystery Capsule ~20-25 \
Fantastic Braided Wig ~1-2 \
Fantastic Garden Birthday Background buyable through 9th Birthday Capsule ~1-2 \
Fantastic Petrological Discovery Foreground ~1-2 \
Fantastical Land of Neggs Background ~1-2 \
Fantastical Marshmallow Background ℗ ~4-6+ \
Fantastical Mushroom Tree House ~1-2 \
Fantastical Plushie Land Background ~1-2 \
Fantasy Atrium Background buyable through 9th Birthday Fantasy Wish Candle \
Fantasy Cloud Background ~2 \
Farm Boots ~1-2 \
Fashionable Altadorian Top ~1-2 \
Fashionable Bone Wig ~2 \
Fashionable Darigan Apron ~1-2 \
Fashionable Flowered Scarf ~1-2 \
Fashionable Holiday Wig ~1-2 \
Fashionable Knit Beanie ~1-2 \
Fashionable Lost Desert Wig ~1-2 \
Fashionable Magenta Trousers ~1-2 \
Father Times Watch ~2 \
Faux Fur Tyrannia Floor Tiles ~2-4 \
Fearsome Ceremonial Hammer ~1-2 \
Fearsome Fish Bone Staff ~1-2 \
Fearsome Pirate Shield ~1-2 \
Fearsome Tiki Wings ~1-2 \
Feather Boa Mystery Capsule ~3-4 \
Feather Bouquet ~1-2 \
Feather Button Tree ~1-2 \
Feather Flower Garden Foreground ~1-2 \
Feather Headband ~1-2 \
Feather Lutari Island Wallpaper \
Feather Shoes ~3-4 \
Feather Shower buyable ~1 \
Feather Wig and Felt Accessory ~1-2 \
Feathered Dress ~1-2 \
Feathered Space Wings ~1-2 \
Feathered Sterling Silver Wig ~2 \
Feathery Gothic Wings ~1-2 \
Featured Game Ticket buyable ~1 \
Feet in the Clouds Foreground ~10-12 \
Felt and Buttons Jumper ~2-3 \
Fence of Flowers Foreground buyable through Yellow Flotsam Key Quest Token ~1 \
Fernplant ~1-2 \
Ferocious Battle Claw ~1-2 \
Ferocious Jaws Contacts ~1-2 \
Ferocious Negg Bites ~1-2 \
Ferocious Negg Hot Air Balloon ~1-2 \
Ferocious Negg Key Quest Token ~45-50 \
Ferocious Negg with Negg Balloons buyable through NC Archives Fortune Cookie ~1-2 \
Ferris Wheel Trinket ~1-2 \
Festivals of Altador Once Upon a Time Turner ~3-4 \
Festive Autumn Branch Garland ~2 \
Festive Bag of Gifts ~1-2 \
Festive Balloons Goodie Bag ~1-2 \
Festive Basket Background 2-3 \
Festive Berry Pie buyable through NC Archives Fortune Cookie ~1-2 \
Festive Birthday Wig ~1-2 \
Festive Book Tree ~1-2 \
Festive Ear Muffs buyable through NC Archives Fortune Cookie ~1-2 \
Festive Embroidered Holiday Road Background ~1-2 \
Festive Fire Fountain Sparkler ~1-2 \
Festive Fireworks Cart ~1-2 \
Festive Fringed Cardigan ~1-2 \
Festive Gold Jacket ~2 \
Festive Gourd Mystery Capsule [rare collectible : Depends on trader] ~125-150+ \
Festive Green Gloves ~1-2 \
Festive Holiday Lamp ~2-3 \
Festive Holiday Tutu ~1-2 \
Festive Holly Fortress Background ~1-2 \
Festive Holly Frame ~2 \
Festive Holly Princess Dress ~1-2 \
Festive Holly Princess Facepaint ~1-2 \
Festive Holly Princess Staff ~2-3 \
Festive Holly Princess Wig and Hat ~1-2 \
Festive Holly Princess Wings ~1-2 \
Festive Holly Tiara ~1-2 \
Festive Holly Wings \
Festive Lighted Tree Foreground ~1-2 \
Festive Mini Holiday Tree buyable through NC Archives Fortune Cookie ~1-2 \
Festive Negg Pillow ~1-2 \
Festive Outdoors Birthday Party Background ~2-4 \
Festive Peppermint Dress ~1-2 \
Festive Peppermint Pillars ~1-2 \
Festive Picnic Table ~4-6 \
Festive Poinsettia and Holly Mask ~2-3 \
Festive Shirt with Gold Bow Tie ~1-2 \
Festive Snowbrero ~1-2 \
Festive Sounds NC Fortune Cookie ~1-2 \
Festive Sparkler ~3-4 \
Festive Stick of Gift Boxes ~1-2 \
Festive String Lights Gift Box Mystery Capsule ~3-5 \
Festive Summer Picnic Table ~2 \
Festive Terror Mountain Wallpaper \
Festive Tree Hat ~1-2 \
Festive Usuki Banner ~1-2 \
Festive Valentine Castle ~1-2 \
Festively Decorated Chocolate Negg ~1-2 \
Fetching Pirate Stubble ~2 \
Field of Clouds Background ℗ ~2-4 \
Field of Clovers Background ~4 \
Field of Flowers Foreground ~3-4 \
Field of Ombre Peonies ~1-2 \
Fields of Altador Background ~2-3 \
Fierce Mechanical Darkest Faerie Minion ~2 \
Fiery Anvil of Doom ~1-2 \
Fiery Bow and Arrow ~1-2 \
Fiery Coal Barbecue ~6 \
Fiery Dance Dress ~2 \
Fiery Flower Foreground ~1-2 \
Fiery Golden Tiara ~1-2 \
Fiery Mystery Capsule [rare collectible : Depends on trader] ~200-250+ \
Fiery Robe ~2-4 \
Fiery Sun Contacts ℗ ~4-5 \
Fiery Yooyu Pizza ~2 \
Fighting Staff NT buyable ~1 \
Figure Skating Cuff Bracelet ~3-4 \
Figure Skating Dress ~1-2 \
Figure Skating Rose Shower ~1-2 \
Figure Skating Skates and Tights ~1-2 \
Figure Skating Wig ~1-2 \
Filigree Carousel Negg ~1-2 \
Filigree Gala Gown ~1-2 \
Filigree Pin Wig ~1-2 \
Filigree Shenkuu Wallpaper \
Fine Moustache ~1-2 \
Fingerless Caroler Gloves ~4-5 \
Fingerless Polka Dot Gloves ~1-2 \
Finneus Mystery Capsule ~4-6 \
Fir Trimmed Dress ~1-2 \
Fire and Ice Background ~3-4 \
Fire and Ice Wings ~1-2 \
Fire Boa ~1-2 \
Fire Flower ~1-2 \
Fire Orb Staff ~1-2 \
Fire Pit ~1-2 \
Fire Racing Suit ~1-2 \
Fire Stripe Shirt ~1-2 \
Fire Umbrella ~1-2 \
Fireworks Face Paint buyable ~1 \
Fish Puddle ~1-2 \
Fishing Net Garland ~1-2 \
Fishtail Braided Pigtail Wig ~2-3 \
Fivetastic Birthday Candle Sparkler 1-pack \
Fivetastic Birthday Candle Sparkler 10-pack \
Fivetastic Birthday Candle Sparkler 22-pack \
Fivetastic Birthday Candle Sparkler 5-pack \
Flag and Arrow Garland buyable through NC Archives Fortune Cookie ~1-2 \
Flame Dress ~2-4 \
Flame Sword ~2 \
Flaming Chest of Pirate Gold ~1-2 \
Flaming Orb ~2 \
Flaming Star Globe Wand buyable through Starry Flotsam Key Quest Token ~1-2 \
Flaming Tiki Torches ~1-2 \
Flaming Tree Trinket ~1-2 \
Flankin Shoes with Flame Socks ~1-2 \
Flashing Background Ornament Lights ~1-2 \
Flashy Tulle Wig ~2-3 \
Flatulence in A Minor Music Track ~1-2 \
Fleece-Lined Parka ~1-4 \
Fleece-Lined Snow Trousers ~1-2 \
Flickering Flame String Lights ~1-2 \
Flickering Shenkuu Lantern Sconce ~1-2 \
Flickering Tiki Sconce ~1-2 \
Flight Helmet ~1-2 \
Flight Jacket ~2 \
Flight Scarf ~2-4 \
Floating at the Beach Background ~1-2 \
Floating Battle Faerie Doll ~1-2 \
Floating Bree Faerie Doll buyable ~1 \
Floating Candle Garland ~1-2 \
Floating Capsule of Fun ~1-2 \
Floating Darigan Citadel ~3 \
Floating Dark Faerie Sisters Doll ~3-4 \
Floating Disco Kite ~6 \
Floating Faerieland Mystery Capsule ~3-4 \
Floating Flower Candles Foreground ~4-6 \
Floating Fyora Faerie Doll buyable ~1 \
Floating Grey Faerie Doll buyable ~1 \
Floating Happiness Faerie Doll NT buyable ~1 \
Floating Haunted Locker ~1-2 \
Floating Headless Space Faerie Doll ~1-2 \
Floating Heart Shower ~2-3 \
Floating Heart Valentine Mystery Capsule ~4-5 \
Floating Hearts Dress ~1-2 \
Floating Hot Air Balloons ~1-2 \
Floating Illusen Doll buyable ~1 \
Floating in Space Background buyable ~1 \
Floating Jhudora Faerie Doll buyable ~1 \
Floating Jhuidah Doll ~1-2 \
Floating Light Faerie Doll buyable ~1 \
Floating Negg Faerie Doll ~1-2 \
Floating Pant Devil Doll ~1-2 \
Floating Shenkuu Ship ~5 \
Floating Skull Bubble ~5 \
Floating Soup Faerie Doll ~1-2 \
Floating Space Faerie Doll ~1-2 \
Floating Space Ship ~1-2 \
Floating Space Trash ~10-12 \
Floating Taelia Doll buyable ~1 \
Floating Tooth Faerie Doll ~1-2 \
Floating Virtupets Bed buyable ~1-2 \
Floating White Ona ~2 \
Floral Backdrop buyable through NC Mall 9th Birthday Mystery Capsule ~1-2 \
Floral Bandana Braided Wig ~1-2 \
Floral Cardigan and Shirt ~1-2 \
Floral Face Paint ~1-2 \
Floral Halloween Updo ~2 \
Floral Ink Facepaint ~1-2 \
Floral Lace Dress ~1-2 \
Floral Lace Gloves buyable ~1 \
Floral Lace Parasol ~1-2 \
Floral Net Carriage ~1-2 \
Floral Pattern Dress ~1-2 \
Floral Pattern Faerie Wings ~1-2 \
Floral Pattern Leggings ~1-2 \
Floral Peplum Tunic ~1-2 \
Floral Shoes ~1-2 \
Floral Spring Dress ~1-2 \
Floral Spring Skirt ~1-2 \
Floral Summer Dress ~1-2 \
Floral Summer Top ~1-2 \
Floral Swim Trunks ~1-2 \
Floral Tea Dress ~2-3 \
Floral Tea Wig ~2-3 \
Floral Throne Background ~1-2 \
Floral Vine Cuffs ~1-2 \
Flower and Jewel Circlet buyable ~1 \
Flower and Wire Garland ~2-3 \
Flower Arbor Garland ~2-4 \
Flower Arrangement Foreground ~1-2 \
Flower Ball Wand ~1-2 \
Flower Balloon Wings ~1-2 \
Flower Barrow Gift Box Mystery Capsule ~2 \
Flower Basket Array Foreground ~1-2 \
Flower Basket with Straps ~1-2 \
Flower Bathing Suit ~4-6 \
Flower Beard ~1-2 \
Flower Beauty Mark ~1-2 \
Flower Bed Background buyable ~1 \
Flower Belt NT buyable ~1 \
Flower Bud Vase Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Flower Camouflage Facepaint ~1-2 \
Flower Candle Holder Foreground ~1-2 \
Flower Caplet ~1-2 \
Flower Cart ~1-2 \
Flower Chain Chandelier ~1-2 \
Flower Chandelier ~1-2 \
Flower Circlet Wig ~2-3 \
Flower Covered Parasol ~1-2 \
Flower Crown Wig ~1-2 \
Flower Fan ~2-3 \
Flower Ferris Wheel ~1-2 \
Flower Footie Pyjamas ~1-2 \
Flower Fun Headdress buyable ~1 \
Flower Hair Bow ~1-2 \
Flower Handheld Plushie ~1-2 \
Flower Head Bonk ~1-2 \
Flower Heart Decoration ~1-2 \
Flower Heart Necklace ~1-2 \
Flower Heart Vine Tree ~2 \
Flower Jars and Vines Garland ~1-2 \
Flower Jewelled Sandals ~4-6 \
Flower Lamp Trinket ~1-2 \
Flower Lei Garland ~1-2 \
Flower Mazzew Handheld Plushie ~1-2 \
Flower Parasol ~3 \
Flower Petal Caplet ~1-2 \
Flower Petal Dress buyable ~1 \
Flower Petal Mask ~1-2 \
Flower Petal Shirt ~1-2 \
Flower Petal Skirt ~3 \
Flower Petal Umbrella ~1-2 \
Flower Petal Wings buyable through NC Archives Fortune Cookie ~1-2 \
Flower Pinwheel Foreground ~1-2 \
Flower Printed Top buyable through Shenanigifts ~1-2 \
Flower Ribbon Mask ~1-2 \
Flower Sandals ~1-2 \
Flower Sculpture Foreground ~1-2 \
Flower Shower Cap ~1-2 \
Flower Skirt and Tights buyable through NC Archives Fortune Cookie ~1-2 \
Flower Star Wand ~1-2 \
Flower Sweetheart Gram NT \
Flower Throne Background ~1-2 \
Flower Tutu and Tights ~1-2 \
Flower Vase Balloon Bouquet buyable through Patapult ~1-2 \
Flower Wings ~1-2 \
Flower-decorated Corduroy Skirt ~1-2 \
Flowering Gate Foreground ~2 \
Flowering Heart Vine Garland ~1-2 \
Flowering Hose ~2 \
Flowering Logs Foreground ~1-2 \
Flowering Neggs Window Box Foreground ~1-2 \
Flowering Poinsettia Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Flowering Spring Branch Wings ~1-2 \
Flowering Vine Garland buyable ~1-2 \
Flowering Vine Sandals ~1-2  \
Flowering Vine Staff ~1-2 \
Flowering Vine String Lights ℗ ~20-30 \
Flowering Vine Sun Glasses ~1-2 \
Flowering Winter Branch Wings ~2 \
Flowers and Ribbons Headband ~2 \
Flowers Flower Background ~1-2 \
Flowers in Pitchers Foreground ~1-2 \
Flowery Bathing Cap ~1-2 \
Flowery Burlap Shoes ~1-2 \
Flowery Crown ~1-2 \
Flowery Cutlass ~1-2 \
Flowery Embroidered Top ~1-2 \
Flowery Forest Background ~3-4 \
Flowery Paper Lantern ~1-2 \
Flowery Red Hat buyable through Red Acara Key Quest Token ~1-2 \
Flowery Ribbon Wand ~10 \
Flowery Skull Skirt ~1-2 \
Flowery Teal Dress ~2-3 \
Flowery Valentine Goodie Bag ~1-2 \
Flowing Blue Mystery Capsule ~2-3 \
Flowing Floral Dress ~1-2 \
Flowing Ombre Cape ~1-2 \
Flowing Striped Skirt ~1-2 \
Flowing Water Dress buyable through 9th Birthday Fantasy Wish Candle ~1-2 \
Flowy Pink Shirt buyable ~1 \
Flowy Scaled Skirt ~1-2 \
Flowy Spring Gown ~1-2 \
Flowy Valentine Ribbons ~1-2 \
Fluffy Cloud Dress ~1-2 \
Fluffy Feather Pillow ~1-2 \
Fluffy Purple Tutu and Tights ~1-2 \
Fluttering Snowflakes Shower ~1-2 \
Fluttering Wings Music Track ~1-2 \
Fly Away With Me Carpet ~1-2 \
Flying Cupid Shoyru Toy ~4-5 \
Flying Feather Pillow Shower ~1-2 \
Flying Paper Shower ~1-2 \
Flying Petpet Bath Trinket ~1-2 \
Flying Petpet Poinsettia House ~1-2 \
Flying Ylana Skyfire ~5 \
Food Fight Shower ~1-2 \
Food-Eating Monster Horns ~1-2 \
Foot Soldiers Helmet ~1-2 \
Foot Soldiers Vest ~1-2 \
Forest Clearing Background ~4 \
Forest Fog Background ~3-5 \
Forest Dweller Face Paint ~1-2 \
Forest Gate Background ~2 \
Forest Hiding Spot Treasure Map buyable ~1 \
Forest Huntress Bow and Arrows ~4-5 \
Forest Huntress Dress ~1-2  \
Forest Huntress Wig ~2 \
Forgotten Altador Ruin Background ~1-2 \
Forgotten Faerie Grove Background ℗ ~3-5 \
Forgotten Lilac Bouquet ~1-2 \
Forgotten Old Flower ~1-2 \
Forgotten Valentine Sword ~1-2 \
Forlorn Sweetheart Gram NT  \
Formal Flower Feather Shirt ~1-2 \
Formidable Bone Shoulder Armour ~2 \
Fortune Cookie Wings ~1-2 \
Fortune-Telling Crystal Ball ~1-2 \
Fountain of Rainbows ~1-2 \
Fragrant Rose Petal Path Background ~1-2 \
Framed Mirror Garland ~1-2 \
Framed Neopet Foreground ~1-2 \
Freaky Factory Background ~4-5 \
Fresh Berry Balloons ~1-2 \
Fresh Flower Sun Dress buyable through NC Archives Fortune Cookie ~2-3 \
Fresh Strawberry Basket ℗ ~1-2 \
Freshly Washed Wig ~1-2 \
Friendly Flying Petpet House Foreground ~1-2 \
Friendly Negg Axe ~1-2 \
Friendly Slorg Gloves ~1-2 \
Friendly Wind-Up Gobbler ~1-2 \
Frightful Doorway Background ~2 \
Frightful Spirit Celebration Background ~1-2 \
Frills and Dots Top ~1-2 \
Frilly Cybunny Apron ~1-2 \
Frilly Neovian Shirt ~2-3 \
Frilly Pantaloons ~1-2 \
Fringed Fabric Cardigan ~1-2 \
Front Porch Background ~2-3 \
Frosted Autumn Tree ~1-2 \
Frosted Flowers Foreground ~1-2 \
Frosted Holiday Lamp Post ~1-2 \
Frosted Holiday Snowglobe ~1-2 \
Frosted Pine Cone Bouquet ~1-2 \
Frosted Sugar Cookie Wings ~1-2 \
Frosted Tips Wig ~1-2 \
Frosted Web Garland ~2 \
Frosty Body Paint ~1-2 \
Frosty Cold Breath buyable through NC Archives Fortune Cookie ~2 \
Frosty Eye Makeup ~1-2 \
Frosty Eyes Contacts ~1-2 \
Frosty Leafpile Foreground ~1-2 \
Frozen Bow and Arrows ~1-2 \
Frozen Facepaint ~1-2 \
Frozen Flowers Foreground ~1-2 \
Frozen Glade Background ~2-3 \
Frozen Gothic Columns Foreground ~1-2 \
Frozen Ice Crystals NT \
Frozen Star Lights ~1-2 \
Frozen Terror Mountain Desk buyable ~1 \
Frozen Tree Branch Wings buyable ~1 \
Fruity Fun Shirt ~1 \
Fruity Mystery Capsule ~2-3 \
Full Mint Green Contacts ~1-2 \
Fun Flower Staff buyable ~1 \
Fun Holiday Cookie ~4-6  \
Fun Kiko Lake Desk buyable ~1 \
Fun Roo Island Sofa buyable ~1 \
Fun Summer Hat with Flower ~1-2 \
Fun Virtupets Lamp buyable ~1 \
Funky Rainbow Wig ~2 \
Funky Ruffle Skirt with Striped Leggings ~1-2 \
Funky Shenkuu Wig buyable ~1 \
Fur Covered Tyrannia Sofa buyable ~1 \
Fur Covered Tyrannian Desk buyable ~1-2 \
Fur Lined Cape of Thievery ~1-2 \
Fur Lined Poufy Vest ~1-2 \
Fur Lined Tiara ~1-2 \
Fur Lined Winter Boots ~1-2 \
Fur-Trimmed Shoes ~1-2 \
Furry Winter Hat and Wig ~1-2 \
Futuristic High Bun Wig ~1-2 \
Fuzzy Autumn Hat and Wig ~1-2 \
Fuzzy Raglan Sleeve Shirt buyable through Patapult ~1-2 \
Fuzzy Vest and Sweater ~1-2 \
Fyora Collectors Staff ~6-8 \
Fyora Inspired Wig and Hat ~1-2 \
Fyora Mystery Capsule ~5 \
Fyora Voodoo Doll Handheld Plushie ~1-2 \
Fyora Wig ~2 \
Fyora Wing Garland ~1-2 \
Fyora Wing Shower ~1-2 \
Fyoras Collectors Dress ~3-4 \
G \
 \
Gadgadsbogen Evening Background ~1-2 \
Gadgadsbogen Fruit Staff ~1-2 \
Galaxies Beyond Background ~1-2 \
Game Winning Confetti ~1-2 \
Gamers Costume Staff buyable through NC Archives Fortune Cookie ~2-3 \
Games Fortune Cookie buyable ~1 \
Games Master Background ~1-2 \
Games Master Cape buyable through NC Archives Fortune Cookie ~2-3 \
Games Master Challange NC Challenge Aqua Lulu Shirt ~2-4 \
Games Master Challenge Flag ~85+ \
Games Master Challenge Mystery Capsule [rare collectible : Depends on trader] ~500-1000+ \
Games Master Challenge NC Challenge - 1 Challenge Ticket Pack \
Games Master Challenge NC Challenge - 1 Game Ticket Pack \
Games Master Challenge NC Challenge - 7 Challenge Ticket Pack \
Games Master Challenge NC Challenge - 8 Game Ticket Pack  \
Games Master Challenge NC Challenge 2010 Gold Medal ~1-2 \
Games Master Challenge NC Challenge 2010 Lulu Trousers ~1-2 \
Games Master Challenge NC Challenge 2010 Lulu Wig ~60-80 \
Games Master Challenge NC Challenge 2010 Silver Medal \
Games Master Challenge NC Challenge Medal 2009 - Bronze \
Games Master Challenge NC Challenge Medal 2009 - Gold ~1-2 \
Games Master Challenge NC Challenge Medal 2009 - Participation \
Games Master Challenge NC Challenge Medal 2009 - Silver \
Games Master Challenge NC Ticket Pack \
Games Master Headset ~1-2 \
Games Shower ~1-2 \
Gaming Dungeon Background ~2-3 \
Gaming Helmet buyable through NC Archives Fortune Cookie ~1-2 \
Gaming Lantern ~2 \
Gaming Shirt ~1-2 \
Gaming Shorts ~1-2 \
Garden Alcove Background ~1-2 \
Garden Chandelier ~1-2 \
Garden Dresser Trinket buyable through Shenanigifts ~1-2 \
Garden Festival Lantern Garland ~3-5 \
Garden Flower Dress ~1-2 \
Garden Gate Background buyable through Shenanigifts ~1-2 \
Garden Gate Foreground NT buyable ~1 \
Garden Globe Staff ~1-2 \
Garden Gnomes Background ~1-2 \
Garden Patio Tea Party ~1-2 \
Garden Staircase Background buyable ~1 \
Garden Tea Background ~3 \
Garden Tea Dress ~3-4 \
Garden Tea Flowering Planter ~1-2 \
Garden Tea Gloves ~4-5 \
Garden Tea Hat ~1-2 \
Garden Tea Parasol ~4-5 \
Garden Tea Party Background ~1-2 \
Garden Tea Shoes ~15-20 \
Garden View Background ~1-2 \
Garden Wreath Wig ~1-2 \
Garin Wig ℗ ~2 \
Garland of Gears buyable through NC Archives Fortune Cookie ~1-2 \
Garland of Yooyus buyable through NC Archives Fortune Cookie ~1-2 \
Gate of Trees Background buyable ~1 \
Gate to Deserted Fairground Foreground ~8-10 \
Gathering in the Glade Background ~2-3 \
Gathering of Conjurers Background ~4-6 \
Gauntlet of Lasers Foreground ~1-2 \
Gauze and Barbats Garland ~2-3 \
Gears and Hearts Garland ~1-2 \
Gem and Ribbon Necklace ~1-2 \
Gem Facepaint ~1-2 \
Gem JubJub Power Bounce Suitcase ~2-3 \
Gem JubJub Power Bounce Token 10-pack \
Gem JubJub Power Bounce Token 5-pack \
Gem JubJub Power Bounce Token Mystery 1-pack \
Gemstone Button Cardigan ~1-2 \
Gemstone Formation Foreground buyable ~1 \
Gemstone Frame ~1-2 \
General Kass Jacket ~2-3 \
Gentle Autumn Tree ~2-3 \
Geometric Gift Box Mystery Capsule ~1-2 \
Geraptiku Background ~25-30 \
Geraptiku Fly Trap Garland ~2 \
Ghastly Skull Staff ~1-2 \
Ghost Meepit Head Bonk ~1-2 \
Ghost Melton Goodie Bag ~1-2 \
Ghost Pirate Ship Background ~1-2 \
Ghostkerchief and Jack-O-Lantern String Lights ~1-2 \
Ghostkerchief Head Bonk ~1-2 \
Ghostkerchief Popping Out of a Pumpkin ~1-2 \
Ghostkerchief String Lights ~1-2 \
Ghostkerchief Swarm ~1-2 \
Ghostly Blue Gloves ~1-2 \
Ghostly Cobweb Garland ~1-2 \
Ghostly Floating Aisha Head ~1-2 \
Ghostly Lantern ~1-2 \
Ghostly Mirror ~4 \
Ghostly Petpet Gate Garland ~3-4 \
Ghostly Sheet Costume ~2-3 \
Ghostly Wand of Spades buyable ~1 \
Ghostly Web Garland ~1-2 \
Ghostly Wig ~1-2 \
Giant Cake Background ~2-4 \
Giant Candy Cane Foreground ~1-2 \
Giant Clover Bunch ~1-2 \
Giant Crayon ~1-2 \
Giant Derby Brimmed Hat buyable through NC Archives Fortune Cookie ~1-2 \
Giant Flower Background ~1-2 \
Giant Gemstone Heart ~1-2 \
Giant Gift Boxes ~1-2 \
Giant Jacaranda Tree ~2 \
Giant Jelly Background ~1-2 \
Giant Laser Garland ~2 \
Giant Mootix Handheld Plushie ~1-2 \
Giant Oversized Pawkeet Plushie ~1-2 \
Giant Petpetpet Safari Background ~1-2 \
Giant Plate of Jelly ~1-2 \
Giant Sewing Project Foreground ~1-2 \
Giant Shell Parasol ~1-2 \
Giant Spyder Jacket ~1-2 \
Giant Squid Costume ~1-2 \
Giant Squid Hat ~1-2 \
Giant Squid Mask ~1-2 \
Giant Suspended Spyder Webs ~4 \
Giant Tree Background ~2-3 \
Gift Basket Centre Wrap 1-Pack ~1-2 \
Gift Basket Centre Wrap 10-Pack ~3 \
Gift Basket Centre Wrap 20-Pack ~4-5 \
Gift Basket Centre Wrap 30-Pack ~5 \
Gift Box Mystery Capsule Fortune Cookie ~8-10 \
Gift Exchange Aftermath Background ~1-2 \
Gift Garland ~1-2 \
Gift Mystery Capsule [rare collectible : Depends on trader] ~150-200+ \
Gift of a Bag of Coal ~1-2 \
Gift of a Bouquet of Roses ~3-4 \
Gift of a Piece of Cake ~2-4 \
Gift of Fresh Baked Cookies ~3 \
Gift of Neocash Surprise Box Background ~35-45 \
Gift Wrap Background ~1-2 \
Gift Wrap Caplet ~1-2 \
Gift Wrap Dress ~2 \
Gift Wrap Jacket ~1-2 \
Gift Wrap Kauboy Hat ~1-2 \
Gift Wrap Station Background ~1-2 \
Gift Wrapped Holiday Carriage ~1-2 \
Gigantic Pink Hair Bow ~1-2 \
Giggle Sound Track ~1-2 \
Gikerot Kite buyable through NC Archives Fortune Cookie ~2-3 \
Gilded Yooyuball Chalice ~1-2 \
Gingerbread Apron ~1-2 \
Gingerbread Cookie Background ~2 \
Gingerbread Dream House Background buyable through NC Archives Fortune Cookie ℗ ~5-6 \
Gingerbread House Garland ~1-2 \
Gingerbread Oven Background ~1-2 \
Gingerbread Party Frock ~1-2 \
Gingerbread Shield ~2-3 \
Gingerbread Top Hat ~1-2 \
Gingerbread Tree Trinket ~1-2 \
Gingerbread Wings ~2-3 \
Gingerbread Wings Shower ℗ ~2 \
Gingham Vest and Shirt ~1-2 \
Girly Mechanical Wings buyable ~1 \
Glade of Pink Background ~2 \
Glade Tree House ~4 \
Glam Curled Wig ~1-2 \
Glam Valentine Mystery Capsule ~1-2 \
Glamorous Beach Sandals ~1-2 \
Glamorous Snowflake Wig ℗ ~2-3 \
Glamourous Birthday Hat Gift Box Mystery Capsule ~1-2 \
Glamourous Green Mystery Capsule ~2-4 \
Glass Bottom Boat Foreground ~1-2 \
Glass Brightvale Floor Tiles \
Glass Buoys Garland ~1-2 \
Glass Feather Chandelier ~1-2 \
Glass Fountain Pool buyable ~1 \
Glass Lily Staff ~1-2 \
Glass Maraqua Lamp buyable ~1 \
Glass Pieces buyable ~1 \
Glass Rose Staff ~8-10 \
Glass Topped Faerieland Desk buyable ~1 \
Glass Water Fountain ~1-2 \
Glasses with Wipers ~1-2 \
Gleaming Gemstrings Garland ~1-2 \
Gleaming Quad-Blade Sword ~1-2 \
Gleaming Rainbow Parasol buyable ~1 \
Glider Swing Set \
Glistening Short Hair ~1-2 \
Glitter and Trim Wig ~2-3 \
Glitter Balloon Bouquet ~1-2 \
Glitter Leggings and Shoes buyable through NC Archives Fortune Cookie ~2 \
Glitter Winged Eyes ℗ \
Glittering Gold Contacts ~1-2 \
Glittering Green Dress ~1-2 \
Glittering Green Mystery Capsule ~1-2 \
Glittering Jewel Shower ~4-5 \
Glittering Jewelled Wig ~1-2 \
Glittering Leaves Garland ~1-2 \
Glittering Ombre Dress ~1-2 \
Glittering Shamrock Bouquet ~1-2 \
Glittery Dancing Shoes ~1-2 \
Glittery Feather Facepaint ~1-2 \
Glittery Leaf Wings ~1-2 \
Glittery Negg Accessory Wig ~1-2 \
Glittery Red Trees Foreground ~1-2 \
Glittery Silver Contacts ~2-3 \
Glittery Skirt and Ombre Tights ~1-2 \
Glittery Striped Shoes ~1-2 \
Glittery Wind Up Key buyable through NC Archives Fortune Cookie ~4 \
Glittery Zipper Wings ~1-2 \
Globe Inspired Dress ~1-2 \
Gloomy Sky Tower Background ~2 \
Gloomy Winter Day Background ~8-10 \
Glorious Sloth Throne ℗ ~2 \
Gloves with Jeweled Bracelets buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Glow in the Dark Facepaint buyable through NC Archives Fortune Cookie ~2-3 \
Glowing Blue Contacts ~1-2 \
Glowing Book of Spells buyable through NC Archives Fortune Cookie ~2-3 \
Glowing Clockwork Arm Bands ~1-2 \
Glowing Handheld Candle ~3-5 \
Glowing Hanging Lanterns buyable through NC Archives Fortune Cookie ~2-3 \
Glowing Jack-o-lantern Goodie Bag ~1-2 \
Glowing Kreludor Bed buyable ~1-2 \
Glowing Kreludor Desk buyable ~1 \
Glowing Kreludor Sofa buyable ~1 \
Glowing Lamps Garland ~1-2 \
Glowing Light Sky Background ~1-2 \
Glowing Ona Handheld Plushie ~1-2 \
Glowing Paper Star Wings buyable ~1 \
Glowing Pink Orb Staff ~6 \
Glowing Rainbow Tree Foreground ~1-2 \
Glowing Skull Necklace ~1-2 \
Glowing Toy Sword ~1-2 \
Glyme Vine Staff ~1-2 \
Gnarled Bone Wings buyable through NC Archives Fortune Cookie ~1-2 \
Gnarled Tree of Barbats ~1-2 \
Gnarled Witch Gloves ~1-2 \
Gnome Background buyable through NC Archives Fortune Cookie ~1-2 \
Gnome Hat and Hair ~1-2 \
Gnome Nesting Doll Trinket ~1-2 \
Gobbler Handheld Plushie ~1-2 \
Gobbler Music Track ~1-2 \
Gobbler Nesting Dolls ~1-2 \
Gobbler Pinwheel ~1-2 \
Gold and Black Heart Garland ~1-2 \
Gold Fancy Dress ~1-2 \
Gold Festival Fan ~1-2 \
Gold Filled Mining Cart ~1-2 \
Gold Glitter Streak Wig ~1-2 \
Gold Hourglass NT \
Gold Jewelled Shoes ~1-2 \
Gold Leaf Garland ~4 \
Gold Mauket Kite ~1-2 \
Gold Mine Background ~20-25 \
Gold New Years Shoes ~3 \
Gold Sequin Top Hat ~1-2 \
Gold Sequined Skirt ~1-2 \
Gold Shoulder Armour ~1-2 \
Gold Shoyru Limited Edition Key Quest Token [Without Rich Golden Eye Makeup] ~2-3 \
Gold Sneakers ~1-2  \
Gold Tipped Poinsettia Wings ~1-2 \
Gold Trim Patterned Skirt ~1-2 \
Gold Trimmed Valentines Wings ~2-3 \
Gold Yooyu Torch ~1-2 \
Gold Yooyu Wig ~2 \
Gold Yooyu-Inspired Stringlights ~1-2 \
Gold Zipper Trousers ~1-2 \
Golden Altador Boots ~1-2 \
Golden Altador Cup Gift Wrap NT \
Golden Altador Cup Goal Stockings and Shoes ~3-4 \
Golden Altador Cup IV NC Challenge Medallion ~1-2 \
Golden Altadorian Sofa buyable ~1 \
Golden Amulet Striped Shirt ~1-2 \
Golden Atlas of the Ancients NC Challenge Medallion ~1-2 \
Golden Autumn Wig ~1-2 \
Golden Ball Gown buyable through NC Archives Fortune Cookie ~3-5 \
Golden Bangle Bracelets ~3-5 \
Golden Bell Dress ~2 \
Golden Boa ℗ ~15-20 \
Golden Cage with Naleap ~1-2 \
Golden Cape ~1-2 \
Golden Curtain Balloon Garland ~1-2 \
Golden Damask Armour ~1-2 \
Golden Damask Shield ~1-2 \
Golden Damask Sword ~1-2 \
Golden Elephante Mask ~1-2 \
Golden Elite Garland NT buyable ~1 \
Golden Flower Heels ℗ ~2-4 \
Golden Flower Necklace ~1-2 \
Golden Flowering Branches Garland ~1-2 \
Golden Flowering Vine Garland buyable ~1 \
Golden Gear Wings ~1-2 \
Golden Genie Lamp ~2 \
Golden Glitter Shower ~1-2 \
Golden Harp Wings ~1-2 \
Golden Heart Confetti ~1-2 \
Golden Heart Valentine Goodie Bag ~2 \
Golden Holiday Wings ~1-2 \
Golden Horns ~1-2 \
Golden Jewelled Flail ~1-2 \
Golden Jewelled Sceptre ~2 \
Golden Jewelled Tiara ~1-2 \
Golden Key Necklace buyable ~1 \
Golden Light Shower ~1-2 \
Golden Lost Desert Desk buyable ~1 \
Golden Lulu Medallion NT \
Golden Mystery Capsule [rare collectible : Depends on trader] ~400-500 \
Golden Nutcracker Gloves ℗ ~30-35 \
Golden Ombre Wig ~2 \
Golden Orb Lights ~20-25 \
Golden Pirate Sword ~1-2 \
Golden Regal Wig and Crown ~1-2 \
Golden Sarcophagus Background ~1-2 \
Golden Scattered Light Garland ~50-55 \
Golden Sea Star Wig ℗ ~2-4 \
Golden Sequin Dress buyable through NC Archives Fortune Cookie ~3 \
Golden Shimmer Cape ~1-2 \
Golden Snowbunny Ears Headband ~1-2 \
Golden Snowflake Wings ~1-2 \
Golden Sparkle Trousers ~1-2 \
Golden Spinacles Background buyable through NC Archives Fortune Cookie ~1-2 \
Golden Spoon Wig ~2 \
Golden Starlight Side Tree ~1-2 \
Golden Sun Glasses ~1-2 \
Golden Sun Wig ~3 \
Golden Tunic ~3 \
Golden Underwater Wig buyable ~1 \
Golden Vines Garland buyable through Yellow Xweetok Key Quest Token ~1 \
Golden Winding Necklace ~1-2 \
Golden Woodland Staff ~1-2 \
Golden Yooyu Gift Box Mystery Capsule ~1-2 \
Golden Yooyu Locket buyable through NC Archives Fortune Cookie ~1-2 \
Golden Yooyu Staff ~2 \
Goparokko Jungle Foreground buyable through NC Archives Fortune Cookie ~3 \
Goparokko Music Track ~1-2 \
Goparokko Staff buyable through NC Archives Fortune Cookie ~1-2 \
Goparokko Themed Altadorian Toga ~1-2 \
Goparokko Yurble Collectors Mask ~1-2 \
Gorgeous Spring Garden Background ~1-2 \
Gorgeous Sunset Background ~1-2 \
Got To Smile Thought Bubble ~1-2 \
Gothic Black Rose Bouquet ~1-2 \
Gothic Bone Chest Piece buyable through Wonderclaw ~1-2 \
Gothic Buckle Shirt ~1-2 \
Gothic Candy Cane Staff ~1-2 \
Gothic Cherub Wings ~1-2 \
Gothic Christmas Angelpuss Handheld Plushie ~2-3 \
Gothic Costume Kacheek Plushie ~1-2 \
Gothic Damask Candelabra ~1-2 \
Gothic Easter Gram NT  \
Gothic Feather Mystery Capsule ~4-6 \
Gothic Floor Candles ~2-3 \
Gothic Flower Skirt ~1-2 \
Gothic Flower Wreath Wig ~1-2 \
Gothic Garden Background ~3-4 \
Gothic Heart Valentine Garland ~4 \
Gothic Hearts Jacket ~1-2 \
Gothic Holiday Chandelier ~1-2 \
Gothic Holiday Snowglobe ~2-3 \
Gothic Holiday Tree ~2 \
Gothic Inspired Makeup ~3-4 \
Gothic Lace Bouquet ~1-2 \
Gothic Lace Facepaint buyable ~1 \
Gothic Lace Lights Garland ~1-2 \
Gothic Lace Valentine Caplet ~1-2 \
Gothic Leather Jacket and Waistcoat ~1-2 \
Gothic Leather Wings ~1-2 \
Gothic Lily Bouquet ~1-2 \
Gothic Maroon Sweater ~1-2 \
Gothic Ornament Wings buyable through NC Archives Fortune Cookie ~1-2 \
Gothic Parasol buyable through NC Archives Fortune Cookie ~2 \
Gothic Party Background ~1-2 \
Gothic Pastel Dress ~2-3 \
Gothic Piano Spooky Soundtrack ~1-2 \
Gothic Pillars ~2-3 \
Gothic Red and Black Dress ~2-3 \
Gothic Red Rose Necklace ~2 \
Gothic Red Skirt ~2 \
Gothic Rose Shrug ~1-2 \
Gothic School Girl Dress ~1-2 \
Gothic School Girl Satchel ~3 \
Gothic School Girl Tights and Boots ~1-2 \
Gothic School Girl Wig ~1-2 \
Gothic Skull Garland ~1-2 \
Gothic Snowbunny Ears Headband ~1-2 \
Gothic Snowbunny Handheld Plushie ~1-2 \
Gothic Snowflake Shower ~1-2 \
Gothic Spring Picnic Background ℗ ~2-4 \
Gothic Star Wings ~1-2 \
Gothic Tiara ~1-2 \
Gothic Updo Wig ~1-2 \
Gothic Valentine Garland ~4 \
Gothic Valentine Piano and Stool ~16-18 \
Gothic Valentine Roses ~3-4 \
Gothic Valentine Sofa ~14-16 \
Gothic Vine Face Paint buyable ~1 \
Gothic White Holly Wig ~1-2 \
Gothic Winter Wig ℗ ~2 \
Gothy Winter Wig ~2-3 \
Gourd String Lights ~2 \
Governors Treasure Map ~2 \
Grand Altador Cup Shield ~1-2 \
Grand Autumn Harvest Wig ~1-2 \
Grand Carmariller Throne ~1-2 \
Grand Entrance Curtains ~1-2 \
Grand Oak Tree Background ~3 \
Grand Winter Wings ~1-2 \
Grass Foreground ~20-25 \
Great Big Outdoors Background ~4-6 \
Great NC Scavenger Hunt: Ciphettes Satchel \
Great NC Scavenger Hunt: Lavishams Satchel \
Great NC Scavenger Hunt: Nodas Satchel \
Great Scavenger Hunt Gift Box Mystery Capsule ~4-6 \
Green and Black Festival Dress buyable through Shenanigifts ~2 \
Green and Gold Garden Lights buyable ~1 \
Green and Gold Star Eye Shadow ~1-2 \
Green and White Striped Tutu with Tights ~1-2 \
Green Apple Wig ~1-2 \
Green Argyle Sweater Vest ~1-2 \
Green Castle Background ~3 \
Green Celebration at a Public House Background ~1-2 \
Green Clover Glasses ~1-2 \
Green Clover Mystery Capsule ~3 \
Green Clover Wig ~1-2 \
Green Daily Dare Mystery Capsule [rare collectible : Depends on trader] ~800-1000+ \
Green Fishtail Gown ~1-2 \
Green Flower Embroidery Dress ~1-2 \
Green Glitter Shower ~1-2 \
Green Grundo Key Quest Token buyable ~1 \
Green Hat Auburn Wig buyable ~1 \
Green Ice Wings ~1-2 \
Green Island Flowers Garland buyable through Island Bruce Key Quest Token ~1-2 \
Green Island Hat buyable through NC Archives Fortune Cookie ~1-2 \
Green Kacheek Key Quest Token buyable ~1 \
Green Kau Key Quest Token buyable ~1 \
Green Knot Hair Clip ~1-2 \
Green Knot Wings ~1-2 \
Green Lace Up Boots ~1-2 \
Green Leafy Wings ~1-2 \
Green Meadow Background ~2 \
Green Military Jacket ~1-2 \
Green Mystery Capsule ~2 \
Green NC Mall Third Birthday Goodie Bag ~1-2 \
Green Negg Glass Wings ~1-2 \
Green NeoBoard Pen buyable ~1-2 \
Green Patchwork Dress ~1-2 \
Green Plaid Shirt buyable ~1 \
Green Scallop Evening Dress ~1-2 \
Green Shamrock Apron ~1-2 \
Green Shamrock Cardigan ~1-2 \
Green Sparkle Trousers ~1-2 \
Green Spring Romper ~1-2 \
Green Star 3rd Birthday Gram NT \
Green Stars Shower ~1-2 \
Green Stripe Wallpaper ~2-4 \
Green Teachers Dress buyable ~1 \
Green Toy Negg ~1-2 \
Green Tribal Tattoo ~1-2 \
Green Velvet Holiday Cap and Wig buyable through Shenanigifts ~1-2 \
Green Vine Clearing Background buyable through Green Kacheek Key Quest Token ~1 \
Green Warlock Battle Wings ~1-2 \
Green Warlock Wig ~1-2 \
Green Woodland Path Background ℗ ~4 \
Green X-Ray Goggles ~1-2 \
Greenhouse Background ~6-8 \
Grey and Purple Color Block Skirt buyable ~1 \
Grey Faerie Dress ~2-3 \
Grey Faerie Wings ~2 \
Grey Falling Petals ~1-2 \
Grey Shirt with Blazer ~1-2 \
Grey Silk Dress buyable ~1 \
Grey Stone Wig ~1-2 \
Grey Tulle Dress ~1-2 \
Grey Warlock Wig ~1-2 \
Grill w/ skewers \
Grim Faerie Statue ~1-2 \
Grim Statuette Foreground ~1-2 \
Groovy Disco Ball ~1-2 \
Gross Pulsating Pimple ~1-2 \
Growing Black Vines Foreground ~1-2 \
Growing Flower Outfit buyable through NC Archives Fortune Cookie ~1-2 \
Growing Potted Plant ~1-2 \
Growing Vines ~1-2 \
Grumpy Cloud Wig ~1-2 \
Grumpy Plumpy Eyes ~2 \
Grundo Pedestal ~1-2 \
Guarding the Gates Background ~1-2 \
Gulp... Underwater Reef Background ℗ ~2-3 \
Gwortz Beanie buyable through NC Archives Fortune Cookie ~1-2 \
Gypsy Boy Trousers ~1-2 \
Gypsy Boy Vest ~1-2 \
Gypsy Camp Background ~1-2 \
Gypsy Girl Earrings ~4-5 \
Gypsy Girl Shawl ~3-4 \
Gypsy Girl Skirt ~1-2 \
Gypsy Girl Striped Headscarf ~1-2 \
Gypsy Girl Vest ~1-2 \
Gypsy Henna Tattoo ~1-2 \
Gypsy Wagon ~1-2 \
Gypsy Wrap Wig ~1-2 \
Gyros Collectors Wig and Goggles ~1-2 \
H \
 \
Hair Bone ~1-2 \
Hair Bow Dress ~3-4 \
Hair Bow Shower ~1-2 \
Hair Full of Spyders Wig ~1-2 \
Halberd of Adoration ~1-2 \
Hall of Fountains Background ~2 \
Halloween Barbat Goodie Bag ~1-2 \
Halloween Candy Bowl Hat ~2-3 \
Halloween Candy Shower ~2 \
Halloween Footed Pyjamas ~1-2 \
Halloween Geb Handheld Plushie ~1-2 \
Halloween Gift Box Mystery Capsule ~4-7 \
Halloween Goodie Bag ~4-7 \
Halloween Goodie Bag ~4-7 \
Halloween Goodie Bag ~4-7 \
Halloween Horrors Mystery Capsule ~2-3 \
Halloween Mystery Capsule [rare collectible : Depends on trader] ~250+ \
Halloween Nesting Dolls ~1-2 \
Halloween Prank Background ~4-5 \
Halloween Rose Gloves ~15-20 \
Halloween Shindig Background ~3 \
Halloween Spyderweb Gift Box Mystery Capsule ~2-3 \
Halloween Striped Shirt and Tie ~1-2 \
Halloween Sweets Staff ~1-2 \
Halloween Tree ~3-5 \
Halloween Tutu ℗ ~3 \
Hand Carved Candle Dress ~3-4 \
Hand Carved Candle Wings ~1-2 \
Hand Carved Meridell Sofa buyable ~1 \
Hand Knitted Winter Hoodie ~1-2 \
Hand Painted Brightvale Desk buyable ~1 \
Hand Painted Brightvale Sofa buyable ~1 \
Hand Painted Brightvale Wallpaper ~2-4 \
Hand Painted Lost Desert Floor Tiles \
Hand Painted Lost Desert Wallpaper \
Hand Painted Shenkuu Floor Tiles ~2-4 \
Handcrafted Sugar Skull Garland ~1-2 \
Handheld Candlestick and Rope buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Handheld Carollers Lamp buyable through Shenanigifts ~1-2 \
Handheld Christmas Meepit Plushie ~1-2 \
Handheld Communication Device ~1-2 \
Handheld Confetti Popsicle ~1-2 \
Handheld Green Spardel Plushie ~1-2 \
Handheld Grundo Plushie of Prosperity ~1-2 \
Handheld Heart Sword ~1-2 \
Handheld Iced Berry Bouquet ~1-2 \
Handheld Iced Gingerbread Cookie ~2 \
Handheld Key to Spring ~1-2 \
Handheld Meowclops Torch ~1-2 \
Handheld Moon Balloon ~1-2 \
Handheld Moustache ~1-2 \
Handheld Net of Easter Items ~1-2 \
Handheld Net of Pirate Petpets ~1-2 \
Handheld Ornament ~1-2 \
Handheld Pastel Candy Cane ~1-2 \
Handheld Shopping Bags ℗ ~1-2 \
Handheld Snowman Mask ~1-2 \
Handheld Stocking ~1-2 \
Handheld Valentine Mirror ~1-2 \
Handmade Galactic Costume Wig buyable through NC Archives Fortune Cookie ~1-2 \
Handmade Paper Valentine Crown ~1-2 \
Handmade Valentine Arrows Garland ~1-2 \
Handmade Valentine Bot Costume ~1-2 \
Hands of Fiery Energy buyable through Patapult ~1-2 \
Handsewn Mushroom Hat ~1-2 \
Handsome Blue Jacket buyable ~1 \
Handsome Icicle Jacket ~1-2 \
Handsome Shirt and Tie buyable ~1 \
Handy Broom Station ~1-2 \
Handy Gadget Hat ~1-2 \
Handy Negg Enlarger ~4 \
Handy Neocola Serving Machine buyable through NC Archives Fortune Cookie ~1-2 \
Hanging Basket of Neggs Garland ~1-2 \
Hanging Baubles Tree ℗ ~5-6 \
Hanging Beads Garland ~1-2 \
Hanging Candles Garland ~1-2 \
Hanging Crystal Chandelier ~1-2 \
Hanging Flower Heart Wreath ~1 \
Hanging Flower Lamp buyable through NC Archives Fortune Cookie ~1-2 \
Hanging From The Tree Garland ~1-2 \
Hanging Holiday Candles ~1-2 \
Hanging Lanterns and Leaves Garland ~3-5 \
Hanging Mirror Garland ~1-2 \
Hanging Neggs Trellis ~1-2  \
Hanging Ornament Lights ~1-2 \
Hanging Out by the Fire Background ~1-2 \
Hanging Pastel Candle Garland buyable through NC Archives Fortune Cookie ~1-2 \
Hanging Pine Cone Bouquet  \
Hanging Potted Plants Garland ~1-2 \
Hanging Rainbow Garland ~1-2 \
Hanging Spring Pine Cone Bouquet ~1-2 \
Hanging Stained Glass Flower ~1-2 \
Hanging Vine Swing ~1-2 \
Hanging Winter Candle Garland ~8-12 \
Hanging Winter Swing ~1-2 \
Hannah and the Ice Caves Background buyable through NC Archives Fortune Cookie ~1-2 \
Hannah and the Ice Caves Collectors Coat ~5-6 \
Hannah and the Pirate Cave String Lights ~1-2 \
Hannah Key Quest Token ~10-11 \
Hannahs Collectors Dress ~4-6 \
Hannahs Dressing Room Background ~4-5 \
Hansos Collectors Wig ~2 \
Happy Chocolate Covered Strawberry buyable ~1 \
Happy Heart Chocolate Covered Pretzel ~3-4 \
Happy Holidays Sleeping Cap ~1-2 \
Happy Holidays Wrought Iron Fence ~1-2 \
Happy Holly Gift Wrap NT \
Happy New Year Clock Background ~2 \
Harp of the Emerald Eyrie ~1-2 \
Harvest Apple Foreground ~2-3 \
Harvest Apple Gift Box Mystery Capsule ~2-3 \
Harvest Feast Background ~3 \
Harvest Feast Foreground ~1-2 \
Harvest Frame ~3-4 \
Harvest Gift Box Mystery Capsule ~2-3 \
Harvest Leaf Wings ~1-2 \
Harvest Orange Jumper ~1-2  \
Haunted Asylum Mystery Capsule ~2-4 \
Haunted Ballroom Background ~1-2 \
Haunted Candy Floss ~2 \
Haunted Faire Background ~3 \
Haunted Floating Picture Frames Garland ~1-2 \
Haunted Goople Cleaver ~1-2 \
Haunted Graveyard Background ~4-6 \
Haunted Hijinks Menacing Mallet 1-Pack \
Haunted Hijinks Menacing Mallet 13-Pack \
Haunted Hijinks Menacing Mallet 5-Pack \
Haunted Hospital Corridor Background ~1-2 \
Haunted House Hat ~1-2 \
Haunted House Staff ~1-2 \
Haunted Kitchen Background ~1-2 \
Haunted Manor Background buyable through NC Archives Fortune Cookie ~2 \
Haunted Mansion Background ℗ ~12 \
Haunted Piano ~1-2 \
Haunted Pirate Ship Wheel ~1-2 \
Haunted Silhouette Window Background ~1-2 \
Haunted Sky Background ~5-6 \
Haunted Spices Garland ~1-2 \
Haunted Window Wings ~1-2 \
Haunted Woods Altador Cup Jersey ~1-2 \
Haunted Woods Altador Cup Locker Room Background ~1-2 \
Haunted Woods Altador Cup Team Spirit Banners ~1-2 \
Haunted Woods Autumn Background ~3-4 \
Haunted Woods Brain Tree Floor Tiles \
Haunted Woods Fence buyable ~1 \
Haunted Woods Fence 10-Bundle buyable ~1 \
Haunted Woods Gazebo Pit ℗  \
Haunted Woods JubJub Power Bounce Suitcase ~2-3 \
Haunted Woods JubJub Power Bounce Token 1-pack \
Haunted Woods JubJub Power Bounce Token 10-pack \
Haunted Woods JubJub Power Bounce Token 5-pack \
Haunted Woods Mystery Capsule ~8-12 \
Haunted Woods Room in a Bag buyable ~5 \
Haunted Woods Spooky Tree Wallpaper \
Haunted Woods Team Braided Wig ~1-2 \
Haunted Woods Team Crazy Wig ~1-2 \
Haunted Woods Team Cuffs ~1-2 \
Haunted Woods Team Face Makeup ~1-2 \
Haunted Woods Team Foam Finger ~2-3 \
Haunted Woods Team Glitter Face Paint ~1-2 \
Haunted Woods Team Hat ~2 \
Haunted Woods Team Jester Hat ~3 \
Haunted Woods Team Mask ~1-2 \
Haunted Woods Team Pom Pom ~1-2 \
Haunted Woods Team Road to the Cup Background ~1-2 \
Haunted Woods Team Scarf ~3 \
Haunted Woods Team Sport Shirt ~2 \
Haunted Woods Team Trousers and Cleats ~1-2 \
Haunted Woods Team Vuvuzela ~1-2 \
Haunted Woods Tree Lamp buyable ~1 \
Haunting Eclipse Moon ~1-2 \
Haunting Ghostkerchief ~3-4 \
Hazel Contacts buyable ~1 \
Head Bonk ~1-2 \
Headless Cape and Mysterious Box ~1-2 \
Healing Springs Collectors Wig ~8 \
Healing Springs Foreground ~12-15 \
Heart and Chain ~2 \
Heart and Crossbones Handheld Plushie ~5 \
Heart and Crossbones Sweetheart Gram NT \
Heart Balloon Arch ~1-2 \
Heart Beauty Mark ~1-2 \
Heart Bloomers ~1-2 \
Heart Bow Tie ~1-2 \
Heart Branch Vases ~1-2 \
Heart Broken Sweetheart Gram NT \
Heart Bullseye ~1-2 \
Heart Cherub Bow ~2-3 \
Heart Cloud Background ~1-2 \
Heart Dispenser Machine ~1-2 \
Heart Face Paint ~2 \
Heart Forehead Tattoo ~1-2 \
Heart Head Bonk ~1-2 \
Heart in Plain Sight ~1-2 \
Heart of the Forest ~6 \
Heart Pattern Velvet Dress ~1-2 \
Heart Pennant Banner ~1-2 \
Heart Shaped Fruit Tart buyable ~1 \
Heart Shaped Magnifying Glasses ~1-2 \
Heart Shower ~4-5 \
Heart Shrubbery Background Item ~1-2 \
Heart Sparkler Handheld ~1-2 \
Heart String Lights ~3-4 \
Heart Themed Album Skin NT \
Heart Thermal Shirt ~1-2 \
Heart Tipped Shoes buyable ~1 \
Heart Vest and Shirt ~1-2 \
Heart-fu Trousers ~1-2 \
Heartfelt Sweetheart Gram NT \
Heartfelt Tears Makeup ~2 \
Hearts and Stripes Wings ~1-2 \
Hearts in the Sky Background ~2-3 \
Hearts of Dread Sweetheart Gram NT \
Hearts on Fire Shower ~1-2 \
Hearts Thought Bubble ~1-2 \
Hearts Valentine Goodie Bag ~1-2 \
Heartsick Sweetheart Gram NT \
Hearty Bunch of Balloons ~1-2 \
Heavy Snowfall Shower ~1-2 \
Helpful Abominable Snowball ~1-2 \
Helpful Cleaning Robot Kiko ~1-2 \
Helpful Garden Gnomes Foreground buyable ~1 \
Here Lies Fluffy ~1-2 \
Hero of Neopia Background buyable ~1 \
Hero of Neopia Cape buyable ~1 \
Hero of Neopia Foreground buyable ~1 \
Hero of Neopia Gloves buyable ~4 \
Hero of Neopia Mask buyable ~1 \
Hero of Neopia Shirt buyable ~1 \
Hero of Neopia Trousers and Shoes buyable ~1 \
Herringbone Capelet ~1-2 \
Hidden Altador Dicing Tower Enchanted Compass ~4-5 \
Hidden Altador Gardeners Rest Enchanted Compass \
Hidden Altador Hall of Fountains Enchanted Compass \
Hidden Altador Isle of Yooyu Enchanted Compass ~4-5 \
Hidden Among the Grass Foreground ~2-4 \
Hidden Gadget Jacket ~1-2 \
Hidden Garden Door Background ~1-2 \
Hidden Library Corner Background buyable ~1 \
Hidden Tower Background ~1-2 \
Hieroglyphic Dictionary \
High Collared Black Dress ~1-2 \
High Collared Lace Cape ~1-2 \
Highlighted Fabric Skirt ~1-2 \
Highlighted Flower Garland ~1-2 \
Hilltop Mushroom Background ~3 \
Hip White Sunglasses ~1-2 \
Hobby Uni ~1-2 \
Holiday Bell Garland buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Bell Hat and Wig ~1-2 \
Holiday Bell Shirt ~1-2 \
Holiday Bell Wreath Garland ~1-2 \
Holiday Bells Goodie Bag ~1-2 \
Holiday Berryflower Wings ~1-2 \
Holiday Bob Wig ~1-2 \
Holiday Breeches ~1-2 \
Holiday Bumbluz Light Wings ~1-2 \
Holiday Candy Cane Mystery Capsule ~6 \
Holiday Candy Headbonk ~1-2 \
Holiday Celebration Feather Headband buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Cookie Cutter Garland ~1-2 \
Holiday Decorated Tombstones ~1-2  \
Holiday Fireplace Background ~25-30 \
Holiday Flower Crochet Hat ~1-2 \
Holiday Flower Mystery Capsule ~4-6 \
Holiday frame ~1-2 \
Holiday Front Porch Background ~2-3 \
Holiday Gift Bag Garland ~1-2 \
Holiday Gift Box Mystery Capsule ℗  \
Holiday Goodie Bag ~2-3 \
Holiday Grass Skirt ~1-2 \
Holiday Greeting Card Garland ~1-2 \
Holiday Hair Bow ~1-2 \
Holiday Hat Tree ~1-2 \
Holiday Hat Wind Chimes buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Headwreath ~1-2 \
Holiday Helper Coat with Tails ~2 \
Holiday Helper Hat buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Helper Shoes ~1-2 \
Holiday Ice Skates ~1-2 \
Holiday Lamp Wreath Garland ~1-2 \
Holiday Light Beanie ~1-2 \
Holiday Light Contacts ~2-4 \
Holiday Light Tiara ~1-2 \
Holiday Lightmite Lamp ~1-2 \
Holiday Lights Purse ~1-2 \
Holiday Loop Staff ~1-2 \
Holiday Mohawk ~1-2 \
Holiday Mystery Capsule [rare collectible : Depends on trader] ~800+ \
Holiday Ornament Earrings ~1-2 \
Holiday Ornament Garland ~1-2 \
Holiday Ornament Mask ~1-2 \
Holiday Ornament Wreath buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Palm Tree Umbrella ~1-2 \
Holiday Party Background ~1-2 \
Holiday Party Bow Wig ~1-2 \
Holiday Party Dress ~2 \
Holiday Patchwork Wings ~2 \
Holiday Petpet Background Carousel ~1-2 \
Holiday Petpet Topiaries ~2-3 \
Holiday Pine Cone Tree buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Punch Bowl on a Table ~1-2 \
Holiday Ribbon Hat buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Ruffle Skirt with Baubles ~1-2 \
Holiday Scrap Skirt ~1-2 \
Holiday Secret Meepit Stach Plan 1-Pack ~1-2 \
Holiday Sheet Music Garland buyable through Shenanigifts ~1-2 \
Holiday Shenanigifts Invitation 1-Pack ~1-2 \
Holiday Shopping Mystery Capsule ~2 \
Holiday Sled with Packages ~1-2 \
Holiday Snowglobe Mystery Capsule [rare collectible : Depends on trader] ~150-200 \
Holiday Sparkle Shower ~2 \
Holiday Stage and Steps ~1-2 \
Holiday Stained Glass Dress ~1-2 \
Holiday Staircase Background ~1-2 \
Holiday Star Garland ~1-2 \
Holiday Star Ladder Trinket ~1-2 \
Holiday String Light Mystery Capsule ~4-5 \
Holiday String Lights ~3 \
Holiday String Lights Face Paint ~1-2 \
Holiday Striped Dress ~1-2 \
Holiday Striped Hat and Wig ~1-2 \
Holiday Striped Mystery Capsule ~2 \
Holiday Striped Pajamas ~1-2 \
Holiday Striped Path Background ~1-2 \
Holiday Striped Shoes ~1-2 \
Holiday Striped Wings ~1-2 \
Holiday Tie and Dress Shirt ~1-2 \
Holiday Tights and Boots ~1-2 \
Holiday Town Background ~1-2 \
Holiday Tree Parasol ~1-2 \
Holiday Tree Ski Stocks buyable through NC Archives Fortune Cookie ~1-2 \
Holiday Tree Windchime ~1-2 \
Holiday Trousers with Suspenders ~1-2 \
Holiday Tuxedo Top ~1-2 \
Holiday Window Display Foreground ~1-2 \
Holiday Windowsill Foreground ~1-2 \
Holiday Work Bench ~1-2 \
Holiday Workshop Garland ~1-2 \
Hollowed Wood Planter Foreground buyable ~1 \
Holly and Vine Wig ~2 \
Holly Face Paint ~2 \
Holly Leaf Apron ~1-2 \
Holly Tree Goodie Bag ~1-2 \
Holly Wand ~2-3 \
Holly Wig ~1-2 \
Holographic Dr. Sloth ~8 \
Home Sweet Spyder Web ~1-2 \
Homemade Lavender Faerie Wings ~1-2 \
Homespun Heart Dress ~1-2 \
Hood with Ears ~1-2 \
Hooded Faellie Baby Blanket buyable ~1 \
Hooded Noil Coat ~1-2 \
Hoodie Sweater with Cybunny Ears buyable through NC Archives Fortune Cookie ~2 \
Hook Line and Bait Garland ~1-2 \
Hopso Handheld Plushie ~1-2 \
Horned Crown and Wig ~1-2 \
Horned Wig of Darkness ~1-2 \
Hot Air Balloon Adventure Background ~55-60 \
Hot Air Balloon and Cloud Garland ~1-2 \
Hot Air Birthday Balloon ~2 \
Hot Air Negg Balloon ~1-2 \
Hot Cup of Borovan ~1-2 \
Hot Head Fire Wig ~1-2 \
Hot Hot Purple Flame Shirt ~1-2 \
Hot off the Presses Garland buyable through NC Archives Fortune Cookie ~1-2 \
Hot Springs buyable ~1 \
Hothouse Flower Garland ~1-2 \
Hourglass With Falling Sand buyable through NC Archives Fortune Cookie ~1-2 \
House of Flowers Background ~1-2 \
Hovering Broom ~1-2 \
Hovering Chair Background ~5 \
Hubrid Nox Collectors Cape ~7-8 \
Huggable Happiness Faerie Plushie ~1-2 \
Hungry Hungry Meepit ~1-2 \
Hunting Cabin Sofa ~6 \
Hypnotic Purple Swirl Contacts ~2 \
Hypnotic Swirling Hearts ~1-2 \
I \
 \
I Heart Dr. Sloth Thought Bubble ~20 \
I Heart NC Flag buyable ~1 \
I Heart NC Skirt ~1-2 \
I Splat Sloth Thought Bubble ~18-20 \
I Warf You ~1-2 \
Icarus Wings ~1-2 \
Ice Block Wall Background ~1-2 \
Ice Candy Cane Key ~1-2 \
Ice Cream Cone Balloons ~1-2 \
Ice Cream Cone Flowers ~1-2 \
Ice Cream Cone Pillars ~1-2 \
Ice Cream Cone String Lights ~1-2 \
Ice Cream Cone Sword ~1-2 \
Ice Cream Cone Wand ~1-2 \
Ice Cream Scoop Wig ~1-2 \
Ice Cream Shower buyable through NC Archives Fortune Cookie ~1-2 \
Ice Crown ~1-2 \
Ice Crystal Bouquet ~1-2 \
Ice Crystal Shard Shower ~1-2 \
Ice Crystal Shop Collectors Background ~1-2  \
Ice Crystal Wings ~1-2 \
Ice Cube Necklace ~1-2 \
Ice Fishing Pole ~1-2 \
Ice Fortress Foreground ~1-2 \
Ice Parasol buyable through NC Archives Fortune Cookie ~1-2 \
Ice Pop Foreground ~1-2 \
Ice Queen Gown ~1-2 \
Ice Rink Background ~1-2 \
Ice Skates Garland ~1-2 \
Ice Skating Bruce Toy ~1-2 \
Iced Fruit Kabobs ~2-3+ \
Icicle Beard ~1-2 \
Icicle Mohawk ~1-2 \
Icicle Staff ~1-2 \
Icicle Wings buyable through NC Archives Fortune Cookie ~1-2 \
Icy Armour ~1-2 \
Icy Blue Eyes ~3-5 \
Icy Blue Wax Lips ~1-2 \
Icy Boots ~1-2 \
Icy Cavern Background ~1-2 \
Icy Eye Shadow ~3 \
Icy Helmet ~1-2 \
Icy Igloo Wig ~1-2 \
Icy Ombre Shield buyable through Wonderclaw ~1-2 \
Icy Ombre Wall Background buyable through Wonderclaw ~1-2 \
Icy Sword ℗ ~1-2 \
Icy Terror Mountain Bed buyable ~1-2 \
Icy Terror Mountain Floor Tiles ~2-4 \
Icy Terror Mountain Lamp buyable ~1 \
Icy Terror Mountain Rug ~1-2 \
Igloo Garage Sale Background ~1-2 \
Igneots Flaming Gloves ~1-2 \
Ilere Collectors Wings ~4-5 \
Ileres Collectors Wig buyable through July 31, 2016 ~1 \
Illuminant Head Lantern ~2 \
Illusen Curtains ~1-2 \
Illusens Collectors Bow ~4-6 \
Illusens Collectors Contacts ~2-3 \
Illusionist NC Fortune Cookie ~1-2 \
Impending Darkness Mystery Capsule ~2-3 \
Impressive Book Arch ~1-2 \
Impressive Ceremonial Cape ~1-2 \
Impressive Flower Shield ~1-2 \
Impressive Snow Sculpture Background ~1-2 \
Impressive Tiki Pillars ~1-2 \
Improved Kari Poster ~1-2 \
Inconspicuous Foliage ~1-2 \
Inconspicuous Gumball Machine ~12 \
Indigo Striped Pullover buyable ~1 \
Inescapable Cage of Crayons ~1-2 \
Infested Iron Lamp ~1-2 \
Inflatable Dr. Sloth ~4 \
Inflatable Holiday Tree ~1-2 \
Inflatable Kiko Lake Bed buyable ~1-2 \
Inflatable Kiko Lake Sofa buyable ~1 \
Ingenious Flying Contraption Wings ~1-2 \
Initiate Wizard Cape ~3-4 \
Ink Moustache buyable through NC Archives Fortune Cookie ~1-2 \
Ink Splat Wig ~2 \
Ink Splattered Skirt buyable through Patapult ~1-2 \
Inky Marbled T Shirt buyable through 9th Birthday Night Wish Candle  \
Inner Clockwork Face Paint buyable ~1 \
Inside a Balloon ~1-2 \
Inside a Clock Tower Background ~1-2 \
Inside a Mystery Capsule Background ~1-2 \
Inside a Space Craft Background ~1-2 \
Inside an Hourglass Foreground ~1-2 \
Inside an Ornament Background ~1-2 \
Inside Circus Tent Background ~2 \
Inside the Artefact Frame ~1-2 \
Inside the Blimp Background ~1-2 \
Inside the Food Club Background ~1-2 \
Insiders Colosseum Club Pass ~3-4 \
Insiders Gala Pass ~3-4 \
Insiders Garden Reception Pass ~3-4 \
Insiders Stadium Tour Pass ~3-4 \
Interstellar Dress ~1-2 \
Into the Glittering Forest Background ~2-3 \
Intricate Faerieland Rug ~3-4 \
Intricate Heart Sculpture ~1-2 \
Intricate White Markings ~1-2 \
Invasion of Neopia Commemorative Background ~3-4 \
Inventor Wings ~2-3 \
Iridescent Bells Garland ~1-2 \
Iridescent Light Dress ~2-3 \
Iridescent Scales Skirt ~1-2 \
Iridescent Sea Monster Wig ~2 \
Iron Holiday Mailbox \
Ironed Lace Wand ~1-2 \
Irradiated Sky Background ~2-3 \
Isca Handheld Plushie ~1-2 \
Isca Key Quest Token [Without Isca Wig] ~10-12 \
Isca Wig ~35-45 \
Iscas Dress ~6-8 \
Island Bruce Key Quest Token buyable ~1-2 \
Island Celebration Arm Wraps ~4-5  \
Island Chef Academy Counter ~4 \
Island Chief Cape ~1-2 \
Island Feast Dress ~1-2 \
Island Flame Baton ~1-2 \
Island Holiday Background ~1-2 \
Island Holiday Mystery Capsule ~2-3 \
Island JubJub Key Quest Token buyable ~1-2 \
Island Kacheek Key Quest Token buyable ~1-2 \
Island of Buried Treasure Background ~4-5  \
Island Ona Handheld Plushie ~1-2 \
Island Print Skirt ~1-2 \
Islandberry Smiley Snack ~2 \
Isle of Yooyu Hidden Cave Background ~2 \
It Took Me 7 Hours To Animate This Foreground ~1-2 \
Items of Spring Garland ~1-2 \
Its Raining Puppyblew and Kadoatie Plushies Shower ~1-2 \
Ivory Tea Dress ~2 \
J \
 \
Jack of All Decks Foreground ~1-2 \
Jack of All Decks Foreground and Background ~1-2 \
Jack-O-Lantern Chandelier ~1-2 \
Jack-o-Lantern House Background ~1-2 \
Jack-O-Lantern Tree ~3-5 \
Jacket with Polkadot Scarf ~1-2 \
Jagged Glass Archway Background ~1-2 \
Jagged Jewel Crown ~1-2 \
Jail Bars Foreground ~2 \
Jail of Hearts Foreground ~1-2 \
Jail Shirt buyable through NC Archives Fortune Cookie ~3-4 \
Jar of Beads buyable ~1 \
Jar of Buttons buyable ~1 \
Jar of Cotton buyable ~1 \
Jar of Fabric Flowers buyable ~1 \
Jar of Lightmites ~1-2 \
Jars of Easter Goodies Foreground ~1-2 \
Jars of Magic Foreground buyable through Dark Sorcerer Mystery Capsule ℗ ~1-2 \
Jaunty Plaid Hat ~1-2 \
Jazan and Amira Wedding Arbour ~1-2 \
Jazans Collectors Throne Room Background ~2 \
Jelly Bean Dress ~1-2 \
Jelly Garden Gate Foreground ~1-2 \
Jellyfish Hat ~1-2 \
Jellyfish Umbrella ~1-2 \
Jeran Collectors Sword ℗ ~6 \
Jerans Ceremonial Armour Top ~1-2 \
Jerdanas Collectors Skirt ~2-3 \
Jester Shirt ~1-2 \
Jewel Tone Faerie Background buyable through Wonderclaw ~2 \
Jewel Tone Side Tree buyable through Wonderclaw ~1-2 \
Jewel Toned Dress buyable through Wonderclaw ~1-2 \
Jewel Toned Forest Background buyable through Wonderclaw ~2 \
Jewel Toned Glass Lights buyable through Wonderclaw ~1-2 \
Jewel Toned Ombre Wig buyable through Wonderclaw ~1-2 \
Jewel Toned Suit Jacket buyable through Wonderclaw ~1-2 \
Jewel Toned Tea Party buyable through Wonderclaw ~1-2 \
Jewel Toned Tutu buyable through Wonderclaw ~1-2 \
Jewel Toned Vanity buyable through Wonderclaw ~1-2 \
Jewel Toned Vases Foreground buyable through Wonderclaw ~1-2 \
Jewel Toned Wig buyable through Wonderclaw ~1-2 \
Jewel-Encrusted Sword buyable through Wonderclaw ~1-2 \
Jeweled Negg Earrings buyable through NC Archives Fortune Cookie ~1-2 \
Jeweled Skull Wand buyable through Wonderclaw ~1-2 \
Jeweled Tiara Shower ~1-2 \
Jewelled Angelpuss Purse ~1-2 \
Jewelled Bangle Bracelets buyable through Wonderclaw ~1-2 \
Jewelled Black Lace Shirt ~1-2 \
Jewelled Chain Wig buyable through Patapult ~1-2 \
Jewelled Damask Necklace ~1-2 \
Jewelled Green Shoes buyable through Green Grundo Key Quest Token ~1 \
Jewelled Gypsy Sandals ~2 \
Jewelled Mushroom Umbrella ~1-2 \
Jewelled Petpet Mask ~1-2 \
Jewelled Pink Spyderweb Garland ~2-3 \
Jewelled Scarab String Lights ~1-2 \
Jewelled Shamrock Sceptre ~1-2 \
Jewelled Shoulder Armour ~1-2 \
Jewelled Silver Wings ~20 \
Jewelled Spyder Necklace ~1-2 \
Jewelled Staff buyable ~1 \
Jewelled Sunglasses buyable through Shenanigifts ~1-2 \
Jewelled Winter Hat and Wig buyable ~1 \
Jhudoras Bodyguards Collectors Bonus ℗ ~35-40 \
Jhudoras Fashion Line Mystery Capsule ~2-3 \
Jhuidah Wig ~2 \
Jingle Bell Stocking Cape ~1-2 \
Jinjah Gift Box Mystery Capsule ~2-4 \
Jinjah Handheld Plushie ~1-2 \
Jinjah Hoodie ~1-2 \
Jinjah Necklace ~1-2 \
Jinjah String Lights ~2-3 \
Jordies Adventure Hat ~4-6 \
Journalist Hat buyable through NC Archives Fortune Cookie ~1-2 \
Journey Through Terror Mountain Panoramic Background 1 of 5 ~1-2 \
Journey Through Terror Mountain Panoramic Background 2 of 5 ~1-2 \
Journey Through Terror Mountain Panoramic Background 3 of 5 ~1-2 \
Journey Through Terror Mountain Panoramic Background 4 of 5 ~1-2 \
Journey Through Terror Mountain Panoramic Background 5 of 5 ~1-2 \
Jovial Holiday Staff ~1-2 \
Jowlard Goodie Bag ~1-2 \
JubJub Power Bounce Plushie ~4-6 \
JubJub Power Bounce Token 1-Pack ~2-4 \
JubJub Power Bounce Token 10-Pack \
JubJub Power Bounce Token 5-Pack \
Judge Hogs Collectors Wig and Cowl ~1-2 \
Jumpin Gem Heist Background ~3-5 \
Jumpin Gem Heist Garland buyable through NC Archives Fortune Cookie ~1-2 \
Jumping Babaa Garland buyable through NC Archives Fortune Cookie ~1-2 \
Jungle Green Gown ~1-2 \
Juppie Smiley Snack buyable ~1 \
Just Say No To Gobbler ~1-2 \
K \
 \
Kacheek in Cybunny Costume Plushie buyable through NC Archives Fortune Cookie ~1-2 \
Kacheek Lamp ~2-3 \
Kacheek Pathway Foreground ~1-2 \
Kacheek Scarecrow ~1-2 \
Kaleidoscope Contacts ~1-2 \
Kanrik Collectors Weapons Belt ~1-2 \
Kanriks Collectors Cloak and Cape ~3-4 \
Kanriks Fashion Line Mystery Capsule ~2 \
Kapow Effect buyable ~1 \
Kapow Magic Elixir buyable ~1 \
Kass Basher Flag buyable through NC Archives Fortune Cookie ~1-2 \
Kass Collectors Armour ~5 \
Kass Pinata buyable through NC Archives Fortune Cookie ~1-2 \
Kau Defender Collectors Belt and Tights ~1-2 \
Kau Fortune Tellers Collectors Blouse ~2 \
Kauvara Costume Hat ~1-2 \
Kauvara Key Quest Token buyable ~2 \
Kauvara Shirt & Cape buyable through Kauvara Key Quest Token ~2 \
Kazeriu Cupcakes Foreground ~3-5 \
Kelp Forest Path Background ~1-2 \
Key to the Heart Valentine Garland ~1-2 \
Khaki Roll-Up Trousers ~1-2 \
Khaki Shorts with a Belt ~1-2 \
Khaki Trousers with Cuffs buyable ~1 \
Kiko Hammer buyable through NC Archives Fortune Cookie ~1-2 \
Kiko Lake Altador Cup Jersey ~1-2 \
Kiko Lake Altador Cup Locker Room Background ~1-2 \
Kiko Lake Altador Cup Team Spirit Banners ~1-2 \
Kiko Lake Anteroom \
Kiko Lake Door \
Kiko Lake Fence ~1-2 \
Kiko Lake Gazebo \
Kiko Lake Room in a Bag buyable ~5 \
Kiko Lake Team Braided Wig ~1-2 \
Kiko Lake Team Crazy Wig ~1-2 \
Kiko Lake Team Cuffs ~1-2 \
Kiko Lake Team Face Makeup ~1-2 \
Kiko Lake Team Foam Finger ~1-2 \
Kiko Lake Team Glitter Face Paint ~1-2 \
Kiko Lake Team Hat \
Kiko Lake Team Jester Hat ~3 \
Kiko Lake Team Mask ~1-2 \
Kiko Lake Team Pom Pom ~1-2 \
Kiko Lake Team Road to the Cup Background ~1-2 \
Kiko Lake Team Scarf ~3 \
Kiko Lake Team Sport Shirt \
Kiko Lake Team Trousers and Cleats ~1-2 \
Kiko Lake Team Vuvuzela ~1-2 \
Kiko Lake Water Floor Tiles \
Kiko Lake Window \
Kiko Match Stringlights buyable through NC Archives Fortune Cookie ~1-2 \
King Altador Stone Fountain ~1-2 \
King Altador Tribute Cape ~1-2 \
King Altadors Collectors Throne ~2 \
King Altadors Golden Noil Throne ~8 \
King Hagans Collectors Shirt ~3-5 \
King Kelpbeards Collectable Orb ~7-9 \
King of Green Boots ~3-4 \
King of Green Clover Doublet ~1-2 \
King of Green Gloves ~2 \
King of Green Hat ~1-2 \
King of Green Staff ~1-2 \
King of Neopia Background ~1-2 \
King Roo Handheld Plushie ~1-2 \
King Roos Daily Dare Staff ~1-2 \
King Skarl Is Not Amused Map NT \
King Skarl Throne Background ~4-5 \
Kings Cape ~1-2 \
Kings Crown and Wig ~1-2 \
Kiss of Hearts ~1-2 \
Kiss on the Cheek Facepaint ~1-2 \
Kite Wings ~1-2 \
Knife Throwing Board ~1-2 \
Knit Flower Scarf ~1-2 \
Knitted Cyodrake Hat and Wig buyable through Shenanigifts ~1-2 \
Knitted Emerald Green Sweater ~1-2 \
Knitted Flower Gloves ~1-2 \
Knitted Flower Hairband and Wig ~1-2 \
Knitted Grey Caplet ~1-2 \
Knitted Spectacles ~1-2 \
Knotted String Lights ~2-4 \
Knotted Yarn Garland ~1-2 \
Kookith Necklace ~1-2 \
Korbat Tattoo NT buyable ~1 \
Korbats in the Meowclops Goodie Bag ~4 \
Krawk Island Adventure Sword ~3 \
Krawk Island Altador Cup Jersey ~1-2 \
Krawk Island Altador Cup Locker Room Background ~1-2 \
Krawk Island Altador Cup Team Spirit Banners ~1-2 \
Krawk Island Crokabeks Nest Lair \
Krawk Island Door \
Krawk Island Fence buyable ~1 \
Krawk Island Fence 10-Bundle \
Krawk Island Golden Skull Floor Tiles \
Krawk Island Krawk Cannon \
Krawk Island Mystery Capsule ~11-15 \
Krawk Island Room in a Bag buyable ~5 \
Krawk Island Ship Lamp buyable ~1 \
Krawk Island Skull Bed buyable ~1-2 \
Krawk Island Skull Rug \
Krawk Island Sofa buyable ~1 \
Krawk Island Team Braided Wig ~1-2 \
Krawk Island Team Crazy Wig ~1-2 \
Krawk Island Team Cuffs ~1-2 \
Krawk Island Team Face Makeup ~1-2 \
Krawk Island Team Foam Finger ~1-2 \
Krawk Island Team Glitter Face Paint ~1-2 \
Krawk Island Team Hat ~1-2 \
Krawk Island Team Jester Hat ~1-2 \
Krawk Island Team Mask ~1-2 \
Krawk Island Team Pom Pom ~1-2 \
Krawk Island Team Road to the Cup Background ~1-2 \
Krawk Island Team Scarf ~1-2 \
Krawk Island Team Sport Shirt ~1-2 \
Krawk Island Team Trousers and Cleats ~1-2 \
Krawk Island Team Vuvuzela ~1-2 \
Krawk Island Window \
Krawk Island Wooden Plank Desk buyable ~1 \
Krawley Contacts ℗ ~4-6 \
Kreludan Boots ~1-2 \
Kreludan Scenery Background ~13-20 \
Kreludite Kreludor Floor Tiles \
Kreludor Altador Cup Jersey ~1-2 \
Kreludor Altador Cup Locker Room Background ~1-2 \
Kreludor Altador Cup Team Spirit Banners ~1-2 \
Kreludor Bunker Background ~4-5 \
Kreludor Cave Ice Spikes ~5 \
Kreludor Crater Foreground ~4-5 \
Kreludor Fence buyable ~1 \
Kreludor Fence 10-Bundle buyable ~1 \
Kreludor Jar Lamp buyable ~1 \
Kreludor Room in a Bag buyable ~5 \
Kreludor Team Braided Wig ~1-2 \
Kreludor Team Crazy Wig ~1-2 \
Kreludor Team Cuffs ~1-2 \
Kreludor Team Face Makeup ~1-2 \
Kreludor Team Foam Finger ~2-4 \
Kreludor Team Glitter Face Paint ~1-2 \
Kreludor Team Hat ~2 \
Kreludor Team Jester Hat ~3 \
Kreludor Team Mask ~1-2 \
Kreludor Team Pom Pom ~1-2 \
Kreludor Team Road to the Cup Background ~1-2 \
Kreludor Team Scarf ~6-7 \
Kreludor Team Sport Shirt ~2 \
Kreludor Team Trousers and Cleats ~1-2 \
Kreludor Team Vuvuzela ~2 \
Kreludor Telescope \
L \
 \
Lab Jellies Shower buyable through NC Archives Fortune Cookie ~1-2 \
Lab Ray Fortune Cookie buyable ~1 \
Lab Ray Thought Bubble ~10-15 \
Laboratory Ray Background ~2 \
Labratory Background buyable through NC Archives Fortune Cookie ~1-2 \
Lace and Denim Shorts ~2-3 \
Lace Curtain Garland ℗ ~2-4 \
Lace Flower Dress buyable ~1 \
Lace Headband ~1-2 \
Lace Headband Wig ~1-2 \
Lace Palace Background ~2 \
Lace Pirate Eye Patch ~2 \
Lace Shoulder Armour ~1-2 \
Lace Trimmed Bathing Suit buyable ~1 \
Lace Trimmed Ivory Blouse ~1-2 \
Lace Tutu and Tights ~1-2 \
Laced-up Spring Shoes NT buyable ~1 \
Lacy Cobweb Wings ~1-2 \
Lacy Skeleton Gloves buyable through Wonderclaw ~1-2 \
Lacy White Summer Dress ~1-2 \
Lady Blurg Antennae Wig ~1-2 \
Lady Blurg Background ~1-2 \
Lady Blurg Dress ~1-2 \
Lady Blurg Staff ~3-4 \
Lady Blurg Wings ~2 \
Lady Frostbites Collectors Wig ~2 \
Ladyblurg Lace Wings ~1-2 \
Lair Beast Wings ~1-2 \
Lair of the Beast Background buyable through NC Archives Fortune Cookie ~1-2 \
Lamp Market Background buyable through Shenanigifts ~2-3 \
Lamplit Branch Garland ~1-2 \
Lampwycks Collectors Fantastic Lights Garland ~1-2 \
Land of Candy Background ~2 \
Land of Gifts Background ~1-2 \
Lanie and Lillie Handheld Plushie Set ~1-2 \
Lantern Lined Path ~1-2 \
Large Candelabras Background Item buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Large Cherry Blossom Tree ~5-6 \
Large Gold Arm Bracers ~2 \
Large Pink Flower Hat buyable through NC Archives Fortune Cookie ~1-2 \
Large Straw Umbrella ~1-2 \
Larnikin Chocolate Ink Dropper NT \
Larnikin Faerie Ink Dropper NT \
Larnikin Ink Bottle NT \
Larnikin Pirate Ink Dropper NT \
Larnikin Snow Ink Dropper NT \
Laser Beam Crossfire ~1-2 \
Last Day of Summer Bonfire Background ~1-2 \
Laurel Leaf Belt ~4 \
Laurel Wreath Shower ~1-2 \
Laurel Wreath Wig ~1-2 \
Lava Lair Background ~1-2 \
Lavender Chandelier Earrings ~1-2 \
Lavender Faerietale Dress ~1-2 \
Lavender Highlights Ponytail Wig ~1-2 \
Lavender Lace Jacket ~2-3 \
Lavender Lace Skirt ~2-3 \
Lavender Negg Necklace buyable through NC Archives Fortune Cookie ~1-2 \
Lavender Trellis Background ~2-3 \
Lavender Tulle Dress ~2 \
Lawyerbot Briefcase ~3-4 \
Lawyerbot Head ~2 \
Lawyerbot Top ~1-2 \
Lawyerbot Trousers ~1-2 \
Lawyerbots Office Background ~1-2 \
Layered Autumn Leaf Dress ~2 \
Layered Blue Faerie Skirt ~1-2 \
Layered Gothic Wig ~1-2 \
Layered Green Faerie Skirt ~1-2 \
Layered Gypsy Skirt ~1-2 \
Layered Jelly Skirt ~1-2 \
Layered Moltaran Skirt ~1-2 \
Layered Orange Wig buyable through Orange Kougra Key Quest Token ~1 \
Layered Pastel Wig ~2 \
Layered Pendant Necklaces buyable through Shenanigifts ~1-2 \
Layered Pirate Dress ~1-2 \
Layered Purple Faerie Skirt ~1-2 \
Layered Red Faerie Skirt ~1-2 \
Layered Yellow Faerie Skirt ~1-2 \
Leafy Forest Jacket ~1-2 \
Leafy Green Cape ℗ ~1-2 \
Leafy Green Tree buyable through Green Kau Key Quest Token ~1 \
Leafy Headdress ~1-2 \
Leafy Pinwheel ~1-2 \
Leafy Seedpod Cap and Wig ~1-2 \
Leafy Skirt ~1-2 \
Leafy Vest ~1-2 \
Leafy Wooden Helmet ~1-2 \
Leather Leaf Mask ~1-2 \
Lemon Lime Wings ~1-2 \
Lemonade Stand Foreground ~1-2 \
Lemonade Stand Table ~1-2 \
Lenny Conundrum Wizard Collectors Wand ℗ ~7-9 \
Lifeguard Flipflops ~1-2 \
Lifeguard Life Ring ~4-5 \
Lifeguard Shirt ~1-2 \
Lifeguard Station ~1-2 \
Lifeguard Sun Glasses ~1-2 \
Lifeguard Swim Trunks ~1-2 \
Lifeguard Visor ~1-2 \
Lifesaver Kiko Lake Wallpaper \
Light Blazer ~1-2 \
Light Damask Markings ~3-4 \
Light Faerie Bath Tub ~6 \
Light Faerie Collectors Orb ~3 \
Light Purple Shag Rug ~1-2 \
Light Shower Garland ~4-5 \
Light Shower Gift Box Mystery Capsule ~2 \
Light Up Beanie and Short Wig ~1-2 \
Lighted Autumn Staircase Background ~1-2 \
Lighted Candle Logs Foreground buyable ~1 \
Lighted Chiffon Curtains ~1-2 \
Lighted Columns Foreground ~1-2 \
Lighted Faerie Staff ~1-2 \
Lighted Globe Garland buyable through Patapult ~1-2 \
Lighted Gothic Tree ~2 \
Lighted Gourd Staff ~1-2 \
Lighted Hillside Background buyable ~1 \
Lighted Holiday Foreground ℗ ~4-5 \
Lighted Holiday Gazebo ~1-2 \
Lighted Holiday Snowglobe ~2 \
Lighted Holiday Staff ~1-2 \
Lighted Jar Garland ~1-2 \
Lighted Lace Jars ~1-2 \
Lighted Lamp Fence Foreground ~1-2 \
Lighted Nest Background ~1-2 \
Lighted Palm Tree ~1-2 \
Lighted Pastel Sweater ~1-2 \
Lighted Plastic Fir ~2-4 \
Lighted Rainbow Branch Garland ~3-4 \
Lighted Raindorf Antlers ~1-2 \
Lighted Rose Foreground ~1-2 \
Lighted Sand Castle Background ~1-2 \
Lighted Side Tree ~1-2 \
Lighted Spring Dress ℗ ~1-2 \
Lighted Spring Gazebo ~1-2 \
Lighted Teacup Garland ~1-2 \
Lighted Tree of Neggs ~1-2 \
Lighted Tree Wig ~1-2 \
Lightmite Background buyable ~1 \
Lightmite Shower ~3-4 \
Lightmite Wings Face Paint ~1-2 \
Lightning Bolt Dress ~2 \
Lightning Bolt Fence ~1-2 \
Lightning Lenny Collectors Boots ~1-2 \
Lightning Trousers ~1-2 \
Lights and Hearts Garland buyable ~1 \
Lil Frankie Handheld Plushie ~1-2 \
Lily Pad Flower Dress ~1-2 \
Lily Pad Flower Hat ~1-2 \
Lily Pad Umbrella ~1-2 \
Lily Pad Wig ~1-2 \
Lily Wig with Hat ~1-2 \
Limited Edition Christmas Bruce Key Quest Token ~2-3 \
Limited Edition Christmas Quiggle Key Quest Token ~2-3 \
Limited Edition Christmas Wocky Key Quest Token ~2-4 \
Limited Edition Gold Aisha Key Quest Token [Without Golden Scattered Light Garland] ~2-3 \
Limited Edition Gold Blumaroo Key Quest Token ~2-3 \
Limited Edition Gold Gelert Key Quest Token [Without Ornate Gold Cape] ~2-3 \
Limited Edition Gold Kyrii Key Quest Token ~2-3 \
Limited Edition Gold Usul Key Quest Token ~2-4 \
Limited Edition Halloween Acara Key Quest Token ~2-4 \
Limited Edition Halloween JubJub Key Quest Token ~2-3 \
Limited Edition Halloween Kacheek Key Quest Token ~2-3 \
Limited Edition Silver Aisha Key Quest Token ~2-3 \
Limited Edition Silver Cybunny Key Quest Token ~2-3 \
Limited Edition Silver Gelert Key Quest Token [Without Sweet Silver Violin] ~2-3 \
Limited Edition Silver Lupe Key Quest Token ~2-3 \
Limited Edition Silver Poogle Key Quest Token [Without Silver Potted Rose Foreground] ~2-3 \
Limited Edition Strawberry JubJub Key Quest Token ~2-3 \
Limited Edition Strawberry Poogle Key Quest Token \
Limited Edition Strawberry Usul Key Quest Token ~2-4 \
Limited Edition- Holiday Star String Lights ~4-6 \
Limited Edition- Holiday String Lights Wig ℗ ~7-12 \
Lishas Darigan Robes ℗ ~2-4 \
Lit Autumn Twine Orb ~1-2 \
Lit Fabric Flowers Foreground ~1-2  \
Little Babaa Shepherdess Babaa Foreground ~2 \
Little Babaa Shepherdess Background ~1-2 \
Little Babaa Shepherdess Crop ~3-4 \
Little Babaa Shepherdess Dress ~1-2 \
Little Babaa Shepherdess Shoes ~1-2  \
Little Babaa Shepherdess Wig with Bonnet ~1-2 \
Little Red Riding Hood Cape ~1-2 \
Lively Holiday Moustache \
Living in Watermelon Foreground and Background ~1-2 \
Living Nightmares Mystery Capsule ~2-3 \
Long Baby Girl Wig ~2 \
Long Black Wig with Bangs ~1-2 \
Long Braids Wig ~1-2 \
Long Brown Autumn Wig ~2 \
Long Charming Grey Wig ~3-5 \
Long Gemstone Wig ~1-2 \
Long Red Evening Gown ~1-2 \
Long Shiny Red Wig ~1-2 \
Long Striped Sleeping Cap ~1-2 \
Long Summer Dress ℗ ~3 \
Looking Sharp Mystery Capsule ~2 \
Lookout Tower NT \
Loose Updo Wig ~2-3  \
Loosely Braided Wig with Flowers ~2-4  \
Loosely Curled Wig ~2 \
Lord Darigan Collectors Mask ~1-2 \
Lost Desert Altador Cup Jersey ~1-2 \
Lost Desert Altador Cup Locker Room Background ~1-2 \
Lost Desert Altador Cup Team Spirit Banners ~1-2 \
Lost Desert Frame ~25 \
Lost Desert Mystery Capsule ~8-10 \
Lost Desert Oasis Background buyable ~1 \
Lost Desert Palace View Background ~4-6 \
Lost Desert Palm Tree ~1-2 \
Lost Desert Pyramids Background buyable through NC Archives Fortune Cookie ~3-4 \
Lost Desert Room in a Bag buyable ~5 \
Lost Desert Sofa Bench buyable ~1 \
Lost Desert Story Wallpaper \
Lost Desert Team Braided Wig ~1-2 \
Lost Desert Team Crazy Wig ~1-2 \
Lost Desert Team Cuffs ~1-2 \
Lost Desert Team Face Makeup ~1-2 \
Lost Desert Team Foam Finger ~1-2 \
Lost Desert Team Glitter Face Paint ~1-2 \
Lost Desert Team Hat ~5 \
Lost Desert Team Jester Hat ~2 \
Lost Desert Team Mask ~1-2 \
Lost Desert Team Pom Pom ~1-2 \
Lost Desert Team Road to the Cup Background ~1-2 \
Lost Desert Team Scarf ~2-3 \
Lost Desert Team Sport Shirt ~5 \
Lost Desert Team Trousers and Cleats ~1-2 \
Lost Desert Team Vuvuzela ~1-2 \
Lost Desert Themed Lamp buyable ~1 \
Lost Desert Treasure Room ~7-9 \
Lost Desert Windmill \
Lost in the Forest Background buyable through Patapult ℗ ~1-2 \
Lost Isle Tour Mystery Capsule ~3-4 \
Lost Mittens Garland ~1-2 \
Lost Valentines Garden Background ~2-3 \
Lotus Flower String Lights buyable ~1 \
Love is a Battlefield Mystery Capsule ~2-3 \
Love is in the Air Sweetheart Gram NT \
Love-O-Meter ~1-2 \
Lovely Flower Assortment Foreground buyable through Split Grundo Key Quest Token ~1-2 \
Lovely Flower Corsage ~1-2 \
Lovely Heart Arbour ~1-2 \
Lovely Holiday Apron ~1-2 \
Lovely Ladder Trinket ~1-2 \
Lovely Layered Lilac Dress ~6-8 \
Lovely Negg Basket Carriage ~1-2 \
Lovely Pink and Red Gift Wrap NT \
Lovely Pink Ruffled Skirt buyable ~1 \
Lovely Rose Cardigan ~2 \
Lovely Rose String Lights ~1-2  \
Lovely Sea Monster Dress ~2 \
Lovely Seashell Dress ~1-2 \
Lovely Shenkuu Gazebo ~2 \
Lovely Sparkling Hearts Shower ~1-2 \
Lovely Valentine Frame ~1-2 \
Lovestruck Arrow 1-Pack \
Lovestruck Arrow 9-Pack \
Lovestruck Shield ~1-2 \
Low Hanging Vine Garland ~1-2 \
Luck Finder Branch Staff ~1-2 \
Luck Finder Dress ~2 \
Luck Finder Shoes ~3-4 \
Luck Finder Wig and Hat ~1-2 \
Lucky Abode Background ~1-2 \
Lucky Clover Shower ~1-2 \
Lucky Dice Dress ~1-2 \
Lucky Dice Sunglasses ~1-2 \
Lucky Green House Background ~1-2 \
Lucky Knitted Hat and Wig ~1-2 \
Lucky Meowclops ~1-2 \
Lucky Shamrock Lollypop ~1-2 \
Lucky Uni Shoe Necklace ~1-2 \
Lukewarm Left-Over Pizza ~1-2 \
Lulu Wig ~6 \
Lulus 2011 Daily Dare Mystery Capsule ~5 \
Lulus 2012 Daily Dare Mystery Capsule ~3-4 \
Lulus Adventure Satchel ~1-2 \
Lulus Bug Hunt Net 5-pack \
Lulus Daily Dare Mystery Capsule ~8-10 \
Lulus Gaming Bag ~2 \
Lulus Jet Pack ~1-2 \
Lulus Purple Games Master Challenge Wig ~10-12 \
Lulus Room Raid: AAA Room Key \
Lulus Room Raid: Abigail Room Key \
Lulus Y13 Dress ~6-8 \
Lulus Y13 Shoes ~4-6 \
Lulus Y15 Daily Dare Mystery Capsule ~3 \
Luminous Lighted Pastel Wig ~1-2 \
Luminous Pink Heart Garland buyable through Pink Elephante Key Quest Token ~1 \
Luminous Pumpkin String Lights ~15-20 \
Luminous Seashell Staff ~1-2 \
Lunch Tray \
Lupine Flower Foreground ~1-2 \
Lurking Virtupets Space Station ~3-4 \
Lush Gala Background ~1-2 \
Lush Green Island Tree ~2-3 \
Lustrous Forest Background ~2-3  \
Lustrous Long Black Wig buyable ~1 \
Lutari Island Fence \
Lutari Island Gazebo ~18-20 \
Lutari Island Jungle Background ~2-3 \
Lutari Island Nest Bed buyable ~1-2 \
Lutari Island Room in a Bag buyable ~5 \
Lutari Island Sofa buyable ~1 \
Lutari Island Tree Desk buyable ~1 \
Lutari Nutcracker Handheld Plushie ~1-2 \
Luxurious Birthday Ball Dress ~3-4 \
Luxurious Pink Stole ~2 \
Luxurious Pirate Wig ~1-2 \
Luxurious Winter Coat ~2 \
M \
 \
Mad Scientist Brand: My Favourite Specimens ~2-4 \
Mad Scientist Wig ~1-2 \
Mad Tea Party Background ~1-2 \
Mad Tea Party Hat ~1-2 \
Mad Tea Party Jacket ~1-2 \
Mad Tea Party Shoes ~1-2 \
Mad Tea Party Stacks of Cups and Pots ~1-2 \
Mad Tea Party Teapot ~4 \
Mad Tea Party Trousers ~1-2 \
MAGAX Energy Shield ~1-2 \
Magenta Striped Trousers ~1-2 \
Magenta Swirl Facepaint ~2 \
Magical Altadorian Hour Glass ~1-2 \
Magical Balloon Background ~1-2 \
Magical Birthday Celebration Background ~1-2 \
Magical Bubble Shower ~2 \
Magical Cape of the Forest ~1-2 \
Magical Faerie Glade Background ℗ ~5-6  \
Magical Faerieland Painting ~3-4 \
Magical Feather Shower ~2 \
Magical Festive Holiday Wings ~1-2 \
Magical Floor Harp buyable ~1 \
Magical Flower Orb ~1-2 \
Magical Gate Foreground ~1-2 \
Magical Gears Staff ~1-2 \
Magical Golden Markings ~4-6 \
Magical Green Staff ~1-2 \
Magical Ice Town Background ~1-2 \
Magical Illuminating Wand buyable through Patapult ~1-2 \
Magical Land of Jelly Beans Background ℗ ~2  \
Magical Maractite Sword ~2-3 \
Magical Marshmallow NT \
Magical Meatball NT \
Magical Mini Honeycomb NT \
Magical Neopoint Shower ~2-4 \
Magical Pink Orb Staff ~2-3 \
Magical Quill and Book ~1-2 \
Magical Rainbow Face Paint ~1-2 \
Magical Spring Kingdom Background ℗ ~2-3 \
Magical Stick of Bread buyable through NC Archives Fortune Cookie ~1-2 \
Magical Tambourine ~1-2 \
Magical Turquoise Quill buyable through Patapult ~1-2 \
Magical Twilit Garden Background ~3-4 \
Magical Watering Can ~1-2 \
Magical White Weewoo Table ~1-2 \
Magical Xylophone Trinket ~1-2 \
Magicians Wig ~1-2 \
Magma Pit Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Magnifying Eye Glasses ~1-2 \
Magnifying Gadget Staff ~2 \
Maid of Hearts Dress ~1-2 \
Majestic Green Sword ~1-2 \
Malevolent Sentient Birthday Poogle Handheld Plushie ~1-2 \
Malkus Vile Handheld Plushie ~1-2 \
Mallard Carnival Foreground ~1-2 \
Mallard Swimming Goggles ~2 \
Manor Mystery NC Fortune Cookie buyable ~1 \
Manor of Luck Forest Background ~1-2 \
Maractite Marvels Collectors Armoured Top ~1-2  \
Maractite Pirate Hat ~1-2 \
Marafin Hat buyable through NC Archives Fortune Cookie ~2 \
Maraqua Altador Cup Jersey buyable ~1 \
Maraqua Altador Cup Locker Room Background buyable ~1 \
Maraqua Altador Cup Team Spirit Banners buyable ~1 \
Maraqua Frame ℗ ~45-55 \
Maraqua Mystery Capsule ~8-10 \
Maraqua Room in a Bag buyable ~5 \
Maraqua Star Deck ~20-25 \
Maraqua Team Braided Wig ~1-2 \
Maraqua Team Crazy Wig ~1-2 \
Maraqua Team Cuffs ~1-2 \
Maraqua Team Face Makeup ~1-2 \
Maraqua Team Foam Finger ~2 \
Maraqua Team Glitter Face Paint ~1-2 \
Maraqua Team Hat ~2 \
Maraqua Team Jester Hat ~1-2 \
Maraqua Team Mask ~1-2 \
Maraqua Team Pom Pom ~1-2 \
Maraqua Team Road to the Cup Background ~1-2 \
Maraqua Team Scarf ~1-2 \
Maraqua Team Sport Shirt ~2 \
Maraqua Team Trousers and Cleats ~1-2 \
Maraqua Team Vuvuzela ~1-2 \
Maraqua Tower ~12-15 \
Maraquan Castle Background ~2 \
Maraquan Door \
Maraquan Easter Gram NT  \
Maraquan Exploration Helmet ~1-2 \
Maraquan Exploration Suit ~1-2  \
Maraquan Exploration Tank ~3-4 \
Maraquan Fancy Dress ~2 \
Maraquan Fence \
Maraquan Flowing Fuchsia Wig buyable ~1 \
Maraquan Jail Cell Foreground ~1-2 \
Maraquan Jewelled Trident Handheld buyable ~1 \
Maraquan Light Blue Dress ~1-2 \
Maraquan Maiden Arm Bracelets ~4-5 \
Maraquan Maiden Dress ~1-2  \
Maraquan Maiden Wig with Flower ~2 \
Maraquan Ombre Ocean Wig buyable ~1 \
Maraquan Pirates Background ~1-2 \
Maraquan Pool Table ~25-35 \
Maraquan Sand Floor Tiles \
Maraquan Seaweed Rug \
Maraquan Seaweed Wallpaper \
Maraquan Silver Markings buyable ~1 \
Maraquan Summer Cloak ~10-15 \
Maraquan Summer Shirt ~1-2 \
Maraquan Wig ~1-2 \
Maraquan Wig with Negg Accessory ~1-2 \
Maraquan Wind Chimes buyable through NC Archives Fortune Cookie ~1-2 \
Maraquan Window \
Marble Altador Floor Tiles \
Marble Halls Gown ~1-2 \
Marble Wings Faerieland Floor Tiles \
Marching Clockwork Jeran Foreground ~1-2 \
Marching Gnomes buyable through NC Archives Fortune Cookie ~1-2 \
Marching Veespa Foreground ~1-2 \
Marketing Maggie Wings ~1-2 \
Marooned on an Island Background ~1-2 \
Marshmallow Biscuit Wig ~1-2 \
Marvelous Ice Room Background ~1-2 \
Mask of the Caster ~1-2 \
Mask of the Eclipse ~1-2 \
Masked Halloween Gift Box Mystery Capsule ~1-2 \
Masked Intruder Collectors Mask ~1-2 \
Masks of Dread NC Quest Pack \
May Pole Background ~2 \
Mayor of Moltaras Mustache ~1-2 \
Mechanical Arm ~1-2 \
Mechanical Darkest Faerie Minion ~3 \
Mechanical Geb ~12 \
Mechanical Heart Wings ~1-2 \
Mechanical Music Track ~1-2 \
Mechanical Pocket Watch buyable ~1 \
Mechanical Pop-Up Valentine Card Background ~1-2 \
Mechanical Wings buyable ~1 \
Mechanised Yooyu Selector ~1-2 \
Medicine Doctor Hat ~2 \
Meep Garden Foreground ~1-2 \
Meep Garland ~1-2 \
Meep Shower ~2 \
Meepit Balloon ~3-4 \
Meepit Costume Gloves ~5 \
Meepit Costume Headpiece ~1-2 \
Meepit Costume Shoes ~1-2 \
Meepit Costume Suit ~1-2 \
Meepit Juice Break Music Track ~1-2 \
Meepit Thought Bubble ~1-2 \
Mega Meat Sandwich buyable ~1 \
Melodious Bar Line Wings ~1-2 \
Menacing Clockwork Grundos Trinket ~1-2 \
Menacing Hook Hand ~1-2 \
Menacing Skull Staff ~1-2 \
Menacing Tendril Wings ~1-2 \
Meridell Altador Cup Jersey ~1-2 \
Meridell Altador Cup Locker Room Background ~1-2 \
Meridell Altador Cup Team Spirit Banners ~1-2 \
Meridell Anteroom \
Meridell Flag Wallpaper \
Meridell Marketplace Background ~1-2 \
Meridell Room in a Bag buyable ~5 \
Meridell Stone Brick Wallpaper \
Meridell Stone Floor Tiles \
Meridell Team Braided Wig ~1-2 \
Meridell Team Crazy Wig ~1-2 \
Meridell Team Cuffs ~1-2 \
Meridell Team Face Makeup ~1-2 \
Meridell Team Foam Finger ~2 \
Meridell Team Glitter Face Paint ~1-2 \
Meridell Team Hat ~2-3 \
Meridell Team Jester Hat ~2-3 \
Meridell Team Mask ~1-2 \
Meridell Team Pom Pom ~1-2 \
Meridell Team Road to the Cup Background ~1-2 \
Meridell Team Scarf ~3-4 \
Meridell Team Sport Shirt ~2-3 \
Meridell Team Trousers and Cleats ~1-2 \
Meridell Team Vuvuzela ~2 \
Meridell Turret Lamp buyable ~1 \
Meridellian Fence buyable ~1 \
Meridellian Fence 10-Bundle \
Meridellian Spring Background ~5-6 \
Merry Balloon Gift Foreground ~1-2 \
Merry Fair Dress ~1-2 \
Merry Fair NC Fortune Cookie ~1-2 \
Message in a Bottle Foreground ~1-2 \
Messy Dresser Trinket buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Messy Ponytail Wig ~1-2  \
Metal Daisy-shaped Flower Shield ~1-2 \
Metallic Arm Tattoos ~1-2 \
Metallic Heart Shirt and Cardigan ~1-2 \
Metallic Mirror Mask ~1-2 \
Metallic Tulip Sceptre buyable ~1 \
Miamouse Tight Rope Garland ~1-2 \
Midnight Blue Infinity Scarf ~1-2 \
Midnight Blue Velvet Blazer ~1-2 \
Midnight Frost Background ~2 \
Midnight Frost Dress ~2-3 \
Midnight Frost Orb ~2 \
Midnight Frost Shoes ~3-4 \
Midnight Frost Wig ~1-2 \
Midnight Lace Holiday Dress ~1-2 \
Midnight Striped Pullover buyable ~1 \
Midnight Tulle Skirt ~1-2 \
Military Vest and White T-Shirt ~1-2 \
Milk and Cookies ~4 \
Mind Control Headset ~1-2 \
Mind Control Helmet \
Mini Argyle Mystery Capsule ~6-8 \
Mini Esophagor ℗ ~3-4+ \
Mini Feather Boa Mystery Capsule ~6-7 \
Mini Gothic Feather Mystery Capsule ~6 \
Mini Petpet Plushies buyable through NC Archives Fortune Cookie ~3 \
Mini Polka Dot Striped Mystery Capsule ~6-7 \
Mini Tie-Dye Mystery Capsule ~5-6 \
Miniature All-Purpose Writing Table ~1-2 \
Miniature Floating Hot Air Balloon ~1-2 \
Miniature Garden buyable through Shenanigifts ~1-2 \
Miniature Spring Negg House ~1-2 \
Miniature Sun Lantern ~1-2 \
Miniature Winter Village ~1-2 \
MiniMME1-B: Seeing Electric Neggs Head Bonk ~1-2 \
MiniMME1-S1: Bouncing Electric Negg ~1-2 \
MiniMME1-S2a: Up, up, and Away Electric Negg ~1-2 \
MiniMME1-S2b: Round and Round Electric Negg ~1-2 \
MiniMME10-B: Mystical Flying Carpet ~4 \
MiniMME10-S1: Mystical Genie Lamp ~1-2 \
MiniMME10-S2: Mystical Genie Top ~3 \
MiniMME10-S2: Mystical Genie Trousers ℗ ~3 \
MiniMME10-S2: Mystical Genie Wig ~5 \
MiniMME11-B: Rotating Starry Night Light ~2 \
MiniMME11-S1: Approaching Eventide Skirt ~1-2 \
MiniMME11-S2: Starry Night Wings ~1-2 \
MiniMME11-S2: Sundial Staff ~1-2 \
MiniMME11-S2: Tropical Eventide Wig ~3-4 \
MiniMME12-B: Maractite Shoulder Armour ~2 \
MiniMME12-S1: Grand Maractite Hall Background ~1-2 \
MiniMME12-S2: Elegant Maractite Wig ~1-2 \
MiniMME12-S2: Maractite Noil Handheld Plushie ~1-2 \
MiniMME12-S2: Ornate Maractite Trident ~2-3 \
MiniMME13-B: Gothic Sunbeam Shower ~25-30  \
MiniMME13-S1: Gothic Summer Waistcoat ~1-2 \
MiniMME13-S2a: Gothic Dusty Pink Wig ~4-6 \
MiniMME13-S2b: Gothic Sunflower Bouquet ~1-2 \
MiniMME13-S2c: Gothic Shimmer Makeup ~3-5 \
MiniMME14-B: Cherry Blossom String Lights ~25-30  \
MiniMME14-S1: Shenkuu Summer Garden Background ~1-2 \
MiniMME14-S2a: Summery Shenkuu Bun Wig ~1-2 \
MiniMME14-S2b: Crimson Cyodrake Kite ~1-2 \
MiniMME14-S2c: Bonsai Blossom Tree ~1-2 \
MiniMME15-B: Land Ahoy Background ~4-6 \
MiniMME15-S1: Daring Seafarer Tunic ~1-2 \
MiniMME15-S2a: Daring Seafarer Beard ~1-2 \
MiniMME15-S2b: Daring Seafarer Helmet ~1-2 \
MiniMME15-S2c: Daring Seafarer Axe ~2 \
MiniMME16-B: Rocket Glider Wings ~1-2 \
MiniMME16-S1: Informants Patch Sweater ~1-2 \
MiniMME16-S2a: Undercover Wig and Hat ~1-2 \
MiniMME16-S2b: Adventurer Scar ~3 \
MiniMME16-S2c: High Tech Glasses ~1-2 \
MiniMME17-B: Evening Rooftop Background ~50-60 \
MiniMME17-S1: Whimsical Governess Dress ~1-2 \
MiniMME17-S2a: Whimsical Governess Essentials ~1-2 \
MiniMME17-S2b: Whimsical Governess Wig and Hat ~2 \
MiniMME17-S2c: Whimsical Tea Table ~1-2 \
MiniMME18-B: Space Exploration Background ~12-15 \
MiniMME18-S1: Galactic Traveller Jacket ~1-2 \
MiniMME18-S2a: Galactic Traveller Wig ~30-35 \
MiniMME18-S2b: Galactic Traveller Belt ~1-2 \
MiniMME18-S2c: Holomorphic Foliage and Dandan Set ℗ ~2-4 \
MiniMME19-B: Quaint Wooden Town Background ~2-3 \
MiniMME19-S1: Leafy Woodland Dress ~1-2 \
MiniMME19-S2a: Woodland Foliage Wig ~2-3 \
MiniMME19-S2b: Spring Forest Markings ~2-3 \
MiniMME19-S2c: Wood Grain Contacts ~2-3 \
MiniMME2-B: Flurry of Fiery Neggs Shower ~1-2 \
MiniMME2-S1: Over-excited Fiery Negg ~1-2 \
MiniMME2-S2a: Burn Up the Dance Floor Fiery Negg ~1-2 \
MiniMME2-S2b: Hot Skip and Jump Fiery Negg ~1-2 \
MiniMME20-B: City in Space Background ~10-15 \
MiniMME20-S1: Galactic Princess Dress ~1-2 \
MiniMME20-S2a: Galactic Princess Helmet and Wig ~1-2 \
MiniMME20-S2b: Galactic Princess Tights and Boots ~1-2 \
MiniMME20-S2c: Staff of the Cosmos ~1-2 \
MiniMME21-B: Spaceship Hall Interior Background ~4-5 \
MiniMME21-S1: Galactic Prince Space Jacket ~1-2 \
MiniMME21-S2a: Galactic Prince Helmet and Wig ~1-2 \
MiniMME21-S2b: Galactic Prince Belted Trousers ~1-2 \
MiniMME21-S2c: Gloves of Power ~1-2 \
MiniMME22-B: Lost Desert Royal Palace Background ℗ ~4-6 \
MiniMME22-S1: Queen of Lost Desert Dress ~1-2 \
MiniMME22-S2a: Queen of Lost Desert Sceptre ~1-2 \
MiniMME22-S2b: Queen of Lost Desert Markings ~2-3 \
MiniMME22-S2c: Queen of Lost Desert Wig ~2-3 \
MiniMME3-B: Deluxe Purple Speckled Negg Garland ~4-5 \
MiniMME3-S1: Whirling Purple Speckled Negg ~1-2 \
MiniMME3-S2a: Bouncy Purple Speckled Negg ~1-2 \
MiniMME3-S2b: Dangling Purple Speckled Negg Garland ~3-4 \
MiniMME4-B: Swallowed Up Background ~4-5 \
MiniMME4-S1: The Trees Have Eyes Foreground ~2-3 \
MiniMME4-S2: Cloud of Ghostly Orbs ~30-40 \
MiniMME4-S2: Rootbound Dress ~5 \
MiniMME4-S2: Spooky Tree Face Mask ~1-2 \
MiniMME5-B: Rainbow Dress ~4 \
MiniMME5-S1: Rainbow Ribbon Wand ~1-2 \
MiniMME5-S2: Rainbow Contacts ~4-5 \
MiniMME5-S2: Rainbow Tutu ~1-2 \
MiniMME5-S2: Rainbow Wings ~1-2 \
MiniMME6-B: Gold and Metal Gates Foreground ~4-5 \
MiniMME6-S1: Golden Wand of Wonder ~1-2 \
MiniMME6-S2: Golden Flower Wreath Wig ~5 \
MiniMME6-S2: Golden Outdoor Background ℗ ~12-15 \
MiniMME6-S2: Golden Protective Shield ~1-2 \
MiniMME7-B1: Honey Dip Staff ~4-5 \
MiniMME7-S1:Delightful Springabeehive ~1-2 \
MiniMME7-S2: Busy Springabee Tree ~2-3 \
MiniMME7-S2: Inside the Hive Background ~1-2 \
MiniMME7-S2: Sweet Honeycomb Wings ~1-2 \
MiniMME8-B: Holiday Postcard Collection Garland ~1-2 \
MiniMME8-S1: Extended Holiday Luggage ~1-2 \
MiniMME8-S2: Extra Reflective Wig and Visor ~2-3 \
MiniMME8-S2: Fashionable Neovia Inspired Swimsuit ~4 \
MiniMME8-S2: Super Splash Water Slide Background ~2-3 \
MiniMME9-B: Splashing Puddles ~3 \
MiniMME9-S1: Pretty Spring Umbrella ~1-2 \
MiniMME9-S2: Rainy Spring Porch Background ~4-5  \
MiniMME9-S2: Spring Rain Jacket ~1-2 \
MiniMME9-S2: Water Drugal Handheld Plushie ~1-2 \
Mint and Aqua Flower Wig ~3-4 \
Mint Diamonds Gift Box Mystery Capsule ~1-2 \
Mint Green Carved Wings ~1-2 \
Mint Green Lace Shirt ~1-2 \
Mint Lacy Scarf ℗ ~1-2 \
Minty Fresh Mohawk ~1-2 \
Minty Green Mystery Capsule ~2-3 \
Miss Altador Bouquet ~3 \
Miss Altador Dress ~1-2 \
Miss Altador Pageant Background ~1-2 \
Miss Altador Wig and Crown ~1-2  \
Mission: Capture the Comets Astronet 1-Pack ~2-4 \
Mission: Capture the Comets Astronet 7-Pack \
Missmatched Stockings and Shoes buyable through NC Archives Fortune Cookie ~1-2 \
Mistletoe Dress buyable through NC Archives Fortune Cookie ~1-2 \
Mistletoe Ribbon ~1-2 \
Mistletoe Sword ~1-2 \
Misty Rainbow Tree ~1-2 \
Mitten Earmuffs ~1-2 \
Mitten Scarf ~1-2 \
Mixed Pattern Layered Shirt buyable through Patapult ~1-2 \
MME1-B1: Sputtering Grey Mini-Monster ℗ ~250-300 \
MME1-S1: Tiny Striped Wonderworm ~2 \
MME1-S2: Glowing Cocoon of Intrigue ~1-2 \
MME1-S3: Exotic Pyroplant with Firing Reeds ~1-2 \
MME1-S4: Ominous Stalk and Bud ~1-2 \
MME1-S5: Beautiful Bloom and Blazing Blue Butterfly ~2 \
MME1-S5: Beautiful Bloom and Blazing Orange Butterfly ~2 \
MME10-B1: Home Sweet Grave Background ~6 \
MME10-S1: Like A Baby Foreground ~1-2 \
MME10-S2: Classroom Desk ~1-2 \
MME10-S3a: Dental Headgear ~1-2 \
MME10-S3b: Full Face Acne ~1-2 \
MME10-S3c: Neopian Dream Collection ~1-2 \
MME10-S4: Neohome For Sale ~1-2 \
MME10-S5a: Silver Hair Wig ~3-4 \
MME10-S5b: Walking Frame ~1-2 \
MME10-S5c: Extra Strong Prescription Spectacles ~1-2 \
MME11-B: Carmariller Wing-Rimmed Glasses ~1-2 \
MME11-S1: Snow Covered Tree ~1-2 \
MME11-S2: Frozen Cocoon Garland ~1-2 \
MME11-S3a: Rainbow Carmariller Handheld Plushie ~2 \
MME11-S3b: Rainbow Carmariller Wig ~4 \
MME11-S3c: Rainbow Carmariller Wings ~1-2 \
MME11-S4: Spring Is Here Background ~3-4 \
MME12-B: One Neopet Band ~3 \
MME12-S1: Enchanting Music Box ~1-2 \
MME12-S2a: Musical Bar Staff ~2 \
MME12-S2b: Musical Notes Garland ~1-2 \
MME12-S2c: Sheet Music Garden Foreground ~3 \
MME12-S3: Musical Notes Dress ~1-2 \
MME12-S4a: Musical Wig ℗ ~2-3 \
MME12-S4b: Orchestra Pit Foreground ~1-2 \
MME12-S4c: Magical Baton ~1-2 \
MME13-B: Voodoo Practitioner Staff ~4-6 \
MME13-S1: Magical Shrunken Heads ~1-2 \
MME13-S2a: Petpet Voodoo Doll Garland ~2-3  \
MME13-S2b: Deadly Spell Foreground ~1-2 \
MME13-S2c: Bubbling Skull Cauldron ~1-2 \
MME13-S3: Voodoo Practitioner Dress ~1-2 \
MME13-S4a: Voodoo Practitioner Wig ~2 \
MME13-S4b: Voodoo Skull Face Paint ~3-4 \
MME13-S4c: Home Sweet Bog Background ~2 \
MME14-B: Dazzling Golden Carriage ~3-5 \
MME14-S1: Snorkle Bank of Prosperity ~1-2 \
MME14-S2a: Golden Neopoint Wig ~4-6 \
MME14-S2b: Shimmery Golden Face Paint ~2 \
MME14-S3: Striking Golden Caplet ~1-2 \
MME14-S4a: Golden Fountain Wings ~1-2 \
MME14-S4b: Brilliant Treasure Trove Background ~2 \
MME15-B: Oversized Shoe House Background ~1-2 \
MME15-S1: Magical Storybook Background ~1-2 \
MME15-S2a: Runaway Dish and Spoon Staff ~1-2 \
MME15-S2b: Dress-Up Negg Foreground ~1-2 \
MME15-S3: Pink Gingham Dress ~1-2 \
MME15-S4a: Storybook Collection Skirt ~1-2 \
MME15-S4b: Pink Gingham Hat and Wig ~1-2 \
MME16-B: Dark Vine Robe ~4-5 \
MME16-S1: Menacing Forest Path Background ~1-2 \
MME16-S2a: Menacing Tree Vine Garland ~2-4 \
MME16-S2b: Blinking Forest Eyes ~1-2 \
MME16-S2c: Luminescent Tree Foreground ℗ ~4-6 \
MME16-S3: Glowing Vine Dress ~1-2 \
MME16-S4a: Poisonous Leaf Wings ~1-2 \
MME16-S4b: Deadly Toadstool Staff ~1-2 \
MME16-S4c: Glowing Green Contacts ~1-2 \
MME17-B: Frozen Terrace Background ~4-6 \
MME17-S1: Winters Eve Ball Gown ~1-2 \
MME17-S2a: Snowy Curled Wig ~1-2 \
MME17-S2b: Sparkling Blue Ball Mask ~1-2 \
MME17-S3: Chiffon Snowflake Wings ~1-2 \
MME17-S4a: Snow-Covered Balustrade Foreground ~1-2 \
MME17-S4b: Icy Mist Shower ~1-2 \
MME18-B: Gothic Lace Caplet ~1-2 \
MME18-S1: Gothic Rose Dress ~1-2 \
MME18-S2a: Gothic Branches Garland ~3 \
MME18-S2b: Gothic Spring Tree ~1-2 \
MME18-S2c: Gothic Tulip Bouquet ~1-2 \
MME18-S3: Gothic Evening Wig ~1-2 \
MME18-S4a: Gothic Blossoms Foreground ℗ ~3-5 \
MME18-S4b: Gothic Bloom Orb ~1-2 \
MME18-S4c: Gothic Shadow Shower ~2-3 \
MME19-B: Contagious Town Background ~4-6 \
MME19-S1: Menacing Plague Doctor Mask ~1-2 \
MME19-S2a: Menacing Plague Doctor Dress ~2-3 \
MME19-S2b: Menacing Plague Doctor Tunic ~2 \
MME19-S3a: Long Plague Doctor Wig ℗ ~3 \
MME19-S3b: Short Plague Doctor Wig ~2 \
MME19-S4: Plague Doctor Incense Staff ~1-2 \
MME19-S5a: Crokabek Omen Foreground ~2 \
MME19-S5b: Infected Cart ~1-2 \
MME2-B1: Gold and Maractite Fish Shield ~150 \
MME2-S1: Mystical Rain Shower ~12-15 \
MME2-S2: Glowing Light Lagoon ~4 \
MME2-S2: Misty Magic Lagoon ~3-5 \
MME2-S3: Puddle with Golden Fish Tail ~1-2 \
MME2-S4: Golden Fish Sword in a Stone ~2 \
MME2-S4: Playful Peeking Gold Fish ~1-2 \
MME2-S5: Beautiful Fish of Gold ~2-3 \
MME2-S5: Glorious Golden Fish Sword ~5 \
MME20-B: Verdant Castle Background ~6-8 \
MME20-S1: Ice Palace Background ~1-2 \
MME20-S2a: Winter Princess Gown ~2-3 \
MME20-S2b: Northern Princess Gown ~2-3 \
MME20-S3a: Blonde Side Braid Wig ~2-4 \
MME20-S3b: Burgundy Braids Wig ~2-4 \
MME20-S4a: Winter Princess Cape ~2-3 \
MME20-S4b: Northern Princess Capelet ~1-2 \
MME20-S5: Melted Snowman Trinket ~1-2 \
MME21-B: Crystal Eye Contacts ~3-5 \
MME21-S1: Crystal Paths Trinket ~1-2  \
MME21-S2a: Black Crystal Dress ~2-3 \
MME21-S2b: Green Crystal Dress ~1-2 \
MME21-S3a: Dark Crystal Ballroom ~2-3 \
MME21-S3b: Aqua Crystal Room ~2 \
MME21-S4a: Black Braided Wig ~2-3 \
MME21-S4b: Glistening Crystal Wig ~1-2 \
MME21-S5: Crystal Candles Foreground ~1-2 \
MME3-B1: Magma Pool Background ~12-15 \
MME3-S1: Raging Jack-o-Lantern Helmet ~3 \
MME3-S2: Wild Wig of Fire ~1-2 \
MME3-S3: Flaming Magma Rock Shower ~2-3 \
MME3-S4: Molten Rock Crown ~1-2 \
MME3-S5: Burning Red Eyes ~6-8 \
MME3-S5: Flickering Flame Eyes ~6-7 \
MME4-B1: Sparkling Snow Background ℗ ~130-150 \
MME4-S1: Forgotten Magical Present ~1-2 \
MME4-S2: Hand Crafted Wand ~2-3 \
MME4-S3: Sparkling Winter Star Garland ~3 \
MME4-S4: Sparkling Wand ~1-2 \
MME4-S5: Starlit Scarf ~2 \
MME4-S6: Magical Winter Wand ~2 \
MME4-S7: Shimmering Star Ball Gown ~7 \
MME4-S7: Sparkling Winter Cloak ~5-7 \
MME5-B1: Mystical Stone Lightning Sword ~14-17 \
MME5-S1: Ancient Blumaroo Sentinels ~1-2 \
MME5-S2: Mystical Lightning Storm ℗ ~2-3 \
MME5-S3: Semi-Watchful Stone Guard ~1-2 \
MME5-S4a: Mystical Stone Uni-goggle ~1-2 \
MME5-S4b: Mystical Stone Chest Piece ~1-2 \
MME6-B: Bubbling Fountain Background ~15 \
MME6-S1: Magical Shapes Bubble Wand ~1-2 \
MME6-S2: A Bunch of Popping Bubbles ~2 \
MME6-S3: Beautiful Bubble Earrings ~1-2 \
MME6-S3: Beautiful Bubble Necklace ~1-2 \
MME6-S4: Lighter Than Air Bubble Wings ~1-2 \
MME6-S5: Poppable Angelpuss Plushie ~1-2 \
MME6-S5: Poppable Harris on a String ~1-2 \
MME6-S6: Trapped in a Bubble Foreground ~1-2 \
MME7-B: Queen of the Deep Gown ~8-10 \
MME7-S1: Mallard Arm Floaties ~1-2 \
MME7-S2: Water Rising Foreground ~1-2 \
MME7-S3: Swimming with Petpets Foreground ~2-3 \
MME7-S4: Hidden Beneath the Waves Background ~4-5 \
MME7-S5: Kelp and Coral Garland ~3-4 \
MME7-S5: Undersea Coral Garden Foreground ~3-4 \
MME8-B: Flower Petal Shower ~6 \
MME8-S1:Shining Icy Dreamscape Background ~2-3 \
MME8-S2:Shimmering Icicle Garland ~1-2 \
MME8-S3: Growing Flower Vines ~1-2 \
MME8-S3: Pretty Swaying Flowers ~1-2 \
MME8-S4: Blooming Flower Necklace ~1-2 \
MME8-S4: Pretty Flower Facepaint ~2-3 \
MME8-S5: Flower Bodysuit ~1-2 \
MME9-B: Slimed Trail Foreground ~1-2 \
MME9-S1: Nearly Inescapable Tank ~1-2 \
MME9-S2: Tentacle Takeover ~1-2 \
MME9-S3: Tentacles Attack Background ~1-2 \
MME9-S4a: Tentacle Skirt ~1-2 \
MME9-S4b: Tentacle Wig ~1-2 \
Moccasin Shoes ~1-2 \
Mod Flower Vase Foreground buyable ~1 \
Modern Sculpture Holiday Hat ~1-2 \
Mohawk Beanie ~3 \
Moltara Altador Cup Jersey ~1-2 \
Moltara Altador Cup Locker Room Background ~1-2 \
Moltara Altador Cup Team Spirit Banners ~1-2 \
Moltara Foreman Collectors Wings ℗ ~1-2 \
Moltara Inventor Coat ~1-2 \
Moltara Inventor Hat and Goggles ~1-2 \
Moltara Inventor Shoes ~3-4 \
Moltara Inventor Trousers ~2 \
Moltara Inventor Workshop Background ~2 \
Moltara Inventors Work Table ~1-2 \
Moltara Mayor Mystery Capsule ~10 \
Moltara Shoulder Armour ~1-2 \
Moltara Team Braided Wig ~1-2 \
Moltara Team Crazy Wig ~1-2 \
Moltara Team Cuffs ~1-2 \
Moltara Team Face Makeup ~1-2 \
Moltara Team Foam Finger ~2 \
Moltara Team Glitter Face Paint ~1-2 \
Moltara Team Hat ~2 \
Moltara Team Jester Hat ~2-3 \
Moltara Team Mask ~1-2 \
Moltara Team Pom Pom ~1-2 \
Moltara Team Road to the Cup Background ~1-2 \
Moltara Team Scarf ~2-3 \
Moltara Team Sport Shirt ~1-2 \
Moltara Team Trousers and Cleats ~1-2 \
Moltara Team Vuvuzela ~1-2 \
Moltaran Carmariller Wig ~1-2 \
Moltaran Filament Lamp \
Moltaran Heart Factory Background ~1-2 \
Moltaran Heart Hat ~1-2 \
Moltaran Heart Shirt ~1-2 \
Moltaran Heart Staff ~1-2 \
Moltaran Lanterns Garland ~1-2 \
Monarchial Wig ~1-2 \
Money Tree Background ~1-2 \
Money Tree Cupcake ~1-2 \
Money Tree Mirage Background ~1-2 \
Money Tree Mystery Capsule ~1-2 \
Money Tree Neopia Central Lamp buyable ~1 \
Monoceraptor Garland ~1-2 \
Moon and Star Staff ~1-2 \
Moon and Stars Facepaint buyable ~1 \
Moonlit Contacts ~1-2 \
Moonlit Lunar Temple Background ~1-2 \
Moonlit Night Wings ~1-2 \
Moonlit Ruins Background ~2 \
Mootix Chocolate Ink Dropper NT \
Mootix Faerie Ink Dropper NT \
Mootix Hat ~3 \
Mootix Ink Bottle NT \
Mootix Pirate Ink Dropper NT \
Mootix Snow Ink Dropper NT \
Mortog Fountain ~10 \
Mosaic Altadorian Floor Tiles \
Mosaic Bead Wings ~1-2 \
Mosaic Dining Table ~12 \
Mosaic Flower Foreground ~1-2 \
Mosaic Flower Wings ~2 \
Mosaic Gift Box Mystery Capsule ~1-2 \
Mosaic Handheld Staff ~1-2 \
Mosaic Neopia Central Floor Tiles \
Mosaic Paper Tree Foreground ~2 \
Mosaic Path Background ~1-2 \
Mosaic Sun Staff ~1-2 \
Mosaic Violin buyable through Shenanigifts ~1-2 \
Mossy Archway Garland ~2 \
Mountain Summit Background ~1-2 \
Mr. Chuckles Make-Up Kit ~3-4 \
Mr. Krawley Collectors Vest and Tie ~3 \
Mr. Scarys Hideout Collectors Background ~1-2 \
Multi-Coloured Cloud Garland buyable through Cloud Moehog Key Quest Token ~1-2 \
Multi-Coloured Gourd Foreground ~1-2 \
Multi-Coloured Sparkler ~1-2 \
Multi-Coloured Spring Arbor ~1-2 \
Multicolour Bow Tie Shirt buyable ~1 \
Multicolour Paper Flowers Frame ~1-2 \
Multicolour Wig ~2 \
Mummy Candy Holder ~1-2 \
Mummy Wrapped Hands ~1-2 \
Museum Habitat Background ~1-2 \
Mushroom and Flower Arch ~1-2 \
Mushroom Bouquet buyable ~1 \
Mushroom Picnic Table and Chairs ~4 \
Mushrooms of Spring Background ~2-4 \
Music Box Purse ~1-2 \
Music Class Background ~1-2 \
Music Festival Crowd Foreground ~1-2 \
Musical Bar Garland ~1-2 \
Musical Jewel Wig ~1-2 \
Musical Note Face Paint ~1-2 \
Musical Note Stockings and Shoes ~1-2 \
Musical Notes Shower ~1-2 \
Musical Procession Foreground ~1-2 \
Mutant Apron buyable ~1 \
Mutant Bed ~2 \
Mutant Blue Glowing Contacts buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Easter Gram NT  \
Mutant Elegant Burgundy Wig buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Faellie Handheld Plushie buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Flower Foreground buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Gothic Embroidered Shirt buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Negg Flower Wig ~1-2 \
Mutant Picnic Background ~1-2 \
Mutant Pink Ruffle Dress buyable through Abnormal Fashions Mystery Capsule ~2 \
Mutant Poisonous Polka Dot Wig buyable ~1 \
Mutant Rose Print Dress ~1-2 \
Mutant Rug ~2 \
Mutant Sculpture ~2 \
Mutant Spiked Collar ~7-10 \
Mutant Spring Headband ~13-15 \
Mutant Stylish Jet Black Wig buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Tattered Dress buyable ~1 \
Mutant Tentacle Floor Tiles ~2 \
Mutant Tentacle Staff ~1-2 \
Mutant Top Hat buyable through Abnormal Fashions Mystery Capsule ~1-2 \
Mutant Yellow Tulips Bouquet ~1-2 \
Mutating Background ~2-3 \
Muted Library Background buyable ~1 \
Muted Riding Hat and Wig ~1-2 \
My Super Valentine Boots and Tights ~1-2 \
My Super Valentine Cape ~1-2 \
My Super Valentine Dress ~2-3 \
My Super Valentine Mask ~3 \
Mynci Beach Volleyball Background ~1-2 \
Mynci Defender Bean Bag Chair ~2 \
Mynci Defender Flag Trinket ~1-2 \
Mynci Defender Pinata ~1-2 \
Mynci Defender Symbol Garland ~1-2 \
Mynci Defender Wind Chime ~1-2 \
Mynci Twirl Bars ~2 \
Mysterious Cape with Cowl ~1-2 \
Mysterious Cobrall Pillars Foreground ~1-2 \
Mysterious Dinner Party Background buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Mysterious Dust ~1-2 \
Mysterious Hall of Grandeur Background ℗ ~1-2 \
Mysterious Skeleton Key ~4-5 \
Mysterious Velveteen Dress ~3-5 \
Mystery Capsule Factory Background ~2-3 \
Mystery Capsule of Evil ~2-4 \
Mystery Capsule Staff ~3-4 \
Mystery Island Altador Cup Jersey ~1-2 \
Mystery Island Altador Cup Team Spirit Banners ~1-2 \
Mystery Island Bed buyable ~1-2 \
Mystery Island Celebration Background ~2 \
Mystery Island Fence buyable ~1 \
Mystery Island Fence 10-Bundle buyable ~1 \
Mystery Island Holiday Background ~2 \
Mystery Island Hut \
Mystery Island Hut Background ~1-2 \
Mystery Island Inspired Flower Bouquet ~1-2 \
Mystery Island JubJub Power Bounce Suitcase ~2-3 \
Mystery Island Lava Floor Tiles \
Mystery Island Locker Room Altador Cup Background ~1-2 \
Mystery Island Luau Background ~1-2 \
Mystery Island Mystery Capsule ~15 \
Mystery Island Room in a Bag buyable ~5 \
Mystery Island Signpost ~12 \
Mystery Island Summer Background ~1-2 \
Mystery Island Team Braided Wig ~1-2 \
Mystery Island Team Crazy Wig ~1-2 \
Mystery Island Team Cuffs ~1-2 \
Mystery Island Team Face Makeup ~1-2 \
Mystery Island Team Foam Finger \
Mystery Island Team Glitter Face Paint ~1-2 \
Mystery Island Team Hat \
Mystery Island Team Jester Hat ~3 \
Mystery Island Team Mask ~1-2 \
Mystery Island Team Pom Pom ~1-2 \
Mystery Island Team Road to the Cup Background ~1-2 \
Mystery Island Team Scarf ~3 \
Mystery Island Team Sport Shirt \
Mystery Island Team Trousers and Cleats ~1-2 \
Mystery Island Team Vuvuzela ~1-2 \
Mystery Island Totem \
Mystery Island Vacation Background ~1-2 \
Mystery Island Writing Desk buyable ~1 \
Mystic Makeup ~1-2 \
Mystic Topaz Wings ~1-2 \
Mystical Bone Dress buyable through Wonderclaw ~1-2 \
Mystical Cloud Tree buyable through Cloud Flotsam Key Quest Token ~1-2 \
Mystical Daisy ~2-3 \
Mystical Darigan Citadel Wallpaper \
Mystical Forest Entryway Background ~2-3 \
Mystical Green Wand ~1-2 \
Mystical Jewelled Door Background buyable through Patapult ~1-2 \
Mystical Maraqua Bed buyable ~1-2 \
Mystical Pendant Necklace ~1-2 \
Mystical Pot of Golden Neopoints ~1-2 \
Mystical Red Tree ~1-2 \
Mystical Staff of Neopia ~4 \
Mystical Swirl Gift Box Mystery Capsule ~1-2 \
N \
 \
Nabiles Collectors Dress ~2 \
Nabiles Collectors Veil ~2 \
Naleap Bath ~1-2 \
Naleap Inspired Mask ~1-2 \
National Neopian Bank Treasure Map ~2 \
Natural Lutari Island Floor Tiles \
Nature Springs Tiara ~1-2 \
Nautical Bathing Suit and Cover Up ~1-2 \
Nautical Dress ~1-2 \
Nautical Knot Wig ~1-2 \
Nautical Shirt ~1-2 \
Nautical Souvenirs Garland ~1-2 \
Nautical Summer Mystery Capsule ~1-2 \
Nautical Treasures Garland ~1-2 \
Nautical Trinkets Bouquet ~1-2 \
Nautical Trousers ~1-2 \
Navy Belted Coat ~1-2 \
NC Archives Fortune Cookie buyable ~1 \
NC Challenge 1-Game Ticket Pack \
NC Challenge 10-Game Ticket Pack \
NC Challenge 30-Game Ticket Pack \
NC Challenge 5-Game Ticket Pack \
NC Challenge Curtains Foreground ~1-2 \
NC Kidnapping Caper Case File: Hideouts ~3-4 \
NC Kidnapping Caper Case File: Method ~3-4 \
NC Kidnapping Caper Case File: Suspects ~3-4 \
NC Mall 2nd Birthday Gift Mystery Capsule ~8 \
NC Mall 2nd Birthday Mystery Capsule  \
NC Mall 3rd Birthday Mystery Capsule  \
NC Mall 4th Birthday Blue Goodie Bag ~1-2 \
NC Mall 4th Birthday Gift Box Mystery Capsule ~6-7 \
NC Mall 4th Birthday Mystery Capsule  \
NC Mall 4th Birthday White Goodie Bag ~1-2 \
NC Mall 5th Birthday Gift Box Mystery Capsule ~3-5 \
NC Mall 5th Birthday Mystery Capsule  \
NC Mall 6th Birthday Gift Box Mystery Capsule ~3-4 \
NC Mall 7th Birthday Mystery Capsule ~1-2 \
NC Mall 8th Birthday Mystery Capsule ~1-2 \
NC Mall 9th Birthday Mystery Capsule buyable through July 31, 2016  \
NC Mall Birthday Dreaming Wish Candle \
NC Mall Birthday Goodie Bag ~75 \
NC Mall Birthday Wishing Wish Candle ~4 \
NC Mall Fifth Birthday Goodie Bag ~1-2 \
NC Mall Mascot Flyer \
NC Mall Sixth Birthday Goodie Bag ~1-2 \
NC Mall Styles Treasure Map \
NC Mall Third Birthday Goodie Bag ~1-2 \
NC Mall Third Birthday Pinata ~1-2 \
NC Upcycle Fortune Cookie buyable ~1 \
Nearly Decorated Tree ~1-2 \
Nebula Contacts ~1-2 \
Negg and Flower Filled Planter ~1-2 \
Negg Arboretum ~1-2 \
Negg Background ~1-2 \
Negg Basket Wand ~1-2 \
Negg Costume buyable through NC Archives Fortune Cookie ~1-2 \
Negg Dunking Staff ~1-2 \
Negg Earrings ~1-2 \
Negg Faerie Dress ~3-4 \
Negg Faerie Key Quest Token ~3-4 \
Negg Faerie Wig ~3 \
Negg Farm Background ~1-2 \
Negg Flower Box Foreground ~2 \
Negg Footie Pajamas ~1-2 \
Negg Gazebo Background ~1-2 \
Negg Head Bonk ~1-2 \
Negg Hunting Background buyable through NC Archives Fortune Cookie ~1-2 \
Negg Mystery Capsule [rare collectible: Depends on trader] ~500-1000+ \
Negg Necklace ~1-2 \
Negg Nest Wand buyable through NC Archives Fortune Cookie ~1-2 \
Negg Painting Bucket Foreground ~1-2 \
Negg Painting Factory Garland ~1-2 \
Negg Painting Workshop Background ~1-2 \
Negg Pinata buyable through NC Archives Fortune Cookie ~1-2 \
Negg Puncher ~2 \
Negg Shower ~1-2 \
Negg Train Foreground ~1-2 \
Negg Tree Garland ~1-2 \
Negg Votive Candles ~1-2 \
Negg Wreath Garland ~1-2 \
Neggs and Flowers Bouquet ~1-2 \
Neggstravaganza Basket 1-pack \
Neggstravaganza Basket 10-pack \
Neggstravaganza Basket 20-pack \
Neggstravaganza Basket 5-pack \
Neggstravaganza Surprise 1-Negg Basket Pack \
Neggstravaganza Surprise 10-Negg Basket Pack \
Neggstravaganza Surprise 20-Negg Basket Pack \
Neggstravaganza Surprise 5-Negg Basket Pack \
Neohome Mystery Capsule [rare collectible : Depends on trader] ~375-400 \
Neopet Shaped Topiaries buyable through NC Archives Fortune Cookie ~1-2 \
Neopet Shop Moustache ~1-2 \
Neopets 10th Birthday Cake ~10  \
Neopets 10th Birthday Mystery Capsule ~7-9 \
Neopets 11th Birthday Commemorative Mystery Capsule ~5-6 \
Neopets 12th Birthday Commemorative Mystery Capsule ~4 \
Neopets 13th Birthday Commemorative Mystery Capsule ~3 \
Neopets 14th Birthday Commemorative Mystery Capsule ~3 \
Neopets 15th Birthday Celebration Goodie Bag ~1-2 \
Neopets 16th Birthday Celebration Goodie Bag  \
Neopets Circle Background NT buyable ~1 \
Neopets Holiday Gift Tag Background ~1-2 \
Neopets Marketplace Background NT buyable ~1 \
Neopia Central Fence buyable ~1 \
Neopia Central Fence 10-Bundle buyable ~1 \
Neopia Central Money Tree Bed buyable ~1-2 \
Neopia Central Mystery Capsule ~5-7 \
Neopia Central Neopoint Floor Tiles \
Neopia Central Rainbow Wallpaper \
Neopia Central Rolltop Desk buyable ~1 \
Neopia Central Room in a Bag buyable ~5 \
Neopia Central Tree House ~30 \
Neopia in Space Background ~1-2 \
Neopia Peripheral Background ~1-2 \
Neopia World Globe ~4-5 \
Neopian Battle Shield ~1-2 \
Neopian Clouds Garland buyable through Cloud Meerca Key Quest Token ~1-2 \
Neopian Explorer Trunks ~10-12 \
Neopian Mobile ~2-3 \
Neopian Petpet Shop Collectors Wig ℗ ~3-5 \
Neopian Star Wallpaper  \
Neoquest Wizard Hat ~3-4 \
Neoquest Wizard Robe ~4 \
Neoquest Wizard Slacks ~1-2 \
Neoquest Wizard Wand ~100-200 \
Neovian Bustle Skirt ~1-2 \
Neovian Canal Background ~1-2 \
Neovian Cupcake Lantern ~1-2 \
Neovian Morning Coat ~1-2 \
Neovian Sewer Background ~1-2 \
Neovian Sitting Room Background ~1-2 \
Neovian Spyder Dress ~1-2 \
Neovian Toilet ~6 \
Neovian Top Hat and Wig \
Neovian Tunnels Background ~1-2 \
Neovian Twilight Background buyable ~1 \
Neovian Wardrobe ~8-10 \
Net Bag with Volleyballs buyable through NC Archives Fortune Cookie ~1-2 \
Net of Fish ~1-2 \
Neutron Star Staff ~1-2 \
New Faerieland Altador Cup Jersey ~1-2 \
New Faerieland Altador Cup Team Spirit Banners ~1-2 \
New Game NC Challenge Game Ticket \
New Game NC Challenge Game Ticket - Series 10 \
New Game NC Challenge Game Ticket - Series 11 ~10-18 \
New Game NC Challenge Game Ticket - Series 12 ~15  \
New Game NC Challenge Game Ticket - Series 13 ~10-18 \
New Game NC Challenge Game Ticket - Series 14 \
New Game NC Challenge Game Ticket - Series 15 \
New Game NC Challenge Game Ticket - Series 16 \
New Game NC Challenge Game Ticket - Series 17 \
New Game NC Challenge Game Ticket - Series 18 \
New Game NC Challenge Game Ticket - Series 19 ~10-18 \
New Game NC Challenge Game Ticket - Series 2 ~10-18 \
New Game NC Challenge Game Ticket - Series 20 \
New Game NC Challenge Game Ticket - Series 21 \
New Game NC Challenge Game Ticket - Series 22 ~10 \
New Game NC Challenge Game Ticket - Series 23 \
New Game NC Challenge Game Ticket - Series 3 ~10-18 \
New Game NC Challenge Game Ticket - Series 4 \
New Game NC Challenge Game Ticket - Series 5 \
New Game NC Challenge Game Ticket - Series 6 \
New Game NC Challenge Game Ticket - Series 7 ~10-18 \
New Game NC Challenge Game Ticket - Series 8 \
New Game NC Challenge Game Ticket - Series 9 \
New Year 2011 Celebration Mystery Capsule ~5 \
New Year 2012 Celebration Mystery Capsule ~3-4 \
New Year 2013 Celebration Mystery Capsule ~2 \
New Year 2014 Celebration Mystery Capsule ~1-2 \
New Year 2015 Celebration Mystery Capsule ~1-2 \
New Year Celebration Wig ~1-2 \
New Year Mystery Capsule ~45+ \
New Years 2010 Celebration Mystery Capsule ~6-8 \
New Years Celebration Background ~1-2 \
New Years Celebration Foreground ~1-2 \
New Years Hat of Happiness ~1-2 \
New Years Hat of Love ~1-2 \
New Years Hat of Prosperity ~1-2 \
New Years Hat with Surprise ~1-2 \
New Years in Altador Background ~1-2 \
New Years in Brightvale Background ~1-2 \
New Years in Darigan Citadel Background ~1-2 \
New Years in Faerieland Background ℗ ~6-8 \
New Years in Haunted Woods Background ~2-3 \
New Years in Kiko Lake ~1-2 \
New Years in Krawk Island Background ~1-2 \
New Years in Kreludor ~1-2 \
New Years in Lost Desert Background ~3-5 \
New Years in Maraqua Background ~1-2 \
New Years in Meridell ℗ ~3-4 \
New Years in Moltara Background ~1-2 \
New Years in Mystery Island Background ~10-12 \
New Years in Neopia Central Background ~1-2 \
New Years in Roo Island Background ~1-2 \
New Years in Shenkuu Background ℗ ~6 \
New Years in Space Station Background ~1-2 \
New Years in Terror Mountain Background ~1-2 \
New Years in Tyrannia ~2-3 \
New Years Sparkler Shower ~1-2 \
News Reel Background NT buyable ~1 \
Newsroom Desk Background ~1-2 \
Night Music buyable ~1 \
Night Sky Dress buyable through 9th Birthday Night Wish Candle  \
Night Sounds Music Track ~1-2 \
Night Time Negg Hunt Background ~1-2 \
Night Time Summer Beach Gathering Background ℗ ~2 \
Night Vision Contacts ~1-2 \
Nightmare Altador Helmet ~1-2 \
Nightmare Bristle Cape ~1-2 \
Nightmare Cloud Castle Background ℗ ~2-4 \
Nightmare Doll Face Paint ~2-3  \
Nightmare Garland ~1-2 \
Nightmare Heroes and Villains Mystery Capsule ~1-2 \
Nightmare Lands Mystery Capsule ~1-2 \
Nightmare Maraqua Underwater Wig ~1-2 \
Nightmare Monarch Jacket ~1-2 \
Nightmare Nautilus Wig ~1-2 \
Nightmare Roo Island Merry Go Round Background ~1-2 \
Nightmare Shenkuu Dress ℗ ~2-4 \
Nightmare Wonderclaw Mystery Capsule ~1-2 \
Nightsteed Wings ~1-2 \
Nighttime Lake ~1-2 \
Nighttime Sky Garland ~2-3  \
Ninja Shadow Attack ~1-2 \
Ninja Star Wig ~2 \
Niptor Contacts ℗ ~2-3 \
No AAA Allowed Sign buyable through NC Archives Fortune Cookie ~1-2 \
No Girls Allowed Sign buyable through NC Archives Fortune Cookie ~1-2 \
No Trespassing Lasers Garland ~2-3 \
Nodas Cookie Kiosk ~1-2 \
Noil Costume ~1-2 \
Noil Costume Hat ~1-2 \
Noil Costume Slippers ~1-2 \
Noil Face Paint ~1-2 \
Noil Mittens ℗ ~5-6 \
Non-Ionising Lab Ray T-Shirt ~1-2 \
Non-Ionising Lab Ray Trousers ~1-2 \
Nostalgic Spring Picnic Background ~1-2 \
Nostalgic Summer Bathing Suit ~1-2 \
Nova Chandelier ~7-8 \
Noxious Gas Planet Background ~1-2 \
Number 2 Balloon ~1-2 \
Nuranna Bite Bathing Suit ~1-2 \
Nuranna Bite Shorts ~1-2 \
Nuranna Face Paint ~1-2 \
Nurse Hat and Wig ~1-2 \
Nurse Lucy Skeleton ~1-2 \
Nursery Time NC Fortune Cookie buyable ~1 \
Nutcracker Face Paint ~12-15 \
Nutcracker Hat ~4-5 \
Nutcracker Jacket ~3-4 \
Nutcracker Music Track ~3-4 \
Nutcracker Sentinels ~1-2 \
Nutcracker Slacks and Boots ~2-4 \
Nutcracker Toy Soldier ~1-2 \
Nutcracker Toy Sword ~30-35 \
O \
 \
Obsidian Gem Tiara ~1-2 \
Ocean Hues Makeup ~4-6 \
Ocean Warrior Blouse ~4-5+ \
Ocean Warrior Bodice ~1-2 \
Ocean Warrior Chainmail Skirt ~1-2 \
Ocean Warrior Helmet ~1-2 \
Oceanic Ombre Curtains ~1-2 \
Old Fashioned Goggles ~1-2 \
Old Time Wood Burning Stove buyable ~1 \
Old-Fashioned Bicycle Trinket ~1-2 \
Ombre Ballet Shoes ~1-2 \
Ombre Birthday Dress ~1-2 \
Ombre Button-Up Shirt ~1-2  \
Ombre Cloud Garland ~1-2 \
Ombre Colour Splat Wig ~1-2 \
Ombre Glitter Dress ~2 \
Ombre Pastel Wig ~1-2 \
Ombre Petals Path ~1-2 \
Ombre Storm Clouds with Rain buyable through Wonderclaw ~1-2 \
Ombre Tea Party Background ~2 \
Omelette Shower ~1-2 \
Omelette Thought Bubble ~5-6 \
Ominous Skull Tree ~1-2 \
Ominous Tunnel of Trees Background ~2 \
Omnivorous Geraptiku Fly Trap ~15 \
On the List Holiday Snowglobe ~2 \
On the Mantel Background ~1-2 \
On the Rainbow Stage ~1-2 \
On the Slopes Background ~1-2  \
Ona Facepaint and Antennae ~1-2 \
Ona Rain Umbrella ~2-3 \
One Lovely Prismatic Dress ~1-2 \
Open Book of Tales buyable through NC Archives Fortune Cookie ~2 \
Open Wide Monster Frame ~1-2 \
Opening Ceremony Background ~2 \
Opera Stage Background ~1-2 \
Operatic Star Dress ~1-2 \
Operatic Star Gloves ~1-2 \
Operatic Star Handheld Mask ~1-2 \
Operatic Star Shoes ~3-4 \
Operatic Star Wig ~1-2 \
Orange Contacts buyable through NC Archives Fortune Cookie ~2 \
Orange Daily Dare Mystery Capsule [rare collectible] ~Depends on trader \
Orange Fiery Skirt ~1-2 \
Orange Flower Embroidery Dress ~1-2 \
Orange Gift Wrap with Brown Ribbon NT \
Orange Grundo Flag ~6-8 \
Orange Gypsy Trousers ~1-2 \
Orange Island Dress ~2 \
Orange Jelly Bob Wig ~1-2 \
Orange Kiko Lake Tube Floor Tiles \
Orange Kougra Key Quest Token buyable ~1 \
Orange Lifejacket with Shirt ~1-2 \
Orange Lupe Key Quest Token buyable ~1 \
Orange Ombre Dress ~1-2 \
Orange Panel Kreludor Wallpaper \
Orange Plaid Bow Tie ~1-2 \
Orange Polka Dot Tights and Green Shoes ~1-2 \
Orange Slice Wand ~1-2 \
Orange Spectrum Contacts ~1-2 \
Orange Warlock Wig ~1-2 \
Orbiting Planets Garland ~1-2 \
Orchid Lei ~1-2 \
Origami Flower Garland ~2 \
Origami Flower Wings ~1-2 \
Ornament Garland Archway ~1-2 \
Ornament Holiday Goodie Bag ~1-2 \
Ornament Necklace ~1-2 \
Ornamental Pumpkin Wand ~1-2 \
Ornamental Shenkuu Headband ~1-2 \
Ornamental Yooyu Cuffs ~1-2 \
Ornamented Horns ~1-2 \
Ornate Altador Fountain ~1-2 \
Ornate Carmariller Flower Staff ~1-2 \
Ornate Chocolate Staff buyable ~1 \
Ornate Circus Tent Wings ~1-2 \
Ornate Coffin Satchel ~1-2 \
Ornate Frosted Window Foreground ~2-4 \
Ornate Gambeson Shirt ~1-2 \
Ornate Gold Cape ~15-25  \
Ornate Gothic Waistcoat ~1-2 \
Ornate Gypsy Wagon ~1-2 \
Ornate Lace Bracers ~1-2 \
Ornate Lost Desert Fan ~1-2 \
Ornate Maractite Wings ~1-2 \
Ornate Mirror Reflection ~1-2 \
Ornate Ormolu Chandelier ~1-2 \
Ornate Pirate Parasol ~1-2 \
Ornate Rattle Staff buyable through Baby Aisha Key Quest Token ~1-2 \
Ornate Room Key 1-Pack ~1-2 \
Ornate Room Key 10-Pack ~4  \
Ornate Room Key 20-Pack ~7-8  \
Ornate Room Key 5-Pack ~2-3 \
Ornate Shell Cuffs ~1-2 \
Ornate Shenkuu Lantern ~1-2 \
Ornate Silver Helmet ~4 \
Ornate Silver Mirror Frame ~4-6 \
Ornate Spring Mask ~1-2 \
Ornate Sword Cane ~1-2 \
Ornate Travel Bag ~1-2 \
Ornate Valentine Garland ~1-2 \
Ornate Wooden Wings ~1-2 \
Ornate Wrought Iron Fence buyable through Red Ixi Key Quest Token ~1 \
Orrery Staff ~1-2 \
Osiris Vase Shirt ~1-2 \
Ostentatious Masquerade Mask ℗ ~2-3 \
Other Worlds Mystery Capsule ~2 \
Out of Control Hose Foreground ~1-2 \
Outdoor Banquet Background ~1-2 \
Outdoor Canopy Background ~1-2 \
Outdoor Music Festival Background ~1-2 \
Overflowing Bookshelf Garland ~1-2 \
Overflowing Suitcase ~1-2 \
Oversize Camp Chair Background ~1-2 \
Oversized Baby Santa Hat ~3-4 \
Oversized Birthday Shield ~1-2 \
Oversized Compass ~1-2 \
Oversized Flower Garden Background ~1-2 \
Oversized Flower Necklace ~1-2 \
Oversized Golden Flower Staff ~3-5 \
Oversized Head Bow ~1-2 \
Oversized Heart Handheld Plushie ~1-2 \
Oversized Nest of Eggs ~1-2 \
Oversized Paint Brush ~1-2 \
Oversized Patchwork Handbag ~1-2 \
Oversized Robotic Eyes buyable through Robot Mynci Key Quest Token ~1-2 \
Oversized Single Flower ~1-2 \
Oversized Squishable Yooyu buyable through NC Archives Fortune Cookie ~1-2 \
Overstuffed Dr. Sloth Handheld Plushie ~1-2 \
Overstuffed Larnikin Handheld Plushie ~1-2 \
Overstuffed Meturf Handheld Plushie ~1-2 \
Overstuffed Polarchuck Plushie Pull Along Sled ~1-2 \
Overstuffed Spring Snowbunny Handheld Plushie ~1-2 \
P \
 \
Packed Beach Background ~1-2 \
Paddle Board and Paddle ~1-2 \
Paint Blob Shower buyable through NC Archives Fortune Cookie ~1-2 \
Paint on Canvas Background ~1-2 \
Painted Flower Contacts ~1-2 \
Painted Flower Gift Box Mystery Capsule ~1-2 \
Painted Negg String Lights ~1-2 \
Painted Planters buyable ~1 \
Painted Stone Shenkuu Floor Tiles \
Painters Supply Table ~1-2 \
Pair of Fabric Rose Shoes ~1-2 \
Paisley Mystery Capsule ~2-3 \
Palm Tree Gift Box Mystery Capsule ~2-3 \
Pandaphant Hoodie buyable through Shenanigifts ~1-2 \
Pandaphant Scarf ~1-2 \
Paneled Krawk Island Wallpaper \
Panicked Tyrannian Citizen buyable through NC Archives Fortune Cookie ~3-4 \
Pansy Shower ~1-2 \
Pant Devil Bopper ~4-8 \
Pant Devil Trousers ~1-2 \
Paper Box String Lights buyable through Shenanigifts ~1-2 \
Paper Flower Garland buyable through Shenanigifts ~1-2 \
Paper Heart Tree ~1-2 \
Paper Hearts Garland ~2 \
Paper Lantern Staff ℗ ~3-4 \
Paper Lantern String Lights buyable ~1 \
Paper Snowflake Forest Background ~1-2 \
Paper Valentine Garland ~2 \
Parade Float Background ~1-2 \
Parchment Garland ~1-2 \
Pardoned Gobbler Trinket ~1-2 \
Parted Branches Garland ~1-2 \
Partially Melted Snowman ~1-2 \
Partially Open Parachute ~1-2 \
Partly Cloudy Hoodie buyable through NC Archives Fortune Cookie ~1-2 \
Pastel Argyle Socks ~1-2 \
Pastel Blue Hair Bow buyable ~1 \
Pastel Blue Spring Shoes ~1-2 \
Pastel Bow Cardigan ~1-2 \
Pastel Braided Wig ~1-2 \
Pastel Christmas Cookie Party Background ~1-2 \
Pastel Coloured Wig and Hat ~1-2 \
Pastel Cotton Candy Cart ~1-2 \
Pastel Flowers Gift Box Mystery Capsule ~1-2 \
Pastel Green Hair ~2-3  \
Pastel Leaf Tree Background ~1-2 \
Pastel Leaves Shower ~1-2 \
Pastel Mushroom Garland buyable ~1 \
Pastel Negg Dress ~2-4 \
Pastel Ombre Trousers ~1-2 \
Pastel Paisley Gift Box Mystery Capsule ~2-3 \
Pastel Pink Chiffon Skirt ℗ ~1-2 \
Pastel Pink Veil Wig ~1-2 \
Pastel Pink Wig ~1-2 \
Pastel Pumpkin Foreground ~1-2 \
Pastel Raindorf Antlers ~1-2 \
Pastel Rose Petal Shower ~1-2 \
Pastel Rose Tulle Dress ~3-5 \
Pastel Spring Negg Facepaint ~1-2 \
Pastel Striped Trousers ~1-2 \
Pastry Shop Background buyable ~1 \
Patapult Patapuff 1-Pack buyable ~1 \
Patapult Patapuff 10-Pack buyable ~4-5 \
Patapult Patapuff 5-Pack buyable ~2-3 \
Patchwork Cargo Shorts ~1-2 \
Patchwork Flowers Foreground ~4-6 \
Patchwork Glitter Chia Plushie ~1-2 \
Patchwork Holiday Winter Coat ~1-2 \
Patchwork Quilt Wings ~1-2 \
Patchwork Staff ~1-2 \
Patchwork Striped Hat ~1-2 \
Patchwork Tiara ~1-2 \
Patchwork Tights and Shoes ~1-2 \
Patchwork Totem Poles ~1-2 \
Patchwork Trousers ~1-2 \
Patchwork Wig ~1-2 \
Path to Ednas Tower Background ~2 \
Patterned Autumn Parka ℗ ~2 \
Patterned Lamp Garland ~1-2 \
Patterned Shadows Background buyable through Shadow Shoyru Key Quest Token ~1-2 \
Patterned Tunic ~1-2 \
Patterned Wrap Shirt ~1-2 \
Paw Print Ferris Wheel ~1-2 \
Paw Print Flag ~1-2 \
Paw Print Purse ~1-2 \
Paw Print String Lights ~1-2 \
Peaceful Conservatory Background ~2 \
Peaceful Garden Background buyable ~1 \
Peaceful Summer Swimming Pool Background ~4 \
Peaceful Tree Garland ~4-5 \
Peaceful Watermill ~1-2 \
Peaceful Winter Trees Background ~1-2 \
Peach Lace Top ~1-2 \
Peak of Terror Mountain Background ~1-2 \
Peapod Dress ~1-2 \
Pearls and Shells Garland ~1-2 \
Pebble Hammer NT \
Peppermint Candy Earrings ~1-2 \
Peppermint Candy Necklace ~1-2 \
Peppermint Contacts ~1-2 \
Peppermint Earmuffs ~1-2 \
Peppermint Facepaint ~2 \
Peppermint Garland ~1-2 \
Peppermint Goodie Bag ~1-2 \
Peppermint Pillars ~1-2 \
Peppermint Queen Dress ~1-2 \
Peppermint Queen Sceptre ~1-2 \
Peppermint Queen Shoes ~3-4 \
Peppermint Queen Wig ~1-2 \
Peppermint Shield ~1-2 \
Peppermint Wings ~1-2 \
Perfect Hair Wig ~2-3 \
Perfect Landing Background ~1-2 \
Perfectly Pastel Mystery Capsule ~2-3 \
Personal Wind Up Butler ~1-2 \
Pest Be Gone Robotic Petpetpets ~2 \
Pet Customisation In Progress Foreground buyable ~1 \
Petal Strewn Staircase Background buyable ~1 \
Petpet Cannonball Skull Shower ~1-2 \
Petpet Carolling Chorus buyable through Shenanigifts ~1-2 \
Petpet Cemetery Background ~3 \
Petpet Goo Blaster ~1-2 \
Petpet in a Slightly Chewed Box ~1-2 \
Petpet Pajamas buyable through NC Archives Fortune Cookie ~1-2 \
Petpet Park Celebration Background ~1-2 \
Petpet Plushie Garland buyable ~1 \
Petpet-Filled Flower Pot Foreground ~1-2 \
Petpetpet Gymnastic Trinket ~1-2 \
Petpetpet on a String ~1-2 \
Phantastic Finds Background ~1-2 \
Phantastic Finds Spooky Magnifying Glass 1-pack \
Phantastic Finds Spooky Magnifying Glass 10-pack \
Phantastic Finds Spooky Magnifying Glass 20-pack \
Phantastic Finds Spooky Magnifying Glass 5-pack \
Phantastic Finds Spring Magnifying Glass 1-pack \
Phantastic Finds Spring Magnifying Glass 16-pack \
Phantastic Finds Spring Magnifying Glass 8-pack \
Phantom Carriage buyable through NC Archives Fortune Cookie ~1-2 \
Phantom of the Background ~40-45 \
Philosophers Wig ~2 \
Photo of Me Background NT buyable ~1 \
Picket Fence Handbag ~1-2 \
Picnic Skirt ~1-2 \
Picnic Thought Bubble ~8-10 \
Pieces of Metal buyable ~1 \
Pig Tail Wig ~1-2 \
Pikis Valentine Goodie Bag ~1-2 \
Pile of Gems buyable ~1 \
Pile of Glowing Skulls ~1-2 \
Pile of Pastel Leaves Foreground ~1-2 \
Piled Up Birthday Gifts ~1-2 \
Pillbox Hat with Veil buyable through Manor Mystery NC Fortune Cookie ~1-2 \
Pillow Cap of Convenience buyable ~1 \
Pin Cushion Doll ~1-2 \
Pinata Earrings ~1-2 \
Pinata Shirt ~1-2 \
Pinball Paddle Frame ~1-2 \
Pinchit Chocolate Ink Dropper NT \
Pinchit Faerie Ink Dropper NT \
Pinchit Ink Bottle NT \
Pinchit Pirate Ink Dropper NT \
Pinchit Snow Ink Dropper NT \
Pine Striped Pullover buyable ~1 \
Pinecone Crown and Wig ~1-2 \
Pink and Blue Decorative Fence Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Pink and Blue Fountain Trinket buyable through NC Archives Fortune Cookie ~1-2 \
Pink and Blue Negg Garland buyable through NC Archives Fortune Cookie ~1-2 \
Pink and Green Swirl Toy Negg ~1-2 \
Pink and Purple Striped Hoodie buyable through NC Archives Fortune Cookie ~2-3 \
Pink and Silver Arm Bracers ~1-2 \
Pink and White Layered Skirt buyable through Shenanigifts ~1-2 \
Pink Armour Wings ~1-2 \
Pink Armoured Trousers ~1-2 \
Pink Bow and Sparkles Headband ~1-2 \
Pink Bruce Key Quest Token buyable ~1 \
Pink Bubblegum Skirt ~1-2 \
Pink Bucket of Clouds ~1-2 \
Pink Candy Striped Gift Wrap NT \
Pink Castle Bed ~2 \
Pink Chomby Key Quest Token buyable ~1 \
Pink Cybunny Key Quest Token buyable ~1 \
Pink Daisy Parasol ~1-2 \
Pink Elephante Key Quest Token buyable ~1 \
Pink Floral Earrings ~1-2 \
Pink Flower Floor Tiles ~2 \
Pink Flower Hair Accessory ~1-2 \
Pink Frosting Wig ~1-2 \
Pink Heart Horns ~1-2 \
Pink Heart Hot Air Balloon ~1-2 \
Pink Ice Cream Bonbons ~8  \
Pink Kadoatie Bicycle buyable through Pink Bruce Key Quest Token ~1 \
Pink Korbat Key Quest Token buyable ~1 \
Pink Lace Changing Table ~2 \
Pink Lace Parasol buyable ~1 \
Pink Lace Rocking Chair ~2 \
Pink Lace Tent Background ~1-2 \
Pink Lemonade Stand Foreground ~1-2 \
Pink Lulu Contacts ~6-7 \
Pink Mohawk ~2 \
Pink Mountain and Cloud Background ~35-40 \
Pink Paint Bucket \
Pink Pastel Boa ~1-2 \
Pink Pencil Skirt buyable through NC Archives Fortune Cookie ~1-2 \
Pink Peony Field Background ℗ ~1-2 \
Pink Pigtail Wig ~1-2 \
Pink Plaid Coat buyable ~1 \
Pink Polka Dot Mystery Capsule [rare collectible : Depends on trader] ~300+ \
Pink Quiggle Key Quest Token buyable ~1 \
Pink Sands Background ~2-3 \
Pink Shooting Star Wand buyable through Pink Quiggle Key Quest Token ~1 \
Pink Springy Fan ~1-2 \
Pink Stripe Hooded Cape buyable through Striped Cybunny Key Quest Token ~1-2 \
Pink Striped Plastic Negg \
Pink Swirly Gift Box Mystery Capsule ~2-3 \
Pink Tasu Flats ~1-2 \
Pink Toy Hoop ~1-2 \
Pink Toy Negg ~1-2 \
Pink Travelling Caravan buyable through Pink Chomby Key Quest Token ~1 \
Pink Uni Rug \
Pink Uni Wallpaper ~2 \
Pink Valentine Crown Wig ~1-2 \
Pink Willow Tree Background buyable through Pink Cybunny Key Quest Token ~1 \
Pins and Paper Necklace ~1-2 \
Pinwheel Gift Box Mystery Capsule ~1-2 \
Pipe and Gear Crown ~2-3 \
Pirate Battle Background ℗ ~2-3 \
Pirate Bunk Background ~1-2 \
Pirate Cannon Mystery Capsule ~3-4 \
Pirate Coral Reef ~1-2 \
Pirate Dress & Jacket ~2-3 \
Pirate Fence ~1-2 \
Pirate Flag NT \
Pirate Flag Wings ~1-2 \
Pirate Garland ~3 \
Pirate Ink Bottle NT \
Pirate Knots Shirt ~1-2 \
Pirate Music Track ~1-2 \
Pirate Navigation Room Background ~1-2 \
Pirate Shovel ~3 \
Pirate Throne Room Background ~2-3 \
Pirate Tutu with Tights and Boots ~1-2 \
Pirates Plunder Frame ~1-2 \
Plaid Aqua Skirt buyable through Patapult ~1-2 \
Plaid Shirt and Jumper buyable ~1 \
Plaid Shirt and Sweater Vest ~2 \
Plaid Shirt Dress ~1-2 \
Plaid Summer Dress ~1-2 \
Plaid Walking Cap buyable through Shenanigifts ~1-2 \
Plain and Simple White Shirt ~1-2 \
Plain and Simple White Trousers ~2 \
Plain Plaid Shirt ~1-2 \
Plain White Bucket \
Plastic Negg Wreath \
Plated Armour Top ~1-2 \
Plated Armour Trousers ~1-2 \
Play Time String Lights ~1-2 \
Playful Clover Shirt ~1-2 \
Playful Fountain Set ℗ ~25 \
Playful Scarecrow Makeup ~3-5 \
Playful Tousled Wig buyable through Patapult ~1-2 \
Playtime in Altador Once Upon a Time Turner ~3-4 \
Pleated Ditrey Skirt ~1-2 \
Pleated Flower Skirt ~1-2 \
Plowed Snow Foreground ~1-2 \
Pluburb Magical Seeds NT \
Plumpy Costume ~1-2 \
Plumpy Costume Hat ~1-2 \
Plumpy Fan Room Background ~1-2 \
Plush Blue Velvet Trousers ~1-2 \
Plush Blue Velvet Tunic ~1-2 \
Plush Green Velvet Trousers ~1-2 \
Plush Green Velvet Tunic ~1-2 \
Plush Heart Scarf ~1-2 \
Plush Heart Wings buyable ~1 \
Plush Nuranna Purse ~1-2 \
Plush Patchwork Umbrella buyable through Plushie JubJub Key Quest Token ~1-2 \
Plush Purple Velvet Trousers ~2 \
Plush Purple Velvet Tunic ~1-2 \
Plush Red Velvet Trousers ~3 \
Plush Red Velvet Tunic ~4 \
Plush Roo Island Rug buyable ~1 \
Plushie Cake Garland ~1-2 \
Plushie Carmariller Garland ~1-2 \
Plushie JubJub Key Quest Token buyable ~1-2 \
Plushie Lolly Wand ~3-4 \
Plushie Mynci Key Quest Token buyable ~1-2 \
Plushie Patchwork Wings buyable through Plushie Mynci Key Quest Token ~1-2 \
Plushie Picnic Spread ~1-2 \
Plushie Slorg Shower buyable through NC Archives Fortune Cookie ~1-2 \
Plushie Whoot Balloon Bouquet ~1-2 \
Plushie Wocky Key Quest Token buyable ~1-2 \
Pogo Stick Trinket buyable through NC Archives Fortune Cookie ~1-2 \
Poinsettia Bouquet ~1-2 \
Poinsettia Face Mask ~1-2 \
Poinsettia Hat ~1-2 \
Poinsettia Patterned Dress ~1-2 \
Poinsettia Pinwheel Wand ~1-2 \
Poinsettia Shower ~5-6 \
Poinsettia Skirt ~1-2 \
Poinsettia Tattoo ~1-2 \
Poinsettia Wings buyable through NC Archives Fortune Cookie ~1-2 \
Poinsettias in Gold Vases Foreground ~1-2 \
Pointy Claw Slippers ~1-2 \
Poisonous Purple and Green Contacts ~1-2 \
Poisonous Purple and Green Skirt ~1-2 \
Poisonous Purple and Green Wig ~1-2 \
Polar Trousers Goodie Bag ~1-2 \
Polarchucks Crossing Sign ~1-2 \
Polka Dot and Flowers Shirt ~1-2 \
Polka Dot Arm Chair ~3 \
Polka Dot Baby Jumpsuit buyable ~1 \
Polka Dot Balloons ~1-2 \
Polka Dot Bandana Wig ~1-2 \
Polka Dot Blouse ~1-2 \
Polka Dot Clouds Garland ~1-2 \
Polka Dot Eyelash Facepaint ~1-2 \
Polka Dot Flowers Foreground ~1-2 \
Polka Dot Gift Box Mystery Capsule ~2-3 \
Polka Dot Holiday Dress ~3-4 \
Polka Dot Mystery Capsule [rare collectible] ~Depends on trader \
Polka Dot Ombre Scarf ~1-2 \
Polka Dot Pumpkins Foreground ~1-2 \
Polka Dot Short-Sleeved Hoodie ~1-2 \
Polka Dot Shower ~1-2 \
Polka Dot Sofa ~4 \
Polka Dot Sparkler ~1-2 \
Polka Dot Spring Skirt ~1-2 \
Polka Dot Striped Mystery Capsule ~4 \
Polka Dot Sunglasses ~1-2 \
Polka Dot Throne ~1-2 \
Polka Dot Tree Swing ~1-2 \
Polka Dot Tutu with Tights and Shoes ~1-2 \
Polka Dot Umbrella ~1-2 \
Polka Dot Veil Wig ~1-2 \
Polka Dotted Magenta Bow Tie ~1-2 \
Pollen Shower ~1-2 \
Pompadour Wig ~1-2 \
Pop-Up Birthday Card Background ℗ ~20 \
Pop-Up Gothic Holiday Card Background ~1-2 \
Pop-Up Halloween Card Background ~1-2 \
Pop-up Techo Fanatic ~1-2 \
Pop-Up Valentine Card Background ~1-2 \
Popcorn and Candy Garland ~1-2 \
Popcorn Maker ~1-2 \
Poppable Bunch of Balloons ~1-2 \
Popping Bubble Gum ~1-2 \
Poppy Foreground ~1-2 \
Poptart Ventriloquist Dummy NT buyable ~1 \
Portable Pot of Gold ~1-2 \
Pot of Flowers NT \
Pot of Neopoints Background ~1-2 \
Potato Themed Ride Background ~1-2 \
Potion Vines Garland ~8-10 \
Potionery Table Foreground ~3-4 \
Potions and Spells Room Background ~2-3  \
Potted Easter Negg Tree buyable through NC Archives Fortune Cookie ~1-2 \
Potted Faerie Bean Plant ~1-2 \
Potted Flower Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Potted Gold Frame ~1-2 \
Potted Halloween Branches ~1-2 \
Potted Pink Orchid ~1-2 \
Potted Plant Wings ~1-2 \
Potted Plants Foreground ~1-2 \
Potted Poinsettia ~1-2 \
Powder Blue Hat and Wig ~1-2 \
Powdered Wig ~1-2 \
Powerful Force Field ~1-2 \
Precious Kadoatie Purse ~1-2 \
Premium Collectible: Birthday Tent Background ~1-2 \
Premium Collectible: Blonde Anchor Wig ~1-2 \
Premium Collectible: Blue Moon Field Background ~5-8 \
Premium Collectible: Butterfly Bouquet ~1-2 \
Premium Collectible: Colourful Heart Gate Foreground ~1-2 \
Premium Collectible: Entryway to Summer Background ~1-2 \
Premium Collectible: Flared Riding Jacket ~1-2 \
Premium Collectible: Flowering Bicycle ~1-2 \
Premium Collectible: Glass Raindrops Suncatcher Garland ~3-5 \
Premium Collectible: Glowing Contacts ~1-2 \
Premium Collectible: Heart Contacts ~3 \
Premium Collectible: Heart in the Clouds Garland ~1-2 \
Premium Collectible: Hidden Alley Background ~1-2 \
Premium Collectible: Holiday Boat Ride Background ℗ ~4-5 \
Premium Collectible: Knitted Shirt and Tie ~1-2 \
Premium Collectible: Lighted Tree House Background ~1-2 \
Premium Collectible: Long Sweater with Scarf ~1-2 \
Premium Collectible: Lovely Lilac Stairs Background ℗ ~3 \
Premium Collectible: Lucky Emerald Carriage ~1-2 \
Premium Collectible: Metal Trees Foreground ~1-2 \
Premium Collectible: Opalescent Wig ~1-2 \
Premium Collectible: Overgrown Clover Umbrella ~1-2 \
Premium Collectible: Oversized Flower Rug ~1-2 \
Premium Collectible: Peaceful Water Fountain Background ~3 \
Premium Collectible: Pretty Chocolate Bodice ~1-2 \
Premium Collectible: Radiant Flower String Lights ~2-3 \
Premium Collectible: Red Gingham Top ~1-2 \
Premium Collectible: Silver Swirl Contacts ~1-2 \
Premium Collectible: Snowy Gazebo ~1-2  \
Premium Collectible: Sparkling Floral Vine Staff ~1-2 \
Premium Collectible: Spiky Black Lace Cape ~2-3 \
Premium Collectible: Spilling Flower Pot Foreground ~2-4  \
Premium Collectible: Spooky Brightvale Library Background ~1-2 \
Premium Collectible: Stone Bridge Foreground ~2-4 \
Premium Collectible: Sturdy Work Boots ~1-2 \
Premium Collectible: Summer Flower Tree ~1-2 \
Premium Collectible: Summer Folly Background \
Premium Collectible: Sunflower Fields Background ~1-2 \
Premium Collectible: Sunny Day Skirt ~1-2 \
Premium Collectible: Taelia Handheld Plushie ~1-2 \
Premium Collectible: Ultimate Cloud Bow ~1-2 \
Premium Collectible: Valentine Glade Background ~2-3 \
Premium Collectible: Whimsical Fall Hood and Wig ~1-2 \
Premium Collectible: Wooden Shamrock Handheld ~1-2  \
Present Conveyor ~1-2 \
Present Hat ~1-2 \
Pressed Flower Wings ~1-2 \
Pretty Anchor Earrings ~1-2 \
Pretty Anchor Necklace ~1-2 \
Pretty Blue Faerie Shirt ~1-2 \
Pretty Blue Plaid Skirt ~1-2 \
Pretty Chef Bonnet ~1-2 \
Pretty Daisy Gift Box Mystery Capsule ~1-2 \
Pretty Dandelion Bouquet ~1-2 \
Pretty Dark Wig NT buyable ~1 \
Pretty Floral Pomanders ~1-2 \
Pretty Flower Easter Coat ~1-2 \
Pretty Flower Headband buyable ~1 \
Pretty Flower Light buyable through Faerie Acara Key Quest Token ~1-2 \
Pretty Flower Purse ~1-2 \
Pretty Gardening Apron ~1-2 \
Pretty Green Faerie Shirt ~1-2 \
Pretty Green Filigree Mask ~1-2 \
Pretty Hanging Plant ~1-2 \
Pretty Holiday Cardigan ~1-2 \
Pretty Lace Apron ~2 \
Pretty Little Daisy ℗ ~5-7 \
Pretty Negg Dress buyable through NC Archives Fortune Cookie ~2 \
Pretty Negg Gift Wrap NT \
Pretty Orange Filigree Mask ~1-2 \
Pretty Pastel Shoes & Tights buyable through NC Archives Fortune Cookie ~1-2 \
Pretty Patchwork Dress ~1-2 \
Pretty Peppermint Gift Wrap NT \
Pretty Petpet Coconut Purse ~1-2 \
Pretty Pink Bow Wig ~1-2 \
Pretty Pink Heart Dress ~3 \
Pretty Pink Heart Rug \
Pretty Pink Wig buyable through NC Archives Fortune Cookie ~2-3 \
Pretty Plaid Shoes ~1-2 \
Pretty Poinsettia Purse NT buyable ~1 \
Pretty Poinsettia Trees ~1-2 \
Pretty Pointy Hat ~1-2 \
Pretty Purple Faerie Shirt ~1-2 \
Pretty Purple Filigree Mask ~1-2 \
Pretty Purple Pinwheel Staff buyable through NC Archives Fortune Cookie ~1-2 \
Pretty Red Faerie Shirt ~1-2 \
Pretty Red Valentine Mask ~1-2 \
Pretty Rock Wall Background ~1-2  \
Pretty Shell Chair ~1-2 \
Pretty Sleep Mask ~1-2 \
Pretty Spring Flower Foreground ~3-4 \
Pretty Spyders Web Wig ~1-2 \
Pretty Swirl Skis ~1-2 \
Pretty Tropical Lagoon Background buyable ~1 \
Pretty Tulip Foreground ~4 \
Pretty Valentine Shoes ~1-2 \
Pretty White Filigree Mask ~1-2 \
Pretty Witch Hat ~1-2 \
Pretty Wonderland Dress ~1-2 \
Pretty Yellow Faerie Shirt ~1-2 \
Pretzel Bakery Background ~2 \
Pretzel with Melted Cheese \
Prince Jazan Collectors Headdress ~3 \
Princess Amira Collectors Arm Cuffs ~3-5 \
Princess Hat ~1-2 \
Princess Lunara Collectors Dress ~3-5 \
Princess Lunara Collectors Parasol ~2-4 \
Princess Star Tiara ~1-2 \
Princess Vyssa Collectors Wig ~2 \
Princess Wig with Iron Crown ~1-3 \
Printed Chiffon Dress ~1-2 \
Printed Damask Layered Skirt ~1-2 \
Printed Holiday Sweater ~1-2  \
Prissy Miss Bow buyable ~1 \
Prissy Miss Snowflake Dress ~5-7 \
Prissy Miss Usuki Collector Dress ~1-2 \
Prissy Miss Valentine Dress ~2-4 \
Pristine Tennis Skirt ~1-2 \
Pristine White Snowflake Stole ~12-15 \
Professional Mining Helmet ℗ ~10 \
Propped Up Coffin ~1-2 \
Protective Force Field ~1-2 \
Psellia Wig ℗ ~2-3 \
Puffy Jewel Tone Vest and Shirt buyable through Wonderclaw ~1-2 \
Puffy Orange Vest ~1-2 \
Puffy Snowsuit ~1-2 \
Puffy Vest and Gingham Shirt buyable ~1 \
Pull Along Toy Cannon NT buyable ~1 \
Pulsing Brain Tree Hat ~1-2 \
Pumpkin Armour ~2 \
Pumpkin Carriage buyable ~1 \
Pumpkin Face Paint ~1-2 \
Pumpkin Faerie Dress ~1-2 \
Pumpkin Faerie Gloves ~5 \
Pumpkin Faerie Slippers ~1-2 \
Pumpkin Faerie Wig ~1-2 \
Pumpkin Gift Box Mystery Capsule ~3-4 \
Pumpkin Hanging Lantern ~1-2 \
Pumpkin Hat ~1-2 \
Pumpkin Helmet ~1-2 \
Pumpkin Paper Lanterns ~15-25 \
Pumpkin Patch Background ~1-2 \
Pumpkin Patch Gift Wrap NT \
Pumpkin Seeds and Guts Shower ~1-2 \
Pumpkin Snowman ~1-2 \
Pumpkin String Lights ~2-3 \
Pumpkin Sword ~1-2 \
Pumpkin Vine Wings ~1-2 \
Punchbag Bob Punching Bag ~3 \
Puppet Theatre ~10-12 \
Pure Ice Sword ~1-2 \
Purple and Glitter Makeup ~2 \
Purple and Pink Lamp Trinket ~1-2 \
Purple Crystal Shard Staff buyable through Patapult ~1-2 \
Purple Eizzil Handheld Plushie ~1-2 \
Purple Faerie Tale Wings ~1-2 \
Purple Festive Balloons Goodie Bag ~1-2 \
Purple Flower Ball Staff buyable ~1 \
Purple Flower Embroidiery Dress ~1-2 \
Purple Flowering Vine Wings ~1-2 \
Purple Flowers Foreground buyable through Purple Kau Key Quest Token ~1 \
Purple Grundo Flag ~8 \
Purple Highlight Bob Wig buyable through Purple Kiko Key Quest Token ~1 \
Purple Hoop Skirt ~1-2 \
Purple Kau Key Quest Token buyable ~1 \
Purple Kiko Key Quest Token buyable ~1 \
Purple Monster Face Paint ~1-2 \
Purple Niptor Contacts ~1-2 \
Purple Paisley Skirt ℗ ~2 \
Purple Pastel Gingham Dress ~1-2 \
Purple Perilous Catacomb Magical Scroll \
Purple Petals Parasol ~1-2 \
Purple Plaid Shirt and Waistcoat buyable ~1 \
Purple Satin Purse ~12 \
Purple Scorchio Key Quest Token buyable ~1 \
Purple Skis ~3 \
Purple Spyder Web Mask buyable through NC Archives Fortune Cookie ~1-2 \
Purple Star 3rd Birthday Gram NT \
Purple String Mittens ~1-2 \
Purple Stripe Night Shirt ~1-2 \
Purple Velvet Curtains buyable through Faerie Ixi Key Quest Token ~1-2 \
Purple Warlock Battle Wings ~1-2 \
Purple Winter Gift Mystery Capsule ~5 \
Putrid Green Face Paint ~1-2 \
PVC Pipe Flower Foreground ~1-2 \
Q \
 \
Qasalan Expellibox Background ~6 \
Qasalan Mummy Collectors Shirt ~1-2 \
Quaint Gardening Shed ~1-2 \
Quaint Little Doll House ~4 \
Queen Buzzer Crown Wig ~1-2 \
Queen Buzzer Gown ~1-2 \
Queen Buzzer Sceptre ~2 \
Queen Buzzer Wings ~3 \
Queen of Green Caplet ~3 \
Queen of Green Dress ~2 \
Queen of Green Wig ~1-2 \
Queen of Hearts Apron ~1-2 \
Queen of Hearts Dress ~3 \
Quest for Knowledge Boots ~70 \
Quest for Knowledge Library Background ~13-14 \
Quest for Knowledge Mystery Capsule ~12-15 \
Quick-Change El Picklesaur ~7 \
Quiet Beach Path Background ℗ ~2-3 \
Quilted Brown Boots buyable through Brown Uni Key Quest Token ~1 \
Quilted Dress with Trim ~1-2 \
Quilted Zippers Background ~1-2 \
Quilting Squares buyable ~1 \
Quizzical Whoot on a Branch ~2-3 \
R \
 \
Radiant Flower Skirt ~1-2 \
Radiant Jewel Toned Wings buyable through Wonderclaw ~1-2 \
Radiant Pink Wig with Gothic Headband ~2 \
Radiant Sun Rise Background ℗ ~2-3 \
Radiant Sunflower Arbour ~10-15 \
Radiant Wig and Crown buyable ~1 \
Radioactive Toxic Shroom ~5-6 \
Rag Doll Yooyu Plushie buyable through NC Archives Fortune Cookie ~1-2 \
Ragged Red Shirt ~1-2 \
Ragged Red Trousers ~1-2 \
Ragged Skeleton Wings ~1-2 \
Ragged Spectres Cape ~1-2 \
Ragtime Music Track ~1-2 \
Rain and Flowers Thought Bubble ~3 \
Rain Cloud-Covered Sun ~1-2 \
Rain Making Device ~1-2 \
Rain on a Window Foreground ~1-2 \
Rain Puddle Foreground buyable ~1 \
Rain Shower ℗ ~2 \
Rainboot Vases ~1-2 \
Rainboots and Tights ~1-2 \
Rainbow After the Storm ~1-2 \
Rainbow Blumaroo Key Quest Token buyable ~1-2 \
Rainbow Butterflies Garland ~1-2 \
Rainbow Butterfly Shower ℗ ~2 \
Rainbow Cardigan ~1-2 \
Rainbow Chandelier ~1-2 \
Rainbow Chomby Key Quest Token buyable ~1-2 \
Rainbow Colour Changing Contacts ~1-2 \
Rainbow Colours Shower ~1-2 \
Rainbow Confetti Tree ~1-2 \
Rainbow Cupcake Purse ~1-2 \
Rainbow Daisy Bouquet ~1-2 \
Rainbow Daisy Foreground ~1-2 \
Rainbow Drape Dress ~1-2 \
Rainbow Eye Facepaint ~1-2 \
Rainbow Facepaint ~1-2 \
Rainbow Feather Wings buyable ~1 \
Rainbow Field Background ~2  \
Rainbow Field of Daisies Background buyable through NC Archives Fortune Cookie ~2 \
Rainbow Fountain Background buyable ~1 \
Rainbow Gloves ~4-6 \
Rainbow Highlight Wig ~1-2 \
Rainbow Lane Background ~1-2 \
Rainbow Library Backround ~1-2 \
Rainbow Moustache and Cloud Beard ~1-2 \
Rainbow Mystery Capsule ~2-3 \
Rainbow Ocean Waves ~1-2 \
Rainbow Pebble Stream Foreground buyable ~1 \
Rainbow Petal Shower ~2-3 \
Rainbow Rain Boots ~1-2 \
Rainbow Rain Shower buyable ~1 \
Rainbow Rain Slicker ~1-2 \
Rainbow Shower ~1-2 \
Rainbow Sleigh Bells buyable ~1 \
Rainbow Smock ~1-2 \
Rainbow Spring NT \
Rainbow Stone Path ~1-2 \
Rainbow Sunglasses buyable through Rainbow Blumaroo Key Quest Token ~1-2 \
Rainbow Sunset Background ~1-2 \
Rainbow Tears Facepaint buyable ~1 \
Rainbow Tiara ~1-2 \
Rainbow Tights and Sparkly Shoes ~1-2 \
Rainbow Umbrella \
Rainbow Uni Horn ~2-3 \
Rainbow Watercolour Gift Box Mystery Capsule ~1-2 \
Rainbow Watering Can ~2 \
Rainbow Wax Shield ~1-2 \
Rainbow Wax Sword ~3 \
Rainbow Whoot Hat ~1-2 \
Rainbow Wocky Key Quest Token buyable ~1-2 \
Raindorf Ears ~1-2 \
Raindorf Facepaint ~3 \
Raindorf Gift Box Mystery Capsule ~3-4 \
Raindorf Goodie Bag ~1-2 \
Raindorf Handheld Plushie ~1-2 \
Raining Hearts Umbrella ~1-2 \
Rainy Day Cloud buyable ~1 \
Rainy Day Mystery Capsule ~8-10 \
Rainy Day Umbrella ~6-9 \
Rasalas Collectors Robe ~1-2 \
Ray Gun Shower buyable through NC Archives Fortune Cookie ~1-2 \
Ray of Light Background ~2-4 \
REAL Chandelier Earrings ~1-2 \
Really Ripe Banana buyable ~1 \
Really Warm Holiday Mittens ~2 \
Rebel Spyder Vest buyable through Wonderclaw ~1-2 \
Rebellious Valentine Wig ℗ ~2 \
Recovering Heart Wings ~1-2 \
Red Acara Key Quest Token buyable ~1 \
Red and Black Color Block Skirt buyable ~1 \
Red and Black Striped Fingerless Gloves ~2 \
Red and Green Polka Dot Tights and Shoes ~1-2 \
Red and White Plaid Shirt ~1-2 \
Red and White Striped Socks ~1-2 \
Red Bell-bottom Trousers ~1-2 \
Red Candle and Flower Foreground buyable through Shenanigifts ~1-2 \
Red Chevron Umbrella buyable ~1 \
Red Contacts ~2 \
Red Eye Patch Mask buyable through Red Scorchio Key Quest Token ~1 \
Red Feather Valentine Wings ~2 \
Red Gypsy Skirt ~1-2 \
Red Heart Earmuffs ~1-2 \
Red Heart Vest and Shirt ~1-2 \
Red Holiday Crácker Gram NT \
Red Holiday Ornament Wings ~1-2 \
Red Ixi Key Quest Token buyable ~1 \
Red Lace Party Dress ~1-2 \
Red Mystery Capsule \
Red NC Mall Second Birthday Goodie Bag ~1-2 \
Red Neck Tie and Collar ~1-2 \
Red Polka Dot Shirt ~1-2 \
Red Polka Dot Skirt ~1-2 \
Red Poppy Field Background ~1-2  \
Red Pteri Handheld Plushie buyable through Red Pteri Key Quest Token ~1 \
Red Pteri Key Quest Token buyable ~1 \
Red Ribbon Wig ~1-2 \
Red Ruffle Apron Dress ~2 \
Red Satin Holiday Gloves ~1-2 \
Red Scorchio Key Quest Token buyable ~1 \
Red Shirt and Sequin Stripes Jacket ~1-2 \
Red Stripe Wallpaper \
Red Suede Booties buyable through Patapult ~1-2 \
Red Sweater and Plaid Scarf ~1-2 \
Red Uni Key Quest Token buyable ~1 \
Red Vampire Contacts ~1-2 \
Red Velvet Birthday Cake ~6-10 \
Red Velvet Holly Gloves ~3 \
Red Velvet Valentines Gown ~1-2 \
Red Wagon Background ~2-3 \
Red Warlock Battle Wings ~1-2 \
Red with White Polkadot Umbrella buyable through Red Uni Key Quest Token ~1 \
Reed Cannon NT \
Refashioned Denim Top \
Referee Smasher buyable through NC Archives Fortune Cookie ~1-2 \
Reflective Cloud Sunglasses ~1-2 \
Regal Altador Dress buyable ~1 \
Regal Brightvale Bed buyable ~1-2 \
Regal Brightvale Wallpaper \
Regal Facepaint ~2 \
Regal Gemstone Staff ~1-2 \
Regal Lost Desert Bed buyable ~1-2 \
Regal Sequin Dress ~1-2 \
Regal Shenkuu Bed buyable ~1-2 \
Regal Valentine Dress ~1-2 \
Regal Valentine Firework Wand ~3 \
Regal Valentine Wig ~1-2 \
Regal Valentine Wings ~1-2 \
Regimental Jacket ~1-2 \
Regulation Meridellian Chainmail ~1-2 \
Regulation Meridellian Helmet ~1-2  \
Regulation Meridellian Lance ~2-4 \
Regulation Meridellian Lowers ~1-2 \
Regulation Meridellian Shield ~2-4 \
Reign of Coltzan Mystery Capsule ~2-3 \
Remember When Thought Bubble NT buyable ~1 \
Reslens Enchanted Planetarium Day Ticket  \
Reslens Enchanted Planetarium Night Ticket ~10-15  \
Respectable Shirt and Waistcoat ~1-2 \
Resplendent Wings ~1-2 \
Rest In Peace Wreath Garland buyable through NC Archives Fortune Cookie ~1-2 \
Rest in Pieces of Eight Garland ~2 \
Retired Ancient Halloween Mystery Capsule ~1-2 \
Retired Argyle Green Shop Mystery Capsule ~1-2 \
Retired Blinking Halloween Shop Mystery Capsule \
Retired Blue Summer Shop Mystery Capsule ~2 \
Retired Festive Celebrations Mystery Capsule ~1-2 \
Retired Friendly Gobbler Mystery Capsule \
Retired Holiday Tree Mystery Capsule ~1-2 \
Retired Spring Pretty in Pink Mystery Capsule ~1-2 \
Retired Valentine Mystery Capsule ~1-2 \
Rhinestone Glitter Dress ~1-3 \
Ribbon Faerie Head Wreath ~1-2 \
Ribbon Masquerade Mask ~1-2 \
Ribbon Negg Staff ~1-2 \
Rich Emerald Wig buyable through Patapult ~1-2 \
Rich Golden Eye Makeup ~25-30 \
Ringmaster Coat ~1-2 \
Ringmaster Top Hat and Wig ~1-2 \
Roaming Wind Up Slorg ~3-4 \
Roasting Marshmallow on a Stick ~1-2 \
Robertas Collectors Contacts ~7-8 \
Robertas Collectors Veiled Wig ~1-2 \
Robot Destruction Background ~1-2 \
Robot JubJub Key Quest Token buyable ~1-2 \
Robot Kacheek Key Quest Token buyable ~1-2 \
Robot Mynci Key Quest Token buyable ~1-2 \
Robot Petpet Mobile buyable through NC Archives Fortune Cookie ~1-2 \
Robot Petpet Nesting Dolls buyable through Robot JubJub Key Quest Token ~1-2 \
Robotic Wings buyable through Robot Kacheek Key Quest Token ~1-2 \
Rock Candy Staff ~1-2 \
Rock Kreludor Floor Tiles \
Rock Pool Tikis Background ~1-2 \
Rock Pool Treasure Map ~2 \
Rock Star Microphone ~2 \
Rocking Uni Trinket ~1-2 \
Rocks and Water Foreground ~1-2 \
Roll of Lights buyable ~1 \
Rolled Sleeves Shirt with Anchor Bow Tie ~1-2 \
Rolled Sleeves Summer Shirt ~1-2 \
Rolled Up Overalls ~1-2 \
Rolling Bales of Hay ~1-2 \
Rolling Clouds Effect buyable through Rolling Clouds Magic Elixir ~1 \
Rolling Clouds Magic Elixir buyable ~1 \
Rolling Fog Contacts ~1-2 \
Rolls of Felt buyable ~1 \
Romantic Lake Background ~1-2 \
Romantic Music Box ~1-2 \
Romantic Music Track ~1-2 \
Romantic Pink Gift Wrap NT \
Roo in the Box ~1-2 \
Roo Island Altador Cup Jersey ~1-2 \
Roo Island Altador Cup Locker Room Background ~1-2 \
Roo Island Altador Cup Team Spirit Banners ~1-2 \
Roo Island Bug Antennae Wig ~1-2 \
Roo Island Bug Cardigan ~1-2 \
Roo Island Bug Eyes ~1-2 \
Roo Island Bug Handheld Plushie ~1-2 \
Roo Island Bug Wings ~1-2 \
Roo Island Colour Block Floor Tiles \
Roo Island Countryside Background ~1-2 \
Roo Island Dice Bed buyable ~1-2 \
Roo Island Dice Desk buyable ~1 \
Roo Island Dice Lamp \
Roo Island Die Wallpaper \
Roo Island Gates Foreground ~1-2 \
Roo Island Merry Go Round Background ~3-4 \
Roo Island Room in a Bag buyable ~5 \
Roo Island Team Braided Wig ~1-2 \
Roo Island Team Crazy Wig ~1-2 \
Roo Island Team Cuffs ~1-2 \
Roo Island Team Face Makeup ~1-2 \
Roo Island Team Foam Finger \
Roo Island Team Glitter Face Paint ~1-2 \
Roo Island Team Hat ~1-2 \
Roo Island Team Jester Hat ~2-3 \
Roo Island Team Mask ~1-2 \
Roo Island Team Pom Pom ~1-2 \
Roo Island Team Road to the Cup Background ~1-2 \
Roo Island Team Scarf ~3 \
Roo Island Team Sport Shirt ~1-2 \
Roo Island Team Trousers and Cleats ~1-2 \
Roo Island Team Vuvuzela ~1-2 \
Roo Island Telescope \
Roo Island Throne Room Background ~2 \
Roo Island Toy Merry Go Round buyable through NC Archives Fortune Cookie ~1-2 \
Rooftop Gargoyles Background ~1-2 \
Roothless Thought Bubble ~3-4 \
Rose and Poinsettia Vases ~1-2 \
Rose Belt ~1-2 \
Rose Garden Background buyable ~1 \
Rose Gold Markings ~2-3 \
Rose Gold Party Shoes ~1-2 \
Rose Gold Vases with Flowers ~2-4 \
Rose Gold Wig ~1-2 \
Rose Petal Wings ~2 \
Rose Rug \
Rose String Lights buyable ~1 \
Rose Sweetheart Gram NT \
Roses and Pine Cones Garland ~1-2 \
Roses Twist Wig ~1-2 \
Rosette Knitted Jumper buyable through Patapult ~1-2 \
Rosie Dress ~2-3 \
Rosy Cheeks Face Paint buyable through Flower Fun Superpack ~3 \
Rotating Flower Night Light ~1-2 \
Rotating Light Cube buyable through Patapult ~1-2 \
Rough Game Bandage buyable through NC Archives Fortune Cookie ~2-3 \
Row of Palm Trees ~1-2 \
Roxton Colchester III Key Quest Token ~35-40 \
Roxton Colchester III Slippers ~2-3 \
Royal Blue Bathing Suit ~1-2 \
Royal Box Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Royal Meridell Floor Tiles \
Royal Neopian Background ~1-2  \
Royal Qasalan Cloak ~1-2 \
Royal Velvet Wings buyable through NC Archives Fortune Cookie ~2 \
Rubber Mallard Pond Foreground buyable through Yellow Usul Key Quest Token ~1 \
Ruby Carolling Dress buyable through Shenanigifts ~2-3 \
Ruby Foliage Shirt ~1-2 \
Ruffled Blue Shirt ~1-2 \
Ruffled Gothic Silk Wrap buyable through NC Archives Fortune Cookie ~1-2 \
Ruffled Grey Shrug buyable ~1 \
Ruffled Snowflake Skirt ~1-2 \
Ruffled Tights and Boots ~1-2 \
Ruffles and Rivets Jacket ~1-2 \
Ruffly Negg Apron ~1-2 \
Rugged Shirt and Vest ~1-2 \
Rugged Work Boots buyable ~1 \
Rugged Work Shirt and Vest buyable ~1 \
Ruined Faerie Festival Background ~1-2 \
Ruler of Measuring Might ~1-2 \
Runaway Rocket Boots ~1-2 \
Runway Background ~1-2 \
Rustic Arbor with Flowers Frame buyable through Shenanigifts ~1-2 \
Rustic Canoe Background ~1-2 \
Rustic Clock Garland ~1-2 \
Rustic Farm Gate Foreground ~1-2 \
Rustic Iron Trellis ~1-2 \
Rustic Outdoor Theatre Background ~1-2 \
Rustic Polka Dot Kitchen Background ~2-3 \
S \
 \
Safari Scarf Wrap and Wig ~1-2 \
Safety Pin Mosaic Wig ~1-2 \
Safety Pins buyable ~1 \
Safety Scissors buyable ~1 \
Sailboat Top Foreground ~1-2 \
Sakhmet Battle Supplies Collectors Desert Wrap ~1-2 \
Salt and Pepper Wig ~1-2 \
Sand Castle Foreground ~1-2 \
Sand Foreground ~2-3 \
Sand Sandals Foreground ~1-2 \
Sandwitch ~1-2 \
Sandy Feet ~1-2 \
Sapphire Shield buyable through Wonderclaw ~1-2 \
Sassy Negg Wig ~2-3 \
Sassy Red Wig buyable ~1 \
Satin Ribbon Wood Staff ~1-2 \
Scaffolding Light Columns ~1-2 \
Scalloped Trousers ~1-2 \
Scaly Sea Monster Facepaint ~5-6 \
Scarred Pirate Eye ~1-2 \
Scary Black Clouds ~1-2 \
Scary Eye Staff ~1-2 \
Scary Petpet Cage \
Scary Scarecrow ~1-2 \
Scary Story Night Foreground ~1-2 \
Scattered Glitter Foreground ℗ ~3-4 \
Scattered Light Shower ~10-15 \
Scenic Maraqua Floor Tiles \
Scenic Purple Dusk Background buyable through Purple Scorchio Key Quest Token ~1 \
Scholarly Robe ~2-3 \
Scholars Lounge Room Background ~1-2 \
School Books with Strap ~3-4 \
School Desk With Books ~1-2 \
School House Background ~1-2 \
School Library Background ~1-2 \
Schools in Session Background buyable ~1 \
Scorchio Thief Handheld Plushie ~1-2 \
Scored Goal Background ~1-2 \
Scrapbooking Paper buyable ~1 \
Screaming Mask ~1-2 \
Scritch Scratch Makeup ~2-3  \
Sculpted Haunted Woods Sofa buyable ~1 \
Sculpted Heart Moustache ~1-2 \
Scurvy Pirate Jacket buyable ~1 \
Sea Foam Green Wig ~1-2 \
Sea Glass Chandelier ~10-15  \
Sea Shell Foreground ~1-2 \
Sealed Gateway Background buyable ~1 \
Sealed with a Gift Valentine Opener 1-Pack ~1-2 \
Sealed with a Gift Valentine Opener 7-Pack ~3 \
Search for Neggs Foreground ~1-2 \
Seashell Anchor Shield ~1-2 \
Seashell Bonnet ~1-2 \
Seashell Bouquet ~1-2 \
Seashell String Lights ~1-2 \
Seashell Throne ~3-4 \
Seashell Tutu and Tights ~1-2 \
Seasick Background ~4-6 \
Seasonal Autumn Dress ~1-2 \
Seasonal Autumn Rake ~1-2 \
Seasonal Autumn Shower ~1-2 \
Seasonal Gazebo Path Background ~2 \
Seasonal Spring Hat and Wig ~2 \
Seaweed Bubble Shower ~2-4 \
Seaweed Curtains ~1-2 \
Seaweed Wig ~1-2 \
Second NC Mall Fifth Birthday Goodie Bag ~1-2 \
Second NC Mall Sixth Birthday Goodie Bag ~1-2 \
Secret Admirer Bouquet ~1-2 \
Secret Admirer Jacket ~1-2 \
Secret Admirer Shoes ~2-3 \
Secret Admirer Trousers ~1-2 \
Secret Admirer Wig ~1-2 \
Secret Garden Pathway Background ~1-2 \
Secret Meepit Stache 7-Pack \
Secret Meepit Stache Plan 11-Pack \
Secret Meepit Stache Plan 2-Pack \
Secret Meepit Stache Retirement Bindle #1 ~3-4 \
Secret Meepit Stache Retirement Bindle #2 ~3-4 \
Secret Meepit Stache Retirement Bindle #3 ~3-4 \
Secret Meepit Stache Retirement Bindle #4 ~3-4 \
Secret Meepit Stache Retirement Bindle #5 ~3-4 \
Seed Pod Shower ~1-2 \
Seeing Hearts Mallet ~1-2 \
Seersucker Trousers ~1-2 \
Self-Watering Flowers ~1-2 \
Semi-Impressive Sandcastle ~10 \
Sequin Patch Top ~1-2 \
Sequin Patterned Leggings buyable ~1 \
Serene Fountain ~1-2 \
Serene River Background buyable ~1 \
Series of Tubes Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Set Anchor Staff ~1-2 \
Seven Colours of the Rainbow Background ~3 \
Sewing Kit Garland buyable through Plushie Wocky Key Quest Token ~1-2 \
Sewing Room Background ~25-30 \
Shaded Garden Path Background ~1-2 \
Shadow Shoyru Key Quest Token buyable ~1-2 \
Shadow Usul Hoodie ~1-2 \
Shadowy Forest Wig ~1-2 \
Shadowy Hands ~1-2 \
Shaking Bale of Hay ~1-2 \
Shallow Pirate Grave Foreground ~1-2 \
Shallow Waves Foreground ℗ ~2 \
Shamrock Contacts ~1-2 \
Shamrock Face Paint ~1-2 \
Shamrock Pinned Wig buyable ~1 \
Shamrock Shield ~1-2 \
Shamrock Tree Foreground ~1-2 \
Shamrock Vine Arbour ~10-15  \
Shamrock Watermill ~1-2 \
Shattering Ice Background buyable through Wonderclaw ~1-2 \
Sheer Blue Wings ~2 \
Sheer Sparkling Quadrant Wings ~2 \
Shelf of Lost Desert Curios Garland ~1-2 \
Shell Coif Wig ~1-2 \
Shell Shield ~1-2 \
Shell Wings ~2 \
Shelves of Potions Trinket ~1-2 \
Shenanigifts Invitation 1-Pack buyable ~1 \
Shenanigifts Invitation 10-Pack buyable ~4-5 \
Shenanigifts Invitation 5-Pack buyable ~2-3 \
Shenkuu Adventure Tunic ~1-2 \
Shenkuu Altador Cup Jersey ~1-2 \
Shenkuu Altador Cup Locker Room Background ~1-2 \
Shenkuu Altador Cup Team Spirit Banners ~1-2 \
Shenkuu Apprentice Tunic ~1-2 \
Shenkuu Bridge Foreground ~1-2 \
Shenkuu Ceremonial Staff ~1-2 \
Shenkuu Covered Porch \
Shenkuu Entrance Garland ~4-5 \
Shenkuu Fence buyable ~1 \
Shenkuu Fence 10-Bundle buyable ~1 \
Shenkuu Flower Hair Clip ~1-2 \
Shenkuu Garden Dress ~1-2 \
Shenkuu Garden Parasol ~3-4 \
Shenkuu Garden Tights and Shoes ~1-2 \
Shenkuu Garden Wig ~1-2 \
Shenkuu Growing Flower Vine ~1-2 \
Shenkuu Handheld Fan ~2 \
Shenkuu JubJub Power Bounce Suitcase ~2-3 \
Shenkuu JubJub Power Bounce Token 1-pack \
Shenkuu JubJub Power Bounce Token 10-pack ~2-3 \
Shenkuu JubJub Power Bounce Token 5-pack ~2 \
Shenkuu Lantern Capsule ~30-35 \
Shenkuu Lantern Garland buyable ~1 \
Shenkuu Lantern Sky Garland ~1-2 \
Shenkuu Lunar Festival Baby Dress buyable ~1 \
Shenkuu Performer Headdress ~1-2 \
Shenkuu Performer Mask ~1-2 \
Shenkuu Performer Prop Sword ~3 \
Shenkuu Performer Shoes ~1-2 \
Shenkuu Performer Wardrobe ~1-2 \
Shenkuu River Background ~1-2 \
Shenkuu River Rush Winged Talisman [rare collectible : Depends on trader] ~800+ \
Shenkuu River View Background ~1-2 \
Shenkuu Rock Garden Background ~1-2  \
Shenkuu Tangram Garland buyable through NC Archives Fortune Cookie ~1-2 \
Shenkuu Tangram Shower ~1-2 \
Shenkuu Team Braided Wig ~1-2 \
Shenkuu Team Crazy Wig ~1-2 \
Shenkuu Team Cuffs ~1-2 \
Shenkuu Team Face Makeup ~1-2 \
Shenkuu Team Foam Finger ~1-2 \
Shenkuu Team Glitter Face Paint ~1-2 \
Shenkuu Team Hat ~1-2 \
Shenkuu Team Jester Hat ~1-2 \
Shenkuu Team Mask ~1-2 \
Shenkuu Team Pom Pom ~1-2 \
Shenkuu Team Road to the Cup Background ~1-2 \
Shenkuu Team Scarf ~2 \
Shenkuu Team Sport Shirt ~1-2 \
Shenkuu Team Trousers and Cleats ~1-2 \
Shenkuu Team Vuvuzela ~1-2 \
Shenkuu Warrior Princess Boots ~1-2 \
Shenkuu Warrior Princess Bracers ~4-5 \
Shenkuu Warrior Princess Shirt ~1-2 \
Shenkuu Warrior Princess Skirt ~1-2 \
Shenkuu Warrior Princess Sword Staff ~1-2 \
Shenkuu Warrior Princess Wig ~1-2 \
Shenkuu Warrior Training Grounds ~1-2 \
Shenkuu Warrior Training Grounds Background ~1-2 \
Shield of Battle Records ~1-2 \
Shield of Light ~2-4 \
Shield of Two Lands ~1-2 \
Shields and Weapons Garland ~1-2 \
Shimmering Autumn Leaf Mystery Capsule ~3-5 \
Shimmering Candy Flowers Foreground ~1-2 \
Shimmering Crystal Array ~1-2 \
Shimmering Draphly Wings ~1-2 \
Shimmering Fin Wings ~1-2 \
Shimmering New Years Flower Dress ~1-2 \
Shimmering Rainbow Face Paint ~1-2 \
Shimmering Ring of Generosity ~12 \
Shimmering Snow Cone Garland ~1-2 \
Shimmering Staff of the Night ~1-2 \
Shimmery Crinoline Dress ~1-2 \
Shimmery Glamour Dress ~1-2 \
Shimmery Rose Top ~25-35 \
Shimmery Seashell Dress ~2 \
Shimmery Silver Facepaint ~3-5 \
Shimmery Snowflake Wand ~2 \
Shimmery Star Dress ~1-2 \
Shimmery Summer Wings ~1-2 \
Shimmery Webbed Dress ~1-2 \
Shining Heart Candle ~1-2 \
Shining Princess Clock Garland ~1-2 \
Shining Princess Dress ~2 \
Shining Princess Gloves ~6-8 \
Shining Princess Magic Swirl ~1-2 \
Shining Princess Shoes ~2-3  \
Shining Princess Wig ~2-3 \
Shining Ruby Staff ~5-7 \
Shining Star Gift Box Mystery Capsule ~2 \
Shining Star Necklace buyable ~1 \
Shining Star Staff ~3 \
Shining Sun Shield buyable through Orange Lupe Key Quest Token ~1 \
Shining Sun Staff buyable ~1 \
Shining Sun String Lights ~1-2 \
Shining Tiara Staff ~1-2 \
Shiny Bag of Gold Coins buyable through NC Archives Fortune Cookie ~1-2 \
Shiny Blue Faerie Tiara ~1-2 \
Shiny Box of Chocolate ~5-10  \
Shiny Bunch of Heart Balloons ~3 \
Shiny Closed Lace Shoes ~1-2 \
Shiny Clover Shower ~1-2 \
Shiny Doughnutfruit Necklace ~1-2 \
Shiny Faerieland Floor Tiles \
Shiny Gormball ~1-2 \
Shiny Green Faerie Tiara ~1-2 \
Shiny Horns ~1-2 \
Shiny Icicle String Lights ~1-2 \
Shiny Maraqua Wallpaper \
Shiny Purple Faerie Tiara ~1-2 \
Shiny Red Faerie Tiara ~1-2 \
Shiny Rose Gold Flower Wand ~1-2 \
Shiny Set of Armour ~18-20 \
Shiny Shell Flower Earrings ~1-2 \
Shiny Shell Wings ~1-2 \
Shiny Silver Wig ~1-2 \
Shiny Stormy Ombre Rain Boots buyable through Wonderclaw ~1-2 \
Shiny Teapot Parasol ~1-2 \
Shiny Toy Heart Shield ~4-6 \
Shiny Valentines Day Gift Wrap NT \
Shiny Yellow Faerie Tiara ~2 \
Ship Hat and Wig ~1-2 \
Shooting Novas ℗ ~65 \
Shooting Stars ~1-2 \
Shop of Spring Flowers Background ~2 \
Shopping in Neopia Central Background ~2-4 \
Short Black Bangs Wig buyable through Shenanigifts ~1-2 \
Short Blue Wig ~1-2 \
Short Candy Warrior Wig ~1-2 \
Short Center-Part Wig ~1-2 \
Short Golden Curls Hair ~1-2 \
Short Green Wig and Newsboy Hat ~1-2 \
Short Laurel Wig ~1-2 \
Short Mint Green Wig ~1-2 \
Short Purple Wig ~1-2 \
Short Red Web Wig ~1-2 \
Short Stormy Ombre Wig buyable through Wonderclaw ~1-2 \
Short Styled Wig ~1-2 \
Short Woodland Archer Wig ~1-2 \
Shoulder Blades Valentines Cape ~1-2 \
Shower Curtain Wings ~1-2 \
Shower of Arrows ~6-8 \
Side Ponytail Autumn Wig ~1-2 \
Side Ponytail Green Wig ~1-2 \
Side Ponytail Orange Wig ~1-2 \
Side Ponytail Purple Wig ~1-2 \
Side Ponytail White Wig ~1-2 \
Side Swept Blond Wig ~4-6 \
Silk Flowers buyable ~1 \
Silk Neovian Wallpaper \
Silk Stitched Metal Jacket ~1-2 \
Silk Tulip Skirt ~1-2 \
Silk Wig with Flowers ~3-4 \
Silken Sailor Shirt ~1-2 \
Silly Face Pumpkins Foreground ~1-2 \
Silly Faces Pumpkin Foreground ~1-2 \
Silly Octorna Sprinkler ~1-2 \
Silly Skull Mystery Capsule ~3-4 \
Silly Sun Headband ~1-2 \
Silver and Blue Facepaint ~2 \
Silver and Gold Balloon Confetti Shower ~1-2 \
Silver and Scarlet Ombre Wig ~2-4 \
Silver Cake Staff ~1-2 \
Silver Candle Tree Foreground buyable ~1 \
Silver Cask Key ~2 \
Silver Cobrall Cuff ~5-8 \
Silver Dress ~1-2 \
Silver Glitter Necklace ℗ ~2-3 \
Silver Hourglass NT \
Silver Key Garland ℗ ~15-20+  \
Silver Lace Shirt with Blue Brooch ~1-2 \
Silver Metal Shirt ~1-2 \
Silver Mystery Capsule [rare collectible] ~Depends on trader \
Silver NC Mall Second Birthday Goodie Bag ~1-2 \
Silver Potted Rose Foreground ~15-20  \
Silver Sequined Jacket ~1-2 \
Silver Shoyru Limited Edition Key Quest Token [Without Fabled Silvery Lake Background] ~2-3 \
Silver Star Bracers buyable ~1 \
Silver Strappy Sandals ~4-6 \
Silver Studded Blue Shoes ~1-2 \
Silver Studded Purse ~1-2 \
Silver Swirl Mask ~1-2 \
Silver Tiara Wig ~5-6 \
Silver Velvet Boots ~1-2 \
Silver Weewoo Perch ~1-2 \
Silver Wig and Icicle Crown ~1-2  \
Silvery Blue Star Makeup ~1-2 \
Silvery Blue Wig ~2-3 \
Silvery Winter Gift Box Mystery Capsule ~1-2 \
Simple Autumn Infinity Scarf ~1-2 \
Simple Black Skirt ~1-2 \
Simple Pirate Shirt ~1-2 \
Simple Striped Shirt and Waistcoat ~1-2 \
Simple Sun Hat ~1-2 \
Singing Jack-O-Lanterns Garland ~1-2 \
Singing Meepit Trio ~1-2 \
Singing Skeleton Quartet ~1-2 \
Sir Pompadour Bobblehead buyable through NC Archives Fortune Cookie ~1-2 \
Six Gifted Bracelets ~1-2 \
Six-rific Birthday Candle Sparkler 1-Pack \
Six-rific Birthday Candle Sparkler 10-Pack \
Six-rific Birthday Candle Sparkler 22-Pack \
Six-rific Birthday Candle Sparkler 5-Pack \
Six-rific Birthday Cupcake Candle Sparkler ~2 \
Sizzling BBQ Grill ~1-2 \
Skeith Ice Sculpture Trinket ~1-2 \
Skeith Plushie Handheld ~1-2 \
Skeletal Face Paint buyable through NC Archives Fortune Cookie ~2-3 \
Skeletal Hoodie buyable through NC Archives Fortune Cookie ~1-2 \
Skeletal Toe Shoes buyable through Wonderclaw ~1-2 \
Skeletal Wings ~1-2 \
Skeleton Hands Necklace ~1-2 \
Skeleton Mohawk ~1-2 \
Skeleton Moon Background buyable through Wonderclaw ~1-2 \
Ski Gloves ~4 \
Ski Goggles ~1-2 \
Ski Jacket With Hood ~1-2 \
Ski Jump Background ~1-2 \
Ski Lift Background buyable through NC Archives Fortune Cookie ~1-2 \
Ski Trousers and Boots ~1-2 \
Skirt of Embers ~1-2 \
Skull and Bones Sword ~1-2 \
Skull Bow buyable ~1 \
Skull Bowling Pin and Ball Necklace buyable through NC Archives Fortune Cookie ~1-2 \
Skull of Hearts Shield ~1-2 \
Skull Patterned Skirt ~1-2 \
Skull Skirt and Apron ~1-2 \
Skull Staff ~1-2 \
Skull String Lights ~1-2 \
Skull Tassel Earrings ~1-2 \
Skull Thermal Shirt ~1-2 \
Skulls and Lace Cuffs ~1-2 \
Slate Blue Toggle Sweater ~1-2 \
Sleek Green Bob Wig ~1-2 \
Sleek Purple Wig buyable through NC Archives Fortune Cookie ~2-3 \
Sleep Tight Polka Dot and Flower Pajamas ~1-2 \
Sleeveless Blue Flower Shirt buyable through Patapult ~1-2 \
Sleeveless Floral Summer Dress ~1-2 \
Sleeveless Geometric Shirt buyable ~1 \
Sleeveless Ruffled Bow Shirt ~1-2 \
Sleeveless Shenkuu Blouse ~2 \
Sleigh on a Rooftop Background ~1-2 \
Sleuthing Background ~3-4 \
Slorg Bopper buyable through NC Archives Fortune Cookie ~1-2 \
Slorg Slippers ~1-2 \
Sloth Attack Garland ~1-2 \
Sloth Clone Army ~1-2 \
Sloth Clone Helmet ~8-10 \
Sloth Clone Make-Up ~1-2 \
Sloth Clone Robe ~2-3 \
Sloth Herb Garden ~1-2 \
Sloth Invasion Mystery Capsule ~2-3 \
Sloth Patented Love Potion ~1-2 \
Sloth Shadow Background Item ~1-2 \
Sloth String Lights ~1-2 \
Sloths Future Fashion Shirt ~1-2 \
Sloths Victory Mystery Capsule ~2-4 \
Slouchy Glittering Sweater ~1-2 \
Slouchy Spat Boots NT buyable ~1 \
Slumber Celebration Background ~1-2 \
Slumber Celebration Pyjama Bottoms ~1-2 \
Slumber Celebration Pyjama Top ~1-2 \
Slumber Celebration Spardel Pillow ~1-2 \
Slushie Slinger Table Top buyable through NC Archives Fortune Cookie ~1-2 \
Small Umbrella Shower ~1-2 \
Smart School Girl Eye Glasses ~1-2 \
Smart School Girl Shirt ~2-3 \
Smart School Girl Shoes ~1-2 \
Smart School Girl Skirt ~1-2  \
Smart School Girl Wig ~2 \
Smiley Snack Mystery Capsule \
Smoke Cloud buyable through NC Archives Fortune Cookie ~2-3 \
Smugglers Cove Background ~20-25 \
Snapping Clam ~2 \
Snarkie Pigtail Wig ~2 \
Snazzy Plaid Valentine Coat ~1-2 \
Snazzy Winter Suit Jacket buyable ~1 \
Sneaky Meowclops Foreground buyable through NC Archives Fortune Cookie ~2 \
Sneezing Rude Daffodil ~1-2 \
Snow Ball Blaster ~1-2 \
Snow Covered Boy Hair Wig ~1-2 \
Snow Covered Bridge ~2-4 \
Snow Covered Flowers Foreground ~4-6 \
Snow Covered Forest ~1-2 \
Snow Drift Foreground ~1-2 \
Snow Ink Bottle NT \
Snow Lift Garland buyable through NC Archives Fortune Cookie ~1-2 \
Snow Petpetpet NT \
Snow Queen Cloak ~1-2 \
Snow Queen Dress ~2 \
Snow Queen Necklace ~3-4 \
Snow Queen Sceptre ~1-2 \
Snow Queen Shoes ~2 \
Snow Queen Wig and Crown ~2-3 \
Snow Queens Palace Background ~1-2 \
Snow Shower ~6-8 \
Snow Thought Bubble ~1-2 \
Snow Wonderland Background NT \
Snow Yooyu-Inspired Contacts ~4-5 \
Snowager Arm Cuff buyable through NC Archives Fortune Cookie ~2-3 \
Snowager Background ~4-6 \
Snowager Hand Puppet ~4 \
Snowager Ice Staff ~3 \
Snowagers Spare Cave Background ~2 \
Snowball Fight Background ~4-5 \
Snowball Fight Shower ~1-2 \
Snowbeast Fangs ~3-4 \
Snowbeast Feet Shoes ~1-2 \
Snowbeast Key Quest Token ~4-8 \
Snowboarder Hat ~1-2 \
Snowboarder Sweater ~1-2 \
Snowbunny Basket of Brightly Coloured Neggs ~1-2 \
Snowbunny Beanie ~1-2 \
Snowbunny Lollypop Bouquet ~1-2 \
Snowfall Long Hair ~1-2 \
Snowfall Short Hair ~1-2 \
Snowflake Contacts ~2-3  \
Snowflake Face Mask ~1-2 \
Snowflake Face Paint ~3-4 \
Snowflake Glasses ~1-2 \
Snowflake Headband ~1-2 \
Snowflake Shower ~2-4 \
Snowflake Tattoo ~1-2 \
Snowflake Tote Bag ~1-2 \
Snowflake Wand ~1-2 \
Snowglobe Garland ~1-2 \
Snowglobe Staff buyable through NC Archives Fortune Cookie ~1-2 \
Snowman and Creepy Meepit NT buyable ~1 \
Snowman Christmas Tree ~1-2 \
Snowman Gift Box Mystery Capsule ~1-2 \
Snowman Goodie Bag ~1-2 \
Snowman Hoodie ~1-2 \
Snowman Nesting Dolls ~1-2 \
Snowy Boots and Wool Socks ~1-2 \
Snowy Campfire Background ~1-2 \
Snowy Cast Iron Gate Foreground ~1-2 \
Snowy Cherry Blossom Side Tree ~1-2 \
Snowy Day Cloud ~2-4 \
Snowy Forest Background ~1-2 \
Snowy Garden Background ~2-3  \
Snowy Gates Background ~1-2 \
Snowy Holiday Bicycle ~1-2 \
Snowy Holiday Tree Lot Background buyable through NC Archives Fortune Cookie ~1-2 \
Snowy Holiday Umbrella ~1-2 \
Snowy Lights Background ~2 \
Snowy Lights Garland ~1-2 \
Snowy Picket Fence buyable ~1 \
Snowy Pine Branches Beard ~1-2 \
Snowy Pine Cone Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Snowy White Fake Beard ~2-3 \
Snowy Window Background Item ~1-2 \
Snuffly Hat ~1-2 \
Soaring Heart Balloon Garland ~4-6 \
Soaring Hearts Shower ~3 \
Soft Floral Cape ~1-2 \
Soft Hanging Lamp buyable ~1 \
Soft Magical Hair Usuki Plushie buyable through NC Archives Fortune Cookie ~2 \
Solar Eclipse Staff ~1-2 \
Solid White Contacts buyable through Wonderclaw ~2 \
Sombre Layered Jacket ~1-2 \
Sophies Stew String Lights buyable through NC Archives Fortune Cookie ~1-2 \
Sophies Wand buyable through NC Archives Fortune Cookie ~1-2  \
Sophisticated Santa Jacket ~1-2 \
Sorcerers Skirmish Air Wizard Staff ~6-8 \
Sovereignly Jacket ~1-2 \
Sovereignly Trousers ~1-2 \
Space Battle Background ~1-2 \
Space Bounty Hunter Helmet ~1-2 \
Space Bounty Hunter Oxygen Tank ~2 \
Space Bounty Hunter Shirt ~1-2  \
Space Bounty Hunter Trousers ~1-2 \
Space Bounty Hunter Weapon ~2-4 \
Space Station Message Foreground ~1-2 \
Space Station Thought Bubble ~10 \
Space Trooper Armour buyable ~1 \
Space Trooper Helmet buyable ~1 \
Space Trooper Leggings buyable ~1 \
Space Trooper Oxygen Tank buyable ~1 \
Space Trooper Weapon of Choice buyable through Space Trooper Superpack ~3-4 \
Space Weaponry Collectors Shirt ~1-2 \
Spaced Boots ~3-4 \
Spaced Helmet ~2-3 \
Spaced Jet Pack ~2-3 \
Spaced Jumpsuit ~1-2  \
Spaceport Background ~1-2 \
Spacerocked Sling Shot ~5+ \
Sparkle Heart Makeup ~1-2 \
Sparkleberry Wings ~1-2 \
Sparkler Contacts ~1-2 \
Sparkler Flowers ~1-2 \
Sparkler Garland ~1-2 \
Sparkler String Lights ~1-2 \
Sparkling Aqua Sequin Skirt ~1-2 \
Sparkling Ballroom Background ℗ ~1-2 \
Sparkling Basket of Flowers ~1-2 \
Sparkling Black Sunglasses buyable through Patapult ~1-2 \
Sparkling Blue Mystery Capsule ~2-3 \
Sparkling Blue Skull Facepaint ~1-2 \
Sparkling Blue Sweetheart Gram NT \
Sparkling Branches Garland ~1-2 \
Sparkling Carmariller Wig ~3 \
Sparkling Carmariller Wings ~2 \
Sparkling Charcoal Trousers ~1-3 \
Sparkling Clover Staff ~1-2 \
Sparkling Cobweb Earrings ~1-2 \
Sparkling Cobweb Necklace ~6-8  \
Sparkling Crimson Slippers buyable ~1 \
Sparkling Crystal Chandelier ~4 \
Sparkling Diamond Staff ~1-2 \
Sparkling Emerald Earrings buyable ~1 \
Sparkling Faerie Dress buyable ~1 \
Sparkling Faerie Wand ~1-2 \
Sparkling Faerie Wings ~3-5 \
Sparkling Faerieland Bed buyable ~1-2 \
Sparkling Faerieland Wallpaper ~6 \
Sparkling Flower Fan ~2 \
Sparkling Flowers Garland ~1-2  \
Sparkling Gem Fireworks ~1-2 \
Sparkling Gold Bow Shoes ~6-8  \
Sparkling Gold Tiara buyable ~1 \
Sparkling Green and Red Gift Wrap NT \
Sparkling Green Mystery Capsule ~12 \
Sparkling Green Top Hat ~1-2 \
Sparkling Gumdrop Tree ~1-2 \
Sparkling Heart Headband ~1-2 \
Sparkling Heart Wand ~1-2 \
Sparkling Holiday Stocking ~2-4 \
Sparkling Holiday Wings ~1-2 \
Sparkling Ice Caves Background ~4-6 \
Sparkling Ice Staff buyable through NC Archives Fortune Cookie ~3-4 \
Sparkling Ice Tiara ~1-2 \
Sparkling Icicle Necklace ~1-2 \
Sparkling Jack-o-Lantern ~1-2 \
Sparkling Jewel Garland ~1-2 \
Sparkling Multi-Strand Gothic Necklace NT buyable ~1 \
Sparkling Mushroom Foreground ~1-2 \
Sparkling Negg Dust ~2-4 \
Sparkling Negg Wand ~3-5 \
Sparkling Negg Wig ~1-2 \
Sparkling Nova Pool ~10-12 \
Sparkling Orange Mystery Capsule ~10 \
Sparkling Paper Flower Foreground ~2 \
Sparkling Peppermint Dust Shower ~1-2 \
Sparkling Pink Chandelier buyable ~1 \
Sparkling Pink Heart Garland ~1-2 \
Sparkling Pink Pine Cone Garland ~1-2 \
Sparkling Platinum Wig buyable through Patapult ~1-2 \
Sparkling Ponytail Wig ~1-2 \
Sparkling Promenade Gown ~1-2 \
Sparkling Purple Lace Parasol ~1-2 \
Sparkling Purple Mystery Capsule [rare collectible] ~Depends on trader \
Sparkling Purple Sweetheart Gram NT \
Sparkling Rainbow ℗ ~5 \
Sparkling Rainbow Gift Box Mystery Capsule ~1-2 \
Sparkling Rainbow Wings ~1-2 \
Sparkling Red Hair Bow buyable ~1 \
Sparkling Red Holiday Dress ~2-3 \
Sparkling Red Stage Background ~1-2 \
Sparkling Shamrock Headband ~1-2 \
Sparkling Sheer Wings ~1-2 \
Sparkling Silver Bouquet ~4-6 \
Sparkling Silver Star Shower ~1-2 \
Sparkling Skull Belt ~1-2 \
Sparkling Snowflake Bouquet ~1-2 \
Sparkling Snowflake Garland ~1-2 \
Sparkling Snowflake Necklace ~1-2 \
Sparkling Snowflake Wings ~1-2 \
Sparkling Spring Flower Arrangement ~4 \
Sparkling Star Shower ~1-2 \
Sparkling Sunrise Wings ~1-2 \
Sparkling Treasure Chest ~1-2 \
Sparkling Vine Facepaint ~1-2 \
Sparkling Violet Mystery Capsule ~3 \
Sparkling Water Mystery Capsule [rare collectible : Depends on trader] ~350+ \
Sparkling Waterfall Background buyable ~1 \
Sparkling Winter Ornament Garland ~1-2 \
Sparkling Winter Town Background ~2-3 \
Sparkling Winter Wig ~4-5 \
Sparkling Winter Wings ~2 \
Sparkling Wisp Heart Wings ~1-2 \
Sparkling Yellow Mystery Capsule (2008 [rare collectible : Depends on trader] ~200+ \
Sparkling Yellow Mystery Capsule (2014 ~2-3 \
Sparkly Bow Shoes buyable ~1 \
Sparkly Gold Lace Gloves ℗ ~6-8  \
Sparkly Golden Makeup Mask ~1-2 \
Sparkly Golden Shirt ~1-2 \
Sparkly Purple Tuxedo Top with White Shirt Underneath ~1-2 \
Sparkly Rainbow Ballet Shoes buyable through Rainbow Chomby Key Quest Token ~1-2 \
Spatula of Wondrous Cooking ~5 \
Specialty Shop Spectacles ~15-20  \
Speckled Acara Key Quest Token buyable ~1-2 \
Speckled Bruce Key Quest Token buyable ~1-2 \
Speckled Green Bracers buyable through Speckled Scorchio Key Quest Token ~1-2 \
Speckled Negg Plushie buyable through Speckled Acara Key Quest Token ~1-2 \
Speckled Scorchio Key Quest Token buyable ~1-2 \
Speckled Uni Key Quest Token buyable ~1-2 \
Speckled Vase Foreground buyable through Speckled Uni Key Quest Token ~1-2 \
Spectral Candles Shower buyable through NC Archives Fortune Cookie ~1-2 \
Spectral Chains buyable through NC Archives Fortune Cookie ~1-2 \
Spectral Pumpkin Path Background buyable through NC Archives Fortune Cookie ~1-2 \
Spectral Spyderweb String Lights ~1-2 \
Spectral Wings ~2 \
Spellcasters Hands ~2-3 \
Spellseeker Fireworks ~15 \
Spewing Geyser \
Spice Cheesecake ~8-15  \
Spiffy Black Leather Jacket ~1-2 \
Spike Darigan Bracers buyable through NC Archives Fortune Cookie ~1-2 \
Spiked Black Wig ℗ ~2 \
Spiked Crown and Wig buyable through Dark Sorcerer Mystery Capsule ~1-2 \
Spiked Headband ~1-2 \
Spiked Ninja Bracers ~1-2 \
Spiked Tower NT \
Spiked Tower Trinket ~1-2 \
Spiky Blonde Wig ~1-2 \
Spiky Bracelet ~1-2 \
Spiky Multicolour Wig ~1-2 \
Spiky Orange Mohawk ~1-2 \
Spiky Purse ~1-2 \
Spiky Scriblet Wig ~1-2 \
Spiky Striped Stockings and Shoes ~1-2 \
Spin Fun Pinwheel ~1-2 \
Spinacle Spheres Shower buyable through NC Archives Fortune Cookie ~1-2 \
Spinning Altador Cup Star Belt buyable through NC Archives Fortune Cookie ~1-2 \
Spinning Circuits Contacts ~1-2 \
Spinning Fireworks Wheel ~1-2 \
Spinning Flower Goggles ~1-2 \
Spinning Neopian Globe ~10-12  \
Spinning Neopian Globe Staff ~1-2 \
Spinning Nova Lolly ~1-2 \
Spinning Snowflake Holiday Mystery Capsule ~10-12 \
Spinning Star Mystery Capsule ~2-3 \
Spinning Star Shower buyable through Starry Grundo Key Quest Token ~1-2 \
Spirit of Slumber Collectors Staff ~5-7 \
Spinning Water Chakram ~1-2 \
Spiral Galaxy Wings ~1-2 \
Spiral Staircase Background ~1-2 \
Spirited Headband Wig ~1-2 \
Splattering Snot Garland buyable through NC Archives Fortune Cookie ~1-2 \
Splendid Green Wig ~1-2 \
Splendid Holiday Jingle Gown ~2 \
Split Grundo Key Quest Token buyable ~1-2 \
Spooky Apple Tree Foreground ~1-2 \
Spooky Blorpulous Effect ~3 \
Spooky Blorpulous Magic Elixir ~3 \
Spooky Cast Iron Gate Foreground ~1-2 \
Spooky Chefs Hat and Wig ~1-2 \
Spooky Cloud Tree ~1-2 \
Spooky Condiment Belt and Trousers ~1-2 \
Spooky Cyclops Apron ~1-2 \
Spooky Goblet buyable through NC Archives Fortune Cookie ~2 \
Spooky Grandfather Clock ~1-2 \
Spooky Green Contacts ~2-3 \
Spooky Halloween Gift Box Mystery Capsule ~3-4 \
Spooky Halloween Mystery Capsule [rare collectible : Depends on trader] ~125+ \
Spooky Halloween Shower ~1-2 \
Spooky Hand Scarf ~1-2 \
Spooky Haunted House Foreground ~2 \
Spooky Haunted Woods Bed buyable ~1-2 \
Spooky Jack-O-Lantern Gift Wrap NT \
Spooky Moon ~3-4 \
Spooky Moon Halloween Mystery Capsule ~8 \
Spooky Neovian Manor Background ~2-3 \
Spooky Old Foyer Background ~1-2 \
Spooky Portrait Hall Background ~3-5 \
Spooky Potions Cave Background ~2 \
Spooky Pumpkin Patch Background ~3+ \
Spooky Shadows ~2 \
Spooky Shenkuu Sunset Background ~4-6 \
Spooky Skull Goodie Bag ~2 \
Spooky Sprouted Pumpkins ℗ ~2 \
Spooky Spyder Top Hat ~1-2 \
Spooky Spyder Web Tattoo ~1-2 \
Spooky String Lights ~1-2 \
Spooky Sugar Skull Garland ~1-2 \
Spooky Tattered Mystery Capsule ~4 \
Spooky Tattered Shirt ~1-2 \
Spooky Vine Staff ~1-2 \
Spooky Vows Background ~2-3  \
Spooky Witch Makeup ~1-2 \
Spools of Satin Ribbon buyable ~1 \
Spools of Silk Thread buyable ~1 \
Spools of Trim buyable ~1 \
Sporting Suit Jacket buyable ~1-2 \
Sports Fanatic Background ~2 \
Sporty Tennis Dress buyable through NC Archives Fortune Cookie ~2-3 \
Sporty Tennis Shirt ~1-2 \
Spotted Aisha Key Quest Token buyable ~1-2 \
Spotted Cybunny Key Quest Token buyable ~1-2 \
Spotted Kau Key Quest Token buyable ~1-2 \
Spotted Kau Rain Boots buyable through Spotted Kau Key Quest Token ~1-2 \
Spotted Kiko Lake Lamp \
Spotted Kiko Lake Rug buyable ~1 \
Spotted Mynci Key Quest Token buyable ~1-2 \
Spotted Paper Lantern Garland buyable through Spotted Cybunny Key Quest Token ~1-2 \
Spotted Pattern Sunglasses buyable through Spotted Mynci Key Quest Token ~1-2 \
Spotted Print Glasses buyable ~1 \
Spotted Wig buyable through Spotted Aisha Key Quest Token ~1-2 \
Sprig of Holly Wig buyable through NC Archives Fortune Cookie ~1-2 \
Spring Argyle Caplet ~1-2 \
Spring Baby Dress ~1-2 \
Spring Basket Glasses ~1-2 \
Spring Basket Mystery Capsule ~5 \
Spring Bonnet ~1-2 \
Spring Bouquet Parasol ~1-2 \
Spring Button Up Shirt NT \
Spring Cardigan Sweater ~1-2 \
Spring Chimes ~4 \
Spring Circlet ~1-2 \
Spring Cleaning Wig ~1-2 \
Spring Clothes Line ~1-2 \
Spring Farmhouse Background ~1-2 \
Spring Farmhouse Mystery Capsule ~2-3 \
Spring Finger Painting Background ~1-2 \
Spring Floral Mask ~1-2 \
Spring Floral Trousers ~1-2 \
Spring Flower Balloon Bouquet ~1-2 \
Spring Flower Bodice ~1-2 \
Spring Flower Bolero buyable through NC Archives Fortune Cookie ~1-2 \
Spring Flower Coat ~1-2 \
Spring Flower Corsage ~1-2 \
Spring Flower Dress ~1-2 \
Spring Flower Earrings ~1-2 \
Spring Flower Facepaint ~1-2 \
Spring Flower Gift Wrap NT \
Spring Flower Hat ~1-2 \
Spring Flower Head Wreath ~1-2 \
Spring Flower Mask ~1-2 \
Spring Flower Necklace ~1-2 \
Spring Flower Petal Mystery Capsule ~3-4 \
Spring Flower Rain Slicker buyable through NC Archives Fortune Cookie ~2 \
Spring Flower Shield buyable through NC Archives Fortune Cookie ~1-2 \
Spring Flower Wig ~2-3 \
Spring Flowers and Neggs Dress ~1-2 \
Spring Flowers Arbour ~1-2 \
Spring Garden Bouquet ~1-2 \
Spring Garden Chairs and Table ~6 \
Spring Garden Mystery Capsule ~3 \
Spring Gift Box Mystery Capsule ~3 \
Spring Greenhouse Background ~5-6 \
Spring Hair Flower ~1-2 \
Spring Mystery Capsule [rare collectible] ~Depends on trader \
Spring Negg Wreath buyable through NC Archives Fortune Cookie ~1-2 \
Spring Nest Garland ~2-3 \
Spring Overalls ~1-2 \
Spring Pirate Hat and Wig ~1-2 \
Spring Plaid Shirt and Vest ~1-2 \
Spring Ribbon Hair Bow ~1-2 \
Spring Shower Brush ~1-2 \
Spring Spyder Web Garland ~1-2 \
Spring Stained Glass Cape ~1-2 \
Spring Teal Sandals ~3-5 \
Spring Themed Album Skin NT \
Spring Watering Can Mystery Capsule ~5-6 \
Spring Weewoo Garland ~1-2 \
Springabee Tutu ~1-2 \
Springtime Doorstep Background ~1-2 \
Springtime in Neopia Background ~2-3 \
Springtime Sparkle Gift Box Mystery Capsule ~2 \
Springtime Walking Stick ~1-2 \
Springy Blumaroo Toy Trinket ~1-2 \
Springy Eye Glasses ~1-2 \
Springy Toy ~1-2 \
Sprinkler Foreground ~1-2 \
Spy Command Center Background ~2 \
Spyder Heart Window Background ~1-2 \
Spyder Infested Bouquet ~1-2 \
Spyder Lace Dress ~1-2 \
Spyder Web Body Paint ~1-2 \
Spyder Web Parasol ~1-2 \
Spyder Web Cape ~2-4 \
Spyder Web Dress ~5-7  \
Spyder Web Garland ~1-2 \
Spyder Web Gloves ~3-5 \
Spyder Web Hat and Wig ~1-2 \
Spyder Web Mask ~3 \
Spyder Web Staff ~200-250 \
Spyder Web Tights with Shoes ~1-2 \
Spyders Web Covered Chandelier ~1-2 \
Squeezable Polarchuck Plushie buyable through NC Archives Fortune Cookie ~3 \
Squiggly Contacts ~1-2 \
Sssidneys Collectors Top Hat ~1-2 \
Stack of Zippers buyable ~1 \
Stacked Dice Ice Cream Cone ~1-2 \
Stacked Ornate Boxes ~1-2 \
Staff of the Space Faerie ~1-2 \
Stage Curtain Garland buyable through NC Archives Fortune Cookie ~1-2 \
Stage Light Garland buyable through NC Archives Fortune Cookie ~1-2 \
Stained Altador Cup Workout Shirt buyable through NC Archives Fortune Cookie ~1-2 \
Stained Glass Altador Shield ~1-2 \
Stained Glass Balcony Foreground ~2-3 \
Stained Glass Brightvale Lamp \
Stained Glass Contacts ~1-2 \
Stained Glass Dress ~1-2 \
Stained Glass Earrings ~1-2 \
Stained Glass Feather Wind Chime ~1-2 \
Stained Glass Floor Lamp ~1-2 \
Stained Glass Flower Background buyable through NC Archives Fortune Cookie ~1-2 \
Stained Glass Flower Face Paint ~1-2 \
Stained Glass Flower Garland ~1-2 \
Stained Glass Flower Wings ~1-2 \
Stained Glass Necklace ~1-2 \
Stained Glass Window Background ~1-2 \
Stained Glass Wings ~1-2 \
Stand Up Flower Lamp ~1-2 \
Stand Up Jewelry Box ~1-2 \
Standard Neovian Shirt ~1-2 \
Star and Moon Dream Wig ~1-2 \
Star and Moon Shower ~1-2 \
Star Cluster Wig ~1-2 \
Star Diadem Wig ~1-2 \
Star Dust Wig ~2-3  \
Star Lanterns and Silk Curtains ~1-2 \
Starburst Shower buyable through NC Archives Fortune Cookie ~3-4 \
Starfish and Coral Staff ~5-6 \
Starfish Mask ~1-2 \
Stargazer Lily Handheld Bouquet ~1-2 \
Staring Skulls Contacts ~1-2 \
Starry Auburn Wig buyable ~1 \
Starry Cloud Garland ~1-2 \
Starry Cloud Wig buyable through NC Archives Fortune Cookie ~1-2 \
Starry Elephante Key Quest Token buyable ~1-2 \
Starry Flotsam Key Quest Token buyable ~1-2 \
Starry Glowstone Path Background buyable through 9th Birthday Night Wish Candle  \
Starry Grundo Key Quest Token buyable ~1-2 \
Starry Layered Collar Shirt ~1-2 \
Starry NC Fortune Cookie ~1-2 \
Starry Night Gift Wrap NT \
Starry Night Sky Skirt and Tights ~1-2 \
Starry Night Sky Wig ~1-2 \
Starry Night Tights ~1-2 \
Starry Rainbow Garland ~1-2 \
Starry Scarf ~1-2 \
Starry Space Beanie and Blonde Wig ~2-3 \
Starry Tights and Shoes buyable through Starry Elephante Key Quest Token ~1-2 \
Starry Wreath Wig ~1-2 \
Stars and Glitter Face Paint buyable through NC Archives Fortune Cookie ~1-2 \
Startling Eyestalk Contacts ~2 \
Startling Red Terror Mountain Floor Tiles \
Stately Caplet ~1-2 \
Stately Darigan Castle Background ℗ ~2 \
Stately Hat ~1-2 \
Stately Jewelled Sceptre ~1-2 \
Stately Reception Background ~1-2 \
Stately Wooden Carriage ~1-2 \
Static Cling Shirt ~1-2 \
Static Electricity Wings ~2 \
Static Wig ~1-2 \
Stealthy Shenkuu Mystery Capsule \
Stealthy Shenkuu Star Shower ~1-2 \
Stealthy Shenkuu Weapon ~1-2 \
Stealthy Shenkuu Wings ~1-2 \
Steam Engineered Heart ~1-2 \
Steam Ferris Wheel Background ~1-2 \
Steam Pipe Garland ~1-2 \
Steam Powered Bracelets ~2 \
Steam Shower buyable through NC Archives Fortune Cookie ~1-2 \
Steamed Up Staff ~1-2 \
Steaming Mug of Hot Borovan ~1-2 \
Step Into the Haunted House Background ~2-4 \
Stepdance Tights and Shoes ~1-2 \
Sterling Silver Trees ~4-6  \
Stinky Old Gym Bag ~1-2 \
Stirring a Giant Cup of Borovan ~1-2 \
Stitched Doll Face Paint ~2 \
Stocking Garland ~1-2 \
Stocking Stufftacular 1 Stocking Pack \
Stocking Stufftacular 10 Stocking Pack \
Stocking Stufftacular 25 Stocking Pack \
Stocking Stufftacular 5 Stocking Pack \
Stone Altador Wallpaper \
Stone Faerie Wings ~1-2 \
Stone Flowers ~1-2  \
Stone Green Mystery Capsule ~4+ \
Stone Guardian Foreground ~1-2 \
Stone Larnikin Waterfall NT \
Stone Lutari Island Floor Tiles \
Stone Petpet Sentries ~1-2 \
Stone Statue Garden Background ~2-3 \
Stone Tyrannian Wallpaper \
Stonehead Spear ~1-2 \
Storm Cloud Tree ~2-3 \
Stormy Autumn Evening Background ~1-2 \
Stormy Cloud Dress ~2 \
Stormy Eyes Contacts ~2 \
Stormy Night Background ~2-4 \
Stormy Ombre Contacts buyable through Wonderclaw ~2-3 \
Stormy Ombre Dress buyable through Wonderclaw ~1-2 \
Stormy Ombre Flower Foreground buyable through Wonderclaw ~1-2 \
Stormy Ombre Flower Wand buyable through Wonderclaw ~1-2 \
Stormy Ombre Glasses buyable through Wonderclaw ~1-2 \
Stormy Ombre Leaf Shower buyable through Wonderclaw ~1-2 \
Stormy Ombre Open Jacket buyable through Wonderclaw ~1-2 \
Stormy Ombre Paper Garland buyable through Wonderclaw ~1-2 \
Stormy Ombre Shirt buyable through Wonderclaw ~1-2 \
Stormy Ombre Side Tree buyable through Wonderclaw ~1-2 \
Stormy Ombre Twist Wig buyable through Wonderclaw ~1-2 \
Stormy Ombre Umbrella buyable through Wonderclaw ~1-2 \
Stormy Ombre Waves Foreground buyable through Wonderclaw ~1-2 \
Stormy Seas Background ~1-2 \
Strale Topper Staff ~1-2 \
Straw and Flowers Wings ~1-2 \
Strawberry Bathing Suit ℗ ~2-3 \
Strawberry Bean Bag Chair ℗ ~1-2 \
Strawberry Crochet Hat ~3 \
Strawberry Face Paint ℗ ~2-3 \
Strawberry Pinata ~1-2 \
Strawberry Purse ~3-5 \
Strawberry Vine Garland ~4-5  \
Strawberry Vines Foreground ~2-3 \
Strawberry Wig ~1-2 \
Streaks of Light Background ~1-2 \
Streamer and Confetti Foreground ~1-2 \
Streamer Tent Tree ~1-2 \
String Art Wings ~1-2 \
Stringy Dark Hair Wig ~1-2 \
Striped Breezy Hat ~1-2 \
Striped Christmas Side Tree ~1-2 \
Striped Cybunny Key Quest Token buyable ~1-2 \
Striped Desert Dress ~1-2 \
Striped Floating Lantern Garland buyable through Striped Usul Key Quest Token ~1-2 \
Striped Flower Foreground buyable through Striped Kacheek Key Quest Token ~1-2 \
Striped Flower Shoes ~1-2 \
Striped Gloves buyable through Striped Ixi Key Quest Token ~1-2 \
Striped Green Shirt buyable ~1 \
Striped Holiday Parasol ~1-2 \
Striped Holiday Tree Foreground ~1-2 \
Striped Ixi Key Quest Token buyable ~1-2 \
Striped Kacheek Key Quest Token buyable ~1-2 \
Striped Lollypop Sword ~1-2 \
Striped Neovian Trousers ~1-2 \
Striped Ornament Garland ~1-2 \
Striped Painted Negg Wings ~1-2 \
Striped Scarf Tie ~1-2 \
Striped Shirt and Puffy Vest ~1-2 \
Striped Strawberry Jumper ~6-8  \
Striped Summer Dress ~1-2 \
Striped Usul Key Quest Token buyable ~1-2 \
Striped Wig buyable through Striped Xweetok Key Quest Token ~1-2 \
Striped Xweetok Key Quest Token buyable ~1-2 \
Stuck Underground Background ~1-2 \
Stuffed Carrot Handheld Plushie ~1-2 \
Stuffed Pawkeet Friend ~2 \
Stunning Moon View Background ~25-35 \
Sturdy Caroler Shoes ~1-2 \
Sturdy Horned Helmet ~1-2 \
Sturdy Tennis Racket ~1-2 \
Stylish Altador Cup Wig ~2 \
Stylish Cybunny Ears and Hat ~1-2 \
Stylish Modern Jacket and Shirt ~1-2 \
Stylish Peacoat Dress ~1-2 \
Stylish Spiked Wig ~1-2 \
Stylish Yellow Trousers ~1-2  \
Suave and Stylish Wig ~1-2 \
Suave Wavy Brown Wig buyable ~1 \
Subservient Sentient Stones ~4 \
Succulent Bouquet ~1-2 \
Succulents Foreground ~1-2 \
Suede Laced Shorts ~1-2 \
Sugar and Spice Dress ~2 \
Sugar and Spice Necklace ~4 \
Sugar and Spice Wig ~2 \
Sugar and Spice Wings ~1-3 \
Sugar Cookie Facepaint ~1-2 \
Sugar Frosting Face Paint ~1-2 \
Sugar Icing Holiday Cookies Garland ~3-5 \
Sugar Negg Background buyable through NC Archives Fortune Cookie ~1-2 \
Sugar Plum Faerie Dress ~1-2 \
Sugar Plum Faerie Facepaint ~1-2 \
Sugar Plum Faerie Shoes ~4-5  \
Sugar Plum Faerie Wig ~1-2 \
Sugar Plum Faerie Wings ~1-2 \
Sugar Plum Thought Bubble ~1-2 \
Sugar Skull Frame Background ~1-2 \
Sugar Skull NC Fortune Cookie ~1-2 \
Sugary Jellybean Tree ~2-4 \
Sugary Sweets Dress ~1-2 \
Sugary Sweets Facepaint ~1-2 \
Sugary Sweets Kingdom Background ~1-2 \
Sugary Sweets Shoes ~3-5  \
Sugary Sweets Wand ~1-2 \
Sugary Sweets Wig ~1-2 \
Suited Darblat Handheld Plushie ~1-2 \
Summer at the Beach Mystery Capsule ~2-3 \
Summer Beach Bag ~1-2 \
Summer Beach Ball Mystery Capsule ~4-5 \
Summer Cake ~1-2 \
Summer Chia Fruit Sculpture ~1-2 \
Summer Couture Dress ~1-2 \
Summer Dream Dress ~1-2 \
Summer Fedora Wig ℗ ~4-6 \
Summer Fireworks Background ~2 \
Summer Flower Tiara Face Paint ~1-2 \
Summer Fun Beach Background ~1-2 \
Summer Fun Mystery Capsule ℗ ~6-8 \
Summer Fun Sunglasses ~1-2 \
Summer Hoop Toy ~1-2 \
Summer Lounge Chair ~1-2 \
Summer Masquerade Mask ~1-2 \
Summer Mystery Capsule [rare collectible : Depends on trader] ~200+ \
Summer Night Luminaries buyable through 9th Birthday Night Wish Candle  \
Summer Orange Root Blonde Wig ℗ ~12-15 \
Summer Palm Tree Mystery Capsule ~3 \
Summer Picnic ~1-2 \
Summer Picnic Background ~1-2 \
Summer Picnic Garland ~1-2 \
Summer Picnic Mystery Capsule ~2  \
Summer Picnic Set ~1-2 \
Summer Popsicle Gift Box Mystery Capsule ~4 \
Summer Ruffle Shirt ~1-2 \
Summer Scarf ~1-2 \
Summer Sun and Stars Wings ~1-2 \
Summer Sun Mystery Capsule ~2-3 \
Summery Polkadot Shirt ~1-2 \
Summery Ponytail Wig ~1-2 \
Sun and Orange Sun Trinket ~1-2 \
Sun Beam Makeup buyable ~1 \
Sun Burn ~1-2 \
Sun Hat and Wig ~1-2 \
Sun Headband ~1-2 \
Sun of Altador Effect ~2-3 \
Sun of Altador Magic Elixir ~2-3 \
Sun Prince Background ~1-2 \
Sun Prince Boots ~1-2 \
Sun Prince Jacket ~1-2 \
Sun Prince Markings ℗ ~10 \
Sun Prince Sword ~1-2 \
Sun Prince Trousers ~1-2 \
Sun Prince Wig ~1-2 \
Sun Princess Background ~2 \
Sun Princess Contacts ~1-2 \
Sun Princess Dress ~1-2 \
Sun Princess Face Paint ~3-4 \
Sun Princess Staff ~1-2 \
Sun Princess Wig ~1-2 \
Sun Princess Wings ~1-2 \
Sun Screen Face Paint ~1-2 \
Sun Shower buyable ~1 \
Sun Wings ~1-2 \
Sunbeam Caplet ~1-2 \
Sunfire Contacts ~1-2 \
Sunflower Dress ~2-3 \
Sunflower Garland buyable ~1 \
Sunflower Pot ~1-2 \
Sunflower Shorts ~1-2 \
Sunflower String Lights ~3-5 \
Sunflower Tattoo ~1-2 \
Sunflower Wings ~1-2 \
Sunken Ship Background ~2 \
Sunny Day Face Paint ~1-2 \
Sunny Day Mystery Capsule ~8-10 \
Sunny Day Wings ~1-2 \
Sunny Garden Dress ~1-2 \
Sunny Summer Scarf Wig buyable through Patapult ~1-2 \
Sunny Yellow Ruffle Dress ~1-2 \
Sunny Yellow Shorts ~1-2 \
Sunrise Negg Hunt Background ~2-3  \
Sunrise Swing ~2-3 \
Sunset View Background ~1-2 \
Sunshine Pinata ~1-2 \
Sunshine Thought Bubble ~2 \
Sunshine Wig ~2-4  \
Sunshower Wig ~2 \
Super Festive Holiday Home Background ~1-2 \
Super Fun Water Sprinkler ~1-2 \
Super Happy Icy Fun Collectors Jacket ~1-2 \
Super Hero Mask Facepaint ~1-2 \
Super Sleuth Hat and Wig ~1-2 \
Super Soft Faerieland Sofa buyable ~1 \
Super Soft Lulu Plushie ~4 \
Super Soft Mystery Island Rug buyable ~1 \
Super Sparkly New Years Bow Tie ~1-2 \
Super Spiky Wig ~1-2 \
Super Spy Goggles ~2 \
Super Warm Holiday Mittens ~3 \
Surf Trousers ~1-2 \
Surface of Kreludor Background ~1-2 \
Surfs Up Background ~1-2 \
Surprisingly Malevolent Messenger Bag ~1-2 \
Surrounded by Love Foreground ~1-2 \
Surrounded by Swords Foreground ~1-2 \
Surrounded By Toys Foreground ~1-2 \
Surrounded by Wraiths ~1-2 \
Suspicious Candy House Background ~2 \
Suteks Tomb Music Track ~1-2 \
Swamp Floor Tiles \
Swanky Lounge Background ~1-2 \
Swashbuckler Trousers buyable ~1 \
Swaying Cattails ~2 \
Swaying Clover Foreground ~1-2 \
Sweeping Pink Cape ~2 \
Sweet Bubble Heart Wand ℗ ~2 \
Sweet Candy Topiary NT \
Sweet Dreams Crib buyable ~1 \
Sweet Dreams Goodie Bag ~1-2 \
Sweet Silver Violin ~35-40 \
Sweet Summertime Retired Mystery Capsule ~1-2 \
Sweet Valentine Garland ~1-2 \
Sweet Valentine Mobile ~1-2 \
Sweetheart Background ~4 \
Sweetheart Ball Gown ~3-4 \
Sweetheart Flower Bouquet ~1-2 \
Sweetheart Gram Dressing Room ~2-3 \
Sweetheart Smiley Snack ~6-8 \
Sweltering Jungle Planet Background ~1-2 \
Swimming Flippers ~1-2 \
Swing Set Background ~3 \
Swinging Chia Gnome buyable through NC Archives Fortune Cookie ~1-2 \
Swinging in a Nest ~1-2 \
Swinging on a Cloud buyable through Cloud Uni Key Quest Token ~1-2 \
Swirl of Magic ~2 \
Swirl of Power Effect ~1-2 \
Swirl of Power Elixir ~1-2 \
Swirling Hearts Head Bonk ~1-2 \
Swirling Lightmite Shower ~3-5 \
Swirls of Numbers Background buyable through NC Archives Fortune Cookie ~1-2 \
Swirly Carmariller Garland ~1-2 \
Swirly Crayon Facepaint ~1-2 \
Swooping Cape Wings ~1-2 \
Sword Collection Garland ~1-2 \
T \
 \
Table of Holiday Treats ~1-2 \
Table with Borovan ~1-2 \
Tacky Christmas Jumper ~1-2 \
Tacky Coconut Sunglasses ~1-2 \
Taelia Wig ~2-3 \
Taelias Collectors Coat ~1-2 \
Takeout Box Purse buyable through Shenanigifts ~1-2 \
Tale of Woe Mystery Capsule ~3 \
Tangerine Contacts buyable through Patapult ~1-2	 \
Tangerine Side Tree buyable through Shenanigifts ~1-2 \
Tangle of Christmas Lights buyable through NC Archives Fortune Cookie ~1-2 \
Tapestry Enamel Wings ~1-2 \
Tar Pit NT \
Tarla Wig with Horns	~1-2 \
Tasteful Black Cardigan ~1-2 \
Tasty Bakery Background ~20-25 \
Tattered Straitjacket ~1-2 \
Tattered Wrought Iron Wings ~1-2 \
Tattoo Sleeve ~1-2 \
Tax Beast Bopper ~4-8 \
Tea Lights Foreground ~1-2 \
Tea Party Background buyable through NC Archives Fortune Cookie ~2-3 \
Tea Rose Shirt ~1-2 \
Teachers Apple Wig buyable ~1 \
Teachers Kougra Eye Glasses buyable through Schools in Session Mini Pack ~3 \
Teacup Candle ~1-2 \
Teacup Garden Foreground ~1-2 \
Teal and Yellow Color Block Skirt buyable ~1 \
Teal Flowering Dress buyable through Shenanigifts ~1-2 \
Teal-Coloured Satin Rain Coat ~1-2 \
Tears of Caylis Face Paint ℗ ~2-3 \
Techo Fanatic Gift Box Mystery Capsule ~3 \
Techo Fanatic In A Box ~1-2 \
Techo Fanatic Plushie buyable through NC Archives Fortune Cookie ~1-2 \
Techo Master Cane Sword ~1-2 \
Techo Master Room Key \
Techo Masters Abode Background ~1-2 \
Techo Mountain Model \
Teeter Tottering Hasees buyable through NC Archives Fortune Cookie ~2-3 \
Tekels Collectors Staff ~3-4 \
Teleport Tower NT \
Teleport Tower Trinket \
Telescopic Monocle ~1-2 \
Tennis Background ~1-2 \
Tennis Headband ~3 \
Tennis Racket Snow Shoes ~1-2 \
Tentacle Beard ~1-2 \
Terror Mountain Altador Cup Jersey buyable ~1 \
Terror Mountain Altador Cup Locker Room Background buyable ~1 \
Terror Mountain Altador Cup Team Spirit Banners buyable ~1 \
Terror Mountain Digging Room \
Terror Mountain Face Makeup ~1-2 \
Terror Mountain Fence buyable ~1 \
Terror Mountain Fence 10-Bundle buyable ~1 \
Terror Mountain Frame ~10-12 \
Terror Mountain Holiday JubJub Power Bounce Suitcase ~2-3 \
Terror Mountain Holiday JubJub Power Bounce Token 1-pack \
Terror Mountain Holiday JubJub Power Bounce Token 10-pack \
Terror Mountain Holiday JubJub Power Bounce Token 25-pack \
Terror Mountain Holiday JubJub Power Bounce Token 5-pack \
Terror Mountain Igloo \
Terror Mountain Mystery Capsule ~4-5 \
Terror Mountain Room in a Bag buyable ~5 \
Terror Mountain Signpost ~8-10 \
Terror Mountain Sleigh Sofa buyable ~1 \
Terror Mountain Team Braided Wig ~1-2 \
Terror Mountain Team Crazy Wig ~1-2 \
Terror Mountain Team Cuffs ~1-2 \
Terror Mountain Team Foam Finger ~3 \
Terror Mountain Team Glitter Face Paint ~1-2 \
Terror Mountain Team Hat ~2-3 \
Terror Mountain Team Jester Hat ℗ \
Terror Mountain Team Mask ~1-2 \
Terror Mountain Team Pom Pom ~1-2 \
Terror Mountain Team Road to the Cup Background ~1-2 \
Terror Mountain Team Scarf ~3 \
Terror Mountain Team Sport Shirt ~2-3 \
Terror Mountain Team Trousers and Cleats ~1-2 \
Terror Mountain Team Vuvuzela ~2-3 \
Terror Mountain Winter Background ~6-8 \
Terror Mountain Winter JubJub Power Bounce Suitcase ~2-3 \
Terror Mountain Winter JubJub Power Bounce Token 1-pack \
Terror Mountain Winter JubJub Power Bounce Token 10-pack \
Terror Mountain Winter JubJub Power Bounce Token 25-Pack \
Terror Mountain Winter JubJub Power Bounce Token 5-pack \
Tetraberry Smiley Snack buyable ~1 \
The Arena of Pink Background ~1-2 \
The Big Dance Background ~1-2 \
The Black Pawkeet Background ~2-3 \
The Case of the Missing King Adventure Book 13-Page Pack \
The Case of the Missing King Adventure Book 5-Page Pack \
The Drenched Collectors Contacts ~2-3 \
The Games Begin Once Upon a Time ~3-4 \
The Gift of a Single Rose ~6-7 \
The Grand Peppermint Throne Room Background ~1-2 \
The Great Mystery Capsule Adventure Loyal User Badge ~1-2 \
The Kickoff Once Upon a Time Turner ~3-4 \
The Mysterious Eye of Ta-Kutep ~1-2 \
The Sinking Clouds of Faerieland ~2 \
The Three Collectors Cloak ~10-12 \
The Three Skull Facepaint ℗ ~2-3 \
Thespian Background ℗ ~30-40 \
Thieves Guild Background ~1-2 \
Thieving Boots ~2 \
This Way Sign ~1-2 \
Thoughtful Holiday Bouquet ~1-2 \
Three Headed Monster Costume buyable through NC Archives Fortune Cookie ~1-2 \
Three Headed Skull Monster Costume buyable through Wonderclaw ~1-2 \
Three Quarter Pastel Trousers ~1-2 \
Throne of Bones Background buyable through Wonderclaw ~1-2 \
Throne of Darigan Background ~1-2 \
Throne of Intrigue ~1-2 \
Thumper Tower NT \
Thumper Tower Trinket ~1 \
Tiara Updo Wig ~1-2 \
Ticking Time Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Tidal Pool Trinket ~1-2 \
Tie-Dye Mystery Capsule ~4 \
Tied Bandana Wig buyable ~1 \
Tied to the Mast Background ~1-2 \
Tied with a Bow Top ~1-2 \
Tied Yellow Top ~1-2 \
Tigersquash Smiley Snack buyable ~1 \
Tiki Gate ~1-2 \
Tiki Hut ~1-2 \
Tiki Lamp ~1-2 \
Tiki Mystery Island Wallpaper \
Tiki Stage ~1-2 \
Tiki Stand Foreground ~1-2 \
Tiki Surfboard ~1-2 \
Tiki Tack Shield ~1-2 \
Tiki Tack Torch ~1-2 \
Time Tunnel Music Track ~1-2 \
Timely Smoke Bomb ~1-2 \
Tinkered Sweetheart Gram NT \
Tinsel Trees Foreground ~1-2 \
Tinted Brass Glasses ~1-2 \
Tiny Glasses ~2 \
Tissue Paper Assortment buyable ~1 \
Tissue Paper Flower Garland buyable through Shenanigifts ~1-2 \
Tissue Paper Gem Dress ~1-2 \
Tissue Paper Ribbon Garland ~1-2 \
Tissue Paper Wood Wings ~1-2 \
TNT Mystery Capsule ~2-3 \
TNT Staff Smasher Home Edition ~65-95 \
Toasty and Warm Holiday Mystery Capsule ~3-4 \
Tombstone Foreground ~1-2 \
Top Chop Background ~12-15  \
Top Chop Coin Shower buyable through NC Archives Fortune Cookie ~1-2 \
Top It Off Mystery Capsule ~2-3 \
Toppling Gift of Neocash Gift Boxes ~5 \
Topsy Turvey Dish ~1-2 \
Topsy Turvy Cake Hat ~1-2 \
Topsy Turvy Jewellery Boxes ~1-2 \
Torch NT \
Torchio Collectors Contacts ~2 \
Tornado Garland ~1-2 \
Tornado Wig ~1-2 \
Totem Poles ~1-2 \
Tough Guy Jacket ~1-2 \
Tough Guy Mystery Capsule ~2-3 \
Tough Love Valentine Mystery Capsule ~2 \
Tousled Brown Wig ~1-2 \
Tousled Coral Hair ~1-2 \
Tower Princess Gown buyable ~1 \
Tower Princess Necklace buyable through Tower Princess Superpack ~3-4 \
Tower Princess Shoes buyable ~1 \
Tower Princess Wig buyable ~1 \
Tower Room Ruins Background buyable ~1 \
Towering Over Tyrammet ~1-2 \
Toxic Green Beard ~1-2 \
Toxic Green Face Paint ~1-2 \
Toxic Mystery Capsule ~2-3 \
Toxic Skull Lantern ~1-2 \
Toxic Spill Foreground ~1-2 \
Toy Altador Shield ~1-2 \
Toy Buzzer Helper ℗ ~6-7 \
Toy Room Background ~3 \
Toy Scythe of Dread buyable through NC Archives Fortune Cookie ~2-3 \
Toy Shelf Background ~10-12 \
Trading Card Game Frame ~1-2 \
Trading Post Background ~1-2 \
Traditional Gardens Background buyable through Shenanigifts ~1-2 \
Traditional Plaid Bagpipe ~1-2 \
Traditional Plaid Kilt ~1-2 \
Traditional Stone Lantern ~1-2 \
Training Equipment Background ~1-2 \
Training Fortune Cookie buyable ~1 \
Tranquil Meditation Tree ~1-2 \
Trapped in a Jar ~2 \
Travelling Wagon Foreground ~1-2 \
Tree and Pumpkin Silhouette ~1-2 \
Tree Canopy Bed \
Tree Decorating Background ~1-2 \
Tree House Background ~1-2 \
Tree in a Wheelbarrow Trinket \
Tree of Hearts ~1-2 \
Tree of Hearts Foreground buyable through Patapult ~1-2 \
Tree Sap buyable ~1 \
Tree Sap and Cotton Wig ~1-2 \
Tree Stump Tea Party ~1-2 \
Tree Tent ~1-2 \
Tree with Changing Leaves ~20-25 \
Trendsetter Holiday Snowglobe ~2 \
Trendsetting Holiday Bracelets ~1-2 \
Trendy Highlights Wig ~1-2 \
Trendy Peppermint Glasses ~1-2 \
Tribal Makeup buyable through the Tribal Mystery Capsule ~1-2 \
Tribal Mystery Capsule buyable ~1 \
Tribal Pottery Foreground ~1-2 \
Tribal Print Gown buyable through the Tribal Mystery Capsule ~1-2 \
Tribal Print Lanterns buyable through the Tribal Mystery Capsule ~1-2 \
Tribal Print Purse buyable through the Tribal Mystery Capsule ~1-2 \
Tribal Print Top buyable through the Tribal Mystery Capsule ~1-2 \
Tribal Skeleton Armour ~1-2 \
Trick or Treat Satchel ~1-2 \
Trick-or-Treat Doorstep Background ~4-5 \
Trick-or-Treat Pumpkin ~1-2 \
Trickling Water Foreground ~6-7 \
Trim and Zipper Tree ~1-2 \
Trio of Stars Wand ~1-2 \
Triple Braided Wig ~1-2 \
Triumph of Darigan Mystery Capsule ~2-3 \
Tropical Banana Garland ~1-2 \
Tropical Drink Background ~1-2 \
Tropical Drinking Hat ~1-2 \
Tropical Flower Arbor ~2 \
Tropical Flower Dress ~1-2 \
Tropical Flower Facepaint ~1-2 \
Tropical Flower Head Wreath buyable through Island JubJub Key Quest Token ~1-2 \
Tropical Flower Mask ~1-2 \
Tropical Island Swing ~1-2 \
Tropical Mystery Island Sofa buyable ~1 \
Trumpet Fanfare Shower ~2 \
Tucked In Sweater and Skirt Outfit ~1-2 \
Tulip Background ~3-4  \
Tulle and Bells Cape ~1-2 \
Tulle and Yarn Tutu ~1-2 \
Tulle Cloud Skirt buyable ~1 \
Tulle Skirt Holiday Dress ~1-2 \
Tunnel of Gourds ~1-2 \
Tunnel of Petals Background ~1-2 \
Tunnel of Spring Trees Background ~1-2 \
Tunnel of Trees Background ~4 \
Turmac Hoodie buyable through NC Archives Fortune Cookie ~1-2 \
Turmac Roll Background ~15-20 \
Turmac Sweater buyable through NC Archives Fortune Cookie ~1-2 \
Turquoise Polka Dot Trousers ~1-2 \
Twigs and Flowers Foreground ~1-2 \
Twin Autumn Trees ~1-2 \
Twinkling Lights Gift Box Mystery Capsule ~1-2 \
Twinkling Nova Lights Frame ~1-2 \
Twinkling Nova String Lights ~8 \
Twinkling Pink Tiara ~1-2 \
Twinkling Star Garland ~1-2 \
Twirling Fire Baton ~1-2 \
Twirling May Pole ~1-2 \
Twirling Umbrella Garland ~1-2 \
Twirly Dancing Skirt ~1-2 \
Twirly Fruit Smiley Snack ~1-2 \
Twisted Holiday Horns ~1-2 \
Twisted Horns NT buyable ~1-2 \
Twisted Roses Background ~1-2 \
Two Seated Virtupets Sofa buyable ~1 \
Tycoon Vault Background ~3-4 \
Typing Terror Background ~4-5 \
Typing Terror Collectors Shirt ~1-2 \
Tyrannia Altador Cup Jersey ~1-2 \
Tyrannia Altador Cup Locker Room Background ~1-2 \
Tyrannia Altador Cup Team Spirit Banners ~1-2 \
Tyrannia Bone Bed buyable ~1-2 \
Tyrannia Bone Gazebo \
Tyrannia Fur Rug \
Tyrannia Room in a Bag buyable ~5 \
Tyrannia Stone Floor Tile \
Tyrannia Team Braided Wig ~1-2 \
Tyrannia Team Crazy Wig ~1-2 \
Tyrannia Team Cuffs ~1-2 \
Tyrannia Team Face Makeup ~1-2 \
Tyrannia Team Foam Finger ~5 \
Tyrannia Team Glitter Face Paint ~1-2 \
Tyrannia Team Hat ~20 \
Tyrannia Team Jester Hat ~5 \
Tyrannia Team Mask ~1-2 \
Tyrannia Team Pom Pom ~1-2 \
Tyrannia Team Road to the Cup Background ~1-2 \
Tyrannia Team Scarf ~5 \
Tyrannia Team Sport Shirt	 \
Tyrannia Team Trousers and Cleats ~1-2 \
Tyrannia Team Vuvuzela ~5 \
Tyrannia Tusk Tower \
Tyrannian Blouse ~1-2 \
Tyrannian Bone Wig ~1-2 \
Tyrannian Bonfire buyable through NC Archives Fortune Cookie ~2-3 \
Tyrannian Camouflage Dress ~2 \
Tyrannian Camouflage Shoes ~2 \
Tyrannian Destruction Background ~4-5 \
Tyrannian Fake Fur Toga ~2-4 \
Tyrannian Lagoon Background ~1-2 \
Tyrannian Lunch Bag buyable through NC Archives Fortune Cookie ~1-2	 \
Tyrannian Print Tutu ~1-2 \
Tyrannian Scanoscope 1-Pack \
Tyrannian Scanoscope 14-Pack \
Tyrannian Scanoscope 5-Pac \
Tyrannian Volcano Background ~1-2 \
Tyrannian Wings ~1-2 \
U \
 \
Ultimate Bullseye Balloon Bouquet buyable through NC Archives Fortune Cookie ~1-2 \
Ultra Busy Holiday Factory Background buyable through NC Archives Fortune Cookie ~1-2 \
Ultra Icy Tiara buyable through NC Archives Fortune Cookie ~1-2 \
Ultra Pink Battledome Claw buyable ~1 \
Ultra Snazzy Trousers ~1-2 \
Ultra White Fur Shrug ~1-2 \
Umbrella Lights Garland ~1-2 \
Umbrella Wreath Wig buyable through Island Kacheek Key Quest Token ~1-2 \
Undead Contacts and Face Paint ℗ ~2-3 \
Undead Elegance Dress ~1-2 \
Undead Princess Dress ~2 \
Under Construction Sign ~1-2 \
Under the Tree Background ~3-6 \
Underground Jewel Vault Background ~2-3 \
Underground Tunnel of Books Background ~1-2 \
Undersea Playground Background ~1-2 \
Underwater Easter Statue ℗ \
Underwater Fishing Background ~20 \
Underwater Flowerbed Foreground ~2 \
Underwater Fun Mask ~1-2 \
Underwater Jeran Statue ~1-2 \
Underwater Living Room Background ~1-2 \
Underwater Tea Party Background ~2 \
Underwater Trinkets Staff ~1-2 \
Unexpected Lightning Strike ~1-2 \
Unidentified Hatching Egg ~1-2 \
Unkempt Flower Wig ~1-2 \
Unpainted Decorative Fence Foreground \
Unpainted Fountain Trinket \
Unpainted Negg Garland \
Unruly Braided Wig ~2 \
Unruly Heart Makeup ~1-2 \
Unscathed Maraqua Mystery Capsule ~3 \
Unsettling Fog Foreground ~1-2 \
Unsettling Lamp Set buyable through NC Archives Fortune Cookie ~1-2 \
Unsettling Reflection Foreground ~2 \
Unsettling Statuette Foreground ~1-2 \
Unsettling Ventriloquist Dummy ~1-2 \
Unsettling Wormoeba Contacts ~1-2 \
Unstable House of Cards ~1-2 \
Unstable Ledge Background ~1-2 \
Up On The Rooftop Background ~1-2 \
Usuki Bow Shield ~1-2 \
Usuki Doll House ℗ ~15-18 \
Usuki Thought Bubble ~10-12 \
Usukiland Collectors Dress ~1-2 \
Usurper Mystery Capsule ~3 \
Utensil for the Extra Prepared ~1-2 \
Utensil Windchime ~1-2 \
V \
 \
Valentine Apron ~1-2 \
Valentine Armour ~1-2 \
Valentine Arrow Background ~1-2 \
Valentine Baby Basket ~1-2 \
Valentine Baby Bonnet ~1-2 \
Valentine Baby Dummy ~2 \
Valentine Boa ~1-2 \
Valentine Bow Goodie Bag ~1-2 \
Valentine Bow Tie ~1-2 \
Valentine Cafe Background ~2-3 \
Valentine Caplet ~1-2 \
Valentine Celebration Background ~2-3  \
Valentine Clown Makeup ~2-3 \
Valentine Delivery Bag ~2 \
Valentine Delivery Dress ~2-3 \
Valentine Delivery Hat ~1-2 \
Valentine Delivery Wings ~3-5 \
Valentine Flower Cake ~3-4  \
Valentine Flower Mystery Capsule ~10-12 \
Valentine Garden Background ~4 \
Valentine Glam Dress ℗ ~2 \
Valentine Hair Accessory ~1-2 \
Valentine Heart Pouffy Vest ~2 \
Valentine Heart Staff ~2 \
Valentine Helpers Garland ~1-2 \
Valentine Makeup ~3-4 \
Valentine Mutant Dress ~1-2 \
Valentine Mystery Capsule [rare collectible] ~Depends on trader \
Valentine Newsboy Hat ~1-2 \
Valentine Robot Ona Handheld Plushie ~1-2 \
Valentine Rose Boots ~1-2 \
Valentine Rose Garland ~1-2 \
Valentine Ruffle Dress ~2-3 \
Valentine Sewing Shop Background ~2-3 \
Valentine Shooting Hearts Wand ~1-2 \
Valentine Sunset Beach Background ~1-2 \
Valentine Tea Cup Garden Foreground ~1-2 \
Valentine Toy Sword ~4 \
Valentine Tree of Lights ~3-4 \
Valentine Tuxedo Top ~1-2 \
Valentine Window Foreground ~1-2 \
Valentine Wreath \
Valentines Bouquet Garland ~1-2 \
Valentines Day Corsage ~1-2 \
Valentines Day Mailbox ~4-5 \
Valentines Daydream Wig ~1-2 \
Valentines Fountain ~18 \
Valentines Gift Box Mystery Capsule ~5 \
Valentines Goodie Box ~6 \
Valentines Heart Garland ~2-3 \
Valentines Letter Thought Bubble ~2-3 \
Valentines Sofa ~12-14 \
Valentines Wallpaper \
Valiant Champion Armoured Skirt buyable through Valiant Champion Mystery Capsule ~1-2 \
Valiant Champion Boots buyable through Valiant Champion Mystery Capsule ~1-2 \
Valiant Champion Coat buyable through Valiant Champion Mystery Capsule ~2 \
Valiant Champion Mystery Capsule buyable ~1 \
Valiant Champion Shoulder Armour buyable through Valiant Champion Mystery Capsule ~1-2 \
Valiant Champion Warpaint buyable through Valiant Champion Mystery Capsule ~1-2 \
Valiant Champion Wings buyable through Valiant Champion Mystery Capsule ~1-2	 \
Valiant Sail Wings ~1-2 \
Vampire Coffin Background ~1-2 \
Vampire Costume Amulet ~3-5 \
Vampire Costume Face Paint ~1-2 \
Vampire Costume Wig ~1-2 \
Vampire Counts Cape ~1-2 \
Vampires Bane Garland ~1-2 \
Vandagyre Cap and Wig ~1-2 \
Vandagyre Contacts ~1-2 \
Vandagyre Goodie Bag ~1-2 \
Vase of Springs ~1-2 \
Vase of Valentine Flowers ~1-2 \
Vases of Valentine Flowers ~1-2 \
Vault of Neggs Background ~1-2 \
Veespa Handheld Plushie ~2-3 \
Velvet Headband and Wig ~1-2 \
Velvet Hearts and Flowers Garland ℗ ~3-4  \
Velvet Stole ~1-2 \
Velveteen Jodhpurs ~1-2 \
Velveteen Valentine Sweetheart Gram NT  \
Vengeful Snowman Arm-our ~1-2 \
Ventriloquist Makeup ~2 \
Very Berry Ice Lolly ~1-2 \
Vibrant Bell Gate ~1-2 \
Vibrant Circuit Dress ~2-3 \
Vibrant Gears Garland ~1-2 \
Vibrant Multicolour Wig ~1-2 \
Vibrant Neighbourhood Background buyable through Wonderclaw ~1-2 \
Vibrant Pinchit Dress ~1-2 \
Vibrant Sugar Skull Mask ~1-2 \
Vibrant Summer Stripes Dress ~1-2 \
Vicious Mohawk ~2-3 \
View from the Altador Cup Blimp Background ~1-2 \
Village Snowdrift Background ~1-2 \
VIN Suite Foreground ~1-2 \
VIN Velvet Ropes ~6 \
Vine Bow Shirt ~1-2 \
Vine Wings ~1-2 \
Vintage Blond Roll Wig ~1-2 \
Vintage Collared Blouse ~1-2 \
Vintage Flower Trunks \
Vintage Gold Earrings ~1-2 \
Vintage Gold Necklace ~1-2 \
Vintage Guitar Handheld buyable ~1 \
Vintage Holiday Shorts and Tights ~1-2 \
Vintage Lantern Garland ℗ ~15-20  \
Vintage Mauve Valentine Gown ~1-2 \
Vintage Neopia Central Background ~1-2 \
Vintage Scorchio Plushie ~2 \
Vintage Valentine Flower Vendor Background ~1-2 \
Vintage Valentine Sweetheart Gram NT \
Vintage Valentine Swing ~2-3 \
Viny Portal Foreground buyable through Patapult ~1-2 \
Violet Flower Lantern buyable through 9th Birthday Fantasy Wish Candle ~1-2 \
Viras Collectors Horns ~2-3 \
Viras Fashion Line Mystery Capsule ~2 \
Virtupets Altador Cup Jersey ~1-2 \
Virtupets Altador Cup Locker Room Background ~1-2 \
Virtupets Altador Cup Team Spirit Banners ~1-2 \
Virtupets Caution Tape Foreground ~5-6 \
Virtupets Circuit Floor Tiles \
Virtupets Circuit Wallpaper \
Virtupets Fence buyable ~1 \
Virtupets Fence 10-Bundle buyable ~1 \
Virtupets Information Screen ~1-2 \
Virtupets Map Screen ~4 \
Virtupets Room in a Bag buyable ~5 \
Virtupets Sleigh Background ~1-2 \
Virtupets Space Station Airlock \
Virtupets Space Station Frame ~45-50  \
Virtupets Space Station Mystery Capsule ~3+ \
Virtupets Team Braided Wig ~1-2 \
Virtupets Team Crazy Wig ~1-2 \
Virtupets Team Cuffs ~1-2 \
Virtupets Team Face Makeup ~1- \
Virtupets Team Foam Finger \
Virtupets Team Glitter Face Paint ~1-2 \
Virtupets Team Hat \
Virtupets Team Jester Hat ~1-2  \
Virtupets Team Mask ~1-2 \
Virtupets Team Pom Pom ~1-2 \
Virtupets Team Road to the Cup Background ~1-2 \
Virtupets Team Scarf ~3-4 \
Virtupets Team Sport Shirt \
Virtupets Team Trousers and Cleats ~1-2 \
Virtupets Team Vuvuzela ~2 \
Vision of Hearts ~1-2 \
Vision of Nightmares Facepaint ~2-3 \
Vivacious Black Gear Cap ~1-2 \
Vivacious Black Shirt ~1-2 \
Vivacious Black Trousers ~1-2 \
Vivacious Green Gear Cap ~1-2 \
Vivacious Green Shirt ~1-2 \
Vivacious Green Trousers ~1-2 \
Vivacious Orange Gear Cap ~1-2 \
Vivacious Orange Shirt ~1-2 \
Vivacious Orange Trousers ~1-2 \
Vivacious Purple Gear Cap ~1-2 \
Vivacious Purple Shirt ~1-2 \
Vivacious Purple Trousers ~1-2 \
Vivid Plaid Trousers ~1-2 \
Vivid Purple Spring Door Background ~1-2 \
Volleyball Shower ~1-2 \
Vyssas Shrine Background ℗ ~2-3 \
W \
 \
Wacky Carnival Mask ~1-2 \
Wacky Tomamu Hat ~1-2 \
Waffle Cone Skirt ~1-2 \
Walk Around the Park Background buyable through Patapult ~1-2 \
Walk the Plank Background ~2-3 \
Wall of Trophies Background buyable through NC Archives Fortune Cookie ~1-2 \
Wall of Weapons Foreground ~2 \
Wallace Socks buyable through NC Archives Fortune Cookie ~1-2 \
Walled Garden Path Background ~3-4 \
Wanderers Coat ~1-2 \
Warf Wharf Background ~1-2 \
Warm and Cosy Fireplace ~1-2 \
Warm and Fuzzy Ice Skates ~2-3 \
Warm Autumn Coat ~1-2 \
Warm Fur-lined Dress ~1-2 \
Warm Headband Ponytail Wig ~1-2 \
Warm Puffy Jacket ~1-2 \
Warm Tyrannia Lamp buyable ~1 \
Warm Winter Hammock Background Item ~1-2 \
Warm Yellow Cardigan ~1-2 \
Warrior Glade Background ~1-2 \
Warrior Wig and Helmet ~1-2 \
Water Balloon Shower ~1-2 \
Water Columns Garland ~2 \
Water Drain Foreground ~1-2 \
Water Faerie Coffee Table ~3 \
Water Hose Wings ~1-2 \
Water Lily Pond Background ~25-30 \
Water Lily Wings ~1-2 \
Water Skirt ~1-2 \
Water Splash buyable through NC Archives Fortune Cookie ~1-2 \
Water Wings ~1-2 \
Watercolour Dress ~1-2 \
Waterfall Braided Wig ~2 \
Waterfall Diving Background ~1-2 \
Waterfall Fireworks Effect ~3-5  \
Waterfall Piano ~1-2 \
Waterfront Background NT \
Watering Can Garland ~1-2  \
Watering Can Stair Fountain ~1-2 \
Watermelon Balloons ~1-2 \
Watermelon Cloud Shower ~1-2 \
Watermelon Contacts ~2 \
Watermelon Makeup ~4-6 \
Watermelon Parasol ~1-2 \
Watermelon Shoes ~1-2 \
Watermelon Tutu & Tights ~1-2 \
Wave Splash Surfboard ~2-3 \
Wave Surfer Background ~1-2 \
Waving Altador Cup Pennant ~1-2 \
Wavy Long Wig ~1-2 \
Wavy Red Wig ~1-2 \
Weather Vane Staff ~1-2 \
Web of Hearts Facepaint ~2 \
Weewoo Bath ~15 \
Weewoo Clock ~15 \
Weewoo Garland Wig ~1-2 \
Weewoo Sugar Negg buyable through NC Archives Fortune Cookie ~1-2 \
Weighted Balloon Bouquet ~1-2 \
Weird Tube Hat ~1-2 \
Welcome to Camp Wannamakeagame ~1-2 \
Welded Heart Shield ~1-2 \
Wet Hair Braid Wig ~1-2 \
Whats Cooking Cauldron Background ~1-2 \
Wheat Wreath Wig ~1-2 \
Wheel of Excitement Collectors Wand ~1-2 \
Wheel of Excitement Thought Bubble ~8-10 \
Wheel of Extravagance Collectors Shoulder Armour ~1-2 \
Wheel of Extravagance Collectors Wig ~1-2 \
Wheel of Knowledge Collectors Skirt ~2-3 \
Wheel of Mediocrity Collectors Dress ~2 \
Wheel of Monotony Collectors Shield ~2 \
Wheelers Wild Shorts	~2 \
Whimsical Berry Side Tree ~1-2 \
Whimsical Birthday Tree ~2 \
Whimsical Faerie Fort ~1-2 \
Whimsical Garden Background ~1-2 \
Whimsical Gothic Dress ~1-2 \
Whimsical Negg House Background ~1-2 \
Whimsical Pumpkin Hill Background ~3-5 \
Whimsical Rainbow Glass Arch ~1-2 \
Whimsical Toy Train Background ~1-2 \
Whimsical Winter Park Background ~1-2 \
Whipped Frosting Wig ~1-2 \
Whirring Steam-Powered Mystery Capsule ~9 \
White Beaded Tunic ~1-2 \
White Bright String Lights ~1-2 \
White Christmas Side Tree ~1-2 \
White Daisy Garland ~2-3 \
White Dress with Ombre Lace buyable through Wonderclaw ~1-2 \
White Flower Embroidery Dress ~1-2 \
White Flower Red Bathing Suit ~2-3 \
White Gift Wrap with Red Bow NT \
White Marble Planter \
White Picket Fence Foreground ~1-2 \
White Picket Fence of Neggs Foreground ~3-5 \
White Rose Slippers ~1-2 \
White Sands Background ~1-2 \
White Snowflake Caplet ~1-2 \
White Wicker Bench \
White Winter Wonderland Background ~1-2 \
Whoot Purse ~1-2 \
Wicked Winter Mystery Capsule ~2-3 \
Wicker Purse ~10-15 \
Wig with Bone Hand Accessory buyable through Wonderclaw ~1-2 \
Wig with Curlers ~1-2 \
Wild Card Fortune Cookie buyable ~1 \
Wild Mutton Chop Wig ~2 \
Wilting Flower Bouquet ~1-2 \
Wilting Garden Foreground ~1-2 \
Wind Up Aristotle ~2 \
Wind Up Ferocious Negg ~1-2 \
Wind Up Gift Box ~1-2 \
Wind Up Number Six NT buyable ~1 \
Wind Up Potgatkerchi ~15-20 \
Wind-Up Mutant Petpets buyable through NC Archives Fortune Cookie ~1-2 \
Winding Vine Belt ~1-2 \
Winding Vine Necklace ~1-2 \
Window Box Planter Foreground buyable ~1 \
Window with Twinkling Lights Background Item ~2-3 \
Windswept Wig ~1-2 \
Windswept Wig and Hat ~2 \
Windy Autumn Fence ~6-8 \
Winged Altadorian Sandals ~1-2 \
Winged Hearts Garland ~1-2 \
Winged Mystery Capsule ~2  \
Winged Petpetpet Hat ~1-2 \
Wingoball Heart Tree buyable through NC Archives Fortune Cookie ~1-2 \
Wings of Darkness ~1-2 \
Wings of Dung ~1-2 \
Wings of Flame ~1-2 \
Wings of Ice ~1-2 \
Wings of Water ~1-2  \
Winter Beekadoodle House Gift Box Mystery Capsule ~2 \
Winter Berries Gift Box Mystery Capsule ~1-2 \
Winter Berry Fence Foreground ~1-2 \
Winter Berry Handheld Candle ~1-2 \
Winter Branch Dress ~1-2 \
Winter Breeze Face Paint buyable through NC Archives Fortune Cookie ~1-2 \
Winter Breeze Shower ~1-2 \
Winter Caplet ~1-2 \
Winter Cemetery Ruins Background buyable through NC Archives Fortune Cookie ~2-4 \
Winter Couture Dress ℗ ~2-3 \
Winter Couture Mystery Capsule ~2-3  \
Winter Couture Wig ~1-2 \
Winter Crown ~1-2 \
Winter Flower Hair Pin buyable through NC Archives Fortune Cookie ~1-2 \
Winter Flower Staff ~1-2 \
Winter Frost Sweater ~1-2 \
Winter Gazebo ~1-2 \
Winter Gown buyable ~1 \
Winter Gift Wrap NT \
Winter Hair Flower ~1-2 \
Winter Holiday Mailbox ~1-2 \
Winter Holiday Scarf ~1-2 \
Winter Holiday Snowglobe ~2 \
Winter Icicle Frame ~2 \
Winter Igloo Mystery Capsule ~5+ \
Winter Lace Caplet ~1-2 \
Winter Lights Effect ~2 \
Winter Lights Magic Elixir ~1-3 \
Winter Mitten String Lights ~1-2 \
Winter Moon Background ~1-2 \
Winter Nature Mystery Capsule ~1-2 \
Winter Park Bench Background ~1-2 \
Winter Poinsettia Staff buyable through NC Archives Fortune Cookie ~2-3 \
Winter Prince Jacket ~2-3 \
Winter Prince Trousers ~1-2 \
Winter Rose Foreground ~2-3 \
Winter Shopping Background ~1-2 \
Winter Snow Branch Garland ~1-2 \
Winter Snow Drift buyable through NC Archives Fortune Cookie ~5 \
Winter Snow Flurry Mystery Capsule ~4+ \
Winter Snowbunny Earmuffs ~1-2 \
Winter Snowflake Booties ~1-2 \
Winter Snowflake Gift Box Mystery Capsule ~3 \
Winter Snowflake Tree ~1-2 \
Winter Star and Snowflake Garland ~1-2 \
Winter Starlight Snowglobe ~1-2 \
Winter Supply Deck Background ~1-2 \
Winter Themed Album Skin [NT \
Winter Thermal Shirt and Vest ~1-2 \
Winter Tree Trinket ~2-3 \
Winter White Ric Rac Shoes ~1-2 \
Winter Wonderland Gift Wrap NT \
Wintery Palace Background ~1-2 \
Wintery Slope Background ~3 \
Wintery White Hood ~1-2 \
Wintry Flower Shower ~1-2 \
Wintry Snow Swirl Caplet ~1-2 \
Wire Basket of Neggs ~2-3 \
Wish for NC Tree ~1-2 \
Wish on a Star Background ~12-15 \
Wishing Fountain Trinket ~1-2 \
Wispy Cloud Wings ~1-2 \
Wispy Flower Crown Wig ~3-4 \
Wispy Holiday Ponytail ~1-2 \
Wispy Valentine Wings ~1-2 \
Wispy Winter Gift Box Mystery Capsule ~2 \
Witch Hat String Lights ~1-2 \
Witchs Broom ~1-2 \
Witchy Spyder Web Shoes ~2	 \
Wizarding Apprentice Robe ~3-4 \
Wobbly Easter Negg ~2 \
Wobbly Jelly Planet Background ~1-2	 \
Wocky Gnome Handheld Plushie ~1-2 \
Wonderclaw Pod Background ~1-2 \
Wonderland Croquet Set ~1-2 \
Wonderland Garden Background ~1-2 \
Wonderland Gloves ~3-4 \
Wonderous Terror Mountain Lights Background ~1-2 \
Wondrous Birthday Castle Background ~1-2 \
Wondrous Wobbleshire Background ~1-2 \
Wood and Gems Wig	~2-3 \
Wood Pattern Garland ~1-2 \
Wood Shavings buyable ~1 \
Wooden Birdhouse Background ~1-2 \
Wooden Flower Gate Foreground ~1-2	 \
Wooden Flower Necklace ~1-2 \
Wooden Flower Train Foreground ~1-2	 \
Wooden Funicular ~1-2 \
Wooden Gothic Chair ~3-4 \
Wooden Haunted Woods Desk buyable ~1 \
Wooden Heart Lights Foreground ~1-2  \
Wooden Krawk Island Wallpaper \
Wooden Lutari Island Lamp buyable ~1 \
Wooden Meridell Desk buyable ~1 \
Wooden Mining Cart ~1-2 \
Wooden Puppet Show Frame ~1-2 \
Wooden Shenkuu Desk buyable ~1 \
Wooden Shenkuu Lamp buyable ~1 \
Wooden Shenkuu Sofa buyable ~1 \
Wooden Snowflake Garland ~1-2 \
Wooden Tree Sword ~1-2 \
Woodland Archer Belt buyable ~1 \
Woodland Archer Body Art buyable ~1 \
Woodland Archer Bow buyable ~1 \
Woodland Archer Cape and Quiver buyable ~1 \
Woodland Archer Dress buyable ~1 \
Woodland Archer Shoes buyable through Woodland Archer Superpack ~4 \
Woodland Archer Wig buyable ~1 \
Woodland Cottage Background ~1-2 \
Woodland Creek Background ~1-2 \
Woodsy Wings ~1-2 \
Wool Peacoat ~2-4 \
Words of Antiquity Collectors Jacket ~1-2 \
Workshop Christmas Tree \
World of Neopia Magnifying Glass ~1-2 \
Worst Nightmare Mystery Capsule ~1-2 \
Woven Basket Dress ~1-2 \
Woven Picnic Hamper ~3 \
Woven Silk Wings ~1-2 \
Woven Snowflake Garland ~3  \
Woven Straw Dress ~1-2 \
Wraith Wings ~1-2 \
Wrap Around Towel ~1-2 \
Wrap Trousers ~1-2 \
Wrapped Mummy Heads ℗ ~3-5 \
Wrapped Top buyable ~1 \
Written Word Shower ~1-2 \
Wrought Iron Heart Gazebo ~2-3 \
X \
 \
Xandra Collectors Dress ~1-2 \
Y \
 \
Y12 Celebration Glasses buyable through NC Archives Fortune Cookie ~1-2 \
Y12 Commemorative Train buyable through NC Archives Fortune Cookie ~1-2 \
Y14 Masks of Dread NC Quest Pack \
Y16 Bloomin Neggs Planting Kit #1 - Striped \
Y16 Bloomin Neggs Planting Kit #2 - Argyle \
Y16 Bloomin Neggs Planting Kit #3 - Wavy \
Y16 Bloomin Neggs Planting Kit #4 - Tartan \
Yarn Decorations Garland ~1-2 \
Yarn Noil Handheld Plushie ~1-2 \
Yellow and Pink Decorative Fence Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Yellow and Pink Fountain Trinket buyable through NC Archives Fortune Cookie ~1-2 \
Yellow and Pink Negg Garland buyable through NC Archives Fortune Cookie ~1-2 \
Yellow Bench with Flowers buyable through Yellow Kacheek Key Quest Token ~1 \
Yellow Canopy Sofa ~1-2 \
Yellow Flotsam Key Quest Token buyable ~1 \
Yellow Flower Branches Garland ~1-2  \
Yellow Island Dress ~1-2 \
Yellow Kacheek Key Quest Token buyable ~1 \
Yellow Kougra Eye Glasses ~1-2 \
Yellow Kougra Key Quest Token buyable ~1 \
Yellow Mystery Capsule [rare collectible] ~Depends on trader \
Yellow Paint Bucket \
Yellow Ruffle Dress buyable through Patapult ~1-2 \
Yellow Sponge Foreground ~1-2 \
Yellow Spring Wellies ~1-2 \
Yellow Stripe Wallpaper \
Yellow Striped Neopia Central Wallpaper \
Yellow Swing Jacket ~1-2 \
Yellow Usul Key Quest Token buyable ~1 \
Yellow Xweetok Key Quest Token buyable ~1 \
Ylana Collectors Helmet ~4 \
Ylanas Shirt and Scarf ~1-2 \
Ylanas Trousers and Boots ~1-2 \
Yooyu Ball Shower ~1-2 \
Yooyu Field Background ~1-2 \
Yooyu Floating Bubble Shower buyable through NC Archives Fortune Cookie ~1-2 \
Yooyu Flower Foreground ~1-2 \
Yooyu Flower Garden Foreground ~1-2 \
Yooyu Gift Box Mystery Capsule ~2-3 \
Yooyu Glasses ~1-2 \
Yooyu Head Bonk buyable through NC Archives Fortune Cookie ~1-2 \
Yooyu Hoodie buyable through NC Archives Fortune Cookie ~1-2 \
Yooyu Inspired Tutu and Tights ~1-2 \
Yooyu on Vacation ~1-2 \
Yooyu Pen Foreground buyable through NC Archives Fortune Cookie ~1-2 \
Yooyu Purse buyable through NC Archives Fortune Cookie ~1-2 \
Yooyu Shaped Parasol ~1-2 \
Yooyu Side Tree ~1-2 \
Yooyu Slippers buyable through NC Archives Fortune Cookie ~1-2 \
Yooyu Thought Bubble ~2 \
Yooyu Top ~1-2 \
Yooyu Waiter Statue ~1-2 \
Yooyuball Lava Lamp buyable through NC Archives Fortune Cookie ~1-2 \
Yooyuball News Ticker Foreground ~1-2 \
Yooyuball Shoulder Padding buyable through NC Archives Fortune Cookie ~1-2 \
Yooyuball Snowglobe buyable through NC Archives Fortune Cookie ~1-2 \
Yooyuball Strategy Background ~1-2 \
Yooyuball Tattoo ~1-2 \
Young Sophies Dress ~1-2 \
Yurble Negg Faerie Wings ~1-2 \
Z \
 \
Zafara Double Agent Collectors Dress ~1-2 \
Zenco the Magnificent Contacts buyable through NC Archives Fortune Cookie ~15-20 \
Zesty Cinnamon Roll buyable through NC Archives Fortune Cookie ~1-2 \
Zombie Mummy Wrap Dress buyable through NC Archives Fortune Cookie ~2-4 \
Zylphia Inspired Wig ~4-5 \
Zylphio Inspired Wig ~2-4 \
# \
 \
10th Birthday Balloon Garland ~1-2 \
10th Birthday Nostalgia Bundle \
13 Days of Trick or Treat Halloween Bags 1-Pack \
13 Days of Trick or Treat Halloween Bags 13-Pack \
13 Days of Trick or Treat Halloween Bags 5-Pack  \
15th Birthday Grey Day Background ~1-2 \
15th Birthday Kiko Lake Background ~2 \
15th Birthday Mystery Island Background ~1-2 \
15th Birthday Roo Island Background ~1-2 \
15th Birthday Tyrannia Background ~1-2 \
2010 Daily Dare Gold Medal ~1-2 \
2010 Games Master Challenge NC Challenge Lulu Shirt ~5 \
2010 Stocking Stufftacular 1-Stocking Pack \
2010 Stocking Stufftacular 10-Stocking Pack \
2010 Stocking Stufftacular 25-Stocking Pack \
2010 Stocking Stufftacular 5-Stocking Pack \
2011 Altador Cup Mystery Capsule ~4 \
2011 Daily Dare NC Challenge 1-Game Ticket Pack ~1-2 \
2011 Daily Dare NC Challenge 10-Game Ticket Pack  \
2011 Daily Dare NC Challenge 31-Game Ticket Pack \
2011 Daily Dare NC Challenge 5-Game Ticket Pack \
2011 Stocking Stufftacular 1-Pack \
2011 Stocking Stufftacular 10-Pack \
2011 Stocking Stufftacular 25-Pack \
2011 Stocking Stufftacular 5-Pack \
2012 Stocking Stufftacular 1-Pack \
2012 Stocking Stufftacular 10-Pack \
2012 Stocking Stufftacular 25-pack \
2012 Stocking Stufftacular 5-Pack  \
2013 Haunted Hijinks Menacing Mallet 1-Pack \
2013 Haunted Hijinks Menacing Mallet 16-Pack \
2013 Stocking Stufftacular 1-Pack \
2013 Stocking Stufftacular 10-Pack \
2013 Stocking Stufftacular 25-Pack \
2013 Stocking Stufftacular 5-Pack \
2014 Haunted Hijinks Menacing Mallet 1-Pack \
2014 Haunted Hijinks Menacing Mallet 16-Pack \
2014 Haunted Hijinks Menacing Mallet 5-Pack \
2014 Stocking Stufftacular 1-pack ~1-2 \
2014 Stocking Stufftacular 10-pack ~4 \
2014 Stocking Stufftacular 25-pack ~9 \
2014 Stocking Stufftacular 5-pack ~2-3 \
2015 Haunted Hijinks Menacing Mallet 1 Pack \
2015 Haunted Hijinks Menacing Mallet 13 Pack \
2015 Haunted Hijinks Menacing Mallet 5 Pack \
2015 Sealed with a Gift Valentine Opener 1-Pack ~1-2 \
2015 Sealed with a Gift Valentine Opener 7-Pack ~3 \
2015 Stocking Stufftacular 1-pack ~1 \
2015 Stocking Stufftacular 10-pack ~4 \
2015 Stocking Stufftacular 25-pack ~9 \
2015 Stocking Stufftacular 5-pack ~2-3 \
2016 Sealed with a Gift Valentine Opener 1-Pack ~1-2 \
2016 Sealed with a Gift Valentine Opener 7-Pack ~3 \
3rd Birthday Garland ~1-2 \
3rd Birthday Gift Box Mystery Capsule ~6-8 \
6th Birthday Mystery Capsule ~1-2  \
7th Birthday Ball Wish Candle \
7th Birthday Cake Slice #1 ~2-3 \
7th Birthday Cake Slice #2 ~1-2 \
7th Birthday Cake Slice #3 ~1-2 \
7th Birthday Counting Wish Candle ~2  \
8-Bit Heart Wings ~1-2 \
8th Birthday Glitter Wish Candle ~1-2 \
8th Birthday Rainbow Cupcake ~1-2 \
8th Birthday Rose Gold Gala Wish Candle ~1-2 \
8th Birthday Sparkler Cupcake ~2-3  \
8th Birthday Tied with a Bow Cupcake ~1-2 \
9th Birthday Candy Cupcake ~1-2 \
9th Birthday Confetti Cupcake NT  \
9th Birthday Fantasy Wish Candle buyable through July 31, 2016 ~1 \
9th Birthday Flower Cupcake NT  \
9th Birthday Night Wish Candle buyable through July 31, 2016 ~1 \
9th Birthday Parfait ~2 ";
main();
