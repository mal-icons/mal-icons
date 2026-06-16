import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-file-present",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFilePresent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480.26-220Q539-220 579.5-261.12 620-302.25 620-360v-140h-40v140q0 42-28.75 71T480-260q-42 0-71-29t-29-71v-220q0-18 11.5-29t28.5-11q18 0 29 11t11 29v200h40v-200q0-33.6-23.08-56.8-23.08-23.2-56.5-23.2Q387-660 363.5-636.8T340-580v220q0 57.75 41.2 98.88Q422.41-220 480.26-220ZM160-80v-800h421l219 219v581H160Zm60-60h520v-494H554v-186H220v680Zm0-680v186-186 680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFilePresent;
