import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pc-display-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPcDisplayHorizontal {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-0.50.5h-13a0.50.5 0 0 1-0.5-0.5v-7a0.50.5 0 0 1 0.5-0.5M12 12.5a0.50.5 0 1 1 1 0 0.50.5 0 0 1-1 0m2 0a0.50.5 0 1 1 1 0 0.50.5 0 0 1-1 0M1.5 12h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1 0-1M1 14.25a0.250.25 0 0 1 0.25-0.25h5.5a0.250.25 0 1 1 0 0.5h-5.5a0.250.25 0 0 1-0.25-0.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPcDisplayHorizontal;
