import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-deploy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDeploy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M23,1 C23,1 16.47,0.54 14,3 C13.98,3.04 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.96,10.02 21,10 C23.46,7.53 23,1 23,1 Z M17,8 C16.45,8 16,7.55 16,7 C16,6.45 16.45,6 17,6 C17.55,6 18,6.45 18,7 C18,7.55 17.55,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDeploy;
