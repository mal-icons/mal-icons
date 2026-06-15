import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-install",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrInstall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M19,13.5 L19,17.5 L12,22 L5,17.5 L5,13.5 M12,22 L12,13.5 M18.5,8.5 L12,4.5 L15.5,2 L22,6 L18.5,8.5 L18.5,8.5 L18.5,8.5 Z M5.5,8.5 L12,4.5 L8.5,2 L2,6 L5.5,8.5 L5.5,8.5 L5.5,8.5 Z M18.5,9 L12,13 L15.5,15.5 L22,11.5 L18.5,9 L18.5,9 L18.5,9 Z M5.5,9 L12,13 L8.5,15.5 L2,11.5 L5.5,9 L5.5,9 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrInstall;
