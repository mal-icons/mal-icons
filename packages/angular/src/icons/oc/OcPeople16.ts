import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-people-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPeople16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 5.5a3.5 3.5 0 1 1 5.9 2.55 5.51 5.51 0 0 1 3.03 4.080.750.75 0 1 1-1.480.24 4 4 0 0 0-7.9 0 0.750.75 0 0 1-1.48-0.24A5.51 5.51 0 0 1 3.1 8.05 3.49 3.49 0 0 1 2 5.5ZM11 4a3 3 0 0 1 2.22 5.02 5.01 5.01 0 0 1 2.56 3.010.750.75 0 0 1-0.880.950.750.75 0 0 1-0.55-0.51 3.51 3.51 0 0 0-2.52-2.370.750.75 0 0 1-0.57-0.73v-0.35a0.750.75 0 0 1 0.42-0.67A1.5 1.5 0 0 0 11 5.50.750.75 0 0 1 11 4Zm-5.5-0.5a2 2 0 1 00 4A2 2 0 0 0 5.5 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPeople16;
