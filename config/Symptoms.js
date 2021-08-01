const symptoms = [
    {
        id: 1,
        details: `Your muscles are your body’s largest reservoir of protein. When dietary protein is in short supply, the body tends to take protein from skeletal muscles to preserve more important tissues and body functions. 
        As a result, lack of protein leads to muscle wasting over time.Even moderate protein insufficiency may cause muscle wasting, especially in elderly people.
        One study in elderly men and women found that muscle loss was greater among those who consumed the lowest amounts of protein.
        This has been confirmed by other studies that show that an increased protein intake may slow the muscle degeneration that comes with old age. In summary
        Protein helps maintain the strength and density of bones. Insufficient protein intake has been linked to a lower bone mineral density and an increased risk of fractures.`,
        name: "Loss of muscle mass",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 2,
        details: `Drastically restricting carbohydrates to less than 20 grams a day can result in ketosis, which occurs when your body doesn't have enough glucose for energy, according to MayoClinic.com. When you deprive yourself of energy-providing glucose, your body breaks down stored fat. These partially broken-down fats trigger ketosis. Signs and symptoms of ketosis include nausea, headache and bad breath, as well as mental fatigue. Moreover, ketosis can cause your body to produce high levels of uric acid, which can be a risk factor for painful swelling of the joints and kidney stones`,
        name: "Nausea",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 3,
        details: ``,
        name: "Dizziness",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 4,
        details: `Protein not only helps maintain muscle and bone mass, but it’s also essential for body growth. Thus, deficiency or insufficiency is especially harmful to children whose growing bodies require a steady supply.Observational studies show a strong association between low protein intake and impaired growth. Too little protein may cause changes in body composition that develop over a long period of time, such as muscle wasting.
        The most severe form of protein deficiency is known as kwashiorkor. It most often occurs in children in developing countries where famine and imbalanced diets are common.`,
        name: "Abnormal body growth in children",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 5,
        details: `These are made up of proteins like elastin, collagen, and keratin. When your body can't make them, you could have brittle or thinning hair, dry and flaky skin, and deep ridges on your fingernails. Your diet isn't the only possible cause, of course, but it's something to consider.`,
        name: "Skin, Hair and Nails Problem",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 6,
        details: `Since carbs are such an important source of energy for your body, eating too few carbs can really drag you down. MayoClinic.com reports that drastically cutting carbs can lead to fatigue, weakness and even dizziness. Feeling tired from an insufficient carb intake means you’ll likely have less energy to be physically active. Low-carb diets can severely inhibit athletic performance, since carbs are a crucial energy source during exercise.`,
        name: "Fatigue",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 7,
        details: `Protein deficiency often leaves its mark on the skin, hair and nails, which are largely made of protein. Hair thinning, faded hair color, hair loss (alopecia) and brittle nails are also common symptom. However, these symptoms are unlikely to appear unless you have a severe protein deficiency. in summary, Severe protein deficiency may affect your skin, causing redness, flaky skin and depigmentation. It may also cause brittle nails and hair loss`,
        name: "Increase in appetite",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 8,
        details: `When you don't consume enough carbs, your body tends to burn the stored fats and proteins for fuel, which is done by a process called ketosis. The used fats and proteins generally cause smelly breath.`,
        name: "Bad Breath (Halitosis)",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 9,
        details: `Another common symptom of kwashiorkor is a fatty liver, or fat accumulation in liver cells.
        Left untreated, the condition may develop into fatty liver disease, causing inflammation, liver scarring and potentially liver failure.
        Fatty liver is a common condition in obese people, as well as those who consume a lot of alcohol.
        Why it occurs in cases of protein deficiency is unclear, but studies suggest that an impaired synthesis of fat-transporting proteins,
        known as lipoproteins, may contribute to the condition.`,
        name: "Fatty Liver",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
     {
        id: 10,
        details: `Healthy carbohydrates include whole-grains, vegetables, fruits, beans and nuts. If you don't consume enough of these plant-based carbohydrates, your diet may be low in fiber, which can lead to constipation, according to PubHealth. Constipation is defined as having a bowel movement less than three times a week. Other signs of constipation include hard stools and difficult passing stools, which can cause discomfort when going to the bathroom. Consuming enough complex carbohydrates, such as whole-grain breads, pastas and cereal, will aid your digestive health by helping waste move through your body and reducing the risk of constipation.`,
        name: "Constipation",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
     {
        id: 11,
        details: ``,
        name: "Dehydration",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 24,
        details: `Not consuming enough protein content might weaken your bones and increase the risk of fractures.`,
        name: "Bone Fractures",
        type: "protein",
        solution: `After a fracture, your bone needs to rebuild. A healthy, well-balanced diet rich in key nutrients can help speed that up. You don't need to take supplements unless your doctor recommends it. They don't always work well. It's much better to get the nutrition you need from your plate, not from a pill.
        About half your bone's structure is made of protein. When you have a fracture, your body needs it to build new bone for the repair. It also helps your body take in and use calcium, another key nutrient for healthy bones
        Some good source of proteins you needed are Meat, fish, milk, cheese, cottage cheese, yogurt, nuts, seeds, beans, soy products, and fortified cereals. `
    },
    {
        id: 12,
        details: `it's probably because you are not including enough carbs in your diet. A low-carb diet can hinder your weight loss efforts. If you eat fewer carbs, the liver tends to make up for it by producing sugar, thereby spiking blood sugar levels. When the blood sugar rises, pancreas secrete insulin, which is your fat storing hormone. As a result, you store fat instead of shedding it.`,
        name: "Progress of lossing weight has stopped",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 13,
        details: `You will automatically feel irritated and moody because you lack energy and are hungry at the same time. Moreover, carbohydrates play an important role in body's production of serotonin, a feel-good chemical that is produced in the brain.
        So, make sure you are consuming enough carbohydrates for the day. Do not forget to eat healthier carbs and not the ones that will make you gain weight.`,
        name: "Mood Swings",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 14,
        details: `One of the main roles of carbohydrates is to provide energy, particularly to your brain and nervous system. With negligible amount of carbohydrates in the body, your body will feel less energised and more fatigued through the day`,
        name: "Less Energy",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
     {
        id: 15,
        details: `If you are not having sufficient carb intake, then there are high chances of you feeling lethargic during workouts. You will be less likely to sustain a high-intensity workout. It's best to load up on carbs before you begin to exercise so that you have enough energy to burn fat away.`,
        name: "Gym sessions not effective",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
     {
        id: 18,
        details: `Getting a cheat day on the high fat, weight lowering keto diet and overindulging in carbohydrates can also result in eyesight issues. This will raise your blood sugar levels, but as you stick to your low carb keto diet eating schedule, your blood sugar levels will drop, which can lead to hypoglycemia`,
        name: "Blury vision",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 19,
        details: `Feeling tired could be a key sign that you’re not including enough carbohydrates in your diet. If you are consuming less than 80g of total carbs each day but doing a lot of exercise, your carbs will be too low to actually metabolise body fat and your metabolic rate will slow down over time. However, carbohydrates are necessary in order to sustain your metabolism efficiently.`,
        name: "Chronic tiredness or sleepiness",
        type: "carbonhydrate",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 20,
        details: `People who are low on protein often find their cuts and scrapes take longer to get better. The same seems to be true of sprains and other exercise-related mishaps. It could be another effect of your body not making enough collagen. It's found in connective tissues as well as your skin. To make blood clot, you need proteins, too.`,
        name: "Slow healing of injuries",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
    {
        id: 21,
        detail: `One of the most common signs that you're not getting enough protein is swelling (also called edema), especially in your abdomen, legs, feet, and hands. A possible explanation: The proteins that circulate in your blood -- albumin, in particular -- help keep fluid from building up in your tissues. But many things can cause edema, so be sure to check with your doctor in case it's more serious.`,
        name: "Swelling",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
     {
        id: 22,
        details: `Amino acids in your blood help your immune system make antibodies that activate white blood cells to fight off viruses, bacteria, and toxins. You need protein to digest and absorb other nutrients that keep you healthy. There's also evidence that protein can change the levels of disease-fighting "good" bacteria in your gut.`,
        name: "Getting and stying sick",
        type: "protein",
        solution: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Maecenas pharetra convallis posuere morbi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Dignissim enim sit amet venenatis urna cursus eget. Non sodales neque sodales ut etiam sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Turpis massa tincidunt dui ut. Orci nulla pellentesque dignissim enim sit. Sodales ut etiam sit amet nisl. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel fringilla. Proin libero nunc consequat interdum. Egestas diam in arcu cursus. Urna porttitor rhoncus dolor purus non enim praesent elementum.`
    },
];

export default symptoms;