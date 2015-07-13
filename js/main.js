angular
    .module('disruptApp')
    .controller('DisruptController', DisruptController);

    function DisruptController(){
        var self = this;
        self.foo = 'bar'
        self.leftSide = "Twitter "
        self.rightSide = "for Cats"
        self.leftWords = [
            'Twitter',
            'Android',
            'Facebook',
            'Modern politics',
            'Making a grocery list',
            'Building an itinerary',
            'Learning to cook',
            'Learning to code',
            'A new way to look at communication',
            'A new way to look at bass fishing',
            'A revolutionary platform',
            'A bass fishing platform',
            'A revolution in veganism',
            'The next phase of ecology',
            'The urban village',
        ];
        self.rightWords = [
           " for pictures",
           ' for pet owners',
           ' for the me generation',
           ' for the tumblr generation',
           ' for the new economy',
           ' with motion control',
           ' with 4k functionality',
           ' with a mobile-facing UI',
           ' on Android',
           ' on steroids',
           ' powered by iOS',
           " from a woman's perspective",
           ' meets instagram',
           " like it's nbd",
           ' that reticulates splines',
        ];
        self.disrupt = function(){
            num1 = Math.floor(Math.random() * self.leftWords.length)
            num2 = Math.floor(Math.random() * self.rightWords.length)
            self.leftSide = self.leftWords[num1]
            self.rightSide = self.rightWords[num2]

        }
    }