import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-tropical-storm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTropicalStorm {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"}],["path",{"d":"M9.5 2c-0.9 0-1.750.22-2.50.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 0.50.5 0 0 1 1 0 5.5 5.5 0 0 0 8 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 0.50.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2M8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTropicalStorm;
