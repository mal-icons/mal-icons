import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-today",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssToday {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M352.82-310Q312-310 284-338.18q-28-28.18-28-69T284.18-476q28.18-28 69-28T422-475.82q28 28.18 28 69T421.82-338q-28.18 28-69 28ZM120-80v-740h125v-60h65v60h340v-60h65v60h125v740H120Zm60-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssToday;
