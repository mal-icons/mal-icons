import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-building-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBuildingFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0.50.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5M4 5.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zM7.5 5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5m2.50.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zM4.5 8h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5m2.50.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBuildingFill;
