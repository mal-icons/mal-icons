import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M377-88q-11 3-19-3t-8-17q0-6 3-12t8-10l69-52v-251l-313 92q-15 5-26-3t-11-25q0-8 4.5-16.5T96-398l334-196v-236q0-21 14.5-35.5T480-880q21 0 35.5 14.5T530-830v236l334 196q7 4 11.5 13t4.5 17q0 16-11 24t-26 3l-313-92v251l69 52q5 4 8 10t3 12q0 11-8 17t-19 3l-103-29-103 29Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlight;
