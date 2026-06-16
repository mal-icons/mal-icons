import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-man-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMan3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 7h-4c-1.1 0-2 0.9-2 2v5c0 0.550.45 1 1 1h1v6c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-6h1c0.55 0 1-0.45 1-1V9c0-1.1-0.9-2-2-2zm-2.35-1.1L10.1 4.35c-0.2-0.2-0.2-0.51 0-0.71l1.54-1.54c0.2-0.20.51-0.20.71 0l1.54 1.54c0.20.20.20.51 0 0.71L12.35 5.9c-0.190.19-0.510.19-0.7 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMan3;
