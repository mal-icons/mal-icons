import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-military-tech",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMilitaryTech {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-880h400v333q0 23-11.32 42.15T637-474l-141 82 26 97h134l-109 81 42 134-109-81-110 81 42-134-109-81h135.11L463-392l-140-82q-20.37-11.7-31.68-30.85Q280-524 280-547v-333Zm60 60v273q0 7 4.5 13t13.5 11l96 53v-350H340Zm280 0H514v350l88-53q9-5 13.5-11t4.5-13v-273ZM484-637Zm-30-8Zm60 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMilitaryTech;
