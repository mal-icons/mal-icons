import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-number-two",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhNumberTwo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M176,208a8,8,0,0,1-8,8H88a8,8,0,0,1-6.4-12.8l71.94-95.92a32,32,0,1,0-51.1-38.53,32.5,32.5,0,0,0-3.78,6.46A8,8,0,1,1,84,68.8a48,48,0,1,1,82.33,48.09L104,200h64A8,8,0,0,1,176,208Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhNumberTwo;
