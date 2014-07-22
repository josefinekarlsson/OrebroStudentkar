<?php 
function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );
register_sidebar(array(
	'name'         => __( 'Andra sidebaren' ),
    'id'           => 'sidebar-2',
    'description'  => __( 'Widgets in this area will die' ),
    'before_title' => '<h1>',
    'after_title'  => '</h1>',
));
// register_sidebar( array(
    // 'name'         => __( 'Right Hand Sidebar' ),
    // 'id'           => 'sidebar-1',
    // 'description'  => __( 'Widgets in this area will be shown on the right-hand side.' ),
    // 'before_title' => '<h1>',
    // 'after_title'  => '</h1>',
// ) );



class Firstlevelmenuitem {

	public $objectid; 
	public $menulevelcontainer; 
	
	public $inputclasstype;  
	public $inputid; //remember to add ID in loop
	public $endinput;
	public $title; 
	
	public $label; 
	public $labelfor; //remember to add for and > in the loop
	public $endlabel;
	
	public $spanswitharrows; 
	
	public $submenucollection; 
	public $submenumarkup; 
	
	public $divmenulvl2;
	public $divmenulvl2id; //add id and > in loop 
	public $endmenulvl2;
	
	public $endmenulevelcontainer; 
	
	public function Firstlevelmenuitem() {
		
		
		$this->menulevelcontainer = "<div class='menylabelcontainer'>" . "\n"; 
		$this->inputclasstype = "<input class='hide' type='checkbox'";  
		$this->endinput = " />";
		$this->label = "<label class='menylvl1'"; 
		$this->endlabel = "</label>"; 
		$this->spanswitharrows  = "<span class='arrow arrowside'>" . "\n\t" . "<img src='~/Images/Grafik/arrowside.png'/>" . "\n\t" . "</span>"
							. "<span class='arrow arrowdown'>" . "\n\t" . "<img src='~/Images/Grafik/arrowdown.png'/>" . " \n\t" . "</span>"; 
		$this->submenucollection = array(); 
		$this->divmenulvl2 = "<div class='hide menylvl2'";
		$this->endmenulvl2 = "</div>"; 
		$this->endmenulevelcontainer  = "</div>" . "\n\t\t\t"; 
		
	}
	public function toString() {
		$thestring = ""; 
			$thestring .= $this->menulevelcontainer . $this->inputclasstype . $this->inputid . $this->endinput . $this->title 
			. $this->label . $this->labelfor . $this->endlabel . $this->spanswitharrows . $this->divmenulvl2 
			. $this->divmenulvl2id . $this->submenumarkup . $this->endmenulvl2 . $this->endmenulevelcontainer; 
		return $thestring; 
	}
}
class Secondlevelmenuitem {
	public $title; 
	public $url; 
	public $parentid; 
	public function Secondlevelmenuitem() {
		
	}
	public function toString() {
		$thestring = "<a href='" . $this->url . "'>" . $this->title . "</a>";  
		return $thestring; 
	}
}
$firstlevelmenuitems=array();
$secondlevelmenuitems=array(); 
$initialmarkup = null; 
$endingmarkup = null; 
// custom menu example @ http://digwp.com/2011/11/html-formatting-custom-menus/
function create_custom_menu() {
	global $initialmarkup; 
	$initialmarkup = "<div id='menycontainer'>" . "\n\t" . "<div id='menyinnercontainer'>" . "\n\t\t"; 
	global $endingmarkup; 
	$endingmarkup = "<div style='clear:both; '></div>" . "\n\t" . "</div>" . "\n" . "</div>";
	if (($locations = get_nav_menu_locations()) && isset($locations['header-menu'])) {
		$menu = wp_get_nav_menu_object($locations['header-menu']);
		$menu_items = wp_get_nav_menu_items($menu->term_id);
		global $firstlevelmenuitems; 
		global $secondlevelmenuitems; 
		foreach ((array) $menu_items as $key => $menu_item) {
			if($menu_item->menu_item_parent === "0") {
				$firstlevelmenuitem = new Firstlevelmenuitem();
				$firstlevelmenuitem->inputid = "id='menu-toggle-" . $menu_item->object_id . "'";
				$firstlevelmenuitem->labelfor = "for='menu-toggle-" . $menu_item->object_id . "'>"; 
				$firstlevelmenuitem->divmenulvl2id = "id='meny" . $menu_item->object_id . "'>";
				$firstlevelmenuitem->title = $menu_item->title; 
				$firstlevelmenuitem->objectid = $menu_item->ID; 
				$firstlevelmenuitems[] = $firstlevelmenuitem; 
			}
			else {
				$secondlevelmenuitem = new Secondlevelmenuitem(); 
				$secondlevelmenuitem->title = $menu_item->title; 
				$secondlevelmenuitem->url = $menu_item->url; 
				$secondlevelmenuitem->parentid = $menu_item->menu_item_parent; 
				$secondlevelmenuitems[] = $secondlevelmenuitem; 
			}
		}
	} else {
		$menu_list = 'no list defined <br />';
	}
}

function connectparentandchild() {
	global $firstlevelmenuitems; 
	global $secondlevelmenuitems; 
	foreach ($secondlevelmenuitems as $secondlevelitem) {
		foreach ($firstlevelmenuitems as $firstlevelitem) {
			if($firstlevelitem->objectid == $secondlevelitem->parentid) {
				$firstlevelitem->submenu[] = $secondlevelitem; 
				$firstlevelitem->submenumarkup .= $secondlevelitem->toString(); 
			}
		}
	}
}

function print_menu() {
connectparentandchild(); 
	$markup = ""; 
	global $firstlevelmenuitems; 
	global $secondlevelmenuitems; 
	global $endingmarkup; 
	global $initialmarkup; 
	echo $initialmarkup; 
	
	foreach ($firstlevelmenuitems as $item) {
		$markup .= $item->toString(); 			
	}
	echo $markup; 
	echo $endingmarkup; 
}

?>