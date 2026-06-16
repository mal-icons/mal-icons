import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-file-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFileCopy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 1H4c-1.1 0-2 0.9-2 2v13c0 0.550.45 1 1 1s1-0.45 1-1V4c0-0.550.45-1 1-1h10c0.55 0 1-0.45 1-1s-0.45-1-1-1zm0.59 4.59 4.83 4.83c0.370.370.580.880.58 1.41V21c0 1.1-0.9 2-2 2H7.99C6.89 23 6 22.1 6 21l0.01-14c0-1.10.89-2 1.99-2h6.17c0.53 0 1.040.21 1.420.59zM15 12h4.5L14 6.5V11c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFileCopy;
