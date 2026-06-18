import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-vimeo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlVimeo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.06 10.41c-2.04 4.35-6.95 10.27-10.05 10.27-3.06 0-3.5-6.53-5.17-10.87-0.82-2.14-1.35-1.65-2.9-0.57L2 8.03c2.25-1.98 4.5-4.27 5.88-4.4 1.56-0.15 2.520.92 2.87 3.190.48 2.99 1.14 7.64 2.29 7.640.9 0 3.12-3.69 3.23-50.2-1.93-1.42-1.99-2.83-1.39 2.23-7.29 11.49-5.95 7.61 2.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlVimeo;
