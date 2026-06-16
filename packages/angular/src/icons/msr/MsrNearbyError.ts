import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nearby-error",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNearbyError {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M844.83-213Q832-213 823.5-221.62T815-243v-283q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T875-526v283q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM845-73q-14 0-24.5-10.5T810-108q0-14 10.5-24.5T845-143q14 0 24.5 10.5T880-108q0 14-10.5 24.5T845-73ZM479.81-83q-11.19 0-22-5Q447-93 438-101L101-438q-8-9-12.5-20.3t-4.5-23Q84-493 88.5-504t12.5-19l338-338q9-8.5 19.88-12.75T481-878q11.25 0 22.13 4T522-861l233 233v110L480-793 167-480l313 313 275-275v109L523-101q-9.37 9-20.68 13.5T479.81-83ZM459-278 278-459q-9-9-9-21t9-21l181-181q9-9 21-9t21 9l181 181q9 9 9 21t-9 21L501-278q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNearbyError;
