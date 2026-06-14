import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-discussion-duplicate-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcDiscussionDuplicate16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 2.75C0 1.780.78 1 1.75 1h8.5c0.97 0 1.750.78 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.06l-2.57 2.57A1.46 1.46 0 0 1 2 11.54V10h-0.25A1.75 1.75 0 0 1 0 8.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v5.5c0 0.140.110.250.250.25h1a0.750.75 0 0 1 0.750.75v2.19L6.22 8.72a0.750.75 0 0 1 0.53-0.22h3.5a0.250.25 0 0 0 0.25-0.25v-5.5a0.250.25 0 0 0-0.25-0.25Zm12.5 2h-0.5a0.750.75 0 0 1 0-1.5h0.5c0.97 0 1.750.78 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.54a1.46 1.46 0 0 1-2.49 1.03L9.22 12.28a0.750.75 0 1 1 1.06-1.06l2.22 2.22V11.25a0.750.75 0 0 1 0.75-0.75h1a0.250.25 0 0 0 0.25-0.25v-5.5a0.250.25 0 0 0-0.25-0.25Zm-6.280.03L5.03 7.47a0.750.75 0 1 1-1.06-1.06L6.91 3.47a0.750.75 0 0 1 1.06 1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcDiscussionDuplicate16;
