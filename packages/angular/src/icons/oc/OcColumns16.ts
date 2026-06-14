import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-columns-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcColumns16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.75 0h2.5C6.22 0 7 0.78 7 1.75v12.5A1.75 1.75 0 0 1 5.25 16h-2.5A1.75 1.75 0 0 1 1 14.25V1.75C1 0.78 1.78 0 2.75 0Zm8 0h2.5C14.22 0 15 0.78 15 1.75v12.5A1.75 1.75 0 0 1 13.25 16h-2.5A1.75 1.75 0 0 1 9 14.25V1.75C9 0.78 9.78 0 10.75 0ZM2.5 1.75v12.5c0 0.140.110.250.250.25h2.5a0.250.25 0 0 0 0.25-0.25V1.75a0.250.25 0 0 0-0.25-0.25h-2.5a0.250.25 0 0 0-0.250.25Zm8 0v12.5c0 0.140.110.250.250.25h2.5a0.250.25 0 0 0 0.25-0.25V1.75a0.250.25 0 0 0-0.25-0.25h-2.5a0.250.25 0 0 0-0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcColumns16;
