import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-content-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrContentCopy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 20H5V7c0-0.55-0.45-1-1-1s-1 0.45-1 1v13c0 1.10.9 2 2 2h10c0.55 0 1-0.45 1-1s-0.45-1-1-1zm5-4V4c0-1.1-0.9-2-2-2H9c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h9c1.1 0 2-0.9 2-2zm-2 0H9V4h9v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrContentCopy;
