import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-file-present",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFilePresent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.17 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V8.83c0-0.53-0.21-1.04-0.59-1.41l-4.83-4.83c-0.37-0.38-0.88-0.59-1.41-0.59zM16 15c0 2.34-2.01 4.21-4.39 3.98C9.53 18.78 8 16.92 8 14.83V9.64c0-1.310.94-2.5 2.24-2.63A2.5 2.5 0 0 1 13 9.5V14c0 0.55-0.45 1-1 1s-1-0.45-1-1V9.5c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5v5.39c0 1 0.68 1.92 1.66 2.08A2 2 0 0 0 14 15v-3c0-0.550.45-1 1-1s1 0.45 1 1v3zm-2-8V4l4 4h-3c-0.55 0-1-0.45-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFilePresent;
