import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-aspect-ratio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsAspectRatio {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a0.50.5 0 0 0-0.50.5v9a0.50.5 0 0 0 0.50.5h13a0.50.5 0 0 0 0.5-0.5v-9a0.50.5 0 0 0-0.5-0.5z"}],["path",{"d":"M2 4.5a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0 1H3v2.5a0.50.5 0 0 1-1 0zm12 7a0.50.5 0 0 1-0.50.5h-3a0.50.5 0 0 1 0-1H13V8.5a0.50.5 0 0 1 1 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsAspectRatio;
