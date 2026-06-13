import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-keypad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoKeypad {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}],["path",{"d":"M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoKeypad;
