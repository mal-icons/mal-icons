import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-desktop-mouse-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiDesktopMouse2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Desktop Mouse 2"}],["path",{"d":"M13.44,21.94H10.56a6.51,6.51,0,0,1-6.5-6.5V8.56a6.51,6.51,0,0,1,6.5-6.5h2.87a6.51,6.51,0,0,1,6.5,6.5v6.88A6.51,6.51,0,0,1,13.44,21.94ZM10.56,3.06a5.51,5.51,0,0,0-5.5,5.5v6.88a5.51,5.51,0,0,0,5.5,5.5h2.87a5.51,5.51,0,0,0,5.5-5.5V8.56a5.51,5.51,0,0,0-5.5-5.5Z"}],["path",{"d":"M11.5,6.54v4a0.50.5,0,0,0,1,0v-4a0.50.5,0,0,0-1,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiDesktopMouse2;
