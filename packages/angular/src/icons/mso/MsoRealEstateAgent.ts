import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-real-estate-agent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRealEstateAgent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M770-355v-322L560-824 350-677v129h-60v-159l270-193 270 193v352h-60ZM560-824Zm20 204h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm66 478-311-89v57H40v-394h309l255 96q27 10 45.5 32.5T668-295h114q42 0 70 30t28 81v26L566-62Zm-466-92h94v-274h-94v274Zm462 30 256-78q-6-19-15-26t-21-7H575q-30 0-55.5-4T471-250l-81-25 22-58 73 24q25 8 47.5 11t71.5 3q0-12-4.5-23.5T584-335l-245-93h-84v214l307 90ZM194-291Zm410-4Zm-410 4Zm61 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRealEstateAgent;
