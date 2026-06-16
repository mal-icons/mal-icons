import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-merge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMerge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.71 7.71a11 0 0 1 0-1.41l2.59-2.59a11 0 0 1 1.41 0L15.3 6.3a11 0 1 1-1.41 1.41L13 6.83v5.1c0 1.060.42 2.08 1.17 2.83l4.12 4.12a11 0 1 1-1.41 1.41L12 15.41l-4.88 4.88a11 0 1 1-1.41-1.41l4.12-4.12c0.75-0.75 1.17-1.77 1.17-2.83v-5.1l-0.880.88a11 0 0 1-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMerge;
