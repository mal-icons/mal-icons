import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-vignette",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsVignette {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"}],["path",{"d":"M8.5 4.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 7a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m1.68-6.28a0.50.5 0 1 1-0.87-0.50.50.5 0 0 1 0.870.5m-3.5 6.06a0.50.5 0 1 1-0.87-0.50.50.5 0 0 1 0.870.5m4.6-4.6a0.50.5 0 1 1-0.5-0.870.50.5 0 0 1 0.50.87m-6.06 3.5a0.50.5 0 1 1-0.5-0.870.50.5 0 0 1 0.50.87M11.5 8.5a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m-7 0a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m6.28 1.68a0.50.5 0 1 1 0.5-0.870.50.5 0 0 1-0.50.87m-6.06-3.5a0.50.5 0 1 1 0.5-0.870.50.5 0 0 1-0.50.87m4.6 4.6a0.50.5 0 1 1 0.87-0.50.50.5 0 0 1-0.870.5m-3.5-6.06a0.50.5 0 1 1 0.87-0.50.50.5 0 0 1-0.870.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsVignette;
