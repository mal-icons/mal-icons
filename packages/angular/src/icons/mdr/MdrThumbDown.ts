import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-thumb-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrThumbDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.88 21.94 5.53-5.54c0.37-0.370.58-0.880.58-1.41V5c0-1.1-0.9-2-2-2H6c-0.8 0-1.520.48-1.83 1.21L0.91 11.82C0.06 13.8 1.51 16 3.66 16h5.65l-0.95 4.58c-0.10.50.05 1.010.41 1.370.590.58 1.530.58 2.11-0.01zM21 3c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2s2-0.9 2-2V5c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrThumbDown;
