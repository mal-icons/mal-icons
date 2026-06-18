import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-linuxprofessionalinstitute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLinuxprofessionalinstitute {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12s12-5.37 12-12S18.630 120Zm0 20.99c-4.96 0-8.99-4.02-8.99-8.99 0-4.96 4.02-8.99 8.99-8.99 4.96 0 8.99 4.02 8.99 8.99 0 4.96-4.02 8.99-8.99 8.99zm5.1-30.8-3h-7.16L13.51 4.5h-3L6.91 17.98Zm0.29-10.49c0 0.82-0.67 1.49-1.49 1.49s-1.49-0.67-1.49-1.49c0-0.820.67-1.49 1.49-1.49s1.490.67 1.49 1.49"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLinuxprofessionalinstitute;
