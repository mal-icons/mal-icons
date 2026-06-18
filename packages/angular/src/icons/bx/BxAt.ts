import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-at",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.47 0 2.96-0.37 4.44-1.1l-0.88-1.79C14.35 19.7 13.16 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1c0 0.69-0.31 2-1.5 2-1.4 0-1.49-1.82-1.5-2V8h-2v0.03A4.95 4.95 0 0 0 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.45 0 2.75-0.63 3.66-1.620.520.89 1.41 1.62 2.84 1.62 2.27 0 3.5-2.06 3.5-4v-1c0-5.51-4.49-10-10-10zm0 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAt;
