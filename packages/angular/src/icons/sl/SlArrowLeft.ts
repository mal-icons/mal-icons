import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlArrowLeft {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M752.15 0c8.69 0 17.57 3.43 24.24 10.1 13.33 13.33 13.33 35.14 0 48.47L320.13 515.03l449.59 449.59c13.33 13.33 13.33 35.14 0 48.47-13.33 13.33-35.14 13.33-48.47 0L247.42 539.27c-13.33-13.33-13.33-35.14 0-48.47L727.91 10.1C734.58 3.44 743.460 752.150z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlArrowLeft;
