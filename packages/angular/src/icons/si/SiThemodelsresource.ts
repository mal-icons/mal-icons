import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-themodelsresource",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiThemodelsresource {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.25 0C0.56 0 0 0.56 0 1.25v21.5C0 23.440.56 24 1.25 24h21.5c0.69 0 1.25-0.56 1.25-1.25V1.25C24 0.56 23.44 0 22.75 0h-2.73c1.67 1.04 1.52 11.43 1.68 18.730.02 1.10.62 3.810.62 3.81s-1.70.91-3.15 1.37c-0.65-2.48-0.63-3.49-0.63-3.49l-0.18-10.67-0.4-4.62c-2.16 3.08-3.44 6.12-3.99 8.01-1.440.92-1.92 1.09-2.96 1.38-1.06-0.55-3.91-3.22-4.96-3.92 2.1 6.83 2.24 9.64 2.24 9.64s-2.23 1.76-2.8 1.61c-0.23-0.06-0.49-0.28-0.51-0.52-0.18-3.67-0.76-5.9-1.51-8.77C2.58 9.130.32 4.070.32 4.07c0.95-0.64 1.52-0.88 2.84-1.26L11.61 11S16.07 3.62 17.10.91c0 0 2.24-0.75 2.71-0.91H1.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiThemodelsresource;
