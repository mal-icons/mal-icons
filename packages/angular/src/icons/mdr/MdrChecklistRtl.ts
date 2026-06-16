import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-checklist-rtl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrChecklistRtl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 8c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h7c0.55 0 1-0.45 1-1zm0 8c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h7c0.55 0 1-0.45 1-1zm6.05-5.71a11 0 0 1-1.41 0l-2.12-2.12a11 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a11 0 1 1 1.41 1.41l-4.24 4.25zm0 8a11 0 0 1-1.41 0l-2.12-2.12a11 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a11 0 1 1 1.41 1.41l-4.24 4.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrChecklistRtl;
