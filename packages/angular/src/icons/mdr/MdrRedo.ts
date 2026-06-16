import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-redo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRedo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93-0.320.670.04 1.470.75 1.710.590.2 1.23-0.08 1.5-0.64 1.3-2.66 4.03-4.5 7.19-4.5 1.95 0 3.730.72 5.12 1.88l-1.91 1.91c-0.630.63-0.19 1.710.7 1.71H21c0.55 0 1-0.45 1-1V9.41c0-0.89-1.08-1.34-1.71-0.71l-1.89 1.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRedo;
