import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bricks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBricks {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0.5A0.50.5 0 0 1 0.5 0h15a0.50.5 0 0 1 0.50.5v3a0.50.5 0 0 1-0.50.5H14v2h1.5a0.50.5 0 0 1 0.50.5v3a0.50.5 0 0 1-0.50.5H14v2h1.5a0.50.5 0 0 1 0.50.5v3a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5v-3a0.50.5 0 0 1 0.5-0.5H2v-2H0.5a0.50.5 0 0 1-0.5-0.5v-3A0.50.5 0 0 1 0.5 6H2V4H0.5a0.50.5 0 0 1-0.5-0.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBricks;
