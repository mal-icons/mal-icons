import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-lock-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLockOpen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-24.75 0-42.37-17.62T160-140v-434q0-24.75 17.63-42.37T220-634h390v-96q0-54.17-37.92-92.08Q534.17-860 480-860q-47.6 0-83.3 30-35.7 30-44.7 75-2 11-11 18t-20.72 7Q307-730 299-740q-8-10-6-23 11-67 63.5-112T480-920q78.85 0 134.43 55.58Q670-808.85 670-730v96h70q24.75 0 42.38 17.63T800-574v434q0 24.75-17.62 42.38T740-80H220Zm0-60h520v-434H220v434Zm260.17-140Q512-280 534.5-302.03T557-355q0-30-22.67-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.67 52.5t54.5 22ZM220-140v-434 434Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLockOpen;
