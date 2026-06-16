import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-no-sim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNoSim {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m800-237-60-60v-523H427L322-715l-44-44 121-121h341q24.75 0 42.38 18T800-820v583ZM220-80q-24 0-42-18t-18-42v-470q0-12.44 4.5-23.72T178-653l19-18L60-808q-9-9-9-21t9-21.39Q69-859 81-859t21 9L867-85q9 9 9 21.16 0 12.16-8.61 21Q858-34 845.9-34T825-43L242-627l-22 22v465h520v-72l60 60v12q0 24-18 42t-42 18H220Zm315-422Zm-46 122Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNoSim;
