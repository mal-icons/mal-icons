import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-map-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMapFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M16 0.5a0.50.5 0 0 0-0.6-0.49L10.50.99 5.60.01a0.50.5 0 0 0-0.2 0l-5 1A0.50.5 0 0 0 0 1.5v14a0.50.5 0 0 0 0.60.49l4.9-0.98 4.90.98a0.50.5 0 0 0 0.2 0l5-1A0.50.5 0 0 0 16 14.5zM5 14.09V1.11l0.5-0.10.50.1v12.98l-0.4-0.08a0.50.5 0 0 0-0.2 0zm5 0.8V1.91l0.40.08a0.50.5 0 0 0 0.2 0L11 1.91v12.98l-0.50.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMapFill;
