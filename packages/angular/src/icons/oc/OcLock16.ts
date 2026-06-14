import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-lock-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLock16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4a4 4 0 0 1 8 0v2h0.25c0.97 0 1.750.78 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.78 2.78 6 3.75 6H4Zm8.25 3.5h-8.5a0.250.25 0 0 0-0.250.25v5.5c0 0.140.110.250.250.25h8.5a0.250.25 0 0 0 0.25-0.25v-5.5a0.250.25 0 0 0-0.25-0.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLock16;
