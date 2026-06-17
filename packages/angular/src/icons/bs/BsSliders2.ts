import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sliders2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSliders2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.5 1a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-1 0V4H1.5a0.50.5 0 0 1 0-1H10V1.5a0.50.5 0 0 1 0.5-0.5M12 3.5a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5m-6.5 2A0.50.5 0 0 1 6 6v1.5h8.5a0.50.5 0 0 1 0 1H6V10a0.50.5 0 0 1-1 0V6a0.50.5 0 0 1 0.5-0.5M1 8a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2A0.50.5 0 0 1 1 8m9.5 2a0.50.5 0 0 1 0.50.5v4a0.50.5 0 0 1-1 0V13H1.5a0.50.5 0 0 1 0-1H10v-1.5a0.50.5 0 0 1 0.5-0.5m1.5 2.5a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSliders2;
