import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-headphones-battery",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHeadphonesBattery {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-240q-28.87 0-49.44-20.56Q80-281.12 80-310v-170q0-100 70-170t170-70q100 0 170 70t70 170v170q0 28.88-20.56 49.44Q518.88-240 490-240h-10q-24.75 0-42.37-17.62T420-300v-60q0-24.75 17.63-42.37T480-420h40v-60q0-83.33-58.26-141.67Q403.47-680 320.24-680 237-680 178.5-621.67 120-563.33 120-480v60h40q24.75 0 42.38 17.63T220-360v60q0 24.75-17.62 42.38T160-240h-10Zm542 0q-14.02 0-23.51-9.49Q659-258.98 659-273v-381q0-14.02 9.49-23.51Q677.98-687 692-687h45v-18q0-6 4.5-10.5T752-720h30q6 0 10.5 4.5T797-705v18h50q14.03 0 23.51 9.49Q880-668.02 880-654v381q0 14.03-9.49 23.51Q861.03-240 847-240H692Zm27-60h101-101Zm0 0h101v-327H719v327Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHeadphonesBattery;
