import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-file-present",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfFilePresent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V7l-5-5zM6 20V4h8v4h4v12H6zm10-10v5c0 2.21-1.79 4-4 4s-4-1.79-4-4V8.5a2.5 2.5 0 0 1 2.76-2.49c1.30.13 2.24 1.32 2.24 2.63V15h-2V8.5c0-0.28-0.22-0.5-0.5-0.5s-0.50.22-0.50.5V15c0 1.10.9 2 2 2s2-0.9 2-2v-5h2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfFilePresent;
