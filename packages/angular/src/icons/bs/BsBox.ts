import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBox {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.19 1.11a0.50.5 0 0 0-0.37 0L1.85 3.5 8 5.96 14.15 3.5zM15 4.24l-6.5 2.6v7.92l6.5-2.6V4.24zM7.5 14.76V6.84L1 4.24v7.92zM7.440.18a1.5 1.5 0 0 1 1.11 0l7.13 2.85A0.50.5 0 0 1 16 3.5v8.66a1 1 0 0 1-0.630.93l-7.18 2.87a0.50.5 0 0 1-0.37 0L0.63 13.09a1 1 0 0 1-0.63-0.93V3.5a0.50.5 0 0 1 0.31-0.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBox;
