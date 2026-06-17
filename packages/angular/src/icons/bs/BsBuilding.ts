import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-building",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBuilding {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 2.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3.5-0.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zM4 5.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zM7.5 5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm2.50.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zM4.5 8a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm2.50.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm3.5-0.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5z"}],["path",{"d":"M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0.50.5V15h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBuilding;
