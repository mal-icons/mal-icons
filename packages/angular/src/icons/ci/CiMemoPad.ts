import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-memo-pad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMemoPad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Memo Pad"}],["path",{"d":"M17.44,2.07H6.56a2.51,2.51,0,0,0-2.5,2.5v14.87a2.51,2.51,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V4.57A2.5,2.5,0,0,0,17.44,2.07Zm1.5,17.37a1.5,1.5,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6.51H18.94Z"}],["path",{"d":"M7.55,9.51h0a0.50.5,0,0,1,0-1h8.91a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M7.55,12.51h0a0.50.5,0,0,1,0-1h6.5a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M7.57,18.37h0a0.50.5,0,1,1,0-1h3.25a0.50.5,0,0,1,0,1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMemoPad;
