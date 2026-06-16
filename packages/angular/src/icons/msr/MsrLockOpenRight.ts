import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-lock-open-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLockOpenRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-140h520v-434H220v434Zm260.17-140Q512-280 534.5-302.03T557-355q0-30-22.67-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.67 52.5t54.5 22ZM220-140v-434 434Zm0 60q-24.75 0-42.37-17.62T160-140v-434q0-24.75 17.63-42.37T220-634h330v-96q0-78.85 55.58-134.43Q661.15-920 740-920q71 0 123 44.5T927-765q2 12-6.62 23.5T899.75-730q-12.75 0-21.25-6T868-755q-9-45-44.7-75T740-860q-54.17 0-92.08 37.92Q610-784.17 610-730v96h130q24.75 0 42.38 17.63T800-574v434q0 24.75-17.62 42.38T740-80H220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLockOpenRight;
