import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-play-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiPlay1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Play 1"}],["path",{"d":"M6.56,21.94a2.5,2.5,0,0,1-2.5-2.5V4.56A2.5,2.5,0,0,1,7.98,2.5L18.86,9.94a2.5,2.5,0,0,1,0,4.12L7.98,21.5A2.5,2.5,0,0,1,6.56,21.94Zm0-18.88a1.49,1.49,0,0,0-0.70.18,1.48,1.48,0,0,0-0.8,1.33V19.44a1.5,1.5,0,0,0,2.35,1.24l10.88-7.44a1.5,1.5,0,0,0,0-2.47L7.41,3.33A1.49,1.49,0,0,0,6.56,3.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiPlay1;
