import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-archive-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArchive16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 2.75C0 1.780.78 1 1.75 1h12.5c0.97 0 1.750.78 1.75 1.75v1.5A1.75 1.75 0 0 1 14.25 6H1.75A1.75 1.75 0 0 1 0 4.25ZM1.75 7a0.750.75 0 0 1 0.750.75v5.5c0 0.140.110.250.250.25h10.5a0.250.25 0 0 0 0.25-0.25v-5.5a0.750.75 0 0 1 1.5 0v5.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25v-5.5A0.750.75 0 0 1 1.75 7Zm0-4.5a0.250.25 0 0 0-0.250.25v1.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25v-1.5a0.250.25 0 0 0-0.25-0.25ZM6.25 8h3.5a0.750.75 0 0 1 0 1.5h-3.5a0.750.75 0 0 1 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArchive16;
