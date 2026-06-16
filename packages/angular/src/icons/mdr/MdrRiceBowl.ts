import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-rice-bowl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRiceBowl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12c0-5.48-4.4-9.93-9.86-10-3.62-0.05-6.85 2.03-8.71 5.14C0.1 12.69 2.98 18.27 8 20.25v0.25c0 0.830.67 1.5 1.5 1.5h5c0.83 0 1.5-0.67 1.5-1.5v-0.25c3.53-1.39 6-4.56 6-8.25zm-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92zm-6-7.74V12h-4V4.26c0.64-0.16 1.31-0.26 2-0.26s1.360.1 2 0.26zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRiceBowl;
