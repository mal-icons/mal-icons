import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-desktop-mouse-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiDesktopMouse1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Desktop Mouse 1"}],["path",{"d":"M13.44,2.07h-2.87a6.5,6.5,0,0,0-6.5,6.5v6.87a6.5,6.5,0,0,0,6.5,6.5h2.87a6.5,6.5,0,0,0,6.5-6.5V8.57A6.5,6.5,0,0,0,13.44,2.07Zm-8.37,6.5a5.51,5.51,0,0,1,5.5-5.5h0.94v6.44H5.07Zm13.87,6.87a5.5,5.5,0,0,1-5.5,5.5h-2.87a5.5,5.5,0,0,1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43V3.07h0.93a5.5,5.5,0,0,1,5.5,5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiDesktopMouse1;
