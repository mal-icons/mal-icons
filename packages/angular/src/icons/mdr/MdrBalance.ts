import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-balance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBalance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 19V7.83c0.85-0.3 1.53-0.98 1.83-1.83H18l-2.78 6.49c-0.170.39-0.230.84-0.11 1.250.39 1.3 1.76 2.26 3.39 2.26s3.01-0.96 3.39-2.26c0.12-0.410.06-0.86-0.11-1.25L19 6h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5.17c-0.41-1.17-1.52-2-2.83-2s-2.420.83-2.83 2H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1l-2.78 6.49c-0.170.39-0.230.84-0.11 1.25C2.49 15.04 3.87 16 5.5 16s3.01-0.96 3.39-2.26c0.12-0.410.06-0.86-0.11-1.25L6 6h3.17c0.30.850.98 1.53 1.83 1.83V19m0 0H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h18c0.55 0 1-0.45 1-1s-0.45-1-1-1h-8m7.37-6h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBalance;
