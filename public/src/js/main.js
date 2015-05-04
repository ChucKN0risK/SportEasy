// Remove NavBar from iOS
if( !window.location.hash && window.addEventListener ){
    window.addEventListener( "load",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener( "orientationchange",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
}

$(function(){ 
    
    var $toggleMenu = $('#header-main__toggle-menu');
    var $userMenu = $('#user__menu');
    var $toggleMenuIcon = $('#toggleMenuIcon');

    $toggleMenu.click(function() {
        $userMenu.toggleClass('is-open');
        if ($toggleMenuIcon.hasClass('icon-chevron_down')) {
            $toggleMenuIcon.removeClass('icon-chevron_down').addClass('icon-chevron_up');
        }
        else if ($toggleMenuIcon.hasClass('icon-chevron_up')) {
            $toggleMenuIcon.removeClass('icon-chevron_up').addClass('icon-chevron_down');
        }     
    })

    function stepsTransitions() {
      constructor: {
        var $progressBar = $('#progressBar');

        var $step1 = $('#step1');
        var $step2 = $('#step2');
        var $step3 = $('#step3');

        var $teamFirstInfos = $('#teamFirstInfos');
        var $teamFirstInfosTrigger = $('#teamFirstInfosTrigger');

        var $championshipKind = $('#championshipKind');
        var $championshipKindTrigger = $('#championshipKindTrigger');

        var $championshipDates = $('#championshipDates');
        var $championshipDatesTrigger = $('#championshipDatesTrigger');

        var $trainingSessions = $('#trainingSessions');
        var $trainingSessionsTrigger = $('#trainingSessionsTrigger');
        var $regularTrainingYes = $('#regularTrainingYes');
        var $regularTrainingNo = $('#regularTrainingNo');
        var $regularTraining = $('#regularTraining');

        var $championshipTeams = $('#championshipTeams');
        var $championshipTeamsTrigger = $('#championshipTeamsTrigger');

        var $championshipMatchdays = $('#championshipMatchdays');
        var $championshipMatchdaysTrigger = $('#championshipMatchdaysTrigger');

        var $addTeammates = $('#addTeammates');
        var $addTeammatesTrigger = $('#addTeammatesTrigger');        
      }

      this.initialize = function() {
        this.firstTransition();
        this.secondTransition();
        this.thirdTransition();
        this.fourthTransition();
        this.fifthTransition();
        this.sixthTransition();
      }

      this.firstTransition = function() {
        $teamFirstInfosTrigger.click(function() {
          $progressBar.addClass('progress-bar--1');
          $step1.velocity('transition.slideLeftBigOut', {stagger: 250});
          $teamFirstInfos.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $championshipKind.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
            $step2.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
          }, 750);
          return false;
        });
      }

      this.secondTransition = function() {
        $championshipKindTrigger.click(function() {
          $progressBar.addClass('progress-bar--2');
          $championshipKind.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $championshipDates.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
          }, 750);
          return false;
        });
      }

      this.thirdTransition = function() {
        $championshipDatesTrigger.click(function() {
          $progressBar.addClass('progress-bar--3');
          $championshipDates.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $trainingSessions.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
          }, 750);
          return false;
        });
      }

      this.fourthTransition = function() {
        $regularTrainingYes.click(function() {
          $progressBar.addClass('progress-bar--4');
          $trainingSessionsTrigger.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $regularTraining.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
            $trainingSessionsTrigger.removeClass('hidden').velocity('transition.slideRightBigIn');
          }, 750);
        })

        $regularTrainingNo.click(function() {
          $trainingSessionsTrigger.velocity('transition.slideLeftBigOut', {stagger: 250});
          $regularTraining.removeClass('hidden').velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $trainingSessionsTrigger.removeClass('hidden').velocity('transition.slideRightBigIn');
          }, 750);
        })


        $trainingSessionsTrigger.click(function() {
          $trainingSessions.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $championshipTeams.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
          }, 750);
          return false;
        });
      }

      this.fifthTransition = function() {
        $championshipTeamsTrigger.click(function() {
          $progressBar.addClass('progress-bar--5');
          $championshipTeams.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $championshipMatchdays.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
          }, 750);
          return false;
        });
      }

      this.sixthTransition = function() {
        $championshipMatchdaysTrigger.click(function() {
          $progressBar.addClass('progress-bar--6');
          $step2.velocity('transition.slideLeftBigOut', {stagger: 250});
          $championshipMatchdays.velocity('transition.slideLeftBigOut', {stagger: 250});
          setTimeout(function() {
            $addTeammates.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
            $step3.removeClass('hidden').velocity('transition.slideRightBigIn', {stagger: 250});
          }, 750);
        });
      }
    }

    $(function() {
      var transitions = new stepsTransitions();
      transitions.initialize();
    });
  
    //Style Select Element Into Nice List Items
    // Iterate over each select element
    $('select').each(function () {

      // Cache the number of options
      var $this = $(this),
          numberOfOptions = $(this).children('option').length,
          $otherTrainingPlace = $('#otherTrainingPlace');

      // Hides the select element
      $this.addClass('s-hidden');

      // Wrap the select element in a div
      if ($this[0].name == 'trainingDay') {
          $this.wrap('<div class="select select--day"></div>');
      }
      else if ($this[0].name == "trainingHour") {
          $this.wrap('<div class="select select--hour"></div>');
      }
      else {
          $this.wrap('<div class="select"></div>');
      }

      // Insert a styled div to sit over the top of the hidden select element
      $this.after('<div class="styledSelect"></div>');

      // Cache the styled div
      var $styledSelect = $this.next('div.styledSelect');

      // Show the first select option in the styled div
      $styledSelect.text($this.children('option').eq(0).text());

      // Insert an unordered list after the styled div and also cache the list
      var $list = $('<ul />', {
          'class': 'options'
      }).insertAfter($styledSelect);

      // Insert a list item into the unordered list for each select option
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      // Cache the list items
      var $listItems = $list.children('li');

      // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
      $styledSelect.click(function (e) {
          e.stopPropagation();
          $('div.styledSelect.active').each(function () {
              $(this).removeClass('active').next('ul.options').hide();
          });
          $(this).toggleClass('active').next('ul.options').toggle();
      });

      // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
      // Updates the select element to have the value of the equivalent option
      $listItems.click(function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          //Make appear address input if "Autre Stade" is selected
          if ($this.val() == 'Autre Stade') {
            $(otherTrainingPlace).toggleClass('hidden');
          }
          else if ($this.val() == 'A Domicile') {
            $(otherTrainingPlace).addClass('hidden');
          }
          $list.hide();
          /* console.log($this.val()); Uncomment this for demonstration! */
      });

      // Hides the unordered list when clicking outside of it
      $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
      });
    });


    //List Team
    function teamList(addTeamForm) {
      constructor: {
        var $addTeamForm = $('#addTeamForm');
        var input = "";
        var $addTeamField = $('#addTeamField');
        var $teamList = $('#teamsWrapper');
        var removeIcon = '<a href="#" class="btn--small btn--small--delete"></a>';
        var $teamCount = $('#teamCount');
        this.teams = ['SportEasy Fanboy Club'];
      }

      this.initialize = function() {
        this.addTeam();
        this.removeTeam();
        $teamCount.append(this.teams.length);
      }

      this.addTeam = function() {
        var that = this;
        $addTeamForm.submit(function(e) {
          e.preventDefault();
          console.log(e);
          input = $addTeamField.val();
          $teamList.prepend('<li class="team"><span>' + input + '</span>' + removeIcon + '</li>');
          
          //Add Value in Array
          that.teams.push(input);
          $addTeamField.val('');

          //Update Team Count
          $teamCount.html(that.teams.length);
        });
      }

      this.removeTeam = function() {
        var that = this;
        $teamList.on('click', '.btn--small--delete', function() {
          var $el = $(this).closest("li");
          //Input content stored in an index variable
          var index = that.teams.indexOf($el.find('span').html());
          //element removed of the dom
          $el.remove();
          //element removed of the array
          that.teams.splice(index, 1);

          //Update Team Count
          $teamCount.html(that.teams.length);
        });
      };
    }

    $(function() {
      var list = new teamList(addTeamForm);
      list.initialize();
      console.log(addTeamForm);
    });
    
    //Matchdays
    function matchDays() {
      var $matchdaysList = $('#matchdaysList');
      var $matchdaysCount = ((that.teams.length * 2) - 2);
      console.log($matchdaysCount);

      $matchdaysList.on('click', '.matchday__header', function() {
          $(this).closest('li').toggleClass('is-open');
      });
    };

    //List Team
    function teammatesList(addTeamForm) {
      constructor: {
        var $addTeammatesForm = $('#addTeammatesForm');
        var input = "";
        var $addTeammatesField = $('#addTeammatesField');
        var $teammatesList = $('#teammatessWrapper');
        var removeIcon = '<a href="#" class="btn--small btn--small--delete"></a>';
        var $teammatesCount = $('#teammatesCount');
        this.teammates = [];
      }

      this.initialize = function() {
        this.addTeammates();
        this.removeTeammates();
        $teammatesCount.append(this.teammates.length);
      }

      this.addTeammates = function() {
        var that = this;
        $addTeammatesForm.submit(function(e) {
          e.preventDefault();
          console.log(e);
          input = $addTeammatesField.val();
          $teammatesList.prepend('<li class="team"><span>' + input + '</span>' + removeIcon + '</li>');
          
          //Add Value in Array
          that.teammates.push(input);
          $addTeammatesField.val('');

          //Update Team Count
          $teammatesCount.html(that.teammates.length);
        });
      }

      this.removeTeammates = function() {
        var that = this;
        $teammatesList.on('click', '.btn--small--delete', function() {
          var $el = $(this).closest("li");
          //Input content stored in an index variable
          var index = that.teammates.indexOf($el.find('span').html());
          //element removed of the dom
          $el.remove();
          //element removed of the array
          that.teammates.splice(index, 1);

          //Update Team Count
          $teammatesCount.html(that.teammates.length);
        });
      };
    }

    $(function() {
      var list = new teammatesList(addTeammatesForm);
      list.initialize();
      console.log(addTeammatesForm);
    });

    var seasonDates = function() {

      //Season Dates
      var $from_input = $('#input_from').pickadate({
        container: '#championshipDates',
      });
      var from_picker = $from_input.pickadate('picker');

      var $to_input = $('#input_to').pickadate();
      var to_picker = $to_input.pickadate('picker');

      console.log($from_input);
      console.log($from_picker);
      console.log($to_inout);
      console.log($to_picker);


      // Check if there’s a “from” or “to” date to start with.
      if ( from_picker.get('value') ) {
        to_picker.set('min', from_picker.get('select'))
      }
      if ( to_picker.get('value') ) {
        from_picker.set('max', to_picker.get('select'))
      }

      // When something is selected, update the “from” and “to” limits.
      from_picker.on('set', function(event) {
        if ( event.select ) {
          to_picker.set('min', from_picker.get('select'))    
        }
        else if ( 'clear' in event ) {
          to_picker.set('min', false)
        }
      })
      to_picker.on('set', function(event) {
        if ( event.select ) {
          from_picker.set('max', to_picker.get('select'))
        }
        else if ( 'clear' in event ) {
          from_picker.set('max', false)
        }
      })
    }

});





















