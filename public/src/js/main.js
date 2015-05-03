/**
 * Global variables
 *
 * @author Jonathan Path
 */

// CREATE ELEMENT
// var newEl = document.createElement('div');

// GET ATTRIBUTE
// document.querySelector('.el').setAttribute('key', 'value');
// document.querySelector('.el').getAttribute('key');

// ADD/REMOVE/TOGGLE CLASS
// document.querySelector('.el').classList.add('class');
// document.querySelector('.el').classList.remove('class');
// document.querySelector('.el').classList.toggle('class');

// REMOVE
// remove('.el');

// function remove(el) {
//   var toRemove = document.querySelector(el);

//   toRemove.parentNode.removeChild(toRemove);
// }

// PARENT
// document.querySelector('.el').parentNode;

// PREV/NEXT ELEMENT
// document.querySelector('.el').previousElementSibling;
// document.querySelector('.el').nextElementSibling;

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
    $toggleMenu = $('#header-main__toggle-menu');
    $userMenu = $('#user__menu');
    $toggleMenuIcon = $("#toggleMenuIcon");

    $toggleMenu.click(function() {
        $userMenu.toggleClass('is-open');
        if ($toggleMenuIcon.hasClass('icon-chevron_down')) {
            $toggleMenuIcon.removeClass('icon-chevron_down').addClass('icon-chevron_up');
        }
        else if ($toggleMenuIcon.hasClass('icon-chevron_up')) {
            $toggleMenuIcon.removeClass('icon-chevron_up').addClass('icon-chevron_down');
        }     
    })

  
    //Style Select Element Into Nice List Items
    
    // Iterate over each select element
    $('select').each(function () {

      // Cache the number of options
      var $this = $(this),
          numberOfOptions = $(this).children('option').length,
          otherTrainingPlace = $('#otherTrainingPlace');

      // Hides the select element
      $this.addClass('s-hidden');

      // Wrap the select element in a div
      if ($this[0].name == "trainingDay") {
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
          if ($this.val() == "Autre Stade") {
            $(otherTrainingPlace).toggleClass('hidden');
          }
          else if ($this.val() == "A Domicile") {
            $(otherTrainingPlace).toggleClass('hidden');
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

    


    // //Season Dates
    // var from_$input = $('#input_from').pickadate(),
    //     from_picker = from_$input.pickadate('picker');

    // var to_$input = $('#input_to').pickadate(),
    //     to_picker = to_$input.pickadate('picker');


    // // Check if there’s a “from” or “to” date to start with.
    // if ( from_picker.get('value') ) {
    //   to_picker.set('min', from_picker.get('select'))
    // }
    // if ( to_picker.get('value') ) {
    //   from_picker.set('max', to_picker.get('select'))
    // }

    // // When something is selected, update the “from” and “to” limits.
    // from_picker.on('set', function(event) {
    //   if ( event.select ) {
    //     to_picker.set('min', from_picker.get('select'))    
    //   }
    //   else if ( 'clear' in event ) {
    //     to_picker.set('min', false)
    //   }
    // })
    // to_picker.on('set', function(event) {
    //   if ( event.select ) {
    //     from_picker.set('max', to_picker.get('select'))
    //   }
    //   else if ( 'clear' in event ) {
    //     from_picker.set('max', false)
    //   }
    // })

    


    //List Team
    function teamList(addTeamForm) {
      constructor: {
        var addTeamForm = $('#addTeamForm');
        var input = "";
        var addTeamField = $('#addTeamField');
        var teamList = $("#teamsWrapper");
        var removeIcon = "<a href='#' class='btn--small btn--small--delete'></a>";
        var teamCount = $('#teamCount');
        var teams = ["SportEasy Fanboy Club"];
      }

      this.initialize = function() {
        addTeam();
        removeTeam();
        teamCount.append(teams.length);
        console.log(teams);
      }

      var addTeam = function() {
        addTeamForm.submit(function(e) {
          e.preventDefault();
          input = addTeamField.val();
          teamList.prepend("<li class='team'>" + input + removeIcon + "</li>");
          
          //Add Value in Array
          teams[teams.length] = input;
          addTeamField.val("");

          //Update Team Count
          teamCount.empty();
          $teamCountUpdated = (teams.length);
          console.log(teams);
          console.log(teams.length);
          teamCount.append($teamCountUpdated);
        });
      }

      var removeTeam = function() {
        teamList.on("click", ".btn--small--delete", function() {
          $(this).closest("li").remove();

          //Update Team Count
          teamCount.empty();
          console.log(teams + " updated");
          teamCount.append($teamCountUpdated - 1);
        });
      };
    }

    $(function() {
      var list = new teamList(addTeamForm);
      list.initialize();
    });



    
    //Matchdays
    $matchdaysList = $('#matchdaysList');
    // $matchdaysCount = ((teams.length * 2) - 2);
    console.log(matchdaysCount);

    $matchdaysList.on('click', '.matchday__header', function() {
      $(this).closest('li').toggleClass('is-open');
    });
});





















