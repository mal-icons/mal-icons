import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-octagon-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsOctagonFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.11 0a0.50.5 0 0 1 0.350.15l4.39 4.39a0.50.5 0 0 1 0.150.35v6.21a0.50.5 0 0 1-0.150.35l-4.39 4.39a0.50.5 0 0 1-0.350.15H4.89a0.50.5 0 0 1-0.35-0.15L0.15 11.46A0.50.5 0 0 1 0 11.11V4.89a0.50.5 0 0 1 0.15-0.35L4.540.15A0.50.5 0 0 1 4.89 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsOctagonFill;
