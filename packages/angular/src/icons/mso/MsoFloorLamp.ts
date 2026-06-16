import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-floor-lamp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFloorLamp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-200v-320H227q-15.45 0-24.73-12.5Q193-545 198-559l86-279q6.11-18.75 22.13-30.37Q322.16-880 342-880h276q19.84 0 35.87 11.63Q669.9-856.75 676-838l86 279q5 14-4.27 26.5Q748.46-520 733-520H510v320h-60ZM267-580h426l-74-240H341l-74 240Zm63 500v-60h300v60H330Zm150-620Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFloorLamp;
